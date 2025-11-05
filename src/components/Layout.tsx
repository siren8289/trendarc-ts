import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { LayoutProps } from "../types";
import "../styles/components.scss";

export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div className="layout flex flex-col min-h-screen bg-gray-50">
      {showHeader && <Header />}

      <main className="layout-main flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};
