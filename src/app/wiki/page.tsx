import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { gameProfile, nameCollision } from "@/data/site";
import { breadcrumb, formatNumber } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Wiki",
  description:
    "ASMR Tower Roblox wiki snapshot with official description, place ID, creator, genre, tags, and same-name game warning.",
  path: "/wiki/",
});

export default function WikiPage() {
  return (
    <main className="shell">
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Wiki", path: "/wiki/" },
        ])}
      />
      <section className="page-title">
        <h1>ASMR Tower Wiki</h1>
        <p>{gameProfile.description}</p>
      </section>

      <section className="section tight split">
        <div className="panel">
          <div className="section-head">
            <div>
              <h2>Game profile</h2>
              <p>Verified from Roblox API snapshot checked on 2026-06-26.</p>
            </div>
            <Status value="Verified" />
          </div>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr>
                  <th>Place ID</th>
                  <td>{gameProfile.placeId}</td>
                </tr>
                <tr>
                  <th>Universe ID</th>
                  <td>{gameProfile.universeId}</td>
                </tr>
                <tr>
                  <th>Developer</th>
                  <td>{gameProfile.developer}</td>
                </tr>
                <tr>
                  <th>Genre</th>
                  <td>{gameProfile.genre}</td>
                </tr>
                <tr>
                  <th>Max players</th>
                  <td>{gameProfile.maxPlayers}</td>
                </tr>
                <tr>
                  <th>Visits</th>
                  <td>{formatNumber(gameProfile.currentSnapshot.visits)}</td>
                </tr>
                <tr>
                  <th>Favorites</th>
                  <td>{formatNumber(gameProfile.currentSnapshot.favorites)}</td>
                </tr>
                <tr>
                  <th>Updated</th>
                  <td>{gameProfile.lastUpdated}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <aside className="panel">
          <h2 style={{ marginTop: 0 }}>{nameCollision.title}</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{nameCollision.detail}</p>
          <a className="card-link" href={nameCollision.otherGameUrl} target="_blank" rel="noreferrer">
            Open other game page
          </a>
        </aside>
      </section>

      <section className="section tight">
        <div className="section-head">
          <div>
            <h2>Official tag map</h2>
            <p>These terms come from the official Roblox description and drive the wiki page coverage.</p>
          </div>
        </div>
        <div className="cards-grid">
          {gameProfile.officialTags.map((tag) => (
            <div className="metric" key={tag}>
              <strong style={{ fontSize: 18 }}>{tag}</strong>
              <span>Official Roblox description tag</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
