import { Container } from '../shared/Container';
import { SectionHead } from '../shared/SectionHead';
import { ArticleCards } from './ArticleCards';

const Articles = () => {
  return (
    <section className='bg-neutral-100 pb-16 pt-40 dark:bg-[#191919]'>
      <Container>
        <div>
          <SectionHead
            title='Articles'
            description='Here is my latest articles'
          />
        </div>
        <ArticleCards />
      </Container>
    </section>
  );
};

export { Articles };
