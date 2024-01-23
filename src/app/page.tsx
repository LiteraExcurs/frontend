'use client'
import { MainArticle } from '@/components/main-article';
import { Showcase } from '@/components/showcase';
import { Guides } from '@/components/guides';
import { Provider } from 'react-redux';
import { store } from '@/services/store';

export default function Home() {
  return (
    <>
    {/* <Provider store={store}> */}
        <MainArticle />
        <Showcase />
        <Guides />
      {/* </Provider> */}
    </>
  );
};
