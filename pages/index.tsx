import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hey, wassup guys?</p>
        <p>
          My name is Seytkhan Senior Web developer over than 10 years of
          experience
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <Link target="_blank" href="https://nextjs.org/learn">
            our Next.js tutorial
          </Link>
          .)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
