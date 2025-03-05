import { articles, TArticle } from '@/Data/articles';
import Link from 'next/link';
import { ArticleCard } from './ArticleCard';

const ArticleCards = () => {
  return (
    <div className='my-20 flex w-full flex-wrap gap-6'>
      {articles?.slice(0, 4)?.map((article: TArticle, index: number) => (
        <div
          key={index}
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='grow basis-[25rem]'
        >
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <ArticleCard key={index} number={++index} article={article} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export { ArticleCards };
