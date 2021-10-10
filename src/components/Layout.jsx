import React from 'react';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          // border: '2px solid red',
          height: '91.6vh',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
