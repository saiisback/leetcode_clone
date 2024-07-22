import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hello<span> tech enthusiasts</span></h1>
        <h3 className="text-animation">Are you ready for <span></span></h3>
        <p>Welcome! Get your keyboards ready and your algorithms sharp as you show off your coding skills to solve challenges and become pros in the art of problem-solving!</p>
        <div className="social-icons">
          <a href="#"><i className='bx bxl-python'></i></a>
          <a href="#"><i className='bx bxl-javascript'></i></a>
          <a href="#"><i className='bx bxl-java'></i></a>
          <a href="#"><i className='bx bxl-c-plus-plus'></i></a>
        </div>
        <div className="btn-group">
          <button className="btn-38">
            <span className="new">Log in</span>
            <div className="old">
              <span>Log in</span>
              <span aria-hidden>Log in</span>
            </div>
          </button>
        </div>
      </div>
      <div className="home-img">
        <img src="pfp.png" alt="Profile" />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Link href="#home" legacyBehavior><a className="logo">CODE<span>CRAFT</span></a></Link>
      <i className='bx bx-menu-alt-right' id="menu-icon"></i>
      <nav className="navbar">
        <Link href="/" legacyBehavior><a className="active">Home</a></Link>
        <Link href="/problems" legacyBehavior><a>Problems</a></Link>
        <Link href="/leaderboard" legacyBehavior><a>Leaderboard</a></Link>
        <Link href="/login" legacyBehavior><a>Log in</a></Link>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
        <li><Link href="/problems.tsx" legacyBehavior><a>Problems</a></Link></li>
        <li><Link href="/leaderboard" legacyBehavior><a>Leaderboard</a></Link></li>
        <li><Link href="/login" legacyBehavior><a>Log In</a></Link></li>
      </ul>
      <p className="copyright">
        © CODE CRAFT | © Ketha sai karthik | All rights reserved 
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Head>
        <title>CODE CRAFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="logo.png" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
