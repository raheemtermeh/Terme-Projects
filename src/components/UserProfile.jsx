import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user, setUser }) => {
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProfilePic(user?.profilePic || "");
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handlePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleSavePic = async () => {
    setLoading(true);
    try {
      setUser({ ...user, profilePic });
      alert("تصویر پروفایل به‌روز شد.");
    } catch (err) {
      alert("خطا در به‌روز رسانی تصویر پروفایل.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
      <h2 className="text-4xl text-white mb-6 font-semibold transition-transform transform hover:scale-105">
        پروفایل کاربری
      </h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center transition-transform transform hover:scale-105">
        <div className="mb-6">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 transition-transform transform hover:scale-110"
          />
          <input
            type="file"
            className="block mx-auto mb-4 text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            onChange={handlePicChange}
          />

          <a
            
            class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span
              onClick={handleSavePic}
              disabled={loading}
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-black opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              onClick={handleSavePic}
              disabled={loading}
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-black opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              onClick={handleSavePic}
              disabled={loading}
              class="relative z-20 flex items-center text-sm"
            >
              <svg
                class="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              {loading ? "در حال بارگذاری..." : "ذخیره تصویر پروفایل"}
            </span>
          </a>
        </div>

        <p className="text-white text-lg mb-6">
          نام کاربری: <span className="font-semibold">{user.username}</span>
        </p>

        <a
          
          class="relative inline-flex w-full p-3 mb-4 items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span
            onClick={() => navigate("/settings")}
            class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
          ></span>

          <span
            onClick={() => navigate("/settings")}
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
          ></span>

          <span
            onClick={() => navigate("/settings")}
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
          ></span>

          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span
            onClick={() => navigate("/settings")}
            class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
          ></span>
          <span
            onClick={() => navigate("/settings")}
            class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
          ></span>
          <span
            onClick={() => navigate("/settings")}
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
          ></span>
          <span onClick={() => navigate("/settings")} class="relative">
            ویرایش اطلاعات
          </span>
        </a>

        <a
          
          class="relative inline-flex w-full p-3 mb-4 items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span
            onClick={() => navigate("/change-password")}
            class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
          ></span>

          <span
            onClick={() => navigate("/change-password")}
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
          ></span>

          <span
            onClick={() => navigate("/change-password")}
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
          ></span>

          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span
            onClick={() => navigate("/change-password")}
            class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
          ></span>
          <span
            onClick={() => navigate("/change-password")}
            class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
          ></span>
          <span
            onClick={() => navigate("/change-password")}
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
          ></span>
          <span onClick={() => navigate("/change-password")} class="relative">
            تغییر رمز عبور
          </span>
        </a>

        <a
         
          class="relative inline-flex w-full p-3 mb-4 items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span
            onClick={() => navigate("/user")}
            class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
          ></span>

          <span
            onClick={() => navigate("/user")}
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
          ></span>

          <span
            onClick={() => navigate("/user")}
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
          ></span>

          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span
            onClick={() => navigate("/user")}
            class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
          ></span>
          <span
            onClick={() => navigate("/")}
            class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
          ></span>
          <span
            onClick={() => navigate("/user")}
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
          ></span>
          <span onClick={() => navigate("/user")} class="relative">
            داشبورد
          </span>
        </a>

        <a
          
          class="relative inline-flex w-full p-3 mb-4 items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span
            onClick={handleLogout}
            class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
          ></span>

          <span
            onClick={handleLogout}
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
          ></span>

          <span
            onClick={handleLogout}
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
          ></span>

          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span
            onClick={handleLogout}
            class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
          ></span>
          <span
            onClick={handleLogout}
            class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
          ></span>
          <span
            onClick={handleLogout}
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
          ></span>
          <span onClick={handleLogout} class="relative">
            خروج از حساب کاربری
          </span>
        </a>

        <a
          href=""
          onClick={() => navigate("/")}
          class="inline-block py-4 w-full p-3 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
