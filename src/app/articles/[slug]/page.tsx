import Container from '@/components/shared/Container';
import { articles } from '@/Data/articles';
import 'github-markdown-css/github-markdown.css';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

type Params = {
  slug: string;
};

const ArticlePage: FC<{ params: Params }> = ({ params }) => {
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);
  if (!article) return null;
  return (
    <main className='min-h-screen bg-neutral-100 py-8 dark:bg-[#191919]'>
      <Container>
        <div data-aos='fade-in' className='markdown-body'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag='div'
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </Container>
    </main>
  );
};

export default ArticlePage;

export async function generateStaticParams() {
  const slugs = articles.map((article) => article.slug);
  return slugs.map((slug) => ({
    id: slug,
  }));
}
