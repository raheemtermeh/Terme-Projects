// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserDashboard from "./dashboard/userDash/UserDashboard";
import AdminDashboard from "./dashboard/adminPanel/AdminDashboard";
import LoginRegister from "./components/LoginRegister";
import ServicesIndex from "./components/services/Index";
import PWADevelop from "./components/services/PWADevelop";
import BackingWebsite from "./components/services/BackingWebsite";
import CustomeWebsite from "./components/services/CustomeWebsite";
import Brandmanagement from "./components/services/Brandmanagement";
import MobileApplication from "./components/services/MobileApplication";
import SeoOptimization from "./components/seo/SeoOptimization";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import UserSettings from "./components/UserSettings";
import ChangePassword from "./components/ChangePassword";
import PrivateRoute from "./components/routing/PrivateRoute";
import UserManagment from "./dashboard/adminPanel/UserManagment";
import Setting from "./dashboard/adminPanel/Setting";
import Project from "./dashboard/userDash/Projects.jsx";

const MainApp = () => {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginRegister setUser={setUser} />
            ) : user.role === "Admin" ? (
              <Navigate to="/admin" />
            ) : (
              <Navigate to="/user" />
            )
          }
        />
        <Route path="/" element={<App user={user} setUser={setUser} />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/profile"
            element={<UserProfile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<UserSettings user={user} setUser={setUser} />}
          />
          <Route
            path="/change-password"
            element={<ChangePassword user={user} />}
          />
          <Route
            path="/user"
            element={
              isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />
            }
          />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/PWADevelop" element={<PWADevelop />} />
          <Route path="/services/BackingWebsite" element={<BackingWebsite />} />
          <Route path="/services/CustomeWebsite" element={<CustomeWebsite />} />
          <Route path="/user/projects" element={<Project />} />
          <Route
            path="/services/Brandmanagement"
            element={<Brandmanagement />}
          />
          <Route
            path="/services/MobileApplication"
            element={<MobileApplication />}
          />
          <Route path="/seoOptimization" element={<SeoOptimization />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/admin/users" element={<UserManagment />} />
          <Route path="/admin/settings" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
