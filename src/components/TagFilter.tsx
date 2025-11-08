interface TagFilterProps {
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

export default function TagFilter({
  selectedTag,
  onTagSelect,
}: TagFilterProps) {
  const tags = ["all", "tech", "design", "business", "lifestyle"];

  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag-button ${selectedTag === tag ? "active" : ""}`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
