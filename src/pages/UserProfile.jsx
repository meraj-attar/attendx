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
  Camera,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Lock,
  Save,
  Eye,
  EyeOff,
} from "lucide-react"

export default function UserProfile() {

  const navigate = useNavigate()

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false)

  const [showNewPassword, setShowNewPassword] =
    useState(false)

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const [profileImage, setProfileImage] =
    useState(null)

  const [profileData, setProfileData] =
    useState({
      fullName: "Maviya Attar",
      email: "maviya@example.com",
      phone: "+91 9876543210",
      location: "Solapur, Maharashtra",
      role: "Student / Employee",
    })

  const handleChange = (e) => {

    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSaveProfile = () => {

    alert(
      "Profile Updated Successfully ✅"
    )
  }

  const handleUpdatePassword = () => {

    alert(
      "Password Updated Successfully ✅"
    )
  }

  const handleImageUpload = (e) => {

    const file = e.target.files[0]

    if (file) {

      const imageUrl =
        URL.createObjectURL(file)

      setProfileImage(imageUrl)

      alert(
        "Profile Photo Updated ✅"
      )
    }
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
          className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 px-4 py-3 rounded-2xl"
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
              My Profile
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your personal profile and account security
            </p>

          </div>

          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">

            <Bell size={20} />

          </button>

        </div>

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-8">

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">

            {/* Avatar */}
            <div className="relative w-fit">

              <div className="w-36 h-36 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold shadow-lg shadow-blue-500/20">

                {profileImage ? (

                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />

                ) : (

                  profileData.fullName.charAt(0)

                )}

              </div>

              <label className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 cursor-pointer">

                <Camera size={18} />

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />

              </label>

            </div>

            {/* User Info */}
            <div className="flex-1">

              <h2 className="text-4xl font-bold">
                {profileData.fullName}
              </h2>

              <p className="text-slate-400 mt-2 text-lg">
                {profileData.role}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">

                <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">

                  Active Account

                </div>

                <div className="px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">

                  Attendance: 92%

                </div>

                <div className="px-4 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">

                  GPS Verified

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* Personal Information */}
          <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Personal Information
                </h2>

                <p className="text-slate-400 mt-2 text-sm">
                  Update your personal details
                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                <User size={24} />

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <InputField
                label="Full Name"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
              />

              <InputField
                label="Email Address"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                icon={<Mail size={18} />}
              />

              <InputField
                label="Phone Number"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                icon={<Phone size={18} />}
              />

              <InputField
                label="Location"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                icon={<MapPin size={18} />}
              />

            </div>

            <button
              onClick={handleSaveProfile}
              className="mt-8 flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/20 font-semibold"
            >

              <Save size={20} />

              Save Changes

            </button>

          </div>

          {/* Security */}
          <div className="space-y-6">

            {/* Security Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">

                  <ShieldCheck size={24} />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    Security
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    Account protection status
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <SecurityItem
                  title="Password Protected"
                  status="Enabled"
                  success
                />

                <SecurityItem
                  title="Email Verified"
                  status="Verified"
                  success
                />

                <SecurityItem
                  title="GPS Verification"
                  status="Active"
                  success
                />

                <SecurityItem
                  title="Two Factor Auth"
                  status="Not Enabled"
                />

              </div>

            </div>

            {/* Password */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">

                  <Lock size={24} />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    Change Password
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    Update your account password
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <PasswordInput
                  placeholder="Current Password"
                  visible={showCurrentPassword}
                  toggle={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword
                    )
                  }
                />

                <PasswordInput
                  placeholder="New Password"
                  visible={showNewPassword}
                  toggle={() =>
                    setShowNewPassword(
                      !showNewPassword
                    )
                  }
                />

                <PasswordInput
                  placeholder="Confirm Password"
                  visible={showConfirmPassword}
                  toggle={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                />

              </div>

              <button
                onClick={handleUpdatePassword}
                className="w-full mt-6 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 font-semibold hover:scale-[1.01] transition-all duration-300"
              >

                Update Password

              </button>

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

/* Input */
function InputField({
  label,
  name,
  value,
  onChange,
  icon,
}) {
  return (
    <div>

      <label className="block text-sm text-slate-300 mb-2">
        {label}
      </label>

      <div className="relative">

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-14 rounded-2xl bg-slate-900/80 border border-slate-700 px-4 pr-12 focus:border-blue-500 outline-none transition-all duration-300"
        />

        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

      </div>

    </div>
  )
}

/* Password */
function PasswordInput({
  placeholder,
  visible,
  toggle,
}) {
  return (
    <div className="relative">

      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-14 rounded-2xl bg-slate-900/80 border border-slate-700 px-4 pr-14 focus:border-blue-500 outline-none transition-all duration-300"
      />

      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
      >

        {visible
          ? <EyeOff size={20} />
          : <Eye size={20} />}

      </button>

    </div>
  )
}

/* Security */
function SecurityItem({
  title,
  status,
  success,
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">

      <div>

        <h3 className="font-medium">
          {title}
        </h3>

        <p
          className={`text-sm mt-1 ${
            success
              ? "text-emerald-400"
              : "text-orange-400"
          }`}
        >

          {status}

        </p>

      </div>

      <div
        className={`w-3 h-3 rounded-full ${
          success
            ? "bg-emerald-400"
            : "bg-orange-400"
        }`}
      ></div>

    </div>
  )
}