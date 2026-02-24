/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Zap, 
  ShieldCheck, 
  QrCode, 
  MousePointer2,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Music2,
  Sun,
  Moon,
  Clock,
  Settings,
  Palette,
  Shield,
  Link as LinkIcon,
  ThumbsUp,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  TreePine
} from "lucide-react";

const Navbar = () => (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
    <nav className="flex items-center justify-between px-6 py-2.5 bg-white/70 backdrop-blur-xl rounded-full border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter">nitree</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
        <a href="#" className="hover:opacity-100 transition-opacity">Smart context</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Features</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Pricing</a>
        <a href="#" className="hover:opacity-100 transition-opacity">FAQ</a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-olive/5 transition-colors">
          Log in
        </button>
        <button className="text-xs sm:text-sm font-bold px-5 py-2 rounded-full bg-linear-to-b from-brand-lime to-[#bef264] text-brand-olive border-t border-white/60 shadow-[0_4px_0_0_#a3e635,0_10px_20px_-5px_rgba(163,230,53,0.3)] active:translate-y-[2px] active:shadow-[0_2px_0_0_#a3e635] transition-all">
          Start now
        </button>
      </div>
    </nav>
  </div>
);

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 40, 0],
        y: [0, 60, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -top-20 -left-20 w-96 h-96 bg-brand-lime/20 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        x: [0, -60, 0],
        y: [0, 40, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-olive/5 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        x: [0, 30, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5,
      }}
      className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-lime/10 rounded-full blur-[80px]"
    />
  </div>
);

const Hero = () => (
  <section className="relative pt-10 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
    <HeroBackground />
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="z-10 text-center lg:text-left"
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
        Your smartest <br />
        <span className="text-brand-olive/80">link-in-bio tool</span>
      </h1>
      <p className="text-base sm:text-lg opacity-70 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
        Easily create dynamic pages that adapt to your visitors by time of day, and platforms
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
        <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 bg-linear-to-b from-brand-lime to-[#bef264] text-brand-olive px-8 py-4 rounded-full font-bold text-lg border-t border-white/60 shadow-[0_6px_0_0_#a3e635,0_15px_30px_-5px_rgba(163,230,53,0.4)] active:translate-y-[3px] active:shadow-[0_3px_0_0_#a3e635] transition-all">
          Create your page for free!
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/user${i}/100/100`} 
              className="w-8 h-8 sm:w-10 h-10 rounded-full border-2 border-brand-bg"
              alt="User"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        <p className="text-[10px] sm:text-xs opacity-60 leading-tight">
          <span className="font-bold">100+ users</span> <br />
          are using Nitree daily!
        </p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex justify-center scale-75 sm:scale-90 lg:scale-100"
    >
      {/* Pedestal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white rounded-full shadow-2xl opacity-50 blur-3xl" />
      <div className="relative w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center">
        {/* Floating Labels */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 sm:-right-10 top-10 sm:top-20 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs font-bold flex items-center gap-2 z-20"
        >
          <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
          GDPR compliant
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-6 sm:-right-12 bottom-20 sm:bottom-32 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs font-bold flex items-center gap-2 z-20"
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          Context rules
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-4 sm:-left-10 bottom-10 sm:bottom-20 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs font-bold flex items-center gap-2 z-20"
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
          Quick setup
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute left-10 sm:left-20 -bottom-2 sm:-bottom-4 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-[10px] sm:text-xs font-bold flex items-center gap-2 z-20"
        >
          <QrCode className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
          QR codes
        </motion.div>

        {/* Phone Mockup */}
        <div className="relative w-48 sm:w-64 h-[380px] sm:h-[500px] bg-black rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-8 border-gray-800 shadow-2xl overflow-hidden z-10 transform -rotate-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-4 sm:h-6 bg-black rounded-b-2xl z-20" />
          <div className="w-full h-full bg-white p-3 sm:p-4 flex flex-col items-center pt-8 sm:pt-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg sm:text-xl">n</span>
            </div>
            <h3 className="font-bold text-sm sm:text-lg mb-1">Real Events</h3>
            <p className="text-[8px] sm:text-[10px] opacity-50 mb-4 sm:6">The best events for your bio</p>
            
            <div className="w-full space-y-2">
              <div className="p-2 sm:3 bg-gray-50 rounded-lg sm:xl flex items-center gap-2 sm:3 border border-gray-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-md sm:lg" />
                <div className="flex-1">
                  <div className="h-1.5 sm:2 w-16 sm:20 bg-gray-200 rounded mb-1" />
                  <div className="h-1 sm:1.5 w-10 sm:12 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="p-2 sm:3 bg-gray-50 rounded-lg sm:xl flex items-center gap-2 sm:3 border border-gray-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-md sm:lg" />
                <div className="flex-1">
                  <div className="h-1.5 sm:2 w-20 sm:24 bg-gray-200 rounded mb-1" />
                  <div className="h-1 sm:1.5 w-12 sm:16 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="p-2 sm:3 bg-purple-600 rounded-lg sm:xl flex items-center justify-center">
                <span className="text-white text-[8px] sm:text-[10px] font-bold">See all events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FeatureSection = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
    <div className="relative order-2 lg:order-1 flex justify-center scale-75 sm:scale-90 lg:scale-100 h-[400px] sm:h-[500px]">
      <div className="relative w-full max-w-md flex justify-center">
        <motion.div 
          initial={{ rotate: -15, x: -50 }}
          whileInView={{ rotate: -10, x: 0 }}
          className="w-48 sm:w-56 h-[380px] sm:h-[450px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border-4 border-gray-100 overflow-hidden absolute -left-4 sm:-left-10 top-0 z-0"
        >
          <div className="p-4 pt-10">
            <div className="w-full h-4 bg-orange-100 rounded mb-4" />
            <div className="w-full h-4 bg-orange-100 rounded mb-4" />
            <div className="w-full h-4 bg-orange-100 rounded mb-4" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="w-48 sm:w-56 h-[380px] sm:h-[450px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-gray-100 overflow-hidden relative z-10"
        >
          <div className="p-4 pt-10 flex flex-col items-center">
             <div className="w-10 h-10 bg-yellow-400 rounded-full mb-4" />
             <div className="w-full space-y-3">
               <div className="h-8 w-full bg-red-50 rounded-lg flex items-center px-3">
                 <Youtube className="w-3 h-3 text-red-500 mr-2" />
                 <div className="h-2 w-20 bg-red-100 rounded" />
               </div>
               <div className="h-8 w-full bg-blue-50 rounded-lg flex items-center px-3">
                 <Music2 className="w-3 h-3 text-blue-500 mr-2" />
                 <div className="h-2 w-24 bg-blue-100 rounded" />
               </div>
               <div className="h-8 w-full bg-pink-50 rounded-lg flex items-center px-3">
                 <Instagram className="w-3 h-3 text-pink-500 mr-2" />
                 <div className="h-2 w-20 bg-pink-100 rounded" />
               </div>
               <div className="h-12 w-full bg-yellow-400 rounded-lg mt-4" />
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ rotate: 15, x: 50 }}
          whileInView={{ rotate: 10, x: 0 }}
          className="w-48 sm:w-56 h-[380px] sm:h-[450px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border-4 border-gray-100 overflow-hidden absolute -right-4 sm:-right-10 top-0 z-0"
        >
           <div className="p-4 pt-10">
            <div className="w-full h-4 bg-blue-50 rounded mb-4" />
            <div className="w-full h-4 bg-blue-50 rounded mb-4" />
          </div>
        </motion.div>
      </div>
    </div>

    <div className="order-1 lg:order-2 text-center lg:text-left">
      <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
        Create your page <br />
        in seconds
      </h2>
      <p className="text-base sm:text-lg opacity-70 mb-8 max-w-md mx-auto lg:mx-0">
        Start sending your customers, visitors, and followers to the content you want them to see.
      </p>
      <button className="w-full sm:w-auto bg-linear-to-b from-brand-lime to-[#bef264] text-brand-olive px-8 py-3 rounded-full font-bold border-t border-white/60 shadow-[0_4px_0_0_#a3e635,0_10px_20px_-5px_rgba(163,230,53,0.3)] active:translate-y-[2px] active:shadow-[0_2px_0_0_#a3e635] transition-all mb-12">
        Get started now
      </button>
      
      <div className="p-4 rounded-2xl border border-dashed border-brand-olive/20 inline-block">
        <p className="text-xs sm:text-sm opacity-60">
          Are you an NGO? Get Pro version of Nitree for free! — <a href="#" className="underline font-bold">Email us to apply</a>
        </p>
      </div>
    </div>
  </section>
);

const PathSection = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-8 text-center relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap justify-center gap-12 rotate-12 scale-150">
      {Array.from({ length: 100 }).map((_, i) => (
        <ArrowRight key={i} className="w-6 h-6 sm:w-8 sm:h-8 -rotate-45" />
      ))}
    </div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Understand the context</p>
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 sm:20">
        Put your visitors <br />
        on the right path
      </h2>

      <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center scale-90 sm:scale-100">
        {/* Glowing Center */}
        <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-brand-lime/40 rounded-full blur-[60px] sm:blur-[100px]" />
        
        {/* Social Icons Orbit */}
        <div className="relative w-full max-w-sm sm:max-w-lg h-full">
          {/* Top Row */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Music2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-20 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="font-bold text-lg sm:text-xl">@</span>
          </motion.div>

          {/* Middle Row */}
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 left-1/3 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full shadow-sm flex items-center justify-center">
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
          </motion.div>
          <motion.div animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 right-1/3 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full shadow-sm flex items-center justify-center">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
          </motion.div>
          <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </motion.div>

          {/* Bottom Row */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.2, repeat: Infinity }} className="absolute bottom-10 sm:bottom-20 left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity }} className="absolute bottom-5 sm:bottom-10 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
          </motion.div>
        </div>

        {/* Bottom Card */}
        <div className="absolute -bottom-16 sm:-bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[280px] sm:max-w-sm bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 z-20">
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            <span className="font-bold">Change content</span> your visitors see <br />
            based on <span className="font-bold">time of day</span> or <br />
            where they're <span className="font-bold">coming from</span>
          </p>
          <button className="w-full bg-linear-to-b from-brand-lime/60 to-[#bef264]/60 text-brand-olive py-2.5 sm:py-3 rounded-lg sm:xl font-bold text-xs sm:text-sm border-t border-white/40 shadow-[0_4px_0_0_#a3e63566] active:translate-y-[2px] active:shadow-none transition-all">
            Try it yourself
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto text-center">
    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Features</p>
    <h2 className="text-3xl sm:text-5xl font-bold mb-16 sm:mb-20">Simple, yet with <br /> all the tools you need</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        { title: "Quick page builder", icon: <Clock className="w-5 h-5" />, desc: "Easily drag and drop links, buttons and sections" },
        { title: "Set context rules", icon: <Settings className="w-5 h-5" />, desc: "Change content based on time and platform" },
        { title: "Instant QR codes", icon: <QrCode className="w-5 h-5" />, desc: "Easily print and download QR codes that link to your pages" },
        { title: "Smart link sorting", icon: <LinkIcon className="w-5 h-5" />, desc: "Let the best performing links bubble to the top" },
        { title: "Fully customizable", icon: <Palette className="w-5 h-5" />, desc: "Change theme and font used on your pages" },
        { title: "GDPR compliant", icon: <Shield className="w-5 h-5" />, desc: "Fully GDPR-compliant out of the box" }
      ].map((feature, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center flex flex-col items-center"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-lime rounded-full flex items-center justify-center mb-6 text-brand-olive">
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
          <p className="opacity-60 text-xs leading-relaxed max-w-[200px]">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const UseCasesSection = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
    <div className="text-center mb-20 sm:mb-32">
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Use cases</p>
      <h2 className="text-3xl sm:text-5xl font-bold">Pages that work <br /> for your world</h2>
    </div>

    {/* Dashed Path Decoration */}
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none z-0 hidden lg:block" viewBox="0 0 1200 1000">
      <path 
        d="M 100,200 Q 600,100 1100,400 T 100,800" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeDasharray="10,10" 
      />
    </svg>

    <div className="space-y-40 relative z-10">
      {/* Creators */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold mb-6">
            <div className="w-1 h-1 bg-indigo-600 rounded-full" />
            Grow your audience
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Creators</h3>
          <p className="text-sm sm:text-base opacity-60 leading-relaxed">
            Give each visitor the right content based on where they come from - TikTok? Instagram? No problem. NITREE keeps your link-in-bio relevant to everyone.
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/creator/800/600" alt="Creator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 transform rotate-3">
               <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full" />
                    <div>
                      <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                      <div className="h-1 w-10 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-indigo-50 rounded-lg" />
                    <div className="h-6 w-full bg-indigo-50 rounded-lg" />
                    <div className="h-8 w-full bg-indigo-600 rounded-lg" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Owners */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/business/800/600" alt="Business" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute -top-10 -left-10 w-48 sm:w-64 transform -rotate-3">
               <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full" />
                    <div>
                      <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                      <div className="h-1 w-10 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-orange-50 rounded-lg" />
                    <div className="h-6 w-full bg-orange-50 rounded-lg" />
                    <div className="h-8 w-full bg-orange-500 rounded-lg" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold mb-6">
            <div className="w-1 h-1 bg-blue-600 rounded-full" />
            Grow your audience
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Business owners</h3>
          <p className="text-sm sm:text-base opacity-60 leading-relaxed">
            Let guests scan a QR and instantly see your menu, leave a review, or grab a loyalty card. Pages adapt by time of day, so breakfast promos show in the morning, and dinner menus in the evening!
          </p>
        </div>
      </div>

      {/* Events */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-bold mb-6">
            <div className="w-1 h-1 bg-purple-600 rounded-full" />
            Grow your audience
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Events <br /> and non-profits</h3>
          <p className="text-sm sm:text-base opacity-60 leading-relaxed">
            Share donation links, adoption info, or event details in the most accessible way possible. With NITREE, anyone can create clean, mobile-first pages in minutes - no tech skills needed.
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/events/800/600" alt="Events" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 transform rotate-3">
               <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full" />
                    <div>
                      <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                      <div className="h-1 w-10 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-purple-50 rounded-lg" />
                    <div className="h-6 w-full bg-purple-50 rounded-lg" />
                    <div className="h-8 w-full bg-purple-600 rounded-lg" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
    <div className="relative h-[400px] flex items-center justify-center">
      {/* Reaction Icons Cluster */}
      <div className="relative w-full max-w-sm h-full">
        {[
          { icon: <ThumbsUp className="w-5 h-5" />, color: "bg-blue-100 text-blue-600", x: "10%", y: "20%" },
          { icon: <Heart className="w-5 h-5" />, color: "bg-red-100 text-red-600", x: "70%", y: "15%" },
          { icon: <Star className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-600", x: "20%", y: "60%" },
          { icon: <ThumbsUp className="w-5 h-5" />, color: "bg-green-100 text-green-600", x: "80%", y: "55%" },
          { icon: <Heart className="w-5 h-5" />, color: "bg-pink-100 text-pink-600", x: "45%", y: "40%" },
          { icon: <Star className="w-5 h-5" />, color: "bg-orange-100 text-orange-600", x: "60%", y: "80%" },
          { icon: <ThumbsUp className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-600", x: "30%", y: "85%" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{ left: item.x, top: item.y }}
            className={`absolute w-12 h-12 ${item.color} rounded-full shadow-lg flex items-center justify-center`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Testimonials</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our users <br /> love Ntree!</h2>
      <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-md">
        Magna commodo laborum tempor anim ut mollit reprehenderit proident. Fugiat quis culpa et mollit nulla laboris est reprehenderit.
      </p>
      <p className="text-xs opacity-40 mb-10">— Justin Time / CEO of Happy Tracks</p>
      
      <div className="flex gap-4">
        <button className="w-10 h-10 rounded-full border border-brand-olive/10 flex items-center justify-center hover:bg-brand-olive/5 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-linear-to-b from-brand-lime to-[#bef264] text-brand-olive flex items-center justify-center border-t border-white/60 shadow-[0_3px_0_0_#a3e635] active:translate-y-[1px] active:shadow-[0_2px_0_0_#a3e635] transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-20 px-8 max-w-7xl mx-auto border-t border-brand-olive/5">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
      {[
        { val: "2,000+", label: "Nitree users" },
        { val: "10,000+", label: "Pages created" },
        { val: "1M+", label: "Daily visitors" },
        { val: "100%", label: "Satisfied customers" }
      ].map((stat, i) => (
        <div key={i} className="relative group">
          <div className="text-2xl sm:text-3xl font-bold mb-2">{stat.val}</div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-40 font-bold">{stat.label}</div>
          {i < 3 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-brand-olive/10" />}
        </div>
      ))}
    </div>
  </section>
);

const TreeSection = () => (
  <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm border border-gray-100">
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">We plant a tree for every page!</h3>
        <p className="text-sm opacity-60 max-w-md mb-8">Nitree promotes sustainability by planting a tree for every page you create on our platform.</p>
        <button className="flex items-center gap-2 bg-linear-to-b from-brand-lime to-[#bef264] text-brand-olive px-6 py-3 rounded-full font-bold text-sm border-t border-white/60 shadow-[0_4px_0_0_#a3e635] active:translate-y-[2px] active:shadow-[0_2px_0_0_#a3e635] transition-all">
          Plant your tree <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <div className="text-6xl sm:text-7xl font-bold text-brand-olive">420</div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-40">trees planted</div>
        </div>
        <div className="w-20 h-20 bg-brand-lime rounded-full flex items-center justify-center text-brand-olive">
          <TreePine className="w-10 h-10" />
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-lime selection:text-brand-olive pt-20 sm:pt-24">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <PathSection />
        <FeaturesGrid />
        <UseCasesSection />
        <TestimonialsSection />
        <StatsSection />
        <TreeSection />
      </main>
      
      <footer className="py-20 px-8 text-center border-t border-brand-olive/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-2xl font-bold tracking-tighter mb-8">nitree</span>
          <div className="flex gap-8 text-sm opacity-50 mb-12">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
          <p className="text-xs opacity-30">© 2024 Nitree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
