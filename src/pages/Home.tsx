import { useState, useEffect } from 'react';
import trendsData from '@/data/trends.json';
import type { Trend } from '@/types';
import SearchBar from '@/components/SearchBar';
import TagFilter from '@/components/TagFilter';
import { Card } from '@/components/Card';

export default function Home() {
  const [trends] = useState<Trend[]>(trendsData);
  const [filteredTrends, setFilteredTrends] = useState<Trend[]>(trendsData);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 검색 및 필터링 로직
  useEffect(() => {
    let result = trends;

    // 태그 필터
    if (selectedTag !== 'all') {
      result = result.filter(
        (trend) => Array.isArray(trend.tags) && trend.tags.includes(selectedTag)
      );
    }

    // 검색 필터
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (trend) =>
          trend.title.toLowerCase().includes(query) ||
          trend.description.toLowerCase().includes(query)
      );
    }

    setFilteredTrends(result);
  }, [selectedTag, searchQuery, trends]);

  return (
    <div
      className="home-container p-6 max-w-7xl mx-auto 
                    bg-gray-50 dark:bg-gray-900 
                    min-h-screen transition-colors"
    >
      <SearchBar onSearch={setSearchQuery} />
      <TagFilter selectedTag={selectedTag} onTagSelect={setSelectedTag} />

      <div
        className="trends-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      gap-6 mt-8"
      >
        {filteredTrends.map((trend) => (
          <Card key={trend.id} trend={trend} />
        ))}
      </div>

      {filteredTrends.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
