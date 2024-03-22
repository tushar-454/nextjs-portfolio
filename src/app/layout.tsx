import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tushar Imran || Web Developer',
  description: 'Tushar Imran is a web developer based in Dhaka, Bangladesh.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
