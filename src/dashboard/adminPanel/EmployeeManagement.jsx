import React, { useState } from "react";
import { motion } from "framer-motion";

const EmployeeManagement = () => {
  const initialEmployees = [
    { id: 1, name: "Ali", role: "Developer" },
    { id: 2, name: "Sara", role: "Designer" },
    { id: 3, name: "Reza", role: "Project Manager" },
  ];

  const initialProjects = [
    { id: 1, title: "Website Redesign", assignedTo: null },
    { id: 2, title: "Mobile App Development", assignedTo: null },
    { id: 3, title: "SEO Optimization", assignedTo: null },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [projects, setProjects] = useState(initialProjects);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const handleAssignProject = () => {
    if (selectedEmployee && selectedProject) {
      setProjects(
        projects.map((project) =>
          project.id === parseInt(selectedProject)
            ? { ...project, assignedTo: selectedEmployee }
            : project
        )
      );
      setSelectedEmployee("");
      setSelectedProject("");
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <motion.h1
        className="text-4xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Employee and Project Management
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl mb-4">Assign Project to Employee</h2>
        <div className="flex mb-4">
          <select
            className="bg-gray-700 p-2 rounded mr-2 w-1/2"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-700 p-2 rounded mr-2 w-1/2"
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name} ({employee.role})
              </option>
            ))}
          </select>
          <button
            onClick={handleAssignProject}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Assign
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Projects</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">Project Title</th>
              <th className="p-3">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-700">
                <td className="p-3">{project.title}</td>
                <td className="p-3">
                  {project.assignedTo ? project.assignedTo : "Unassigned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
