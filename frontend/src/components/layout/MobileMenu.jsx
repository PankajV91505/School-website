import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { navLinks } from '../../data/schoolData';

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-surface-100">
                <h2 className="font-heading font-bold text-primary-800 text-lg">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-surface-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`flex items-center justify-between px-6 py-4 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary-600 bg-primary-50 border-r-4 border-primary-500'
                          : 'text-slate-700 hover:text-primary-600 hover:bg-surface-50'
                      }`}
                    >
                      {link.name}
                      <ChevronRight size={16} className="text-surface-300" />
                    </Link>
                    {link.children && (
                      <div className="pl-6 bg-surface-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={onClose}
                            className="block px-6 py-3 text-sm text-slate-500 hover:text-primary-600 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-5 border-t border-surface-100">
                <Link
                  to="/admissions"
                  onClick={onClose}
                  className="btn-accent w-full justify-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
