import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSettings = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    setLoading(true);
    setError("");
    try {
      setUser({ ...user, username, email });
      alert("تنظیمات با موفقیت به‌روز شد.");
      navigate("/profile");
    } catch (err) {
      setError("خطا در به‌روز رسانی تنظیمات. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <h2 className="text-3xl text-white mb-6">تنظیمات کاربری</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full p-2 mb-4 bg-gray-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="w-full p-2 mb-4 bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`w-full p-2 ${
            loading ? "bg-gray-600" : "bg-blue-600"
          } text-white font-semibold`}
          onClick={handleSaveChanges}
          disabled={loading}
        >
          {loading ? "در حال بارگذاری..." : "ذخیره تغییرات"}
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
