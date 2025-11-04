import React from "react";
import type { FooterProps } from "../types";

/**
 * Footer 컴포넌트
 * - 페이지의 최하단에 위치
 * - 저작권 정보, 링크 포함
 * - 모든 페이지에서 공통으로 사용
 */
export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  companyName = "TRENDNARC Inc.",
  links = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact Us", href: "#contact" },
  ],
}) => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 상단: 링크 */}
        <div className="flex justify-center gap-6 mb-6 border-b border-gray-700 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 하단: 저작권 */}
        <div className="text-center text-sm">
          <p>
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
