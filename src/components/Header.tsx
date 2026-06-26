import Link from "next/link";
import { siteConfig } from "@/data/site";
import { TowerIcon } from "@/components/Icons";

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="ASMR Tower Wiki home">
          <span className="brand-mark">
            <TowerIcon />
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
