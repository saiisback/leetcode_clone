import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import 'boxicons/css/boxicons.min.css';



const Footer = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
        <li><Link href="/problems" legacyBehavior><a>Problems</a></Link></li>
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
      <Footer />
    </>
  );
};

export default App;
