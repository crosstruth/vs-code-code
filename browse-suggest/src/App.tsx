import { useState, useMemo, useCallback } from "react";
import { sites, categories } from "./data";
import CategoryBar from "./components/CategoryBar";
import SiteGrid from "./components/SiteGrid";

function useFilteredSites(activeCat: string, keyword: string) {
  return useMemo(
    () =>
      sites.filter((s) => {
        const matchCat = activeCat === "全部" || s.cat === activeCat;
        const kw = keyword.toLowerCase();
        const matchKey =
          !kw ||
          s.name.toLowerCase().includes(kw) ||
          s.desc.includes(kw) ||
          s.cat.includes(kw);
        return matchCat && matchKey;
      }),
    [activeCat, keyword]
  );
}

export default function App() {
  const [activeCat, setActiveCat] = useState("全部");
  const [keyword, setKeyword] = useState("");
  const [highlightName, setHighlightName] = useState<string | null>(null);

  const filtered = useFilteredSites(activeCat, keyword);

  const highlightIdx = useMemo(
    () => (highlightName ? filtered.findIndex((s) => s.name === highlightName) : -1),
    [filtered, highlightName]
  );

  const randomPick = useCallback(() => {
    if (!filtered.length) return;
    const pick = filtered[Math.floor(Math.random() * filtered.length)]!;
    setHighlightName(pick.name);
  }, [filtered]);

  return (
    <>
      <header>
        <h1>浏览建议</h1>
        <p>发现有趣的网站和工具</p>
      </header>

      <div className="controls">
        <input
          type="text"
          className="search-box"
          placeholder="搜索网站或工具..."
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setHighlightName(null);
          }}
        />
        <button className="btn btn-random" onClick={randomPick}>
          随机推荐
        </button>
      </div>

      <CategoryBar
        categories={categories}
        active={activeCat}
        onSelect={(cat) => {
          setActiveCat(cat);
          setHighlightName(null);
        }}
      />

      <SiteGrid sites={filtered} highlightIdx={highlightIdx} />
    </>
  );
}
