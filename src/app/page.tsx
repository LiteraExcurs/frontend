import Image from 'next/image'
import styles from './page.module.scss'
import { MainArticle } from '@/components/main-article/main-article'
import { Showcase } from '@/components/showcase/showcase'
import { Guides } from '@/components/guides/guides'

export default function Home() {
  return (
    <>
      <MainArticle />
      <Showcase />
      <Guides />
    </>
  )
}
