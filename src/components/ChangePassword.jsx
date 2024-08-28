import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    setLoading(true);
    setError("");
    if (newPassword !== confirmPassword) {
      setError("رمز عبور جدید و تأیید رمز عبور مطابقت ندارند.");
      setLoading(false);
      return;
    }
    try {
      navigate("/profile");
    } catch (err) {
      setError("خطا در تغییر رمز عبور. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <h2 className="text-3xl text-white mb-6">تغییر رمز عبور</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="password"
          placeholder="رمز عبور فعلی"
          className="w-full p-2 mb-4 bg-gray-700 text-white"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور جدید"
          className="w-full p-2 mb-4 bg-gray-700 text-white"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="تأیید رمز عبور جدید"
          className="w-full p-2 mb-4 bg-gray-700 text-white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className={`w-full p-2 ${
            loading ? "bg-gray-600" : "bg-blue-600"
          } text-white font-semibold`}
          onClick={handleChangePassword}
          disabled={loading}
        >
          {loading ? "در حال بارگذاری..." : "تغییر رمز عبور"}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
