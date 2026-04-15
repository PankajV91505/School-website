import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { leadershipMessages } from '../../data/schoolData';

export default function PrincipalMessage() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Leadership"
          title="Messages from the Desk"
          subtitle="A warm welcome to all parents and students who wish to be part of the Prince Public School family."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {leadershipMessages.map((leader, i) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-card border border-primary-100"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Quote size={20} className="text-white" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image placeholder */}
                <div className="flex-shrink-0 pt-2">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-white/30">{leader.role[0]}</span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-900 mb-4">{leader.title}</h3>
                  {leader.message.map((para, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed text-sm md:text-base italic mb-4 last:mb-6">
                      "{para}"
                    </p>
                  ))}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-0.5 bg-accent-400 rounded-full" />
                    <div>
                      <p className="font-heading font-semibold text-primary-800">
                        {leader.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400">{leader.role}, Prince Public School</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
