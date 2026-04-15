import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { whyChooseUs } from '../../data/schoolData';

const iconMap = {
  GraduationCap,
  Users,
  BookOpen,
  Trophy,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/30 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Why Us"
          title="Why Choose Prince Public School"
          subtitle="We create an environment where academic excellence meets character building, preparing students for a successful future."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                className="group bg-white rounded-2xl p-7 shadow-card card-hover border border-surface-100 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-500">
                    <Icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-slate-800 group-hover:text-white mb-3 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
