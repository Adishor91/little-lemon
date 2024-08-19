import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/icons_assets/Logo.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default Header;
