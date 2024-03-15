'use client';

import { Suspense } from 'react';
import { MainArticle } from '@/components/main-article';
import { Showcase } from '@/components/showcase';
import { Guides } from '@/components/guides';
import { Placeholder } from '@/components/placeholder/placeholder';
import { Provider } from 'react-redux';
import { store } from '@/services/store';

export default function Home() {
  return (
    <>
      {/* <Provider store={store}> */}
      <MainArticle />
      <Suspense fallback={<Placeholder />}>
        <Showcase />
      </Suspense>
      <Guides />
      {/* </Provider> */}
    </>
  );
}
