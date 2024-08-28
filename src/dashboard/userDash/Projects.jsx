import React, { useState } from "react";
import { motion } from "framer-motion";
import moment from "moment-jalaali";

const Projects = () => {
  const initialProjects = [
    {
      id: 1,
      name: "پروژه طراحی سایت",
      category: "طراحی",
      status: "در حال انجام",
      deadline: moment("1403/06/15", "jYYYY/jMM/jDD").format("jYYYY/jMM/jDD"),
      description: "طراحی و توسعه یک وب‌سایت واکنش‌گرا",
    },
    {
      id: 2,
      name: "پروژه اپلیکیشن موبایل",
      category: "توسعه نرم‌افزار",
      status: "تکمیل شده",
      deadline: moment("1402/08/20", "jYYYY/jMM/jDD").format("jYYYY/jMM/jDD"),
      description: "توسعه اپلیکیشن موبایل برای iOS و Android",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    name: "",
    category: "",
    status: "در حال بررسی",
    deadline: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleAddProject = () => {
    if (!newProject.name || !newProject.description) {
      setError("لطفاً عنوان و توضیحات پروژه را وارد کنید.");
      return;
    }
    setError("");
    setProjects([
      ...projects,
      {
        ...newProject,
        id: projects.length + 1,
        deadline: moment(newProject.deadline, "YYYY-MM-DD").format(
          "jYYYY/jMM/jDD"
        ),
      },
    ]);
    setNewProject({
      name: "",
      category: "",
      status: "در حال بررسی",
      deadline: "",
      description: "",
    });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-900 min-h-screen text-white rtl">
      <motion.h1
        className="text-3xl md:text-4xl mb-4 md:mb-8 text-right"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        پروژه‌های من
      </motion.h1>

      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 md:p-3">نام پروژه</th>
              <th className="p-2 md:p-3">دسته‌بندی</th>
              <th className="p-2 md:p-3">وضعیت</th>
              <th className="p-2 md:p-3">موعد تحویل</th>
              <th className="p-2 md:p-3">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-700">
                <td className="p-2 md:p-3">{project.name}</td>
                <td className="p-2 md:p-3">{project.category}</td>
                <td className="p-2 md:p-3">{project.status}</td>
                <td className="p-2 md:p-3">{project.deadline}</td>
                <td className="p-2 md:p-3">{project.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8">
          <h2 className="text-2xl mb-4 text-right">سفارش پروژه جدید</h2>
          {error && <p className="text-red-500 mb-4 text-right">{error}</p>}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap">
            <input
              type="text"
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              placeholder="نام پروژه"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
            />
            <select
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              value={newProject.category}
              onChange={(e) =>
                setNewProject({ ...newProject, category: e.target.value })
              }
            >
              <option value="" disabled>
                انتخاب دسته‌بندی
              </option>
              <option value="طراحی">طراحی</option>
              <option value="توسعه نرم‌افزار">توسعه نرم‌افزار</option>
              <option value="بازاریابی">بازاریابی</option>
              <option value="سایر">سایر</option>
            </select>
            <input
              type="date"
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              value={newProject.deadline}
              onChange={(e) =>
                setNewProject({ ...newProject, deadline: e.target.value })
              }
            />
            <textarea
              className="bg-gray-700 p-2 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
              placeholder="توضیحات پروژه"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <button
              onClick={handleAddProject}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full md:w-auto"
            >
              ثبت پروژه جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
