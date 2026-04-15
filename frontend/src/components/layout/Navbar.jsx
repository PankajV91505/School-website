import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/schoolData';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-hero text-white text-xs md:text-sm py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${schoolInfo.contact.phoneRaw}`} className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Phone size={13} /> {schoolInfo.contact.phone}
            </a>
            <a href={`mailto:${schoolInfo.contact.email}`} className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Mail size={13} /> {schoolInfo.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-200">Admissions Open 2026-27</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
            ? 'nav-glass py-2'
            : 'bg-white/95 backdrop-blur-sm py-3 shadow-sm'
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h1 className="text-lg font-heading font-bold text-primary-900 leading-tight">
                Prince Public School
              </h1>
              <p className="text-[10px] text-surface-400 font-medium tracking-widest uppercase">
                Simari, Madhubani
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${location.pathname === link.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-surface-100 overflow-hidden py-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/admissions" className="hidden md:flex btn-accent text-xs py-2.5 px-5">
              Apply Now
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
