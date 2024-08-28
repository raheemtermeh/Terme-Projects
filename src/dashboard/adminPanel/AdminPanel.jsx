import React from "react";
import UserManagement from "./UserManagment";
import EmployeeManagement from "./EmployeeManagement";

const AdminPanel = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UserManagement />
        <EmployeeManagement />
      </div>
    </div>
  );
};

export default AdminPanel;
