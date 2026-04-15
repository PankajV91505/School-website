import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { galleryImages } from '../../data/schoolData';

// Placeholder colors for gallery items (since we're using placeholders)
const placeholderColors = [
  'from-blue-400 to-blue-600',
  'from-emerald-400 to-emerald-600',
  'from-violet-400 to-violet-600',
  'from-orange-400 to-orange-600',
  'from-pink-400 to-pink-600',
  'from-cyan-400 to-cyan-600',
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Gallery"
          title="Life at Prince Public School"
          subtitle="Glimpses of our vibrant school life — from classroom learning to celebrations and sports."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.slice(0, 6).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto min-h-[200px] md:min-h-[400px]' 
                : 'aspect-square'
              }`}
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera size={index === 0 ? 48 : 32} className="text-white/30" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-heading font-semibold text-sm">
                  {image.title}
                </p>
                <span className="text-white/60 text-xs capitalize">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/gallery" className="btn-primary group">
            View Full Gallery
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
