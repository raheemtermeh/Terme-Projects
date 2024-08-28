import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const projects = [
    { name: "پروژه ۱", status: "تکمیل شده", progress: 100 },
    { name: "پروژه ۲", status: "در حال بررسی", progress: 75 },
    { name: "پروژه ۳", status: "در دست اقدام", progress: 45 },
  ];

  const tasks = [
    { task: "جلسه با تیم طراحی", date: "۲۰۲۴/۰۸/۲۰" },
    { task: "تحویل پروژه ۳", date: "۲۰۲۴/۰۸/۲۵" },
  ];

  const notifications = [
    'پروژه "پروژه ۱" تکمیل شد.',
    'پروژه "پروژه ۲" در حال بررسی است.',
    "اعلان جدید: به‌روزرسانی سیستم.",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4">
      <nav className="flex items-center justify-between p-4 bg-gray-800 shadow-md rounded-xl mb-8">
        <h1 className="text-white text-2xl font-bold">داشبورد کاربر</h1>
        <ul className="flex space-x-4">
          <Link to={"/"}>
            <li className="text-white cursor-pointer hover:underline">خانه</li>
          </Link>
          <Link to={"/user/projects"}>
            <li className="text-white cursor-pointer hover:underline">
              پروژه‌ها
            </li>
          </Link>
          <Link to={"/profile"}>
            <li className="text-white cursor-pointer hover:underline">
              تنظیمات
            </li>
          </Link>
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">
            پروژه‌های من
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
                    className={`h-2 rounded-lg transition-width duration-300 ${
                      project.progress === 100
                        ? "bg-green-500"
                        : project.status === "در حال بررسی"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">
            وظایف روزانه
          </h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="text-gray-400 mb-2">
                <span className="text-white font-bold">{task.date}: </span>
                {task.task}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">پروژه‌های من</h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex justify-between text-white items-center p-2 border-b last:border-b-0"
              >
                <span>{project.name}</span>
                <span className="text-white">{project.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-white text-xl font-semibold mb-4">اعلان‌ها</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="text-blue-400 mb-2">
                {notification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
