// ============================================
// React 기본 타입 정의
// ============================================

import React from "react";

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
// Trend (트렌드) 데이터 타입 ✅ 새로 추가
// ============================================

export interface Trend {
  id: number;
  title: string;
  category: string;
  description: string;
  icon?: string;
  color?: string;
  views?: number;
  createdAt?: string;
}

// ============================================
// Card 컴포넌트 Props 타입 ✅ 새로 추가
// ============================================

export interface CardProps {
  // 트렌드 데이터
  id: number;
  title: string;
  category: string;
  description?: string;
  icon?: string;
  color?: string;

  // 이벤트 핸들러 (선택)
  onClick?: () => void;
  onDelete?: (id: number) => void;

  // UI 옵션 (선택)
  variant?: "default" | "featured" | "compact";
  showDescription?: boolean;
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
