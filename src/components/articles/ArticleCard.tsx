import { TArticle } from '@/Data/articles';

type ArticleCardProps = {
  article: TArticle;
  number: number;
};

const ArticleCard = ({ article, number }: ArticleCardProps) => {
  return (
    <div
      data-aos='fade-down'
      className='group relative rounded-lg bg-white p-5 shadow-md dark:bg-[#333]'
    >
      <span className='absolute -left-3 -top-3 grid size-10 place-content-center  rounded-full border-4 border-neutral-100 bg-slate-200 text-lg text-black transition group-hover:scale-125 dark:border-[#191919] dark:bg-slate-800 dark:text-slate-200'>
        {number}
      </span>
      <div className='flex items-start justify-between gap-10'>
        <div>
          <h3 className='text-[1.4rem] font-semibold text-slate-900 dark:text-slate-300'>
            {article.title}
          </h3>
          <span className='mt-3 inline-block rounded bg-green-600 px-2 py-1 text-white dark:bg-green-900'>
            {article.category}
          </span>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-external-link cursor-pointer text-slate-900 transition hover:rotate-[360deg] dark:text-slate-300'
          >
            <path d='M15 3h6v6' />
            <path d='M10 14 21 3' />
            <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { ArticleCard };
