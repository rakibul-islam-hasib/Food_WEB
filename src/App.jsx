import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/home/Footer';
const App = () => {
  return (
    <div className='relative'>
      <div className={`bg-black z-20 fixed top-0 w-full`}>
        <NavBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;