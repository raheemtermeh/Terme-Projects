import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // اضافه کردن framer-motion

const LoginRegister = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_USERNAME = "root";
  const ADMIN_PASSWORD = "toor";

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    if (!username || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      setLoading(false);
      return;
    }
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setUser({ username, role: "admin" });
      navigate("/admin");
    } else {
      setUser({ username });
      navigate("/user");
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    if (!username || !password || password.length < 8) {
      setError(
        "لطفاً نام کاربری و رمز عبور معتبر (حداقل ۸ کاراکتر) را وارد کنید."
      );
      setLoading(false);
      return;
    }
    setUser({ username });
    navigate("/user");
    setLoading(false);
  };

  const handleForgotPassword = () => {
    if (!username) {
      setError("لطفاً نام کاربری خود را وارد کنید.");
      return;
    }
    setForgotPassword(true);
  };

  const handleResetPassword = () => {
    if (newPassword.length < 8) {
      setError("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }
    setPassword(newPassword);
    setForgotPassword(false);
    setError("");
    alert("رمز عبور با موفقیت تغییر کرد!");
  };

  return (
    <div className="min-h-screen flex items-center text-right justify-center bg-gray-900">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h2
          className="text-3xl text-white mb-6"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {forgotPassword
            ? "بازیابی رمز عبور"
            : isLogin
            ? "ورود به حساب کاربری"
            : "ثبت‌نام"}
        </motion.h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <motion.input
          type="text"
          placeholder="نام کاربری"
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={forgotPassword}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        {!forgotPassword && (
          <motion.div
            className="relative w-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              className="w-full p-2 bg-gray-700 text-white rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </motion.div>
        )}
        {forgotPassword && (
          <motion.div
            className="relative w-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <input
              type="password"
              placeholder="رمز عبور جدید"
              className="w-full p-2 bg-gray-700 text-white rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </motion.div>
        )}
        <motion.button
          className={`w-full p-2 ${
            loading ? "bg-gray-600" : "bg-blue-600"
          } text-white font-semibold rounded transition-colors duration-300 ease-in-out`}
          onClick={
            forgotPassword
              ? handleResetPassword
              : isLogin
              ? handleLogin
              : handleRegister
          }
          disabled={loading}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {loading
            ? "در حال بارگذاری..."
            : forgotPassword
            ? "تغییر رمز عبور"
            : isLogin
            ? "ورود"
            : "ثبت‌نام"}
        </motion.button>
        {!forgotPassword && (
          <motion.p
            className="text-white mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isLogin ? "حساب کاربری ندارید؟" : "حساب کاربری دارید؟"}{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
            </span>
          </motion.p>
        )}
        {!isLogin && (
          <motion.p
            className="text-white mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            رمز عبور قوی‌تر ایجاد کنید! (حداقل ۸ کاراکتر)
          </motion.p>
        )}
        {!forgotPassword && isLogin && (
          <motion.p
            className="text-blue-500 cursor-pointer hover:underline mt-4"
            onClick={handleForgotPassword}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            رمز عبور را فراموش کرده‌اید؟
          </motion.p>
        )}
        {forgotPassword && (
          <motion.p
            className="text-white cursor-pointer  hover:underline mt-4"
            onClick={() => setForgotPassword(false)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            بازگشت به صفحه ورود
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default LoginRegister;
