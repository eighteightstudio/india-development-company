import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "sky" | "orange" | "blue";
  className?: string;
}

export const Badge = ({ children, variant = "sky", className = "" }: BadgeProps) => {
  const variantClasses = {
    sky: "bg-idc-sky/10 text-idc-sky border-idc-sky/40",
    orange: "bg-idc-orange/10 text-idc-orange border-idc-orange/40",
    blue: "bg-idc-blue/10 text-idc-blue border-idc-blue/40",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  onDark?: boolean;
  centered?: boolean;
  accentWord?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  onDark = false,
  centered = false,
  accentWord,
}: SectionHeadingProps) => {
  const titleParts = accentWord ? title.split(accentWord) : [title];

  return (
    <div className={`${centered ? "text-center" : ""} mb-10`}>
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl leading-tight ${
          onDark ? "text-idc-white" : "text-idc-navy"
        }`}
      >
        {accentWord ? (
          <>
            {titleParts[0]}
            <span className="text-idc-orange">{accentWord}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {/* Accent underline bar */}
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-idc-orange ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            onDark ? "text-idc-sky/80" : "text-gray-600"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const CTAButton = ({ href, children, variant = "primary", className = "" }: CTAButtonProps) => {
  const variantClasses = {
    primary: "bg-idc-orange text-idc-white hover:bg-orange-500",
    secondary: "bg-idc-blue text-idc-white hover:bg-blue-800",
    ghost: "border-2 border-idc-white text-idc-white hover:bg-idc-white hover:text-idc-navy",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
};
