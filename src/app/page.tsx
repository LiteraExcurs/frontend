import Image from 'next/image'
import styles from './page.module.scss'
import { MainArticle } from '@/components/main-article/main-article'
import { Showcase } from '@/components/showcase/showcase'

export default function Home() {
  return (
    <main className='main'>
      <MainArticle />
      <Showcase />
    </main>
  )
}
