import React from 'react';
import type { Trend } from '@/types';
import '../styles/components.scss';

/**
 * Card 컴포넌트
 * - trend 객체 전체를 prop으로 전달받음
 * - variant, showDescription 옵션으로 커스터마이징 가능
 */
interface CardProps {
  trend: Trend;
  variant?: 'default' | 'featured' | 'compact';
  showDescription?: boolean;
  onClick?: () => void;
  onDelete?: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
  trend,
  onClick,
  onDelete,
  variant = 'default',
  showDescription = true,
}) => {
  const variantClass =
    variant === 'featured'
      ? 'featured'
      : variant === 'compact'
        ? 'compact'
        : '';

  return (
    <div
      className={`card ${variantClass}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* 상단: 아이콘 + 카테고리 */}
      <div className="card-header">
        <div className="card-icon-section">
          {trend.icon && <span className="card-icon">{trend.icon}</span>}
          <span className="category-badge">{trend.category}</span>
        </div>

        {/* 삭제 버튼 */}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(trend.id);
            }}
            className="card-delete-btn"
            aria-label="Delete"
          >
            ✕
          </button>
        )}
      </div>

      {/* 제목 */}
      <h3 className="card-title">{trend.title}</h3>

      {/* 설명 */}
      {showDescription && trend.description && (
        <p className="card-description">{trend.description}</p>
      )}

      {/* 푸터: 그래디언트 바 */}
      <div className={`gradient-bar bg-gradient-to-r ${trend.color}`} />
    </div>
  );
};
