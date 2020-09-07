import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>First Project</title>
      </Head>
      <h1>First Project</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}