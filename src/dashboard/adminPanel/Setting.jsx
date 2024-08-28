import React from "react";
import { motion } from "framer-motion";

const Setting = () => {
  return (
    <div className="p-8 bg-primary min-h-screen rtl">
      <motion.h1
        className="text-4xl mb-8 text-white text-right"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        تنظیمات مدیر
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4 text-right">
            تنظیمات پروفایل
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">
                نام کاربری
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                placeholder="AdminUsername"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">ایمیل</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                placeholder="admin@example.com"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300">
              ذخیره
            </button>
          </form>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl text-white font-semibold mb-4 text-right">
            تنظیمات امنیتی
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">
                رمز عبور فعلی
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                placeholder="********"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">
                رمز عبور جدید
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                placeholder="********"
              />
            </div>
            <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300">
              تغییر رمز عبور
            </button>
          </form>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4 text-right">
            تنظیمات اعلان‌ها
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">ایمیل</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">
                اعلان‌های مهم
              </label>
              <input type="checkbox" className="mr-2" />
              <span className="text-white">دریافت اعلان‌های مهم</span>
            </div>
            <button className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors duration-300">
              ذخیره تغییرات
            </button>
          </form>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4 text-right">
            تنظیمات تم
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">تم</label>
              <select className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white">
                <option>تیره</option>
                <option>روشن</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2 text-right">نوع تم</label>
              <select className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white">
                <option>پیش‌فرض</option>
                <option>سفارشی</option>
              </select>
            </div>
            <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-300">
              ذخیره تغییرات
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
