import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { ArrowIcon } from "@/components/Icons";
import {
  codesStatus,
  gameProfile,
  keywordBuckets,
  nameCollision,
  routes,
  siteConfig,
} from "@/data/site";
import { breadcrumb, formatNumber } from "@/lib/seo";

const cards = [
  {
    href: "/codes/",
    title: "Codes",
    text: "No working public codes are verified right now. Track active, expired, and needs-check status without fake rewards.",
  },
  {
    href: "/calculator/",
    title: "Calculator",
    text: "Select gamepasses and calculate Robux budget by movement, comfort, economy, and access goals.",
  },
  {
    href: "/tier-list/",
    title: "Tier List",
    text: "Utility-first ranking for ASMR Tower gamepasses, with prices and source confidence visible.",
  },
  {
    href: "/wiki/",
    title: "Wiki",
    text: "Official description, gameplay tags, stage help, and same-name game disambiguation in one place.",
  },
  {
    href: "/updates/",
    title: "Updates",
    text: "Latest verified Roblox update timestamp plus what still needs in-game verification.",
  },
  {
    href: "/sources/",
    title: "Sources",
    text: "Every claim is tied to Roblox API, Rolimon's, or third-party codes guides with status labels.",
  },
];

export default function Home() {
  const totalKeywords = Object.values(keywordBuckets).flat().length;

  return (
    <main>
      <JsonLd
        data={[
          breadcrumb([{ name: "Home", path: "/" }]),
          {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: gameProfile.name,
            url: gameProfile.robloxUrl,
            genre: gameProfile.genre,
            author: { "@type": "Organization", name: gameProfile.developer },
            operatingSystem: "Roblox",
          },
        ]}
      />

      <section className="shell hero">
        <div className="hero-copy">
          <h1>ASMR Tower Guide & Tools</h1>
          <p>
            Verified Roblox data, codes status, stage help, and a gamepass budget calculator
            for {gameProfile.displayName} by {gameProfile.developer}.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/calculator/">
              Open Calculator <ArrowIcon />
            </Link>
            <Link className="button" href="/codes/">
              Check Codes
            </Link>
          </div>
          <div className="quick-grid" aria-label="Roblox snapshot">
            <div className="metric">
              <strong>{formatNumber(gameProfile.currentSnapshot.visits)}</strong>
              <span>Visits in Roblox API snapshot</span>
            </div>
            <div className="metric">
              <strong>{formatNumber(gameProfile.currentSnapshot.playing)}</strong>
              <span>Playing at snapshot time</span>
            </div>
            <div className="metric">
              <strong>{gameProfile.currentSnapshot.likeRatio}</strong>
              <span>Like ratio from votes snapshot</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/hero-bg.jpg"
            alt="ASMR Tower Roblox game thumbnail"
            width={1280}
            height={720}
            priority
          />
          <div className="media-caption">
            <span>Official Roblox thumbnail treatment</span>
            <span>Checked {siteConfig.checkedDate}</span>
          </div>
        </div>
      </section>

      <section className="shell section tight">
        <div className="section-head">
          <div>
            <h2>P0 page network</h2>
            <p>
              Built around {totalKeywords} classified keyword targets, with codes, tier list,
              wiki, updates, calculator, and sources as the only launch pages.
            </p>
          </div>
          <Status value="Verified" />
        </div>
        <div className="tool-grid">
          {cards.map((card) => (
            <Link className="card" href={card.href} key={card.href}>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              <span className="card-link">
                Open page <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="split">
          <div className="panel">
            <div className="section-head">
              <div>
                <h2>Codes are handled conservatively</h2>
                <p>
                  {codesStatus.summary} The site blocks unverified code claims and stores
                  redemption flow as Needs check until it is confirmed in-game.
                </p>
              </div>
              <Status value="Conflicting" />
            </div>
            <ul className="list">
              {codesStatus.needsCheck.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2 style={{ marginTop: 0 }}>Same-name warning</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{nameCollision.detail}</p>
            <Link className="card-link" href="/sources/">
              Review source notes <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="shell section tight">
        <div className="section-head">
          <div>
            <h2>Sitemap launch set</h2>
            <p>Every route has canonical metadata, sitemap coverage, and internal links.</p>
          </div>
        </div>
        <div className="cards-grid">
          {routes.map((route) => (
            <div className="metric" key={route.path}>
              <strong>{route.priority.toFixed(2)}</strong>
              <span>
                <Link href={route.path}>{route.title}</Link>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
