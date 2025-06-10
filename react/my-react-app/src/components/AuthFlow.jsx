import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:8000/api/v1'; 
const AuthFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const sendEmail = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error((await res.json()).message || 'خطأ في إرسال الإيميل');

      setCurrentStep(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      if (!res.ok) throw new Error((await res.json()).message || 'رمز التحقق غير صحيح');

      setCurrentStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setLoading(true);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, new_password: newPassword }),
      });

      if (!res.ok) throw new Error((await res.json()).message || 'فشل في إعادة تعيين كلمة المرور');

      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    // Step 1: Forgot Password
    <div key="step1" className="space-y-4 text-center">
      <h2 className="text-xl font-semibold">نسيت كلمة المرور</h2>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        disabled={loading}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={sendEmail}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? 'جاري الإرسال...' : 'إرسال الكود'}
      </button>
    </div>,

    // Step 2: Verify Code
    <div key="step2" className="space-y-4 text-center">
      <h2 className="text-xl font-semibold">أدخل رمز التحقق</h2>
      <input
        type="text"
        maxLength={6}
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        className="w-full px-4 py-2 border rounded text-center"
        disabled={loading}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={verifyCode}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? 'جاري التحقق...' : 'تحقق'}
      </button>
    </div>,

    // Step 3: Reset Password
    <div key="step3" className="space-y-4 text-center">
      <h2 className="text-xl font-semibold">كلمة المرور الجديدة</h2>
      <input
        type="password"
        placeholder="كلمة المرور الجديدة"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        disabled={loading}
      />
      <input
        type="password"
        placeholder="تأكيد كلمة المرور"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        disabled={loading}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={resetPassword}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        {loading ? 'جارٍ الحفظ...' : 'تغيير كلمة المرور'}
      </button>
    </div>
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        {steps[currentStep]}
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="mt-4 text-sm text-blue-500 underline"
          >
            رجوع
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthFlow;
