import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ShieldCheck,
  User,
  Eye,
  EyeOff,
  Mail,
  Lock,
  UserCircle2,
  Building2,
  ArrowRight,
} from "lucide-react"

export default function Login() {
  const [authMode, setAuthMode] = useState("login")
  const [userType, setUserType] = useState("user")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
const handleSubmit = (e) => {
  e.preventDefault()

  if (userType === "admin") {
navigate("/admin-dashboard")
  } else {
    navigate("/user-dashboard")
  }
}
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Grid */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div className="hidden lg:flex flex-col justify-center">

          <div className="mb-10">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">

                <Building2 size={34} />

              </div>

              <div>

                <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AttendX
                </h1>

                <p className="text-slate-400 text-sm mt-1">
                  Smart Attendance Ecosystem
                </p>

              </div>

            </div>

            <p className="text-slate-300 text-xl leading-relaxed max-w-xl">
              Smart AI-powered attendance management platform designed for
              companies, institutes, coaching centers, organizations, and
              teams.
            </p>

          </div>

          {/* Feature Cards */}
          <div className="space-y-5">

            <FeatureCard
              title="Smart Geo Verification"
              description="Real-time GPS-based attendance validation system."
              icon="📍"
            />

            <FeatureCard
              title="Live Analytics & Reports"
              description="Track attendance insights and performance instantly."
              icon="📊"
            />

            <FeatureCard
              title="Role-Based Access"
              description="Secure user and admin management system."
              icon="🔐"
            />

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-full max-w-lg mx-auto">

          <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[36px] p-8 md:p-10 shadow-2xl shadow-blue-500/10">

            {/* Header */}
            <div className="text-center mb-8">

              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-5 shadow-xl shadow-blue-500/20">

                {userType === "admin" ? (
                  <ShieldCheck size={36} />
                ) : (
                  <UserCircle2 size={36} />
                )}

              </div>

              <h2 className="text-4xl font-bold">

                {authMode === "login"
                  ? "Welcome Back"
                  : "Create Account"}

              </h2>

              <p className="text-slate-400 mt-3">
                {authMode === "login"
                  ? "Login to continue into AttendX"
                  : "Register your account to get started"}
              </p>

            </div>

            {/* LOGIN / REGISTER TOGGLE */}
            <div className="flex bg-slate-900 p-1 rounded-2xl mb-6">

              <button
                onClick={() => setAuthMode("login")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  authMode === "login"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-slate-400"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setAuthMode("register")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  authMode === "register"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-slate-400"
                }`}
              >
                Register
              </button>

            </div>

            {/* USER / ADMIN TOGGLE */}
            <div className="flex bg-slate-900 p-1 rounded-2xl mb-8">

              <button
                onClick={() => setUserType("user")}
                className={`flex-1 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  userType === "user"
                    ? "bg-white/10 border border-white/10"
                    : "text-slate-400"
                }`}
              >

                <User size={18} />

                User

              </button>

              <button
                onClick={() => setUserType("admin")}
                className={`flex-1 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  userType === "admin"
                    ? "bg-white/10 border border-white/10"
                    : "text-slate-400"
                }`}
              >

                <ShieldCheck size={18} />

                Admin

              </button>

            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              {authMode === "register" && (

                <InputField
                  icon={<UserCircle2 size={18} />}
                  label="Full Name"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

              )}

              {/* Email */}
              <InputField
                icon={<Mail size={18} />}
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* Password */}
              <div>

                <label className="block mb-2 text-sm text-slate-300">
                  Password
                </label>

                <div className="relative">

                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock size={18} />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-14 pl-12 pr-14 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >

                    {showPassword
                      ? <EyeOff size={20} />
                      : <Eye size={20} />}

                  </button>

                </div>

              </div>

              {/* Remember / Forgot */}
              {authMode === "login" && (

                <div className="flex items-center justify-between text-sm">

                  <label className="flex items-center gap-2 text-slate-400 cursor-pointer">

                    <input
                      type="checkbox"
                      className="accent-blue-500"
                    />

                    Remember me

                  </label>

                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Forgot Password?
                  </button>

                </div>

              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
              >

                {authMode === "login"
                  ? "Login Now"
                  : "Create Account"}

                <ArrowRight size={20} />

              </button>
              

            </form>

            {/* Footer */}
            <p className="text-center text-slate-400 mt-8 text-sm">

              {authMode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}

              <span
                onClick={() =>
                  setAuthMode(
                    authMode === "login"
                      ? "register"
                      : "login"
                  )
                }
                className="ml-2 text-blue-400 hover:text-blue-300 cursor-pointer font-medium"
              >

                {authMode === "login"
                  ? "Register"
                  : "Login"}

              </span>

            </p>

            {/* Terms */}
            <p className="text-center text-xs text-slate-500 mt-6 leading-relaxed">
              By continuing, you agree to AttendX Terms of Service
              and Privacy Policy.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

/* Feature Card */
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">

      <div className="flex items-start gap-4">

        <div className="text-3xl">
          {icon}
        </div>

        <div>

          <h3 className="font-bold text-lg">
            {title}
          </h3>

          <p className="text-slate-400 mt-2 text-sm leading-relaxed">
            {description}
          </p>

        </div>

      </div>

    </div>
  )
}

/* Input Field */
function InputField({
  icon,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block mb-2 text-sm text-slate-300">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-900/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
        />

      </div>

    </div>
  )
}