import React from 'react';
import HomeNavbar from './HomeNavbar';
import CookieConsent from 'react-cookie-consent';

const HomeLayout = ({ children }) => {
  return (
    <>
      <HomeNavbar />
      <main
        style={{
          // border: '2px solid red',
          height: '91.6vh',
        }}
      >
        {children}
      </main>
      <CookieConsent debug={true}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
};

export default HomeLayout;
