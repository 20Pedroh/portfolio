import React from "react";

interface TechBadgeProps {
  icon: React.ReactNode;
  name: string;
}

export function TechBadge({ icon, name }: TechBadgeProps) {
  return (
    <div className="
      flex items-center gap-3
      px-4 py-3
      rounded-xl
      bg-[var(--surface)]/95
      backdrop-blur-xl
      border border-[var(--border)]
      shadow-lg
      hover:border-[var(--accent)]/60
      hover:-translate-y-1
      transition-all duration-300
      whitespace-nowrap
    ">
      <span className="text-2xl text-[var(--accent)]">
        {icon}
      </span>

      <span className="text-sm font-semibold text-[var(--foreground)]">
        {name}
      </span>
    </div>
  );
}