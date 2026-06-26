"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import {
  TowerIcon,
  HomeIcon,
  CodeIcon,
  TierIcon,
  BookIcon,
  UpdateIcon,
  CalcIcon,
  SourceIcon,
} from "@/components/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": HomeIcon,
  "/codes/": CodeIcon,
  "/tier-list/": TierIcon,
  "/wiki/": BookIcon,
  "/updates/": UpdateIcon,
  "/calculator/": CalcIcon,
  "/sources/": SourceIcon,
};

export default function Header() {
  const pathname = usePathname() || "/";
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="ASMR Tower Wiki home">
          <span className="brand-mark">
            <TowerIcon />
          </span>
          <span className="brand-text">{siteConfig.name}</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {siteConfig.nav.slice(1).map((item) => {
            const Icon = iconMap[item.href];
            const isActive = normalized === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {Icon ? <Icon /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
