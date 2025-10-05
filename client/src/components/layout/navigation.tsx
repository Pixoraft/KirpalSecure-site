import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import kirpalLogo from "@assets/image_1759637433269.png";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/packages", label: "Packages" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

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
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/" 
                className="flex items-center space-x-3 group"
                data-testid="logo-link"
              >
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-glow flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={kirpalLogo} 
                      alt="Kirpal Securities Logo" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
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
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-white bg-gradient-primary shadow-glow"
                          : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"
                      }`}
                      data-testid={`nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 min-w-[44px] min-h-[44px] rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                data-testid="mobile-menu-toggle"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
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
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-6 py-4 min-h-[44px] text-lg font-semibold rounded-lg transition-colors flex items-center ${
                        isActive(item.path)
                          ? "text-white bg-gradient-primary shadow-glow"
                          : "text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/5"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
