import { motion } from 'framer-motion';

/**
 * Reusable section heading with animated underline and optional badge
 */
export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-widest uppercase mb-4 ${
          light ? 'bg-white/10 text-white/80' : 'bg-primary-100 text-primary-700'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
        light ? 'text-white' : 'gradient-text'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
        <div className={`w-12 h-1 rounded-full ${light ? 'bg-accent-400' : 'bg-primary-500'}`} />
        <div className={`w-3 h-3 rounded-full ${light ? 'bg-accent-400' : 'bg-accent-500'}`} />
        <div className={`w-12 h-1 rounded-full ${light ? 'bg-accent-400' : 'bg-primary-500'}`} />
      </div>
    </motion.div>
  );
}
