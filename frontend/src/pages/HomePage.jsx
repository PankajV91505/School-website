import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsCounter from '../components/home/StatsCounter';
import PrincipalMessage from '../components/home/PrincipalMessage';
import NoticeBoard from '../components/home/NoticeBoard';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <WhyChooseUs />
      <StatsCounter />
      <PrincipalMessage />
      <NoticeBoard />
      <GalleryPreview />
      <Testimonials />
    </PageTransition>
  );
}
