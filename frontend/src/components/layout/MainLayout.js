import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header title="Dashboard" />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;