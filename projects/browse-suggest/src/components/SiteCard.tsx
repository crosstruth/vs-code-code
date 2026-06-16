import type { Site } from "../types";

interface Props {
  site: Site;
  highlight: boolean;
}

export default function SiteCard({ site, highlight }: Props) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card${highlight ? " highlight" : ""}`}
    >
      <div className="card-icon">{site.icon}</div>
      <h3>
        {site.pinned && <span className="pin">📌 </span>}
        {site.name}
      </h3>
      <p>{site.desc}</p>
      <span className="card-tag">{site.cat}</span>
    </a>
  );
}
