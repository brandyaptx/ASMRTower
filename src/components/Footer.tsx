import Link from "next/link";
import { gameProfile, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong>{siteConfig.name}</strong>
          <div>
            Fan-made guide for {gameProfile.displayName}. Not affiliated with Roblox or{" "}
            {gameProfile.developer}.
          </div>
        </div>
        <div>
          Checked {siteConfig.checkedDate}. Data sources are listed on{" "}
          <Link href="/sources/">Sources</Link>.
        </div>
      </div>
    </footer>
  );
}
