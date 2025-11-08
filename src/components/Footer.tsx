import React from 'react';
import type { FooterProps } from '../types';
import '../styles/components.scss';

export const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  companyName = 'TRENDNARC Inc.',
  links = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact Us', href: '#contact' },
  ],
}) => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="footer-container">
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with React, TypeScript, Tailwind CSS & SCSS
          </p>
        </div>
      </div>
    </footer>
  );
};
