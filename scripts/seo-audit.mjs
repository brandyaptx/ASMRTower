import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const site = "https://asmrtower.wiki";
const routes = ["/", "/codes/", "/tier-list/", "/wiki/", "/updates/", "/calculator/", "/sources/"];
const labels = ["Codes", "Tier List", "Wiki", "Updates", "Calculator", "Sources"];
const failures = [];

function fail(message) {
  failures.push(message);
}

function routeFile(route) {
  return route === "/"
    ? join(outDir, "index.html")
    : join(outDir, route.replace(/^\/|\/$/g, ""), "index.html");
}

if (!existsSync(outDir)) {
  fail("Missing out/ directory. Run npm run build before npm run audit:seo.");
}

for (const route of routes) {
  const file = routeFile(route);
  if (!existsSync(file)) {
    fail(`Missing static HTML for ${route}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const canonical = `${site}${route}`;

  if (!html.includes(`rel="canonical" href="${canonical}"`)) {
    fail(`Missing or wrong canonical on ${route}: expected ${canonical}`);
  }

  if (!html.includes('type="application/ld+json"')) {
    fail(`Missing JSON-LD schema on ${route}`);
  }

  if (!html.includes("<title") || !html.includes('name="description"')) {
    fail(`Missing title or description metadata on ${route}`);
  }

  for (const label of labels) {
    if (!html.includes(label)) {
      fail(`Navigation label "${label}" missing from ${route}`);
    }
  }
}

const sitemapPath = join(outDir, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("Missing sitemap.xml");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  for (const route of routes) {
    const loc = `${site}${route}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) {
      fail(`sitemap.xml missing ${loc}`);
    }
  }
}

const robotsPath = join(outDir, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("Missing robots.txt");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) {
    fail("robots.txt missing sitemap URL");
  }
}

for (const asset of ["hero-bg.jpg", "og-default.jpg", "favicon.svg"]) {
  if (!existsSync(join(outDir, asset))) {
    fail(`Missing public asset ${asset}`);
  }
}

const cssFiles = existsSync(join(outDir, "_next", "static"))
  ? readFileSync(join(root, "src", "app", "globals.css"), "utf8")
  : "";
if (!cssFiles.includes("@media (max-width: 860px)") || !cssFiles.includes("overflow-x: auto")) {
  fail("Mobile navigation CSS guard is missing");
}

if (failures.length > 0) {
  console.error("SEO audit failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO audit passed for ${routes.length} routes.`);
