import { useState, useEffect } from 'react';
import type { HeaderProps } from '../types';
import '../styles/components.scss';

export const Header: React.FC<HeaderProps> = ({
  title = 'TRENDARC',
  subtitle = 'Trend Analysis Platform',
  logoUrl,
}) => {
  const [isDark, setIsDark] = useState(false);

  // 초기 다크모드 상태 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // 다크모드 토글
  const toggleDarkMode = () => {
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};
