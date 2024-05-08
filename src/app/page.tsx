import Banner from '@/components/banner/Banner';
import Projects from '@/components/projects/Projects';
import TechStack from '@/components/techstack/TechStack';

export default function Home() {
  return (
    <main>
      <Banner />
      <TechStack />
      <Projects />
    </main>
  );
}
