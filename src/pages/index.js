import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';


//Amplify Auth
import { Amplify } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../amplifyconfiguration.json';
import { signOut } from 'aws-amplify/auth';


// Configure o Amplify
Amplify.configure(awsExports);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mobile/mobileSidebar">
            Comece por aqui
          </Link>
          
        </div>
      </div>
    </header>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Seja bem-vindo`}
      description="Portal de Documentações e Relatórios Mobyan Docs<head/>">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

// Envolve o componente Home com o withAuthenticator
// export default withAuthenticator(Home, {
//   variation:'modal',
//   loginMechanism: ['email','username'],
//   signUpAttributes: ['email']
// });
export default Home;
