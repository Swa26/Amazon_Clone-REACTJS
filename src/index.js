import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from "./assets/amazonLogo.png";
import banner1 from './assets/amazonAddBanner1.jpg';
import banner2 from './assets/amazonAddBanner2.jpg';
import banner3 from './assets/amazonAddBanner3.jpg';
import banner4 from './assets/amazonAddBanner4.jpg';
import banner5 from './assets/Amazon BannerLatest.jpg';
import banner6 from './assets/AmazonBanner2.jpg';
import banner7 from './assets/AmazonBanner3.jpg';
import banner8 from './assets/AmazonBanner4.jpg';
import banner9 from './assets/AmazonBanner5.jpg';
import banner from './assets/amazonBanner.jpg';
import bharatflag from './assets/BharatFlag.jpg';
import logoblack from './assets/amazonLogoBlack.png';
import logofooter from './assets/amazonLogoFooter.png';
import emptycart from './assets/emptyCart.png';
import orderplaced from './assets/orderPlaced.png';
import test from './assets/testing.png';
import "slick-carousel/slick/slick.css";
import { store } from './Redux/store';
import { Provider } from 'react-redux';

export {
  logo, banner, banner1, banner2, banner3, banner4, logoblack, logofooter, orderplaced, test, emptycart, banner5, banner6, banner7, banner8, banner9, bharatflag
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

