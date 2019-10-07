import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';

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

    <style jsx>{`
    .contents {
      height: 100vh;
      background-image: url('/static/images/amusement-park.png');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;}
    .title {
      margin: 0;
      width: 100%;
      padding-top: 30px;
      font-size: 48px;
      text-align: center;
      color: #272e59;
    }
    .description {
      text-align: center;
    }
  `}</style>
  </div>
)

export default Home
