import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { schoolInfo, footerLinks } from '../../data/schoolData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Main Footer */}
      <div className="relative section-padding-sm">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* School Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">{schoolInfo.name}</h3>
                  <p className="text-xs text-primary-300 tracking-wider">Since {schoolInfo.established}</p>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Nurturing young minds with quality education, moral values, and holistic
                development since 1998 in Simari, Madhubani.
              </p>
              <div className="flex gap-3">
                {['facebook', 'instagram', 'youtube', 'twitter'].map((platform) => (
                  <a
                    key={platform}
                    href={schoolInfo.social[platform]}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={platform}
                  >
                    <span className="text-xs font-bold uppercase">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-5 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-5 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-accent-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {schoolInfo.address.full}
                    <br />PIN: {schoolInfo.address.pinCode}
                  </p>
                </div>
                <a href={`tel:${schoolInfo.contact.phoneRaw}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  <Phone size={16} className="text-accent-400" />
                  {schoolInfo.contact.phone}
                </a>
                <a href={`mailto:${schoolInfo.contact.email}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  <Mail size={16} className="text-accent-400" />
                  {schoolInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {schoolInfo.name}, Simari. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Crafted with <Heart size={12} className="text-red-500 fill-red-500" /> for Excellence in Education
          </p>
        </div>
      </div>
    </footer>
  );
}
