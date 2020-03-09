import React from 'react';
import Home from './home';
import Header from './global/Header';
import Footer from './global/Footer';
import { HEADER_HEIGHT } from './constants/theme';
import { css } from 'emotion';

const mainStyles = css({
  marginTop: HEADER_HEIGHT,
});

export default function App() {
  return (<div>
    <Header/>
    <div className={mainStyles}>
      <Home/>
    </div>
    <Footer/>
  </div>);
}
