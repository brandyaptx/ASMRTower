import type { Metadata } from "next";
import Link from "next/link";
import CalculatorClient from "@/components/CalculatorClient";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { ArrowIcon } from "@/components/Icons";
import { gamepasses, siteConfig } from "@/data/site";
import { breadcrumb, formatRobux } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Gamepass Calculator",
  description:
    "Plan an ASMR Tower Robux budget with a gamepass calculator using verified public prices and clear Needs check labels.",
  path: "/calculator/",
});

const cheapest = [...gamepasses].sort((a, b) => a.price - b.price).slice(0, 3);
const premium = [...gamepasses].sort((a, b) => b.price - a.price).slice(0, 3);

export default function CalculatorPage() {
  return (
    <main className="shell">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Calculator", path: "/calculator/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ASMR Tower Gamepass Calculator",
            applicationCategory: "GameApplication",
            operatingSystem: "Web",
            url: `${siteConfig.domain}/calculator/`,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
        ]}
      />
      <section className="page-title">
        <div className="crumbs"><Link href="/">Home</Link> / Calculator</div>
        <h1>ASMR Tower Gamepass Calculator</h1>
        <p>
          Pick ASMR Tower gamepasses, compare Robux totals, and see whether your plan is
          movement-heavy, comfort-focused, or premium. Prices are sourced; effects that
          still need live testing are labeled.
        </p>
      </section>

      <section className="section tight">
        <CalculatorClient gamepasses={gamepasses} />
      </section>

      <section className="section tight">
        <div className="split">
          <div className="panel">
            <div className="section-head">
              <div>
                <h2>Cheapest checks</h2>
                <p>These are the lowest-priced public gamepasses in the current data set.</p>
              </div>
              <Status value="Needs check" />
            </div>
            <ul className="list">
              {cheapest.map((item) => (
                <li key={item.id}>
                  <strong style={{ color: "var(--text)" }}>{item.name}</strong> ·{" "}
                  {formatRobux(item.price)} · {item.note}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <div className="section-head">
              <div>
                <h2>Premium picks</h2>
                <p>These require the largest Robux budget and should be tested before buying.</p>
              </div>
              <Status value="Needs check" />
            </div>
            <ul className="list">
              {premium.map((item) => (
                <li key={item.id}>
                  <strong style={{ color: "var(--text)" }}>{item.name}</strong> ·{" "}
                  {formatRobux(item.price)} · {item.bestFor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="note">
          Calculator data should be refreshed whenever Rolimon&apos;s prices, Roblox
          gamepasses, or the live ASMR Tower shop changes. Review the{" "}
          <Link href="/sources/">sources page <ArrowIcon /></Link> for the full origin
          list, and the <Link href="/updates/">updates page</Link> for the latest checks.
        </div>
      </section>
    </main>
  );
}
