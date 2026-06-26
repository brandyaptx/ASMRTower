import type { SourceStatus } from "@/data/site";

export default function Status({ value }: { value: SourceStatus }) {
  const className =
    value === "Verified" ? "status" : value === "Conflicting" ? "status warn" : "status bad";
  return <span className={className}>{value}</span>;
}
