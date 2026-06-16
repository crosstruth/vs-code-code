interface Props {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

export default function CategoryBar({ categories, active, onSelect }: Props) {
  return (
    <div className="category-bar">
      {categories.map((c) => (
        <button
          key={c}
          className={`cat-btn${c === active ? " active" : ""}`}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
