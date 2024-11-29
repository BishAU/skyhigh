import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicNavbar } from '../PublicNavbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-purple-950">
      <PublicNavbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
