'use client';
import { MainArticle } from '@/components/main-article';
import { Showcase } from '@/components/showcase';
import { Guides } from '@/components/guides';
import { Provider } from 'react-redux';
import { store } from '@/services/store';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <MainArticle />
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase />
      </Suspense>
      <Guides />
    </>
  );
}
