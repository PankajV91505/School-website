import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/schoolData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary-600/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Testimonials"
          title="What Parents Say About Us"
          subtitle="Hear from the parents and alumni who have experienced the Prince Public School journey."
          light
        />

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass-card-dark p-8 md:p-10 text-center border border-white/10"
            >
              {/* Stars  */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent-400 fill-accent-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base md:text-lg leading-relaxed italic mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-primary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">
                    {testimonials[currentIndex].name[0]}
                  </span>
                </div>
                <p className="font-heading font-semibold text-white text-base">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-white/50 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-accent-400 w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
