import { useState } from "react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  LayoutDashboard,
  CalendarCheck,
  User,
  LogOut,
  Bell,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock3,
  CalendarDays,
  BarChart3,
  Activity,
} from "lucide-react"

export default function UserAttendance() {

  const navigate = useNavigate()

  const [attendanceHistory] =
    useState([
      {
        date: "20 May 2026",
        status: "Present",
        time: "09:05 AM",
      },
      {
        date: "19 May 2026",
        status: "Present",
        time: "08:58 AM",
      },
      {
        date: "18 May 2026",
        status: "Late",
        time: "09:20 AM",
      },
      {
        date: "17 May 2026",
        status: "Absent",
        time: "-",
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
          className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
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
              Attendance Analytics
            </h1>

            <p className="text-slate-400 mt-2">
              Detailed attendance records and performance insights
            </p>

          </div>

          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">

            <Bell size={20} />

          </button>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <StatCard
            title="Attendance"
            value="92%"
            icon={<TrendingUp size={28} />}
            color="from-emerald-500 to-green-400"
          />

          <StatCard
            title="Present Days"
            value="110"
            icon={<CheckCircle size={28} />}
            color="from-blue-500 to-cyan-400"
          />

          <StatCard
            title="Absent Days"
            value="08"
            icon={<XCircle size={28} />}
            color="from-red-500 to-pink-500"
          />

          <StatCard
            title="Late Entries"
            value="03"
            icon={<Clock3 size={28} />}
            color="from-orange-400 to-yellow-400"
          />

        </div>

        {/* Analytics Section */}
        <div className="grid xl:grid-cols-3 gap-6 mb-8">

          {/* Monthly Analytics */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Monthly Analytics
                </h2>

                <p className="text-slate-400 mt-2 text-sm">
                  Monthly attendance performance
                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                <BarChart3 size={24} />

              </div>

            </div>

            {/* Fake Chart */}
            <div className="h-80 flex items-end gap-4">

              {[75, 88, 92, 65, 95, 82, 90].map(
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
              Attendance Summary
            </h2>

            <div className="space-y-5">

              <SummaryItem
                title="Current Shift"
                value="Morning Shift"
              />

              <SummaryItem
                title="Monthly Attendance"
                value="95%"
              />

              <SummaryItem
                title="Weekly Attendance"
                value="90%"
              />

              <SummaryItem
                title="Working Days"
                value="26"
              />

              <SummaryItem
                title="Present Days"
                value="24"
              />

              <SummaryItem
                title="Absent Days"
                value="02"
              />

            </div>

          </div>

        </div>

        {/* Attendance Calendar */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-2xl font-bold">
                Attendance Calendar
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                Monthly attendance activity
              </p>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">

              <CalendarDays size={24} />

            </div>

          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7 gap-4">

            {Array.from({ length: 31 }).map(
              (_, index) => (

                <div
                  key={index}
                  className={`h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-300 ${
                    index % 7 === 0
                      ? "bg-red-500/20 text-red-400"
                      : index % 5 === 0
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >

                  {index + 1}

                </div>

              )
            )}

          </div>

        </div>

        {/* Attendance History */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

            <div>

              <h2 className="text-2xl font-bold">
                Attendance History
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                Complete attendance records
              </p>

            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">

              <Activity size={18} />

              Live Records

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>

                <tr className="text-left border-b border-white/10 text-slate-400 text-sm">

                  <th className="pb-5">
                    Date
                  </th>

                  <th className="pb-5">
                    Status
                  </th>

                  <th className="pb-5">
                    Check-In Time
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-white/5">

                {attendanceHistory.map(
                  (item, index) => (

                    <AttendanceRow
                      key={index}
                      date={item.date}
                      status={item.status}
                      time={item.time}
                    />

                  )
                )}

              </tbody>

            </table>

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
        `w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >

      {icon}

      <span className="font-medium">
        {text}
      </span>

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

/* Attendance Row */
function AttendanceRow({
  date,
  status,
  time,
}) {
  return (
    <tr className="hover:bg-white/5 transition-all duration-300">

      <td className="py-5">
        {date}
      </td>

      <td className="py-5">

        <span
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            status === "Present"
              ? "bg-emerald-500/10 text-emerald-400"
              : status === "Absent"
              ? "bg-red-500/10 text-red-400"
              : "bg-orange-500/10 text-orange-400"
          }`}
        >

          {status}

        </span>

      </td>

      <td className="py-5 text-slate-300">
        {time}
      </td>

    </tr>
  )
}