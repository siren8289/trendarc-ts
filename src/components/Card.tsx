import React from "react";
import type { CardProps } from "../types";
import "../styles/components.scss";

/**
 * Card 컴포넌트
 * - 트렌드 데이터를 카드 형식으로 표시
 * - variant, showDescription 옵션으로 커스터마이징 가능
 * - onClick, onDelete 이벤트 핸들러 지원
 */
export const Card: React.FC<CardProps> = ({
  id,
  title,
  category,
  description,
  icon,
  color = "from-blue-500 to-blue-600",
  onClick,
  onDelete,
  variant = "default",
  showDescription = true,
}) => {
  // Variant별 클래스
  const variantClass =
    variant === "featured"
      ? "featured"
      : variant === "compact"
      ? "compact"
      : "";

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
          {icon && <span className="card-icon">{icon}</span>}
          <span className="category-badge">{category}</span>
        </div>

        {/* 삭제 버튼 */}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="card-delete-btn"
            aria-label="Delete"
          >
            ✕
          </button>
        )}
      </div>

      {/* 중간: 제목 */}
      <h3 className="card-title">{title}</h3>

      {/* 하단: 설명 */}
      {showDescription && description && (
        <p className="card-description">{description}</p>
      )}

      {/* 푸터: 그래디언트 바 */}
      <div className={`gradient-bar bg-gradient-to-r ${color}`} />
    </div>
  );
};
