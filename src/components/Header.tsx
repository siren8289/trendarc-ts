import React from "react";
import type { HeaderProps } from "../types";
import "../styles/components.scss";

export const Header: React.FC<HeaderProps> = ({
  title = "TRENDNARC",
  subtitle = "Trend Analysis Platform",
  logoUrl,
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="header-container">
        <div className="logo-section">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="w-10 h-10 rounded-md object-cover"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold m-0">{title}</h1>
            <p className="text-blue-100 text-sm m-0">{subtitle}</p>
          </div>
        </div>

        <nav className="flex gap-4">
          <a
            href="#home"
            className="hover:text-blue-200 transition-colors font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-200 transition-colors font-semibold"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-200 transition-colors font-semibold"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
