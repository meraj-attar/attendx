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
  Search,
  Bell,
  Download,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Clock3,
  BarChart3,
  Activity,
} from "lucide-react"

export default function Reports() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] =
    useState("")

  const [reports] = useState([
    {
      title: "Attendance Rate",
      value: "88%",
      growth: "+12%",
      positive: true,
    },
    {
      title: "Present Users",
      value: "220",
      growth: "+18",
      positive: true,
    },
    {
      title: "Absent Users",
      value: "20",
      growth: "-5",
      positive: false,
    },
    {
      title: "Late Entries",
      value: "10",
      growth: "-2",
      positive: true,
    },
  ])

  const [attendanceReports] =
    useState([
      {
        name: "Meraj Attar",
        role: "Student",
        attendance: "92%",
        present: "110",
        absent: "08",
        late: "03",
      },
      {
        name: "Sakib Khan",
        role: "Employee",
        attendance: "88%",
        present: "104",
        absent: "12",
        late: "06",
      },
      {
        name: "Noman Shaikh",
        role: "Student",
        attendance: "65%",
        present: "78",
        absent: "42",
        late: "11",
      },
    ])

  const filteredReports =
    attendanceReports.filter(
      (report) =>
        report.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    )

  const handleExportReports = () => {

    alert(
      "Reports Exported Successfully ✅"
    )
  }

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
          className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 px-4 py-3 rounded-2xl"
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
              Attendance Reports
            </h1>

            <p className="text-slate-400 mt-2">
              Analytics and attendance insights
            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-72">

              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
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

          {reports.map((report, index) => (

            <StatCard
              key={index}
              title={report.title}
              value={report.value}
              growth={report.growth}
              positive={report.positive}
            />

          ))}

        </div>

        {/* Analytics */}
        <div className="grid xl:grid-cols-3 gap-6 mb-8">

          {/* Graph */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Attendance Analytics
                </h2>

                <p className="text-slate-400 mt-2 text-sm">
                  Monthly attendance overview
                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                <BarChart3 size={24} />

              </div>

            </div>

            {/* Graph */}
            <div className="h-80 flex items-end gap-4">

              {[60, 75, 90, 65, 85, 95, 88].map(
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
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6">
              Summary
            </h2>

            <div className="space-y-5">

              <SummaryItem
                icon={
                  <CheckCircle size={20} />
                }
                title="Present"
                value="220"
                color="text-emerald-400"
              />

              <SummaryItem
                icon={
                  <XCircle size={20} />
                }
                title="Absent"
                value="20"
                color="text-red-400"
              />

              <SummaryItem
                icon={<Clock3 size={20} />}
                title="Late Entries"
                value="10"
                color="text-orange-400"
              />

              <SummaryItem
                icon={<Users size={20} />}
                title="Total Users"
                value="250"
                color="text-blue-400"
              />

            </div>

            {/* Export */}
            <button
              onClick={
                handleExportReports
              }
              className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3"
            >

              <Download size={20} />

              Export Reports

            </button>

          </div>

        </div>

        {/* Reports Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-2xl font-bold">
                Detailed Reports
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                User attendance analytics
              </p>

            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">

              <Activity size={18} />

              Live Analytics

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="text-left border-b border-white/10 text-slate-400 text-sm">

                  <th className="pb-5">
                    User
                  </th>

                  <th className="pb-5">
                    Role
                  </th>

                  <th className="pb-5">
                    Attendance
                  </th>

                  <th className="pb-5">
                    Present
                  </th>

                  <th className="pb-5">
                    Absent
                  </th>

                  <th className="pb-5">
                    Late
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-white/5">

                {filteredReports.length > 0 ? (

                  filteredReports.map(
                    (report, index) => (

                      <tr
                        key={index}
                        className="hover:bg-white/5 transition-all duration-300"
                      >

                        {/* User */}
                        <td className="py-5">

                          <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">

                              {report.name.charAt(0)}

                            </div>

                            <div>

                              <h3 className="font-semibold text-lg">
                                {report.name}
                              </h3>

                            </div>

                          </div>

                        </td>

                        {/* Role */}
                        <td className="py-5">

                          <span className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">

                            {report.role}

                          </span>

                        </td>

                        {/* Attendance */}
                        <td className="py-5">

                          <div>

                            <p className="font-semibold">
                              {
                                report.attendance
                              }
                            </p>

                            <div className="w-32 h-2 rounded-full bg-white/5 mt-2 overflow-hidden">

                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                                style={{
                                  width:
                                    report.attendance,
                                }}
                              ></div>

                            </div>

                          </div>

                        </td>

                        {/* Present */}
                        <td className="py-5 text-emerald-400 font-medium">

                          {report.present}

                        </td>

                        {/* Absent */}
                        <td className="py-5 text-red-400 font-medium">

                          {report.absent}

                        </td>

                        {/* Late */}
                        <td className="py-5 text-orange-400 font-medium">

                          {report.late}

                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="py-10 text-center text-slate-400"
                    >

                      No reports found

                    </td>

                  </tr>

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
        `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
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

/* Stat */
function StatCard({
  title,
  value,
  growth,
  positive,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-500">

      <div className="flex items-center justify-between mb-5">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            positive
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >

          {positive
            ? <TrendingUp size={28} />
            : <TrendingDown size={28} />}

        </div>

      </div>

      <div
        className={`flex items-center gap-2 text-sm ${
          positive
            ? "text-emerald-400"
            : "text-red-400"
        }`}
      >

        {growth}

        <span className="text-slate-500">
          this month
        </span>

      </div>

    </div>
  )
}

/* Summary */
function SummaryItem({
  icon,
  title,
  value,
  color,
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">

      <div className="flex items-center gap-3">

        <div className={color}>
          {icon}
        </div>

        <h3 className="font-medium">
          {title}
        </h3>

      </div>

      <p className={`font-bold ${color}`}>
        {value}
      </p>

    </div>
  )
}