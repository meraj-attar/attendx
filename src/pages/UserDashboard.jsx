import { useState } from "react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  MapPin,
  CheckCircle,
  XCircle,
  Clock3,
  CalendarCheck,
  Bell,
  LogOut,
  LayoutDashboard,
  User,
  TrendingUp,
} from "lucide-react"

export default function UserDashboard() {

  const navigate = useNavigate()

  const [attendanceMarked, setAttendanceMarked] =
    useState(false)

  const [gpsVerified, setGpsVerified] =
    useState(false)

  const [todayStatus, setTodayStatus] =
    useState("Not Marked Yet")

  const handleVerifyLocation = () => {

    if (!navigator.geolocation) {

      alert("Geolocation not supported")

      return
    }

    navigator.geolocation.getCurrentPosition(
      () => {

        setGpsVerified(true)

        alert(
          "GPS Location Verified Successfully ✅"
        )

      },
      () => {

        alert(
          "Location Verification Failed ❌"
        )

      }
    )
  }

  const handleMarkAttendance = () => {

    if (!gpsVerified) {

      alert(
        "Please verify location first"
      )

      return
    }

    setAttendanceMarked(true)

    setTodayStatus("Attendance Marked")

    alert(
      "Attendance Marked Successfully ✅"
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-[#111827] border-r border-white/10 p-6 hidden lg:flex flex-col justify-between">

        <div>

          {/* Logo */}
          <div className="mb-10">

            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AttendX
            </h1>

            <p className="text-slate-400 mt-2 text-sm">
              Smart Attendance System
            </p>

          </div>

          {/* Navigation */}
          <nav className="space-y-3">

            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              to="/user-dashboard"
            />

            <SidebarItem
              icon={<CalendarCheck size={20} />}
              text="Attendance"
              to="/user-attendance"
            />

            <SidebarItem
              icon={<User size={20} />}
              text="Profile"
              to="/profile"
            />

          </nav>

        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-300 hover:bg-white/10 transition-all duration-300"
        >

          <LogOut size={20} />

          Logout

        </button>

      </aside>

      {/* Main */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Quick attendance actions and overview
            </p>

          </div>

          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

            <Bell size={20} />

          </button>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <StatCard
            title="Attendance"
            value="92%"
            icon={<TrendingUp size={28} />}
            color="from-emerald-500 to-green-400"
          />

          <StatCard
            title="Present"
            value="110"
            icon={<CheckCircle size={28} />}
            color="from-blue-500 to-cyan-400"
          />

          <StatCard
            title="Absent"
            value="08"
            icon={<XCircle size={28} />}
            color="from-red-500 to-pink-500"
          />

        </div>

        {/* Attendance Action */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold">
                Mark Attendance
              </h2>

              <p className="text-slate-400 mt-2">
                Secure GPS-based attendance
              </p>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

              <MapPin size={28} />

            </div>

          </div>

          {/* Status */}
          <div
            className={`rounded-2xl p-5 mb-6 border ${
              gpsVerified
                ? "bg-emerald-500/10 border-emerald-500/20"
                : "bg-red-500/10 border-red-500/20"
            }`}
          >

            <h3
              className={`font-semibold ${
                gpsVerified
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >

              {gpsVerified
                ? "Location Verified"
                : "Location Not Verified"}

            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Today Status: {todayStatus}
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button
              onClick={handleMarkAttendance}
              disabled={attendanceMarked}
              className={`flex-1 h-14 rounded-2xl font-semibold text-lg ${
                attendanceMarked
                  ? "bg-emerald-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600"
              }`}
            >

              {attendanceMarked
                ? "Attendance Marked ✅"
                : "Mark Attendance"}

            </button>

            <button
              onClick={handleVerifyLocation}
              className="h-14 px-6 rounded-2xl bg-white/5 border border-white/10"
            >

              Verify Location

            </button>

          </div>

        </div>

      </main>

    </div>
  )
}

/* Sidebar */
function SidebarItem({
  icon,
  text,
  to,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            : "text-slate-300 hover:bg-white/10"
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  )
}

/* Stats */
function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center`}>
          {icon}
        </div>

      </div>

    </div>
  )
}