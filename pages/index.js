import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import '../static/sass/import.scss';

const Home = () => (
  <div>
    <Head>
      <title>Hisney Land | develope hub page</title>
    </Head>

    {/*<Nav />*/}

    <main className="contents">
      <h1 className='title'>
        Hisney Land
      </h1>
      <p className="description">Hub page</p>
      <canvas id="canvas"></canvas>
    </main>

    <style jsx>{``}</style>
  </div>
)

export default Home
