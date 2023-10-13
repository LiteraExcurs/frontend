import Image from 'next/image'
import styles from './page.module.scss'
import { MainArticle } from '@/components/main-article/main-article'

export default function Home() {
  return (
    <main>
      <MainArticle />
    </main>
  )
}
