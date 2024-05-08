import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Projects from '@/components/projects/Projects';
import TechStack from '@/components/techstack/TechStack';

export default function Home() {
  return (
    <main>
      <Banner />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
