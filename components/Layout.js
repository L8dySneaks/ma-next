import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Michaela Assad'
export const siteTitle = 'Michaela Assad / Art Director'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/logo_white.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo_white.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

// import Link from "next/link";
// import Footer from "./Footer";

// export const PageLink = props => (
//   <Link as={`/${props.id}`} href={`/page?id=${props.id}`}>
//     <a>{props.title} Test</a>
//   </Link>
// );

// const Navigation = () => (
//   <div>
//     <Link href="/">
//       <a>Home</a>
//     </Link>
//     <PageLink id="about" title="About" />
//   </div>
// );

// const Header = () => (
//   <div>
//     <h1>Bulletin</h1>
//     <style jsx>{`
//       color: #4b4949;
//       font-size: 1.5em;
//     `}</style>
//   </div>
// );

// const Layout = props => (
//   <div id="layout">
//     <center>
//       <Header />
//       <Navigation />
//     </center>

//     <div id="content">{props.children}</div>
//     <Footer />
//     <style jsx>{`
//       #layout,
//       #content {
//         margin: 20px;
//         padding: 20px;
//         border: 1px solid #ddd;
//       }
//       color: #625f5f;
//     `}</style>
//     <style jsx global>
//       {`
//         a {
//           margin: 10px;
//           color: #0003ff;
//         }
//       `}
//     </style>
//   </div>
// );

// export default Layout;