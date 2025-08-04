import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
