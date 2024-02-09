import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Литературная Москва - клуб любителей литературы и путешествий',
  description: 'Проект «Литературная Москва». Клуб любителей литературы и путешествий. Авторские литературные экскурсии',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className='body'>
        <div id="modals"></div>
        <Header />
        <main className='main'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
