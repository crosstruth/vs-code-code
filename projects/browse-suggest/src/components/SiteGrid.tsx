import type { Site } from "../types";
import SiteCard from "./SiteCard";

interface Props {
  sites: Site[];
  highlightIdx: number;
}

export default function SiteGrid({ sites, highlightIdx }: Props) {
  if (!sites.length) {
    return <div className="empty">没有找到匹配的结果</div>;
  }

  return (
    <div className="grid">
      {sites.map((s, i) => (
        <SiteCard key={s.name} site={s} highlight={i === highlightIdx} />
      ))}
    </div>
  );
}
