import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, ArrowUpRight, Heart, Camera } from 'lucide-react';
import { schoolInfo, footerLinks } from '../../data/schoolData';

// Custom Brand Icons (since lucide-react removed brand icons)
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M21.582 6.186a2.76 2.76 0 0 0-1.928-1.928C17.953 3.75 12 3.75 12 3.75s-5.953 0-7.654.508A2.76 2.76 0 0 0 2.418 6.186C1.91 7.887 1.91 12 1.91 12s0 4.113.508 5.814a2.76 2.76 0 0 0 1.928 1.928C6.047 20.25 12 20.25 12 20.25s5.953 0 7.654-.508a2.76 2.76 0 0 0 1.928-1.928C22.09 16.113 22.09 12 22.09 12s0-4.113-.508-5.814zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
  </svg>
);

const socialIcons = {
  facebook: FacebookIcon,
  instagram: Camera, // Alternative to Instagram since brand icon is missing
  youtube: YoutubeIcon,
  twitter: XIcon
};

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
                {['facebook', 'instagram', 'youtube', 'twitter'].map((platform) => {
                  const Icon = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={schoolInfo.social[platform]}
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={platform}
                    >
                      <Icon size={16} className="text-white/80 group-hover:text-white" />
                    </a>
                  );
                })}
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
