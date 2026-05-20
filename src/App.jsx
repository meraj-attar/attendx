import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"

import AdminDashboard from "./pages/AdminDashboard"
import Attendance from "./pages/Attendance"
import AdminUsers from "./pages/AdminUsers"
import Reports from "./pages/Reports"
import AdminProfile from "./pages/AdminProfile"

import UserDashboard from "./pages/UserDashboard"
import UserAttendance from "./pages/UserAttendance"
import UserProfile from "./pages/UserProfile"

export default function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Admin */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-attendance" element={<Attendance />} />
      <Route path="/users" element={<AdminUsers />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/admin-profile" element={<AdminProfile />} />

      {/* User */}
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/user-attendance" element={<UserAttendance />} />
      <Route path="/profile" element={<UserProfile />} />

    </Routes>
  )
}