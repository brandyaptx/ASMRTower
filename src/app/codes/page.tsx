import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { ArrowIcon } from "@/components/Icons";
import { codesStatus, sources } from "@/data/site";
import { breadcrumb, faqSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Codes 2026",
  description:
    "Checked ASMR Tower Roblox codes status. No public working codes are verified; conflicting redemption reports are marked clearly.",
  path: "/codes/",
});

const faqs = [
  {
    question: "Are there any working ASMR Tower codes?",
    answer:
      "No public working ASMR Tower codes were verified on June 26, 2026. This page will not publish unverified code strings.",
  },
  {
    question: "Does ASMR Tower have a code redeem button?",
    answer:
      "Public guides conflict on this point. Until the 3 Studio game build is verified in-game, the redeem flow remains marked Needs check.",
  },
  {
    question: "Which ASMR Tower game does this page track?",
    answer:
      "This page tracks ASMR Tower [UPD] by 3 Studio, place ID 111363135577981. A separate same-name game by Tiny Pepe Studio also exists.",
  },
];

export default function CodesPage() {
  return (
    <main className="shell">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Codes", path: "/codes/" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="page-title">
        <h1>ASMR Tower Codes</h1>
        <p>
          Checked {codesStatus.lastChecked}. No active public codes are verified, and
          conflicting redemption-flow claims are kept out of the active code table.
        </p>
      </section>

      <section className="section tight split">
        <div className="panel">
          <div className="section-head">
            <div>
              <h2>Working codes</h2>
              <p>Only verified, currently working public codes appear here.</p>
            </div>
            <Status value="Verified" />
          </div>
          {codesStatus.activeCodes.length === 0 ? (
            <div className="note">
              No working public ASMR Tower codes are verified. Avoid pages that publish
              unsourced code strings without a current test date.
            </div>
          ) : null}
        </div>
        <aside className="panel">
          <h2 style={{ marginTop: 0 }}>Needs check</h2>
          <ul className="list">
            {codesStatus.needsCheck.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section tight">
        <div className="section-head">
          <div>
            <h2>Source comparison</h2>
            <p>
              Codes pages are useful, but ASMR Tower has same-name game confusion. This
              site treats third-party code claims as signals until in-game confirmation.
            </p>
          </div>
          <Status value="Conflicting" />
        </div>
        <div className="cards-grid">
          {sources
            .filter((source) => source.name.includes("Game Rant") || source.name.includes("Earnaldo"))
            .map((source) => (
              <article className="card source-card" key={source.url}>
                <Status value={source.status} />
                <h3>{source.name}</h3>
                <p>{source.use}</p>
                <a href={source.url} rel="noreferrer" target="_blank">
                  Open source
                </a>
              </article>
            ))}
        </div>
      </section>

      <section className="section tight">
        <div className="panel">
          <h2 style={{ marginTop: 0 }}>Update workflow</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            When a code appears, it needs at least one source plus an in-game verification
            pass. Add active codes at the top, move failed codes to expired, then rerun the
            build and SEO audit.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/updates/">
              View Updates <ArrowIcon />
            </Link>
            <Link className="button" href="/sources/">
              View Sources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
