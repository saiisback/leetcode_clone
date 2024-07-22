import React from 'react';

type navbarProps = {
    
};

const navbar:React.FC<navbarProps> = () => {
    
    return (
        <header className="header">
          <a className="logo">CODE<span>CRAFT</span></a>
          <i className='bx bx-menu-alt-right' id="menu-icon"></i>
          <nav className="navbar">
            <a className="active">Home</a>
            <a>Problems</a>
            <a>Leaderboard</a>
            <a>Log in</a>
          </nav>
        </header>
      );
}
export default navbar;