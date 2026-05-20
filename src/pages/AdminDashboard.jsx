import { useState } from "react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  FileBarChart2,
  User,
  LogOut,
  Bell,
  Search,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock3,
  MapPin,
  Activity,
  ShieldCheck,
  UserCheck,
} from "lucide-react"

export default function AdminDashboard() {

  const navigate = useNavigate()

  const [liveAttendance] = useState([
    {
      id: "EMP001",
      name: "Meraj Attar",
      status: "Present",
      shift: "Morning Shift",
      gps: "Verified",
    },
    {
      id: "EMP002",
      name: "Sakib Khan",
      status: "Late",
      shift: "Evening Shift",
      gps: "Verified",
    },
    {
      id: "EMP003",
      name: "Noman Shaikh",
      status: "Absent",
      shift: "Morning Shift",
      gps: "Not Verified",
    },
  ])

  return (
    <div className="min-h-screen bg-[#020617] text-white flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-72 bg-[#111827] border-r border-white/10 p-6 hidden lg:flex flex-col justify-between">

        <div>

          {/* Logo */}
          <div className="mb-10">

            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              AttendX

            </h1>

            <p className="text-slate-400 mt-2 text-sm">

              Smart Multi-Purpose Attendance System

            </p>

          </div>

          {/* Navigation */}
          <nav className="space-y-3">

            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              to="/admin-dashboard"
            />

            <SidebarItem
              icon={<CalendarCheck size={20} />}
              text="Attendance"
              to="/admin-attendance"
            />

            <SidebarItem
              icon={<Users size={20} />}
              text="Users"
              to="/users"
            />

            <SidebarItem
              icon={<FileBarChart2 size={20} />}
              text="Reports"
              to="/reports"
            />

            <SidebarItem
              icon={<User size={20} />}
              text="Profile"
              to="/admin-profile"
            />

          </nav>

        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
        >

          <LogOut size={20} />

          Logout

        </button>

      </aside>

      {/* Main */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

          <div>

            <h1 className="text-4xl font-bold">

              Admin Dashboard

            </h1>

            <p className="text-slate-400 mt-2">

              Smart attendance system overview and analytics

            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-72 backdrop-blur-md">

              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search users..."
                className="bg-transparent outline-none text-sm w-full placeholder:text-slate-500"
              />

            </div>

            {/* Notification */}
            <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">

              <Bell size={20} />

            </button>

          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <StatCard
            title="Total Users"
            value="248"
            icon={<Users size={28} />}
            color="from-blue-500 to-cyan-400"
          />

          <StatCard
            title="Present Today"
            value="220"
            icon={<CheckCircle size={28} />}
            color="from-emerald-500 to-green-400"
          />

          <StatCard
            title="Absent Today"
            value="18"
            icon={<XCircle size={28} />}
            color="from-red-500 to-pink-500"
          />

          <StatCard
            title="Late Entries"
            value="10"
            icon={<Clock3 size={28} />}
            color="from-orange-400 to-yellow-400"
          />

        </div>

        {/* Analytics */}
        <div className="grid xl:grid-cols-3 gap-6 mb-8">

          {/* Chart */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold">

                  Weekly Attendance Analytics

                </h2>

                <p className="text-slate-400 mt-2 text-sm">

                  Attendance performance overview

                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                <TrendingUp size={24} />

              </div>

            </div>

            {/* Fake Chart */}
            <div className="h-80 flex items-end gap-4">

              {[85, 92, 88, 95, 90, 97, 94].map(
                (height, index) => (

                  <div
                    key={index}
                    className="flex-1 rounded-t-3xl bg-gradient-to-t from-blue-500 to-purple-600 hover:opacity-80 transition-all duration-300"
                    style={{
                      height: `${height}%`,
                    }}
                  ></div>

                )
              )}

            </div>

          </div>

          {/* Summary */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">

              System Summary

            </h2>

            <div className="space-y-5">

              <SummaryItem
                title="Attendance Rate"
                value="92%"
              />

              <SummaryItem
                title="Active Shifts"
                value="3"
              />

              <SummaryItem
                title="Departments"
                value="8"
              />

              <SummaryItem
                title="GPS Enabled"
                value="Active"
              />

              <SummaryItem
                title="Working Days"
                value="Mon - Sat"
              />

              <SummaryItem
                title="System Status"
                value="Online"
              />

            </div>

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <FeatureCard
            title="Live Tracking"
            description="Monitor attendance records in real-time with instant updates."
            icon={<Activity size={28} />}
          />

          <FeatureCard
            title="GPS Verification"
            description="Secure attendance using live location verification system."
            icon={<MapPin size={28} />}
          />

          <FeatureCard
            title="Secure Access"
            description="Protected attendance system with role-based access control."
            icon={<ShieldCheck size={28} />}
          />

        </div>

        {/* Attendance Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 overflow-x-auto">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h3 className="text-2xl font-bold">

                Live Attendance Records

              </h3>

              <p className="text-slate-400 text-sm mt-1">

                Real-time employee attendance monitoring

              </p>

            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">

              <UserCheck size={18} />

              Live Monitoring

            </div>

          </div>

          <table className="w-full min-w-[800px]">

            <thead>

              <tr className="text-left text-slate-400 border-b border-white/10">

                <th className="pb-4">
                  ID
                </th>

                <th className="pb-4">
                  Name
                </th>

                <th className="pb-4">
                  Shift
                </th>

                <th className="pb-4">
                  Status
                </th>

                <th className="pb-4">
                  GPS
                </th>

              </tr>

            </thead>

            <tbody>

              {liveAttendance.map(
                (user, index) => (

                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                  >

                    <td className="py-5">

                      {user.id}

                    </td>

                    <td className="py-5 font-medium">

                      {user.name}

                    </td>

                    <td className="py-5 text-slate-300">

                      {user.shift}

                    </td>

                    <td className="py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Present"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : user.status === "Absent"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >

                        {user.status}

                      </span>

                    </td>

                    <td className="py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.gps === "Verified"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >

                        {user.gps}

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

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
        `w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20"
            : "hover:bg-white/5 text-slate-300 hover:text-white"
        }`
      }
    >

      {icon}

      {text}

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

/* Summary */
function SummaryItem({
  title,
  value,
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4">

      <p className="text-slate-400">

        {title}

      </p>

      <h4 className="font-semibold">

        {value}

      </h4>

    </div>
  )
}

/* Features */
function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-5">

        {icon}

      </div>

      <h3 className="text-xl font-bold mb-3">

        {title}

      </h3>

      <p className="text-slate-400 leading-relaxed">

        {description}

      </p>

    </div>
  )
}