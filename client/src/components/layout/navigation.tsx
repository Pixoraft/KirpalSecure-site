import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Camera, Zap, Search, Package, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import kirpalLogo from "@assets/image_1759637433269.png";
import { electricFenceCities } from "@/lib/electric-fence-cities";
import { cctvCities } from "@/lib/cctv-cities";

const CCTV_INDUSTRIES = [
  { label: "Best CCTV for School",      href: "/best-cctv-camera-for-school" },
  { label: "Best CCTV for Factory",     href: "/best-cctv-camera-for-factory" },
  { label: "Best CCTV for Warehouse",   href: "/best-cctv-camera-for-warehouse" },
  { label: "Best CCTV for Office",      href: "/best-cctv-camera-for-office" },
  { label: "Best CCTV for Hospital",    href: "/best-cctv-camera-for-hospital" },
  { label: "Best CCTV for Commercial",  href: "/best-cctv-camera-for-commercial-buildings" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isElectricDropdownOpen, setIsElectricDropdownOpen] = useState(false);
  const [isMobileElectricOpen, setIsMobileElectricOpen] = useState(false);
  const [isCCTVDropdownOpen, setIsCCTVDropdownOpen] = useState(false);
  const [isMobileCCTVOpen, setIsMobileCCTVOpen] = useState(false);
  const [electricAlign, setElectricAlign] = useState<"left" | "right">("left");
  const [cctvAlign, setCctvAlign] = useState<"left" | "right">("right");
  const [location] = useLocation();
  const electricHoverRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cctvHoverRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const electricWrapRef = useRef<HTMLDivElement>(null);
  const cctvWrapRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/packages", label: "Packages" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const isElectricActive = location.startsWith("/electric-fence-installation");
  const isCCTVActive = location.startsWith("/cctv-camera-installation") || location.startsWith("/best-cctv-camera-for") || location.startsWith("/cctv-installation-near-me") || location.startsWith("/cctv-camera-service-near-me");

  function computeAlign(ref: React.RefObject<HTMLDivElement>, dropdownWidth: number): "left" | "right" {
    if (!ref.current) return "right";
    const rect = ref.current.getBoundingClientRect();
    return rect.left + dropdownWidth > window.innerWidth - 16 ? "right" : "left";
  }

  const handleElectricEnter = () => {
    if (electricHoverRef.current) clearTimeout(electricHoverRef.current);
    setElectricAlign(computeAlign(electricWrapRef, 560));
    setIsElectricDropdownOpen(true);
  };
  const handleElectricLeave = () => {
    electricHoverRef.current = setTimeout(() => setIsElectricDropdownOpen(false), 150);
  };

  const handleCCTVEnter = () => {
    if (cctvHoverRef.current) clearTimeout(cctvHoverRef.current);
    setCctvAlign(computeAlign(cctvWrapRef, 620));
    setIsCCTVDropdownOpen(true);
  };
  const handleCCTVLeave = () => {
    cctvHoverRef.current = setTimeout(() => setIsCCTVDropdownOpen(false), 150);
  };

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsMobileElectricOpen(false);
    setIsMobileCCTVOpen(false);
  };

  const dropdownBase = "absolute top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl z-[200] overflow-hidden";

  return (
    <>
      <motion.nav
        className="bg-white dark:bg-gray-900 shadow-xl border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 w-full z-[100]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="flex items-center space-x-3 group" data-testid="logo-link">
                <div className="relative">
                  <motion.div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-glow flex items-center justify-center overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <img src={kirpalLogo} alt="Kirpal Securities Logo" className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-gradient tracking-tight">KIRPAL</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400 -mt-1 tracking-wider">SECURITIES</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.div key={item.path} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <Link
                      href={item.path}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${isActive(item.path) ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                      data-testid={`nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      {isActive(item.path) && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" layoutId="navbar-indicator" />}
                    </Link>
                  </motion.div>
                ))}

                {/* Electric Fence Dropdown */}
                <motion.div
                  ref={electricWrapRef}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onMouseEnter={handleElectricEnter}
                  onMouseLeave={handleElectricLeave}
                >
                  <Link
                    href="/electric-fence-installation-punjab"
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${isElectricActive ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                    data-testid="nav-electric-fence"
                  >
                    Electric Fence
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isElectricDropdownOpen ? "rotate-180" : ""}`} />
                    {isElectricActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" layoutId="navbar-indicator" />}
                  </Link>

                  <AnimatePresence>
                    {isElectricDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.16 }}
                        className={`${dropdownBase} w-[560px] ${electricAlign === "right" ? "right-0" : "left-0"}`}
                        onMouseEnter={handleElectricEnter}
                        onMouseLeave={handleElectricLeave}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-brand-red/10 to-brand-red/5 border-b border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <Zap size={14} className="text-brand-red" />
                            <span className="text-xs font-bold text-brand-red tracking-widest uppercase">Electric Fence — City Pages</span>
                          </div>
                          <Link
                            href="/electric-fence-installation-punjab"
                            className="flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline"
                            data-testid="dropdown-electric-punjab"
                            onClick={() => setIsElectricDropdownOpen(false)}
                          >
                            All Punjab <ArrowRight size={11} />
                          </Link>
                        </div>

                        {/* 3-column city grid */}
                        <div className="grid grid-cols-3 gap-px p-4 pb-3">
                          {electricFenceCities.map((city) => (
                            <Link
                              key={city.slug}
                              href={city.url}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${location === city.url ? "text-brand-red bg-brand-red/8 font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                              data-testid={`dropdown-electric-${city.slug}`}
                              onClick={() => setIsElectricDropdownOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red/40 flex-shrink-0" />
                              {city.name}
                            </Link>
                          ))}
                        </div>

                        {/* Footer quick links */}
                        <div className="flex items-center gap-0 border-t border-gray-100 dark:border-gray-800">
                          <Link
                            href="/electric-fence-installation-near-me"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsElectricDropdownOpen(false)}
                            data-testid="dropdown-electric-near-me"
                          >
                            <Search size={12} />Electric Fence Near Me
                          </Link>
                          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
                          <Link
                            href="/packages"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsElectricDropdownOpen(false)}
                            data-testid="dropdown-electric-packages"
                          >
                            <Package size={12} />View Packages
                          </Link>
                          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
                          <Link
                            href="/contact"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsElectricDropdownOpen(false)}
                            data-testid="dropdown-electric-contact"
                          >
                            <Phone size={12} />Free Site Survey
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* CCTV Dropdown */}
                <motion.div
                  ref={cctvWrapRef}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  onMouseEnter={handleCCTVEnter}
                  onMouseLeave={handleCCTVLeave}
                >
                  <Link
                    href="/cctv-camera-installation-punjab"
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${isCCTVActive ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                    data-testid="nav-cctv"
                  >
                    CCTV Camera
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isCCTVDropdownOpen ? "rotate-180" : ""}`} />
                    {isCCTVActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" layoutId="navbar-indicator" />}
                  </Link>

                  <AnimatePresence>
                    {isCCTVDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.16 }}
                        className={`${dropdownBase} w-[620px] ${cctvAlign === "right" ? "right-0" : "left-0"}`}
                        onMouseEnter={handleCCTVEnter}
                        onMouseLeave={handleCCTVLeave}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-brand-red/10 to-brand-red/5 border-b border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <Camera size={14} className="text-brand-red" />
                            <span className="text-xs font-bold text-brand-red tracking-widest uppercase">CCTV Camera — City Pages</span>
                          </div>
                          <Link
                            href="/cctv-camera-installation-punjab"
                            className="flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline"
                            data-testid="dropdown-cctv-punjab"
                            onClick={() => setIsCCTVDropdownOpen(false)}
                          >
                            All Punjab <ArrowRight size={11} />
                          </Link>
                        </div>

                        {/* 3-column city grid */}
                        <div className="grid grid-cols-3 gap-px px-4 pt-3 pb-2">
                          {cctvCities.map((city) => (
                            <Link
                              key={city.slug}
                              href={city.url}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${location === city.url ? "text-brand-red bg-brand-red/8 font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                              data-testid={`dropdown-cctv-${city.slug}`}
                              onClick={() => setIsCCTVDropdownOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red/40 flex-shrink-0" />
                              {city.name}
                            </Link>
                          ))}
                        </div>

                        {/* Industry Solutions strip */}
                        <div className="px-4 pb-3 border-t border-gray-100 dark:border-gray-800 pt-2 mt-1">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Industry Solutions</p>
                          <div className="flex flex-wrap gap-1.5">
                            {CCTV_INDUSTRIES.map(({ label, href }) => (
                              <Link
                                key={href}
                                href={href}
                                className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-brand-red/10 hover:text-brand-red transition-colors"
                                onClick={() => setIsCCTVDropdownOpen(false)}
                                data-testid={`dropdown-cctv-industry-${href.replace(/\//g, "-")}`}
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Footer quick links */}
                        <div className="flex items-center gap-0 border-t border-gray-100 dark:border-gray-800">
                          <Link
                            href="/cctv-installation-near-me"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsCCTVDropdownOpen(false)}
                            data-testid="dropdown-cctv-near-me"
                          >
                            <Search size={12} />CCTV Near Me
                          </Link>
                          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
                          <Link
                            href="/packages"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsCCTVDropdownOpen(false)}
                            data-testid="dropdown-cctv-packages"
                          >
                            <Package size={12} />View Packages
                          </Link>
                          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
                          <Link
                            href="/contact"
                            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                            onClick={() => setIsCCTVDropdownOpen(false)}
                            data-testid="dropdown-cctv-contact"
                          >
                            <Phone size={12} />Free Site Survey
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Mobile: Call + Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <motion.a
                href="tel:7009154711"
                className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg bg-gradient-primary text-white text-sm font-bold shadow-md active:scale-95 transition-transform"
                data-testid="mobile-nav-call-button"
                whileTap={{ scale: 0.95 }}
                aria-label="Call Kirpal Securities"
              >
                <Phone size={16} />Call
              </motion.a>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 min-w-[44px] min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                data-testid="mobile-menu-toggle"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {navItems.map((item, index) => (
                  <motion.div key={item.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <Link
                      href={item.path}
                      className={`block px-6 py-4 min-h-[44px] text-lg font-semibold rounded-lg transition-colors flex items-center ${isActive(item.path) ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Electric Fence - Mobile */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: navItems.length * 0.1 }}>
                  <button
                    onClick={() => setIsMobileElectricOpen(!isMobileElectricOpen)}
                    className={`w-full flex items-center justify-between px-6 py-4 min-h-[44px] text-lg font-semibold rounded-lg transition-colors ${isElectricActive ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                    data-testid="mobile-nav-electric-fence"
                  >
                    Electric Fence
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileElectricOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileElectricOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-y-auto max-h-72 ml-4 mt-1 border-l-2 border-brand-red/30 pl-2"
                      >
                        <Link href="/electric-fence-installation-punjab" className="flex items-center px-4 py-3 text-base font-bold text-brand-red hover:bg-brand-red/5 rounded-lg transition-colors" data-testid="mobile-dropdown-electric-punjab" onClick={closeAll}>All Punjab — Electric Fence</Link>
                        <Link href="/electric-fence-installation-near-me" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-colors" data-testid="mobile-dropdown-electric-near-me" onClick={closeAll}>Electric Fence Near Me</Link>
                        {electricFenceCities.map((city) => (
                          <Link key={city.slug} href={city.url} className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${location === city.url ? "text-brand-red bg-brand-red/5" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`} data-testid={`mobile-dropdown-electric-${city.slug}`} onClick={closeAll}>
                            {city.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* CCTV - Mobile */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}>
                  <button
                    onClick={() => setIsMobileCCTVOpen(!isMobileCCTVOpen)}
                    className={`w-full flex items-center justify-between px-6 py-4 min-h-[44px] text-lg font-semibold rounded-lg transition-colors ${isCCTVActive ? "text-white bg-gradient-primary shadow-glow" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`}
                    data-testid="mobile-nav-cctv"
                  >
                    CCTV Camera
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileCCTVOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileCCTVOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-y-auto max-h-72 ml-4 mt-1 border-l-2 border-brand-red/30 pl-2"
                      >
                        <Link href="/cctv-camera-installation-punjab" className="flex items-center px-4 py-3 text-base font-bold text-brand-red hover:bg-brand-red/5 rounded-lg transition-colors" data-testid="mobile-dropdown-cctv-punjab" onClick={closeAll}>All Punjab — CCTV</Link>
                        <Link href="/cctv-installation-near-me" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-colors" data-testid="mobile-dropdown-cctv-near-me" onClick={closeAll}>CCTV Installation Near Me</Link>
                        <p className="px-4 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry Solutions</p>
                        {CCTV_INDUSTRIES.map(({ label, href }) => (
                          <Link key={href} href={href} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-colors" data-testid={`mobile-dropdown-cctv-industry-${href.replace(/\//g, "-")}`} onClick={closeAll}>
                            {label}
                          </Link>
                        ))}
                        <p className="px-4 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">City Pages</p>
                        {cctvCities.map((city) => (
                          <Link key={city.slug} href={city.url} className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${location === city.url ? "text-brand-red bg-brand-red/5" : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"}`} data-testid={`mobile-dropdown-cctv-${city.slug}`} onClick={closeAll}>
                            {city.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
