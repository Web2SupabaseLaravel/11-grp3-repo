import React, { useEffect, useState } from "react";

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/roles");
        const data = await res.json();
        setRoles(data);
      } catch (err) {
        console.error("فشل في جلب الأدوار:", err);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          address: formData.address,
          position: formData.position,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("خطأ من السيرفر:", errorData);
        throw new Error("حدث خطأ أثناء التسجيل");
      }

      const result = await response.json();
      console.log("نجح التسجيل:", result);
      setStep(3);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-1">Register Now!</h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill the information carefully to proceed
        </p>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        {step === 1 && (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-base font-semibold text-gray-700">Basic Info</h4>
            <input
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            />
            <button
              onClick={handleNext}
              className="mt-4 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-base font-semibold text-gray-700">Details</h4>

            <input
              name="address"
              placeholder="Current Address"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            />

            <select
              name="position"
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-xl bg-gray-50"
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>

            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-xl hover:bg-gray-400"
                disabled={loading}
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-base font-semibold text-gray-700">Verify it's you</h4>
            <p className="text-sm text-gray-500">Enter verification code</p>
            <div className="flex justify-between gap-2">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="w-10 h-10 text-center text-lg border border-gray-300 rounded-lg bg-gray-100"
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center">
              A verification code has been sent to your email
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-blue-700 transition">
              Verify
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
