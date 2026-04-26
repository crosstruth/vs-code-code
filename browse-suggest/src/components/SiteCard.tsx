import type { Site } from "../types";

interface Props {
  site: Site;
  highlight: boolean;
}

export default function SiteCard({ site, highlight }: Props) {
  return (
    <div className={`card${highlight ? " highlight" : ""}`}>
      <div className="card-icon">{site.icon}</div>
      <h3>{site.name}</h3>
      <p>{site.desc}</p>
      <span className="card-tag">{site.cat}</span>
    </div>
  );
}
