import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Trend } from "../../../types";
import trendsData from "../../../data/trends.json";

/**
 * 상세 페이지 컴포넌트
 * - URL 파라미터 (:id)로 트렌드 ID를 받음
 * - ID에 해당하는 트렌드 데이터를 찾아 표시
 * - 뒤로가기, 이전/다음 네비게이션 제공
 */
export const TrendDetail: React.FC = () => {
  // Step 1: URL 파라미터 추출
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Step 2: 상태 관리
  const [trend, setTrend] = useState<Trend | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Step 3: 트렌드 데이터 로드
  useEffect(() => {
    try {
      setTimeout(() => {
        const trendId = parseInt(id || "0");
        const foundTrend = (trendsData as Trend[]).find(
          (t) => t.id === trendId
        );

        if (foundTrend) {
          setTrend(foundTrend);
          setError(null);
        } else {
          setError("트렌드를 찾을 수 없습니다");
          setTrend(null);
        }
        setLoading(false);
      }, 300);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setError("데이터를 로드하는 중 오류가 발생했습니다");
      setLoading(false);
    }
  }, [id]);

  // Step 4: 이전/다음 트렌드 찾기
  const allTrends = trendsData as Trend[];
  const currentIndex = allTrends.findIndex((t) => t.id === parseInt(id || "0"));
  const prevTrend = currentIndex > 0 ? allTrends[currentIndex - 1] : null;
  const nextTrend =
    currentIndex < allTrends.length - 1 ? allTrends[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading trend details...</p>
        </div>
      </div>
    );
  }

  if (error || !trend) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 text-center">
          <p className="text-red-700 text-lg font-semibold mb-6">
            ❌ {error || "트렌드를 찾을 수 없습니다"}
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
          >
            🏠 홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2"
      >
        ← 뒤로가기
      </button>

      {/* 상세 페이지 헤더 */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12 mb-8 border-l-6 border-blue-500">
        <div className="flex items-start gap-6">
          {trend.icon && (
            <span className="text-6xl sm:text-8xl">{trend.icon}</span>
          )}
          <div className="flex-1">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {trend.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              {trend.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {trend.description}
            </p>
          </div>
        </div>
      </div>

      {/* 트렌드 정보 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">
            트렌드 ID
          </h3>
          <p className="text-3xl font-black text-blue-600">#{trend.id}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">
            카테고리
          </h3>
          <p className="text-3xl font-black text-green-600">{trend.category}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
          <h3 className="text-gray-600 text-sm font-bold uppercase mb-2">
            조회수
          </h3>
          <p className="text-3xl font-black text-purple-600">
            {trend.views ? (trend.views / 1000).toFixed(1) : "0"}K
          </p>
        </div>
      </div>

      {/* 상세 설명 섹션 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8">
        <h2 className="text-3xl font-black text-gray-900 mb-6">📋 상세 정보</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            {trend.description}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            이 트렌드는 현재 {trend.category} 분야에서 주목받고 있는 주제입니다.
            더 자세한 정보는 홈페이지에서 확인할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-4 justify-between items-center mb-8">
        <button
          onClick={() => prevTrend && navigate(`/trends/${prevTrend.id}`)}
          disabled={!prevTrend}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
            prevTrend
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          ← 이전 트렌드
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-all duration-300"
        >
          🏠 홈으로
        </button>

        <button
          onClick={() => nextTrend && navigate(`/trends/${nextTrend.id}`)}
          disabled={!nextTrend}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
            nextTrend
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          다음 트렌드 →
        </button>
      </div>

      {/* 유사 트렌드 */}
      <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
        <h2 className="text-3xl font-black text-gray-900 mb-6">
          📌 같은 카테고리의 트렌드
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allTrends
            .filter((t) => t.category === trend.category && t.id !== trend.id)
            .slice(0, 2)
            .map((relatedTrend) => (
              <button
                key={relatedTrend.id}
                onClick={() => navigate(`/trends/${relatedTrend.id}`)}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-left hover:scale-105 transform"
              >
                <div className="flex items-start gap-4">
                  {relatedTrend.icon && (
                    <span className="text-4xl">{relatedTrend.icon}</span>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedTrend.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedTrend.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
