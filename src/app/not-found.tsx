import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell page-title">
      <h1>Page not found</h1>
      <p>This ASMR Tower page does not exist yet. Use the core pages below instead.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/calculator/">
          Open Calculator
        </Link>
        <Link className="button" href="/sources/">
          View Sources
        </Link>
      </div>
    </main>
  );
}
