import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} : Home Page</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Mufti</strong>. I'm a software enginer and Leader of Baik Hati Clan</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}