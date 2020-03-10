import React from 'react';
import Header from './global/Header';
import Footer from './global/Footer';
import { HEADER_HEIGHT } from './constants/theme';
import { css } from 'emotion';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const mainStyles = css({
  marginTop: HEADER_HEIGHT,
});

export default function App() {
  return (<Router>
    <Header/>
    <div className={mainStyles}>
      <Routes />
    </div>
    <Footer/>
  </Router>);
}
