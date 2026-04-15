import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { galleryImages } from '../data/schoolData';

const categories = ['all', 'events', 'academics', 'sports', 'facilities'];

const placeholderGradients = [
  'from-blue-400 to-indigo-600',
  'from-emerald-400 to-teal-600',
  'from-violet-400 to-purple-600',
  'from-orange-400 to-red-500',
  'from-pink-400 to-rose-600',
  'from-cyan-400 to-blue-600',
  'from-amber-400 to-orange-600',
  'from-lime-400 to-green-600',
  'from-fuchsia-400 to-pink-600',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white/80 mb-4">Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Explore the vibrant life at Prince Public School through our collection of moments.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 47 720 53.3C840 60 960 68 1080 68C1200 68 1320 60 1380 56L1440 52V80H0Z" fill="#F8FAFC" /></svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-heading font-medium capitalize transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-primary-50 border border-surface-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
                >
                  {/* Gradient placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera size={32} className="text-white/30" />
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-heading font-semibold text-sm">{image.title}</p>
                    <span className="text-white/60 text-xs capitalize">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${
                placeholderGradients[(selectedImage.id - 1) % placeholderGradients.length]
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Camera size={64} className="text-white/30 mx-auto mb-4" />
                  <p className="text-white text-xl font-heading font-semibold">{selectedImage.title}</p>
                  <span className="text-white/60 text-sm capitalize">{selectedImage.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
