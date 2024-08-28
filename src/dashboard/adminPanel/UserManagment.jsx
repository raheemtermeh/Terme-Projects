import React, { useState } from "react";
import { motion } from "framer-motion";

const UserManagement = () => {
  const initialUsers = [
    { id: 1, username: "heyvoon", email: "sag@example.com", role: "کاربر" },
    { id: 2, username: "mmd", email: "mmd@example.com", role: "مدیر" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editUserId, setEditUserId] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    role: "کاربر",
  });

  const handleEditClick = (id) => {
    setEditUserId(id);
  };

  const handleSaveClick = () => {
    setUsers(
      users.map((user) =>
        user.id === editUserId ? { ...user, ...newUser } : user
      )
    );
    setEditUserId(null);
  };

  const handleDeleteClick = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: "", email: "", role: "کاربر" });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-900 min-h-screen text-white rtl">
      <motion.h1
        className="text-3xl md:text-4xl mb-4 md:mb-8 text-right"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        مدیریت کاربران
      </motion.h1>

      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 md:p-3">نام کاربری</th>
              <th className="p-2 md:p-3">ایمیل</th>
              <th className="p-2 md:p-3">نقش</th>
              <th className="p-2 md:p-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="p-2 md:p-3">
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      className="bg-gray-700 p-2 rounded w-full"
                      defaultValue={user.username}
                      onChange={(e) =>
                        setNewUser({ ...newUser, username: e.target.value })
                      }
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td className="p-2 md:p-3">
                  {editUserId === user.id ? (
                    <input
                      type="email"
                      className="bg-gray-700 p-2 rounded w-full"
                      defaultValue={user.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="p-2 md:p-3">
                  {editUserId === user.id ? (
                    <select
                      className="bg-gray-700 p-2 rounded w-full"
                      defaultValue={user.role}
                      onChange={(e) =>
                        setNewUser({ ...newUser, role: e.target.value })
                      }
                    >
                      <option value="کاربر">کاربر</option>
                      <option value="مدیر">مدیر</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="p-2 md:p-3 text-right">
                  {editUserId === user.id ? (
                    <button
                      onClick={handleSaveClick}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                    >
                      ذخیره
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(user.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded mr-2"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => handleDeleteClick(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                      >
                        حذف
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8">
          <h2 className="text-2xl mb-4 text-right">افزودن کاربر جدید</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap">
            <input
              type="text"
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              placeholder="نام کاربری"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
            <input
              type="email"
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              placeholder="ایمیل"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <select
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="کاربر">کاربر</option>
              <option value="مدیر">مدیر</option>
            </select>
            <button
              onClick={handleAddUser}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full md:w-auto"
            >
              افزودن کاربر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
