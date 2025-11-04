import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { LayoutProps } from "../types";

/**
 * Layout 컴포넌트
 * - Header, 메인 콘텐츠, Footer를 감싸는 래퍼
 * - 모든 페이지의 공통 레이아웃 제공
 * - Flexbox를 사용하여 Footer가 항상 하단에 위치
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header 영역 */}
      {showHeader && <Header />}

      {/* 메인 콘텐츠 영역 (flex-1로 남은 공간 자동 확장) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer 영역 */}
      {showFooter && <Footer />}
    </div>
  );
};
