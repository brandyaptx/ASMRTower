import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { keywordBuckets, sources } from "@/data/site";
import { breadcrumb } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Sources",
  description:
    "ASMR Tower source notes for Roblox API data, gamepass prices, codes status, and keyword classification.",
  path: "/sources/",
});

export default function SourcesPage() {
  return (
    <main className="shell">
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Sources", path: "/sources/" },
        ])}
      />
      <section className="page-title">
        <h1>ASMR Tower Sources</h1>
        <p>
          Every launch claim is tied to a source and status. Unconfirmed mechanics are kept
          as Needs check rather than rewritten as facts.
        </p>
      </section>

      <section className="section tight">
        <div className="cards-grid">
          {sources.map((source) => (
            <article className="card source-card" key={source.url}>
              <Status value={source.status} />
              <h3>{source.name}</h3>
              <p>{source.use}</p>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.url}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="section-head">
          <div>
            <h2>Keyword matrix</h2>
            <p>
              44 launch keywords grouped into P0 page intent buckets. These drive page
              titles, internal links, and future updater checks.
            </p>
          </div>
        </div>
        <div className="cards-grid">
          {Object.entries(keywordBuckets).map(([bucket, words]) => (
            <article className="card" key={bucket}>
              <h3>{bucket}</h3>
              <p>{words.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
