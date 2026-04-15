import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart, Lightbulb, Shield, Users, Quote } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { aboutHistory, leadershipMessages } from '../data/schoolData';

const values = [
  { icon: Award, title: 'Academic Excellence', color: 'bg-blue-100 text-blue-600' },
  { icon: Shield, title: 'Integrity & Ethics', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Heart, title: 'Respect & Inclusivity', color: 'bg-pink-100 text-pink-600' },
  { icon: Lightbulb, title: 'Innovation in Learning', color: 'bg-amber-100 text-amber-600' },
  { icon: Users, title: 'Community Engagement', color: 'bg-violet-100 text-violet-600' },
];

const timeline = [
  { year: '1998', title: 'Foundation', desc: 'Prince Public School was founded with a vision to bring quality English-medium education to Simari.' },
  { year: '2005', title: 'Expansion', desc: 'Added new classrooms, computer lab, and expanded to higher secondary education.' },
  { year: '2012', title: 'Modernization', desc: 'Introduced smart classroom technology and digital learning infrastructure.' },
  { year: '2020', title: 'Digital Leap', desc: 'Successfully transitioned to online learning during the pandemic, ensuring uninterrupted education.' },
  { year: '2025', title: '27 Years Strong', desc: 'Celebrating over two decades of excellence with 500+ students and a legacy of success.' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge bg-white/10 text-white/80 mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Our Story & Legacy</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Over 27 years of nurturing young minds and building a community of lifelong learners in Simari, Madhubani.
            </p>
          </motion.div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 47 720 53.3C840 60 960 68 1080 68C1200 68 1320 60 1380 56L1440 52V80H0Z" fill="#F8FAFC" /></svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6 uppercase">
              Welcome to Prince Public School
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              We are focussed on the complete personality development of the students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Commitment */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <SectionHeading badge="Our Purpose" title="Mission, Vision & Commitment" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-card border border-surface-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <Target size={28} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-800 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{aboutHistory.mission}</p>
              </div>
            </motion.div>
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-card border border-surface-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100/50 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Eye size={28} className="text-accent-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-800 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{aboutHistory.vision}</p>
              </div>
            </motion.div>
            {/* Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-card border border-surface-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                  <Shield size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-800 mb-4">Our Commitment</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{aboutHistory.commitment}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container-custom relative">
          <SectionHeading
            badge="Leadership"
            title="Messages from the Desk"
            subtitle="Words of vision and encouragement from our school's leadership."
          />
          <div className="max-w-5xl mx-auto space-y-12">
            {leadershipMessages.map((leader, i) => (
              <motion.div
                key={leader.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-card border border-primary-100"
              >
                <div className="absolute -top-5 left-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 pt-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-heading font-bold text-white/30">{leader.role[0]}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-900 mb-4">{leader.title}</h3>
                    {leader.message.map((para, idx) => (
                      <p key={idx} className="text-slate-700 leading-relaxed text-sm md:text-base mb-4 last:mb-6">
                        {para}
                      </p>
                    ))}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-0.5 bg-accent-400 rounded-full" />
                      <div>
                        <p className="font-heading font-bold text-primary-800">
                          {leader.name}
                        </p>
                        <p className="text-xs font-semibold text-slate-500">{leader.role}, Prince Public School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <SectionHeading badge="Values" title="Our Core Values" subtitle="The principles that guide everything we do at Prince Public School." />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-surface-100"
              >
                <div className={`w-10 h-10 rounded-lg ${v.color} flex items-center justify-center`}>
                  <v.icon size={20} />
                </div>
                <span className="font-heading font-medium text-sm text-slate-700">{v.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Journey" title="Our History & Milestones" subtitle="A journey of 27+ years in shaping the future of education in Simari." />
          <div className="max-w-3xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 md:-translate-x-0.5" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-16 md:pl-0 mb-10 last:mb-0 md:flex ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-5 h-5 rounded-full bg-white border-4 border-primary-500 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-primary-100 rounded-full text-xs font-bold text-primary-700 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-heading font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
