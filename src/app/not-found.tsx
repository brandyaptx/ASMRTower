import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="shell page-title">
      <div className="crumbs"><Link href="/">Home</Link> / 404</div>
      <h1>Page not found</h1>
      <p>This ASMR Tower page does not exist yet. Use the core pages below instead.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/">
          Back to home <ArrowIcon />
        </Link>
        <Link className="button" href="/calculator/">Open Calculator</Link>
        <Link className="button" href="/wiki/">Open Wiki</Link>
      </div>
    </main>
  );
}
