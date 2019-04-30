import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

import './Page.scss';

const Page = ({ children, title, description, backButton }) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name="description" value={description} />
    </Head>
    <section className="container">
      <nav>
        {backButton && <span className="nav__back-btn" onClick={() => Router.back()}>&#x2b05;</span>}
        <Link href="/">
          <a>
            <span className="nav__title">HaCKeR NeXT</span>
          </a>
        </Link>
      </nav>
      {children}
    </section>
  </main>
);

export default Page;