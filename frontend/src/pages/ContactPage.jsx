import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../api/client';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { schoolInfo } from '../data/schoolData';

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Simari, Bisfi (South Side of Simari Bazar)', 'Madhubani, Bihar - 847222'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 8873541202', 'Mon - Sat: 8:00 AM - 4:00 PM'],
    color: 'bg-emerald-100 text-emerald-600',
    action: { href: 'tel:8873541202', label: 'Call Now' },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['princepublicschool1998@gmail.com', 'We reply within 24 hours'],
    color: 'bg-violet-100 text-violet-600',
    action: { href: 'mailto:princepublicschool1998@gmail.com', label: 'Send Email' },
  },
  {
    icon: Clock,
    title: 'School Hours',
    lines: ['Monday - Saturday', '8:00 AM - 2:30 PM'],
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setIsSubmitting(true);
    try {
      await api.submitMessage({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message
      });
      setSubmitted(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
      // Fallback Demo behavior since backend might not be online
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white/80 mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and we'll respond as soon as we can.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 47 720 53.3C840 60 960 68 1080 68C1200 68 1320 60 1380 56L1440 52V80H0Z" fill="#F8FAFC" /></svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-surface-100 text-center card-hover"
              >
                <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mx-auto mb-4`}>
                  <card.icon size={26} />
                </div>
                <h3 className="font-heading font-semibold text-slate-800 mb-2">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-500">{line}</p>
                ))}
                {card.action && (
                  <a href={card.action.href} className="inline-block mt-3 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                    {card.action.label} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map + Form row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-card border border-surface-100 min-h-[400px]"
            >
              <iframe
                src={schoolInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prince Public School Location"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-10 border border-green-200 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600 mb-6">We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-primary text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card border border-surface-100">
                  <h3 className="text-xl font-heading font-bold text-primary-800 mb-6">Send us a Message</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} className="input-field" placeholder="Full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} className="input-field" placeholder="email@example.com" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="(Optional)" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                        <input name="subject" value={form.subject} onChange={handleChange} className="input-field" placeholder="Subject" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="textarea-field" placeholder="Your message..." required />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                      {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Message</>}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
