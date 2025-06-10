// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomeBackForm from './components/WelcomeBackForm';
import RegisterForm from './components/RegisterForm'; 
import AuthFlow from './components/AuthFlow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* إعادة توجيه الصفحة الرئيسية للصفحة تسجيل الدخول */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<WelcomeBackForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/auth" element={<AuthFlow />} />

        {/* صفحة 404 لأي مسار غير معرف */}
        <Route
          path="*"
          element={
            <div className="text-center mt-10 text-gray-500 text-lg font-semibold">
              404 - الصفحة غير موجودة
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;