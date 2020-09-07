// import News from "../components/News";
// import Layout from "../components/Layout";
import PrismicConfig from "../prismic-configuration";
import Prismic from "prismic-javascript";
import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, this is a sample site</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}










// Homepage
// TODO: Add preloader on this page
// TODO: Glitch effect with countdown

// const Index = props => (
//   <Layout>
//     <h1>Top Notices</h1>
//     <div>
//       <News news={props.news} />
//     </div>
//     <style jsx>
//       {`
//         h1 {
//           text-decoration: underline;
//         }
//       `}
//     </style>
//   </Layout>
// );

// Index.getInitialProps = async function(context) {
//   let api = await Prismic.api(PrismicConfig.apiEndpoint);
//   let response = await api.query(
//     Prismic.Predicates.at("document.type", "news"),
//     { orderings: "[news.sequence desc]" }
//   );
//   if (response) {
//     return { news: response.results };
//   } else return {};
// };

// export default Index;

