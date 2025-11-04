// ============================================
// React 기본 타입 정의
// ============================================

import React from "react";

// 자식 요소를 받는 컴포넌트용 타입
export interface WithChildren {
  children?: React.ReactNode;
}

// ============================================
// Layout 관련 타입
// ============================================

export interface LayoutProps extends WithChildren {
  showHeader?: boolean;
  showFooter?: boolean;
}

// ============================================
// Header 관련 타입
// ============================================

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  logoUrl?: string;
}

// ============================================
// Footer 관련 타입
// ============================================

export interface FooterProps {
  year?: number;
  companyName?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

// ============================================
// Button 관련 타입
// ============================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

// ============================================
// User 데이터 타입 (예시)
// ============================================

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}
