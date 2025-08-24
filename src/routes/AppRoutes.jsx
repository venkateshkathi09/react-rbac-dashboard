import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import AdminPanel from "../pages/AdminPanel";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes wrapped with Layout to include Navbar */}
      <Route element={<Layout />}>
      
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/*  Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Admin Route: Protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* User Route: Protected */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized Access Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
