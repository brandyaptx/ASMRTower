type IconProps = { className?: string };

export function TowerIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9 25h14M11 20h10M10 15h12M13 10h7l-2 15h-7l2-15Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M7 9c2.4-2.7 5.2-2.7 7.6 0M20 7c2 0 3.6 1 4.6 2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6 3l5 5-5 5M10.5 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8.2l3 3L13 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1l1.6 4.4L14 7l-4.4 1.6L8 13l-1.6-4.4L2 7l4.4-1.6L8 1Z" fill="currentColor" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 7.5 8 2l6 5.5V14H10V9.5H6V14H2V7.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 4 1 8l4 4M11 4l4 4-4 4M9 3l-2 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TierIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="3" width="5" height="3" rx="1" fill="currentColor" />
      <rect x="1.5" y="7" width="8" height="3" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="1.5" y="11" width="11" height="3" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 3h4.5c.8 0 1.5.7 1.5 1.5V14c0-.8-.7-1.5-1.5-1.5H2V3ZM14 3H9.5c-.8 0-1.5.7-1.5 1.5V14c0-.8.7-1.5 1.5-1.5H14V3Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function UpdateIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M14 8a6 6 0 1 1-2-4.5M14 2v3.5h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalcIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.5" y="1.5" width="11" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 4.5h6M5 8h1.5M8 8h1.5M11 8h.5M5 11h1.5M8 11h1.5M11 11h.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SourceIcon({ className }: IconProps = {}) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 2.5h7l3 3V13a.5.5 0 0 1-.5.5H3.5A.5.5 0 0 1 3 13V2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 2.5v3h3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
