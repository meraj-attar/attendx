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
  Plus,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
  Save,
  X,
} from "lucide-react"

export default function AdminUsers() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] =
    useState("")

  const [showModal, setShowModal] =
    useState(false)

  const [editUserId, setEditUserId] =
    useState(null)

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      role: "",
      attendance: "",
      status: "Active",
    })

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Meraj Attar",
      email: "meraj@gmail.com",
      role: "Student",
      attendance: "92%",
      status: "Active",
    },
    {
      id: 2,
      name: "Sakib Khan",
      email: "sakib@gmail.com",
      role: "Employee",
      attendance: "88%",
      status: "Active",
    },
    {
      id: 3,
      name: "Noman Shaikh",
      email: "noman@gmail.com",
      role: "Student",
      attendance: "65%",
      status: "Inactive",
    },
  ])

  const filteredUsers =
    users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    )

  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const openAddModal = () => {

    setEditUserId(null)

    setFormData({
      name: "",
      email: "",
      role: "",
      attendance: "",
      status: "Active",
    })

    setShowModal(true)
  }

  const openEditModal = (user) => {

    setEditUserId(user.id)

    setFormData(user)

    setShowModal(true)
  }

  const handleSaveUser = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.role
    ) {

      alert(
        "Please fill all required fields"
      )

      return
    }

    if (editUserId) {

      setUsers(
        users.map((user) =>
          user.id === editUserId
            ? {
                ...formData,
                id: editUserId,
              }
            : user
        )
      )

      alert(
        "User Updated Successfully ✅"
      )

    } else {

      const newUser = {
        ...formData,
        id: Date.now(),
      }

      setUsers([
        newUser,
        ...users,
      ])

      alert(
        "User Added Successfully ✅"
      )
    }

    setShowModal(false)
  }

  const handleDeleteUser = (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this user?"
      )

    if (!confirmDelete) return

    setUsers(
      users.filter(
        (user) => user.id !== id
      )
    )

    alert(
      "User Deleted Successfully ❌"
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

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Users Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage all registered users
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
                placeholder="Search users..."
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

          <StatCard
            title="Total Users"
            value={users.length}
            icon={<Users size={26} />}
            color="from-blue-500 to-cyan-500"
          />

          <StatCard
            title="Active Users"
            value={
              users.filter(
                (u) =>
                  u.status === "Active"
              ).length
            }
            icon={
              <CheckCircle size={26} />
            }
            color="from-emerald-500 to-green-500"
          />

          <StatCard
            title="Inactive Users"
            value={
              users.filter(
                (u) =>
                  u.status === "Inactive"
              ).length
            }
            icon={<XCircle size={26} />}
            color="from-red-500 to-pink-500"
          />

          <StatCard
            title="Attendance Rate"
            value="88%"
            icon={
              <CalendarCheck size={26} />
            }
            color="from-purple-500 to-indigo-500"
          />

        </div>

        {/* Users Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

            <div>

              <h2 className="text-2xl font-bold">
                All Users
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                Complete users management system
              </p>

            </div>

            {/* Add User */}
            <button
              onClick={openAddModal}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/20 font-medium"
            >

              <Plus size={20} />

              Add User

            </button>

          </div>

          {/* Table */}
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
                    Status
                  </th>

                  <th className="pb-5">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-white/5">

                {filteredUsers.length > 0 ? (

                  filteredUsers.map((user) => (

                    <tr
                      key={user.id}
                      className="hover:bg-white/5 transition-all duration-300"
                    >

                      {/* User */}
                      <td className="py-5">

                        <div className="flex items-center gap-4">

                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">

                            {user.name.charAt(0)}

                          </div>

                          <div>

                            <h3 className="font-semibold text-lg">
                              {user.name}
                            </h3>

                            <p className="text-slate-400 text-sm mt-1">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Role */}
                      <td className="py-5">

                        <span className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">

                          {user.role}

                        </span>

                      </td>

                      {/* Attendance */}
                      <td className="py-5">

                        <div>

                          <p className="font-semibold">
                            {user.attendance}
                          </p>

                          <div className="w-32 h-2 rounded-full bg-white/5 mt-2 overflow-hidden">

                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                              style={{
                                width:
                                  user.attendance,
                              }}
                            ></div>

                          </div>

                        </div>

                      </td>

                      {/* Status */}
                      <td className="py-5">

                        <span
                          className={`px-4 py-2 rounded-xl text-sm font-medium border ${
                            user.status ===
                            "Active"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-red-500/10 text-red-400 border-red-500/20"
                          }`}
                        >

                          {user.status}

                        </span>

                      </td>

                      {/* Actions */}
                      <td className="py-5">

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              openEditModal(
                                user
                              )
                            }
                            className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                          >

                            <Pencil size={18} />

                          </button>

                          <button
                            onClick={() =>
                              handleDeleteUser(
                                user.id
                              )
                            }
                            className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all duration-300"
                          >

                            <Trash2 size={18} />

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="py-10 text-center text-slate-400"
                    >

                      No users found

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="w-full max-w-xl bg-[#111827] border border-white/10 rounded-3xl p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold">
                  {editUserId
                    ? "Edit User"
                    : "Add User"}
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Manage user information
                </p>

              </div>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center"
              >

                <X size={20} />

              </button>

            </div>

            {/* Form */}
            <div className="space-y-5">

              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <InputField
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              />

              <InputField
                label="Attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleInputChange}
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full h-14 rounded-2xl bg-slate-900 border border-slate-700 px-4 outline-none"
              >

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>

            {/* Save */}
            <button
              onClick={handleSaveUser}
              className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3"
            >

              <Save size={20} />

              Save User

            </button>

          </div>

        </div>

      )}

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

/* Input */
function InputField({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-300 mb-2">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-14 rounded-2xl bg-slate-900 border border-slate-700 px-4 outline-none focus:border-blue-500 transition-all duration-300"
      />

    </div>
  )
}

/* Stat */
function StatCard({
  title,
  value,
  icon,
  color,
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

        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center`}>

          {icon}

        </div>

      </div>

    </div>
  )
}