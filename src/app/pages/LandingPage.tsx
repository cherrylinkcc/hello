import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { Lock } from "lucide-react";
import svgPaths from "../../imports/IPhone1415ProMax1/svg-zak3foqypa";
import imgPhonesMockup from "figma:asset/1514b7c002e5bccb4c87543410ff25d2ba54d713.png";
import imgHelloPhone from "../../imports/iPhone-14-Pro-Mockup-3.png";
import heroBgVideo from "../../imports/cherrylink_splash_ink_backgrounds.mp4";
import { ScrollReveal } from "../components/ScrollReveal";

export function CherrylinkLogo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 374.15 74.0653">
      <g clipPath="url(#logo-clip)">
        <path d={svgPaths.p15c1a700} fill="white" />
        <path d={svgPaths.p3973d980} fill="white" />
        <path d={svgPaths.p919bb00} fill="white" />
        <path d={svgPaths.p1cd30800} fill="white" />
        <path d={svgPaths.p12171b00} fill="white" />
        <path d={svgPaths.p3487ff00} fill="white" />
        <path d={svgPaths.p3d1d64f1} fill="white" />
        <path d={svgPaths.p12780600} fill="white" />
        <path d={svgPaths.pd494500} fill="white" />
        <path d={svgPaths.p6154600} fill="white" />
        <path d={svgPaths.p3b68b00} fill="#F64A69" />
      </g>
      <defs>
        <clipPath id="logo-clip">
          <rect fill="white" height="74.0653" width="374.15" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CherrylinkLogoSmall({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 239.124 47.3362">
      <g clipPath="url(#logo-small-clip)">
        <path d={svgPaths.p3f9a0d80} fill="white" />
        <path d={svgPaths.p33840e80} fill="white" />
        <path d={svgPaths.p176fd400} fill="white" />
        <path d={svgPaths.p2452d980} fill="white" />
        <path d={svgPaths.p33c9100} fill="white" />
        <path d={svgPaths.p31af8d80} fill="white" />
        <path d={svgPaths.p155c9400} fill="white" />
        <path d={svgPaths.p15220280} fill="white" />
        <path d={svgPaths.p29384d00} fill="white" />
        <path d={svgPaths.p3d9eb00} fill="white" />
        <path d={svgPaths.p1ca7f340} fill="#F64A69" />
      </g>
      <defs>
        <clipPath id="logo-small-clip">
          <rect fill="white" height="47.3362" width="239.124" />
        </clipPath>
      </defs>
    </svg>
  );
}

const features = [
  {
    title: "ai engine",
    description: "The artificial intelligence engine helps the community grow, provides personalized recommendations, and optimizes the user experience",
    icon: (
      <svg fill="none" viewBox="0 0 54 54" className="w-12 h-12">
        <path d={svgPaths.p301cc400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "no fakes users",
    description: "Yes. It was straightforward and effective. Accounts that do not fully align with reality simply have no chance of joining",
    icon: (
      <svg fill="none" viewBox="0 0 54 54" className="w-12 h-12">
        <path d={svgPaths.p3f47e180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "events · meets",
    description: "The only way you can serve your community is to cultivate their friendship. And we authenticate this.",
    icon: (
      <svg fill="none" viewBox="0 0 41.5 45.6667" className="w-12 h-12">
        <path d={svgPaths.p2ff74b72} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "authorization & discretion",
    description: "Lorem ipsum.",
    icon: <Lock className="w-12 h-12" strokeWidth={1.5} />,
  },
];

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", minHeight: "100vh" }} className="flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0103]" />
      <motion.video
        style={{ y }}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0b0103] to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <CherrylinkLogo className="w-64 md:w-80 lg:w-96" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-[#c2bfc8] tracking-[0.96px] font-['Lexend',sans-serif] font-light"
          style={{ fontSize: "16px" }}
        >
          build community together
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full bg-[#F64A69] text-white font-['Lexend',sans-serif] font-light tracking-wide hover:bg-[#e03058] transition-colors duration-300 cursor-pointer"
            style={{ fontSize: "15px" }}
          >
            Discover More
          </a>
          <a
            href="#features"
            onClick={(e) => { e.preventDefault(); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full border border-white/30 text-white font-['Lexend',sans-serif] font-light tracking-wide hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            style={{ fontSize: "15px" }}
          >
            See Features
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#a0243f] via-[#370d17] to-[#0b0103] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <span
            className="inline-block text-[#ff5c84] font-['Lexend',sans-serif] font-semibold tracking-[-0.46px] mb-6"
            style={{ fontSize: "23px" }}
          >
            hello
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="w-20 h-0.5 bg-white/20 mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-white font-['Darker_Grotesque',sans-serif] font-medium leading-relaxed text-center"
            style={{ fontSize: "23px", letterSpacing: "1.38px" }}
          >
            Cherrylink is a closed, self-build community, where you can share all 18+ content, what your wanna live, or on your mind. We want to build something new and great. Join us. 😘
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3} className="mt-16 w-full max-w-2xl mx-auto">
        <img
          src={imgHelloPhone}
          alt="Cherrylink app on iPhone"
          className="w-full object-contain opacity-95 drop-shadow-2xl"
        />
      </ScrollReveal>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#0b0103] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="text-white font-['Lexend',sans-serif] font-semibold"
            style={{ fontSize: "23px", letterSpacing: "-0.46px" }}
          >
            What's inside
          </h2>
          <div className="w-16 h-0.5 bg-[#F64A69] mx-auto mt-4" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 0.08} direction="up">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-white opacity-90">{feat.icon}</div>
                <h3
                  className="text-white font-['Lexend',sans-serif] font-bold"
                  style={{ fontSize: "38px", lineHeight: 1.1 }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[#d1d1d1] font-['Darker_Grotesque',sans-serif] font-normal max-w-sm"
                  style={{ fontSize: "26px", lineHeight: 1.4 }}
                >
                  {feat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#181920] to-[#202127] py-24 px-6 overflow-hidden">
      <ScrollReveal className="text-center mb-12">
        <h2
          className="text-white font-['Lexend',sans-serif] font-semibold"
          style={{ fontSize: "23px", letterSpacing: "-0.46px" }}
        >
          Cherrylink everywhere
        </h2>
        <div className="w-16 h-0.5 bg-[#F64A69] mx-auto mt-4" />
      </ScrollReveal>

      <ScrollReveal delay={0.15} direction="none">
        <div className="max-w-3xl mx-auto">
          <img src={imgPhonesMockup} alt="Cherrylink on multiple devices" className="w-full object-contain" />
        </div>
      </ScrollReveal>
    </section>
  );
}

function PolicySection() {
  return (
    <section id="policy" className="relative bg-gradient-to-b from-[#202127] to-[#2c2f38] py-24 px-6">
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <h2
            className="text-white font-['Lexend',sans-serif] font-semibold mb-10 text-center"
            style={{ fontSize: "23px", letterSpacing: "-0.46px" }}
          >
            Policy
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="text-[#fcfcff] font-['Darker_Grotesque',sans-serif] space-y-6 text-center" style={{ fontSize: "28px", lineHeight: 1.25 }}>
            <p className="font-light">What happens in Cherrylink stays here. Fun comes first; business interests are secondary. Everything is allowed, but nothing is required.</p>
            <p className="font-light">We do not appear in search results.</p>
            <p className="font-light">We do not advertise or allow advertising on our platform. We are 100% financed by members. Our members' subscriptions are not merely payments for a service but investments in their future.</p>
            <p className="font-light">Not available in free or pro versions. Users cannot gain in-game benefits for money.</p>
            <p className="font-light">Keeping the community exclusive and building valuable friendships is more important than the number of subscribers.</p>
            <p className="font-bold">Play with love, fairness, and responsibility.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#181920] to-[#202127] py-16 px-6">
      <div className="max-w-lg mx-auto flex flex-col items-center gap-8">
        <ScrollReveal>
          <CherrylinkLogoSmall className="w-48" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-white/40 font-['Lexend',sans-serif] font-light text-center"
            style={{ fontSize: "13px", letterSpacing: "0.5px" }}
          >
            © 2026 Cherrylink. All rights reserved. 18+
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CherrylinkLogoSmall className="w-28" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center"
      >
        <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 rounded-full bg-[#F64A69]/90 backdrop-blur-sm text-white font-['Lexend',sans-serif] font-light hover:bg-[#F64A69] transition-colors duration-300 cursor-pointer"
          style={{ fontSize: "14px" }}
        >
          Login
        </button>
      </motion.div>
    </nav>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#2e2c2f]" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PolicySection />
      <Footer />
    </div>
  );
}
