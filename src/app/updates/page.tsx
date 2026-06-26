import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Status from "@/components/Status";
import { updateNotes } from "@/data/site";
import { breadcrumb } from "@/lib/seo";
import { pageMetadata } from "@/lib/page";

export const metadata: Metadata = pageMetadata({
  title: "ASMR Tower Updates",
  description:
    "Latest verified ASMR Tower Roblox update timestamp, codes status checks, and gamepass data watchlist.",
  path: "/updates/",
});

export default function UpdatesPage() {
  return (
    <main className="shell">
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Updates", path: "/updates/" },
        ])}
      />
      <section className="page-title">
        <h1>ASMR Tower Updates</h1>
        <p>
          Launch tracker for official API timestamps, codes checks, and data tasks that
          still need in-game verification.
        </p>
      </section>

      <section className="section tight">
        <div className="cards-grid">
          {updateNotes.map((note) => (
            <article className="card" key={`${note.date}-${note.title}`}>
              <Status value={note.status} />
              <div>
                <h3>{note.title}</h3>
                <p>{note.detail}</p>
              </div>
              <span className="card-link">{note.date}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="panel">
          <h2 style={{ marginTop: 0 }}>What the updater should watch</h2>
          <ul className="list">
            <li>New Roblox API updated timestamp or description changes.</li>
            <li>Any official community post that lists real codes or community rewards.</li>
            <li>New gamepasses, price changes, or removed passes on Rolimon&apos;s.</li>
            <li>High-view YouTube videos covering new stages, slime mechanics, or shortcut routes.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
