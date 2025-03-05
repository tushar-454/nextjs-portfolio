import { Container } from '@/components/shared/Container';
import { PageHead } from '@/components/shared/PageHead';
import { TechSkills } from '@/components/techstack/TechSkills';

const page = () => {
  return (
    <main className='bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <PageHead
          title='Tech Stack'
          description=' Technologies I’ve been working with recently'
        />
        <TechSkills />
      </Container>
    </main>
  );
};

export default page;
