import { motion } from 'framer-motion';
import { Bell, Calendar, AlertCircle, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { notices } from '../../data/schoolData';

const categoryColors = {
  admission: 'bg-green-100 text-green-700',
  event: 'bg-blue-100 text-blue-700',
  general: 'bg-slate-100 text-slate-700',
  holiday: 'bg-orange-100 text-orange-700',
  exam: 'bg-purple-100 text-purple-700',
};

export default function NoticeBoard() {
  return (
    <section className="section-padding bg-surface-50 relative">
      <div className="container-custom">
        <SectionHeading
          badge="Updates"
          title="Latest Notices & News"
          subtitle="Stay updated with the latest announcements, events, and important information from Prince Public School."
        />

        {/* Notice ticker marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 bg-gradient-primary rounded-2xl p-4 overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1.5 flex-shrink-0">
              <Bell size={14} className="text-accent-300" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Latest</span>
            </div>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap flex gap-16">
                {[...notices, ...notices].map((notice, i) => (
                  <span key={i} className="text-sm text-white/90 inline-flex items-center gap-2">
                    {notice.isImportant && <AlertCircle size={13} className="text-accent-300" />}
                    {notice.title}
                    <span className="text-white/40">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notice cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.slice(0, 6).map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-card card-hover border border-surface-100 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`badge text-[10px] ${categoryColors[notice.category]}`}>
                  {notice.category}
                </span>
                {notice.isImportant && (
                  <span className="badge badge-accent text-[10px]">Important</span>
                )}
              </div>
              <h4 className="font-heading font-semibold text-slate-800 group-hover:text-primary-600 transition-colors mb-2 leading-snug">
                {notice.title}
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar size={12} />
                  {notice.date}
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
