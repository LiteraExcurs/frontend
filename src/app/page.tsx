import Image from 'next/image'
import styles from './page.module.scss'
import { MainArticle } from '@/components/main-article/index'
import { Showcase } from '@/components/showcase/index'
import { Guides } from '@/components/guides/index'

export default function Home() {
  return (
    <>
      <MainArticle />
      <Showcase />
      <Guides />
    </>
  )
}
