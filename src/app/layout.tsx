'use client'
import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Provider } from 'react-redux';
import { store } from '@/services/store';

import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="ru">
        <body className='body'>
          <Header />
          <main className='main'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
};
