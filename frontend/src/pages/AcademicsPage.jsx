import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, FlaskConical, Laptop, BookOpen, Dumbbell, Music, ChevronRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { academicPrograms, facilities } from '../data/schoolData';

const facilityIcons = { Monitor, FlaskConical, Laptop, BookOpen, Dumbbell, Music };

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white/80 mb-4">Academics</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Academics & Facilities
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A comprehensive curriculum combined with world-class facilities for holistic student development.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 47 720 53.3C840 60 960 68 1080 68C1200 68 1320 60 1380 56L1440 52V80H0Z" fill="#F8FAFC" /></svg>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section-padding bg-surface-50">
        <div className="container-custom">
          <SectionHeading badge="Curriculum" title="Our Academic Programs" subtitle="Structured learning pathways from nursery to secondary, designed for academic excellence." />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {academicPrograms.map((program, i) => (
              <button
                key={program.level}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-primary-50 border border-surface-200'
                }`}
              >
                {program.level}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-card border border-surface-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <BookOpen size={24} className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-800">
                  {academicPrograms[activeTab].level}
                </h3>
                <p className="text-sm text-slate-400">{academicPrograms[activeTab].classes}</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              {academicPrograms[activeTab].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {academicPrograms[activeTab].highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-slate-700">
                  <ChevronRight size={14} className="text-accent-500 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Infrastructure" title="Our Facilities" subtitle="Modern infrastructure designed to provide the best learning experience." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilities.map((f, i) => {
              const Icon = facilityIcons[f.icon];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group bg-surface-50 rounded-2xl p-7 border border-surface-100 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-gradient-primary flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
