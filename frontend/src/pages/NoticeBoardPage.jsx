import { motion } from 'framer-motion';
import { Bell, Calendar, AlertCircle, ChevronRight, Download } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { notices } from '../data/schoolData';

const categoryColors = {
  admission: 'bg-green-100 text-green-700',
  event: 'bg-blue-100 text-blue-700',
  general: 'bg-slate-100 text-slate-700',
  holiday: 'bg-orange-100 text-orange-700',
  exam: 'bg-purple-100 text-purple-700',
};

export default function NoticeBoardPage() {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge bg-white/10 text-white/80 mb-4 inline-flex items-center gap-2">
              <Bell size={16} /> Updates & Alerts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Notice Board</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Stay updated with the latest announcements, events, and important information from Prince Public School.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 36C480 32 600 35 720 40C840 45 960 51 1080 51C1200 51 1320 45 1380 42L1440 39V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Main Notice Board Content */}
      <section className="py-16 bg-surface-50 min-h-screen">
        <div className="container-custom">
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Stats or Quick Info */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 sticky top-24">
                <h3 className="font-heading font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  Live Updates
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Check back regularly or subscribe to our newsletter to receive the latest updates directly.
                </p>
                <div className="space-y-3">
                  {Object.keys(categoryColors).map((category) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className={`badge text-[10px] ${categoryColors[category]}`}>
                        {category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {notices.filter(n => n.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notice List */}
            <div className="w-full lg:w-3/4">
              <div className="max-w-4xl mx-auto space-y-4">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-surface-200 hover:border-primary-300 transition-all group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
                  >
                    {/* Date Block */}
                    <div className="flex-shrink-0 bg-primary-50 rounded-xl p-3 text-center sm:w-24 border border-primary-100">
                      <span className="block text-2xl font-bold text-primary-700 leading-none mb-1">
                        {notice.date.split(' ')[1].replace(',', '')}
                      </span>
                      <span className="block text-xs font-semibold text-primary-600 uppercase tracking-widest">
                        {notice.date.split(' ')[0]}
                      </span>
                    </div>

                    {/* Notice Details */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`badge text-[10px] py-0.5 px-2 ${categoryColors[notice.category]}`}>
                          {notice.category}
                        </span>
                        {notice.isImportant && (
                          <span className="badge bg-red-100 text-red-700 border-red-200 text-[10px] py-0.5 px-2 flex items-center gap-1">
                            <AlertCircle size={10} /> Important
                          </span>
                        )}
                        <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto">
                          <Calendar size={12} /> {notice.date.split(',')[1]?.trim() || "2026"}
                        </span>
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
                        {notice.title}
                      </h4>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                      <button className="w-full sm:w-auto px-4 py-2 bg-surface-50 text-primary-600 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 border border-surface-200">
                        <Download size={14} /> View
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Empty State fallback if no notices */}
                {notices.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-2xl border border-surface-100 border-dashed">
                    <Bell size={40} className="text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700">No notices currently published.</h3>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
