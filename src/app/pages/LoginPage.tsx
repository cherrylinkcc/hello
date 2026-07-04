import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { User, KeyRound } from "lucide-react";
import heroBgVideo from "../../imports/cherrylink_splash_ink_backgrounds.mp4";
import { CherrylinkLogoSmall } from "./LandingPage";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ position: "relative" }} className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0103]">
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0103]/60 via-transparent to-[#0b0103]/80" />

      {/* Back to home logo */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 cursor-pointer"
      >
        <CherrylinkLogoSmall className="w-24" />
      </motion.button>

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm mx-auto px-6"
      >
        {/* Glassmorphism card */}
        <div
          className="rounded-3xl px-8 py-10 flex flex-col gap-8"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Heading */}
          <div className="text-center">
            <h1
              className="text-white font-['Lexend',sans-serif] font-semibold"
              style={{ fontSize: "26px", letterSpacing: "-0.5px" }}
            >
              Welcome back
            </h1>
            <p
              className="mt-2 text-white/50 font-['Darker_Grotesque',sans-serif] font-light"
              style={{ fontSize: "18px" }}
            >
              Sign in to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Username */}
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                size={16}
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-white/35 outline-none transition-all duration-200 focus:bg-white/15 font-['Lexend',sans-serif] font-light"
                style={{
                  fontSize: "15px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  caretColor: "#F64A69",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(246,74,105,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <KeyRound
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                size={16}
                strokeWidth={1.5}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-white/35 outline-none transition-all duration-200 focus:bg-white/15 font-['Lexend',sans-serif] font-light"
                style={{
                  fontSize: "15px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  caretColor: "#F64A69",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(246,74,105,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            {/* Login button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full py-3.5 rounded-2xl text-white font-['Lexend',sans-serif] font-light cursor-pointer transition-colors duration-300"
              style={{
                fontSize: "15px",
                background: "linear-gradient(135deg, #F64A69, #a0243f)",
                boxShadow: "0 8px 24px rgba(246,74,105,0.35)",
              }}
            >
              Login
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
