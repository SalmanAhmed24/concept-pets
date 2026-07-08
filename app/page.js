import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import PawTrail from '@/components/PawTrail';
import { Marquee, Services, Process, Testimonials, Cta, Footer } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#services">Skip to content</a>
      <PawTrail />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
