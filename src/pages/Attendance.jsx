import { useState } from "react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileBarChart2,
  LogOut,
  Bell,
  Search,
  MapPin,
  Clock3,
  Play,
  Square,
  FileDown,
  Plus,
  Trash2,
} from "lucide-react"

export default function Attendance() {

  const navigate = useNavigate()

  const [groupName, setGroupName] =
    useState("")

  const [shiftType, setShiftType] =
    useState("")

  const [startDate, setStartDate] =
    useState("")

  const [endDate, setEndDate] =
    useState("")

  const [startTime, setStartTime] =
    useState("")

  const [endTime, setEndTime] =
    useState("")

  const [workingDays, setWorkingDays] =
    useState("")

  const [radius, setRadius] =
    useState("")

  const [notes, setNotes] =
    useState("")

  const [attendanceEnabled, setAttendanceEnabled] =
    useState(true)

  const [holidays, setHolidays] =
    useState([
      {
        name: "",
        date: "",
      },
    ])

  const attendanceData = [
    {
      id: "EMP001",
      name: "Meraj Attar",
      shift: "Morning Shift",
      team: "Development Team",
      status: "Present",
      gps: "Verified",
    },
    {
      id: "EMP002",
      name: "Sakib Khan",
      shift: "Evening Shift",
      team: "Support Team",
      status: "Absent",
      gps: "Not Verified",
    },
    {
      id: "EMP003",
      name: "Noman Shaikh",
      shift: "Morning Shift",
      team: "HR Team",
      status: "Late",
      gps: "Verified",
    },
  ]

  const addHoliday = () => {

    setHolidays([
      ...holidays,
      {
        name: "",
        date: "",
      },
    ])
  }

  const removeHoliday = (index) => {

    const updated = [...holidays]

    updated.splice(index, 1)

    setHolidays(updated)
  }

  const updateHoliday = (
    index,
    field,
    value
  ) => {

    const updated = [...holidays]

    updated[index][field] = value

    setHolidays(updated)
  }

  const handleSaveSetup = () => {

    if (
      !groupName ||
      !shiftType ||
      !startDate ||
      !endDate ||
      !startTime ||
      !endTime ||
      !workingDays ||
      !radius
    ) {

      alert(
        "Please fill all required fields"
      )

      return
    }

    alert(
      "Attendance Setup Saved Successfully ✅"
    )
  }

  const handleDisableAttendance = () => {

    setAttendanceEnabled(false)

    alert(
      "Attendance Disabled ❌"
    )
  }

  const verifyLocation = () => {

    if (!navigator.geolocation) {

      alert(
        "Geolocation not supported"
      )

      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

        alert(`Location Verified ✅

Latitude:
${position.coords.latitude}

Longitude:
${position.coords.longitude}`)

      },
      () => {

        alert(
          "Location access denied ❌"
        )

      }
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <h2 className="text-4xl font-bold">

              Attendance Management

            </h2>

            <p className="text-slate-400 mt-2">

              Configure attendance rules, schedule, and location settings

            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 h-12 backdrop-blur-md">

              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm placeholder:text-slate-500"
              />

            </div>

            {/* Notification */}
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-md">

              <Bell size={20} />

            </button>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-6 mb-8">

          {/* Left */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="mb-8">

              <h2 className="text-2xl font-bold">

                Create Attendance Setup

              </h2>

              <p className="text-slate-400 mt-2 text-sm">

                Configure attendance rules, schedule, and location settings

              </p>

            </div>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-5">

              <InputField
                label="Group / Team / Department Name"
                placeholder="Example: Development Team"
                value={groupName}
                onChange={(e) =>
                  setGroupName(e.target.value)
                }
              />

              <InputField
                label="Group Type / Shift"
                placeholder="Morning Shift"
                value={shiftType}
                onChange={(e) =>
                  setShiftType(e.target.value)
                }
              />

              <DateField
                label="Setup Start Date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(e.target.value)
                }
              />

              <DateField
                label="Setup End Date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(e.target.value)
                }
              />

              <TimeField
                label="Daily Attendance Start Time"
                value={startTime}
                onChange={(e) =>
                  setStartTime(e.target.value)
                }
              />

              <TimeField
                label="Daily Attendance End Time"
                value={endTime}
                onChange={(e) =>
                  setEndTime(e.target.value)
                }
              />

              <InputField
                label="Working Days"
                placeholder="Monday - Saturday"
                value={workingDays}
                onChange={(e) =>
                  setWorkingDays(e.target.value)
                }
              />

              <InputField
                label="Attendance Radius (Meters)"
                placeholder="100"
                type="number"
                value={radius}
                onChange={(e) =>
                  setRadius(e.target.value)
                }
              />

              {/* Location */}
              <div className="md:col-span-2">

                <label className="block text-sm text-slate-300 mb-2">

                  Organization Location

                </label>

                <button
                  onClick={verifyLocation}
                  className="w-full h-14 rounded-2xl border border-dashed border-blue-500/40 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-3 text-blue-400 font-medium"
                >

                  <MapPin size={20} />

                  Verify Organization Location

                </button>

              </div>

              {/* Holiday Management */}
              <div className="md:col-span-2">

                <div className="flex items-center justify-between mb-4">

                  <div>

                    <label className="block text-sm text-slate-300">

                      Holiday Management

                    </label>

                    <p className="text-xs text-slate-500 mt-1">

                      Add holidays during setup duration

                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={addHoliday}
                    className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 text-sm flex items-center gap-2"
                  >

                    <Plus size={16} />

                    Add Holiday

                  </button>

                </div>

                <div className="space-y-4">

                  {holidays.map(
                    (holiday, index) => (

                      <div
                        key={index}
                        className="grid md:grid-cols-[1fr_1fr_auto] gap-4"
                      >

                        <input
                          type="text"
                          placeholder="Holiday Name"
                          value={holiday.name}
                          onChange={(e) =>
                            updateHoliday(
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          className="w-full h-12 px-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 outline-none"
                        />

                        <input
                          type="date"
                          value={holiday.date}
                          onChange={(e) =>
                            updateHoliday(
                              index,
                              "date",
                              e.target.value
                            )
                          }
                          className="w-full h-12 px-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 outline-none"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeHoliday(index)
                          }
                          className="h-12 w-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300"
                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* Notes */}
              <div className="md:col-span-2">

                <label className="block text-sm text-slate-300 mb-2">

                  Additional Notes

                </label>

                <textarea
                  rows="4"
                  value={notes}
                  onChange={(e) =>
                    setNotes(e.target.value)
                  }
                  placeholder="Example: Friday remote work, special office timing..."
                  className="w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 outline-none resize-none"
                ></textarea>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={handleSaveSetup}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-medium hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/20"
              >

                <Play size={18} />

                Save Attendance Setup

              </button>

              <button
                onClick={handleDisableAttendance}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-500/20 border border-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
              >

                <Square size={18} />

                Disable Attendance

              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">

                <FileDown size={18} />

                Export Report

              </button>

            </div>

          </div>

          {/* Right Panel */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="mb-6">

              <h2 className="text-2xl font-bold">

                Current Attendance Setup

              </h2>

              <p className="text-slate-400 mt-2 text-sm">

                Current attendance system configuration

              </p>

            </div>

            <div className="space-y-5">

              <SessionInfo
                title="Group"
                value={
                  groupName ||
                  "Development Team"
                }
              />

              <SessionInfo
                title="Shift Type"
                value={
                  shiftType ||
                  "Morning Shift"
                }
              />

              <SessionInfo
                title="Setup Duration"
                value={`${startDate || "2026-06-01"} → ${endDate || "2026-11-01"}`}
              />

              <SessionInfo
                title="Working Days"
                value={
                  workingDays ||
                  "Monday - Saturday"
                }
              />

              <SessionInfo
                title="Attendance Timing"
                value={`${startTime || "09:00"} → ${endTime || "18:00"}`}
              />

              <SessionInfo
                title="Attendance Radius"
                value={`${radius || "100"} meters`}
              />

              <div
                className={`rounded-2xl p-4 ${
                  attendanceEnabled
                    ? "bg-emerald-500/10 border border-emerald-500/20"
                    : "bg-red-500/10 border border-red-500/20"
                }`}
              >

                <p
                  className={`text-sm mb-1 ${
                    attendanceEnabled
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >

                  System Status

                </p>

                <div className="flex items-center gap-2">

                  <div
                    className={`w-3 h-3 rounded-full animate-pulse ${
                      attendanceEnabled
                        ? "bg-emerald-400"
                        : "bg-red-400"
                    }`}
                  ></div>

                  <h3
                    className={`font-semibold ${
                      attendanceEnabled
                        ? "text-emerald-300"
                        : "text-red-300"
                    }`}
                  >

                    {attendanceEnabled
                      ? "Active"
                      : "Disabled"}

                  </h3>

                </div>

              </div>

            </div>

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

/* Session Info */
function SessionInfo({
  title,
  value,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">

      <p className="text-slate-400 text-sm mb-1">

        {title}

      </p>

      <h4 className="font-semibold">

        {value}

      </h4>

    </div>
  )
}

/* Input */
function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>

      <label className="block text-sm text-slate-300 mb-2">

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 px-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
      />

    </div>
  )
}

/* Date */
function DateField({
  label,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-300 mb-2">

        {label}

      </label>

      <input
        type="date"
        value={value}
        onChange={onChange}
        className="w-full h-12 px-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 outline-none"
      />

    </div>
  )
}

/* Time */
function TimeField({
  label,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-300 mb-2">

        {label}

      </label>

      <div className="relative">

        <input
          type="time"
          value={value}
          onChange={onChange}
          className="w-full h-12 px-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 outline-none"
        />

        <Clock3
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

      </div>

    </div>
  )
}