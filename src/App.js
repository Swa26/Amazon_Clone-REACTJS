import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import FooterMain from './components/Footer/Footer.js';
import Home from './pages/Home';
import { productsData } from './api/api';
import Cart from './pages/Cart';
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterMain />
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={productsData}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>

  ))
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
