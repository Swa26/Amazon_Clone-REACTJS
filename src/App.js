import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from './components/Header/Header';
import FooterMain from './components/Footer/Footer.js';
import Home from './pages/Home';
import { productsData } from './api/api';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <FooterMain />
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(

      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Route>

      ))
      return (
      <div className="font-bodyFont bg-gray-100">
        <RouterProvider router={router}></RouterProvider>
      </div>
      );
}

      export default App;
