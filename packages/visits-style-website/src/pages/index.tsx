import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../layout';

// @ts-ignore
import { Hero, Button } from '@components';

export default function LandingPage(props: any) {
  return (
    <Layout current={props['*']}>
      <Helmet>
        <title>visits-style</title>
        <meta name="description" content="visits-style" />
      </Helmet>
      <Hero center>
        <h1>VISITS-STYLE</h1>
        <p>
          <Link to="/core">
            <Button color="primary" outline>GET STARTED</Button>
          </Link>
          <a href="https://github.com/visits-works/visits-style" target="_blank">
            <Button color="primary" outline>GITHUB</Button>
          </a>
        </p>
      </Hero>
    </Layout>
  );
}
