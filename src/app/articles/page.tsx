import { ArticleCard } from '@/components/articles/ArticleCard';
import { Container } from '@/components/shared/Container';
import { PageHead } from '@/components/shared/PageHead';
import { articles } from '@/Data/articles';
import 'github-markdown-css/github-markdown.css';
import Link from 'next/link';

export default function ArticlesPage() {
  return (
    <main className='min-h-screen bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <PageHead
          title='Articles'
          description='Here is my all technical articles'
        />
        <div className='articlesList flex w-full flex-wrap gap-6 pb-10'>
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className='grow basis-[25rem]'
            >
              <ArticleCard key={index} number={++index} article={article} />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
