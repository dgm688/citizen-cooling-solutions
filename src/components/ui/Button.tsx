import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "../Icon";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-heat-500/60 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "heat-glow bg-heat-500 text-white hover:bg-heat-600",
  outline:
    "border border-steel-300 text-steel-800 hover:bg-steel-100 focus-visible:ring-steel-400/60",
  ghost: "text-steel-700 hover:text-heat-600",
  white:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-white/60",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  children,
  href,
  external,
  variant = "primary",
  size = "lg",
  className = "",
  arrow,
}: LinkProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" className="h-5 w-5" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

type NativeButtonProps = CommonProps & {
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  type = "button",
  disabled,
  variant = "primary",
  size = "lg",
  className = "",
  arrow,
}: NativeButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="h-5 w-5" />}
    </button>
  );
}
