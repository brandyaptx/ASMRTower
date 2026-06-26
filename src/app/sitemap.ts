import type { MetadataRoute } from "next";
import { routes, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: new Date(siteConfig.checkedDate),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
