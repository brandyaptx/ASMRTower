import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { gamepasses } from "@/data/site";
import { breadcrumb, formatRobux } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Tier List",
  description:
    "Utility-first ASMR Tower gamepass tier list with Robux prices and Needs check labels for unverified effects.",
  path: "/tier-list/",
});

const tierNotes = {
  S: "Best movement or route-control value if your budget allows it.",
  A: "Strong practical utility for repeated tower attempts.",
  B: "Useful in specific goals, but less universally important.",
  C: "Situational or comfort/social value; verify before buying.",
};

export default function TierListPage() {
  return (
    <main className="shell">
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Tier List", path: "/tier-list/" },
        ])}
      />
      <section className="page-title">
        <h1>ASMR Tower Tier List</h1>
        <p>
          A utility-first ranking of ASMR Tower gamepasses. Prices are sourced from
          Rolimon&apos;s public listing; exact effects remain Needs check until verified in-game.
        </p>
      </section>

      <section className="section tight">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Gamepass</th>
                <th>Price</th>
                <th>Best for</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {gamepasses.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className={`tier ${item.tier.toLowerCase()}`}>{item.tier}</span>
                  </td>
                  <td>
                    <strong style={{ color: "var(--text)" }}>{item.name}</strong>
                    <div style={{ marginTop: 6 }}>{item.note}</div>
                  </td>
                  <td>{formatRobux(item.price)}</td>
                  <td>{item.bestFor}</td>
                  <td>
                    <Status value={item.sourceStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section tight">
        <div className="cards-grid">
          {Object.entries(tierNotes).map(([tier, note]) => (
            <article className="card" key={tier}>
              <span className={`tier ${tier.toLowerCase()}`}>{tier}</span>
              <h3>{tier} tier</h3>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="note">
          This is not a power ranking of stages or players. It is a buyer&apos;s utility list for
          public gamepasses. Use the <Link href="/calculator/">calculator</Link> to test
          your Robux budget before spending.
        </div>
      </section>
    </main>
  );
}
