import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> Tutorial!
        </h1>

        <div className={styles.grid}>
          <Link href="/">
          <a className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Lorem Ipsum has been the standard dummy text ever!</p>
            </a>
          </Link>

          <Link href="/contact">
          <a className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>when an unknown printer took a galley.</p>
          </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
