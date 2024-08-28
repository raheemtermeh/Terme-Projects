import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const projects = [
    { name: "پروژه ۱", status: "تکمیل شده", progress: 100 },
    { name: "پروژه ۲", status: "در حال بررسی", progress: 75 },
    { name: "پروژه ۳", status: "در دست اقدام", progress: 45 },
  ];

  const users = [
    { username: "کاربر ۱", role: "مدیر" },
    { username: "کاربر ۲", role: "کاربر" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4">
      <nav className="flex items-center justify-between p-4 bg-gray-800 shadow-md rounded-xl mb-8">
        <h1 className="text-white text-2xl font-bold">داشبورد مدیر</h1>
        <ul className="flex space-x-4">
          <Link to={"/"}>
            <li className="text-white cursor-pointer hover:underline">خانه</li>
          </Link>
          <Link to={"/admin/users"}>
            <li className="text-white cursor-pointer hover:underline">
              مدیریت کاربران
            </li>
          </Link>
          <Link to={"/admin/settings"}>
            <li className="text-white cursor-pointer hover:underline">
              تنظیمات
            </li>
          </Link>
        </ul>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">
            پروژه‌های کلی
          </h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center text-white">
                  <span>{project.name}</span>
                  <span>{project.status}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-lg mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-lg transition-width duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">
            لیست کاربران
          </h2>
          <ul className="space-y-4">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border-b text-white last:border-b-0"
              >
                <span>{user.username}</span>
                <span className="text-white">{user.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">
            آمار و اطلاعات
          </h2>
          <div className="text-white">
            <p className="mb-4">تعداد پروژه‌های تکمیل‌شده: 10</p>
            <p className="mb-4">تعداد کاربران: 20</p>
            <p className="mb-4">تعداد پروژه‌های در دست اقدام: 5</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">
            مدیریت کاربران
          </h2>
          <ul>
            {users.map((user, index) => (
              <li key={index} className="text-gray-400 mb-2">
                <span className="text-white font-bold">{user.username}: </span>
                {user.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
