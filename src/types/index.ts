import React from "react";

export interface WithChildren {
  children?: React.ReactNode;
}

export interface LayoutProps extends WithChildren {
  showHeader?: boolean;
  showFooter?: boolean;
}

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  logoUrl?: string;
}

export interface FooterProps {
  year?: number;
  companyName?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export interface Trend {
  id: number;
  title: string;
  category: string;
  description: string;
  icon?: string;
  color?: string;
  views?: number;
}

export interface CardProps {
  id: number;
  title: string;
  category: string;
  description?: string;
  icon?: string;
  color?: string;
  onClick?: () => void;
  onDelete?: (id: number) => void;
  variant?: "default" | "featured" | "compact";
  showDescription?: boolean;
}

// ✅ 검색 상태 타입 추가
export interface SearchState {
  query: string;
  category: string;
  sortBy: "relevance" | "views" | "newest";
}

export interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  placeholder?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}

export interface Trend {
  id: number; // ✅ JSON에서 number면 number로 통일
  title: string;
  description: string;
  date: string;
  likes: number;
  views?: number;
  category: string;
  tags: string[]; // ✅ trend.tags.includes() 사용하므로 string[]
  icon?: string;
  color?: string;
  image?: string;
}
