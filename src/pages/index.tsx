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
      <Home />
      <Footer />
    </>
  );
};

export default App;
