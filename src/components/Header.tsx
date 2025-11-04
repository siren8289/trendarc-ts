import React from "react";
import type { HeaderProps } from "../types";

/**
 * Header 컴포넌트
 * - 페이지의 최상단에 위치
 * - 로고, 제목, 네비게이션 포함
 * - 모든 페이지에서 공통으로 사용
 */
export const Header: React.FC<HeaderProps> = ({
  title = "TRENDNARC",
  subtitle = "Trend Analysis Platform",
  logoUrl,
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 및 제목 */}
          <div className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-blue-100 text-sm">{subtitle}</p>
            </div>
          </div>

          {/* 네비게이션 */}
          <nav className="flex gap-4">
            <a
              href="#home"
              className="hover:text-blue-200 transition duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-200 transition duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition duration-200 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
