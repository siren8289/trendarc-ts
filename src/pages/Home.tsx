import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import type { Trend } from "../types";
import trendsData from "../data/trends.json";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTrends(trendsData as Trend[]);
      setLoading(false);
    }, 300);
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(trends.map((t) => t.category))),
  ];

  const filteredTrends =
    selectedCategory === "all"
      ? trends
      : trends.filter((t) => t.category === selectedCategory);

  const handleDelete = (id: number) => {
    setTrends(trends.filter((t) => t.id !== id));
  };

  const handleCardClick = (trend: Trend) => {
    console.log("Clicked trend:", trend);
    navigate(`/trends/${trend.id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading trends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl shadow-2xl p-12 sm:p-16 border-t-4 border-blue-400">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            🚀 Discover Trending Topics
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed font-medium">
            Stay updated with the latest trends across technology, business, and
            lifestyle
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-8 sm:px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
              ✨ Explore All
            </button>
            <button className="border-3 border-white text-white px-8 sm:px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 text-lg">
              📚 Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          🎯 Filter by Category
        </h2>
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all duration-300 text-base shadow-md hover:shadow-lg transform ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat === "all" ? "✨ All Trends" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 결과 요약 */}
      <section>
        <p className="text-gray-700 text-base font-semibold">
          📊 Showing{" "}
          <span className="font-black text-blue-600 text-lg">
            {filteredTrends.length}
          </span>{" "}
          trend{filteredTrends.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" && (
            <span>
              {" "}
              in{" "}
              <span className="font-black text-blue-600 text-lg">
                {selectedCategory}
              </span>
            </span>
          )}
        </p>
      </section>

      {/* 카드 그리드 */}
      <section>
        {filteredTrends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.map((trend) => (
              <Card
                key={trend.id}
                id={trend.id}
                title={trend.title}
                category={trend.category}
                description={trend.description}
                icon={trend.icon}
                color={trend.color}
                variant="default"
                showDescription={true}
                onClick={() => handleCardClick(trend)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-md border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-xl mb-6 font-semibold">
              😅 No trends found in this category
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              🔄 View All Trends
            </button>
          </div>
        )}
      </section>

      {/* 통계 섹션 */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 rounded-2xl shadow-xl p-8 sm:p-12 border-t-4 border-blue-500">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10">
          📊 Quick Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-6 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-gray-600 text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
              📈 Total Trends
            </h3>
            <p className="text-5xl sm:text-6xl font-black text-blue-600 mb-2">
              {trends.length}
            </p>
            <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-6 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-gray-600 text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
              🏷️ Categories
            </h3>
            <p className="text-5xl sm:text-6xl font-black text-green-600 mb-2">
              {categories.length - 1}
            </p>
            <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-6 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-gray-600 text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
              👀 Total Views
            </h3>
            <p className="text-4xl sm:text-5xl font-black text-purple-600 mb-2">
              {(
                trends.reduce((sum, t) => sum + (t.views || 0), 0) / 1000
              ).toFixed(1)}
              K
            </p>
            <div className="h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};
