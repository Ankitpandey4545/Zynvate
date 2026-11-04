import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

interface TechLogoProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

export function TechLogo({ name, size = 18, className, ...props }: TechLogoProps) {
  const norm = name.trim().toLowerCase();

  // Python: Official Dual-tone Blue & Yellow
  if (norm === "python") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#3776AB"
          d="M11.927 0c-3.17 0-2.973 1.374-2.973 1.374l.003 1.424h3.024v.457H4.37s-2.02.227-2.02 2.97c0 2.744 1.764 2.879 1.764 2.879h1.053v-1.48s-.057-1.764 1.734-1.764h3.003v-.453h-4.63s-1.374 0-1.374-1.346c0-1.347 1.206-1.347 1.206-1.347h6.82s1.424.08 1.424-1.347C13.37.03 11.927 0 11.927 0zm-1.637 1.01a.63.63 0 1 1 0 1.26.63.63 0 0 1 0-1.26z"
        />
        <path
          fill="#FFD43B"
          d="M12.073 24c3.17 0 2.973-1.374 2.973-1.374l-.003-1.424h-3.024v-.457h7.61s2.02-.227 2.02-2.97c0-2.744-1.763-2.879-1.763-2.879h-1.054v1.48s.057 1.764-1.734 1.764h-3.003v.453h4.63s1.374 0 1.374 1.346c0 1.347-1.206 1.347-1.206 1.347h-6.82s-1.424-.08-1.424 1.347c0 1.336 1.444 1.366 1.444 1.366zm1.637-1.01a.63.63 0 1 1 0-1.26.63.63 0 0 1 0 1.26z"
        />
      </svg>
    );
  }

  // Django: Official Forest Green
  if (norm === "django") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#092E20"
          d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"
        />
      </svg>
    );
  }

  // FastAPI: Official Teal with Lightning Bolt
  if (norm === "fastapi") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <circle cx="12" cy="12" r="11" fill="#009688" />
        <path fill="#FFFFFF" d="M11.5 5L6 14.5h5L9.5 20l7-10.5h-5L13.5 5h-2z" />
      </svg>
    );
  }

  // React: Official Cyan Atom
  if (norm === "react") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  // Next.js: Official Black Badge with Crisp White N
  if (norm === "next.js" || norm === "nextjs") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <circle cx="12" cy="12" r="11.5" fill="#000000" />
        <path
          d="M15.5 8.5v7m-7-7v7l8.2-7"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // TypeScript: Official Blue Badge
  if (norm === "typescript" || norm === "ts") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          fill="#FFFFFF"
          d="M11.5 9h-7v2h2.5v7.5h2V11h2.5V9zm3.5 3.3c.7-.5 1.6-.8 2.5-.8 1.4 0 2.3.7 2.3 1.8 0 1.2-.8 1.7-2.1 2.2l-.7.3c-.8.3-1.2.6-1.2 1.1 0 .6.5 1 1.4 1 .8 0 1.5-.3 2.1-.8v2.1c-.7.5-1.7.7-2.6.7-2 0-3-1-3-2.6 0-1.3.8-2 2.2-2.5l.7-.3c.7-.3 1.1-.6 1.1-1.1 0-.5-.4-.9-1.2-.9-.7 0-1.4.3-1.9.7v-2.2z"
        />
      </svg>
    );
  }

  // JavaScript: Official Yellow Badge
  if (norm === "javascript" || norm === "js") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          fill="#000000"
          d="M6 14.5c.3.7.8 1.2 1.7 1.2 1 0 1.5-.5 1.5-1.5v-6h2v6c0 2-1.3 2.9-3.2 2.9-1.7 0-2.8-.9-3.2-2.2l1.2-.4zm8.2.8c.6.8 1.5 1.2 2.5 1.2 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-1.9-1.8l-.6-.2c-1.8-.7-3-1.6-3-3.3 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.6l-1.4 1c-.4-.6-1-1-1.8-1-.8 0-1.4.5-1.4 1.1 0 .7.5 1 1.6 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.6 0 2-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.1-2.3l1.6-.8z"
        />
      </svg>
    );
  }

  // Node.js: Official Hexagon Green
  if (norm === "node.js" || norm === "nodejs") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#339933"
          d="M12 1.5l9.5 5.5v11L12 23.5 2.5 18V7L12 1.5zm0 3.2L5 8.7v7.6l7 4 7-4V8.7l-7-4z"
        />
        <circle cx="12" cy="12.5" r="3.2" fill="#5FA04E" />
      </svg>
    );
  }

  // PostgreSQL: Official Elephant Blue
  if (norm === "postgresql" || norm === "postgres") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#336791"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5c-.8.8-1.9 1.2-3.3 1.2-1.1 0-2.2-.3-3-.9l.7-1.4c.7.5 1.5.8 2.3.8 1 0 1.7-.3 2.2-.8.5-.5.7-1.2.7-2v-.2c-.6.6-1.5 1-2.5 1-2.2 0-3.7-1.6-3.7-3.9 0-2.4 1.6-4.1 3.9-4.1 1.1 0 2 .4 2.5 1.1V7.5h1.7V14c0 1-.2 1.9-.8 2.5z"
        />
      </svg>
    );
  }

  // MongoDB: Official Green Leaf
  if (norm === "mongodb" || norm === "mongo") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#47A248"
          d="M12 1.5c-.4 1.2-3.8 5.7-4.5 9.7-.7 4 1.2 8.3 4.5 11.3 3.3-3 5.2-7.3 4.5-11.3-.7-4-4.1-8.5-4.5-9.7z"
        />
        <path
          fill="#13AA52"
          d="M12 1.5v21c.2 0 .5-.1.7-.3 3.1-2.9 4.7-6.9 4.1-10.7-.7-4-4.1-8.5-4.5-9.7l-.3-.3z"
        />
      </svg>
    );
  }

  // MySQL: Official Dolphin Blue & Orange
  if (norm === "mysql") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          fill="#F29111"
          d="M6 16.5c1.2-2.8 3.5-5 6.4-5.8 2.1-.6 4.3-.3 6.1.7-1.5-2.2-4-3.5-6.8-3.3-3.2.2-5.9 2.4-7 5.4l1.3 3z"
        />
        <circle cx="16" cy="10" r="1.2" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker: Official Whale Blue
  if (norm === "docker") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#2496ED"
          d="M21.5 10.5c-.3-.2-1.3-.3-2.1.2-.2-.8-.8-1.5-1.7-1.8l-.5-.2-.3.4c-.6.9-.6 2.1-.2 3.1-.9.5-2.2.6-3.4.6H2.6c-.4 1.8.2 3.7 1.6 4.9 2 1.7 5.2 2.3 8.3 2.3 6.3 0 10.5-3.3 11.4-8.3.1-.4 0-.8-.4-1.2zM7.5 7h2v2h-2V7zm2.5 0h2v2h-2V7zm2.5 0h2v2h-2V7zm-5 2.5h2v2h-2v-2zm2.5 0h2v2h-2v-2zm2.5 0h2v2h-2v-2zm2.5 0h2v2h-2v-2zm-7.5 2.5h2v2h-2V12zm2.5 0h2v2h-2V12zm2.5 0h2v2h-2V12z"
        />
      </svg>
    );
  }

  // AWS: Official Cloud Smile
  if (norm === "aws") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#232F3E"
          d="M6.2 8.3l1.8 4.6h1.5l1.9-4.6h-1.4l-1.2 3.2-1.2-3.2H6.2zm5.8 4.6h1.3V8.3H12v4.6zm3.6-2.1c0-.4.3-.6.8-.6.5 0 .8.2.8.6v2.1h1.3v-2.2c0-1.1-.7-1.8-1.9-1.8-1 0-1.8.5-2 1.3l1 .6z"
        />
        <path
          fill="#FF9900"
          d="M18.8 17.5c-3.8 2.2-8.5 2.2-12.4-.2-.2-.1-.4.1-.3.3 3.6 2.8 8.6 2.8 12.5.4.3-.2.3-.5.2-.5zm.7-1.3l-1.3-.7c-.1-.1-.3 0-.3.1l.3 1.5c0 .2.2.3.4.2l1.1-.9c.1-.1.1-.2-.2-.2z"
        />
      </svg>
    );
  }

  // Git: Official Red Orange
  if (norm === "git") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#F05032"
          d="M21.7 10.7L13.3 2.3c-.8-.8-2.2-.8-3 0L8.2 4.4l3.8 3.8c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l3.6 3.6c.6-.3 1.3-.2 1.8.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.3-1.8l-3.4-3.4v4.5c.2.1.4.3.5.5.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.4-.4.7-.5v-4.6c-.3-.1-.5-.3-.7-.5-.6-.6-.7-1.4-.3-2.1L7.1 5.5 2.3 10.3c-.8.8-.8 2.2 0 3l8.4 8.4c.8.8 2.2.8 3 0l8-8c.8-.8.8-2.2 0-3z"
        />
      </svg>
    );
  }

  // REST APIs
  if (norm.includes("rest") || norm.includes("api")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <rect width="24" height="24" rx="5" fill="#7A4426" />
        <path
          fill="#FFFFFF"
          d="M6 8h2.5c1.1 0 1.8.6 1.8 1.5 0 .8-.5 1.3-1.2 1.4l1.4 2.1H9.2L8 11.2H7.2V13H6V8zm1.2 2.2h1.2c.4 0 .7-.2.7-.5s-.3-.5-.7-.5H7.2v1zm4.8-2.2h3.5v1.1h-2.3v1.2h2v1.1h-2v1.3h2.3V13H12V8zm4.8 1.1h-1.3V8h3.8v1.1h-1.3V13h-1.2V9.1z"
        />
      </svg>
    );
  }

  // Figma: Official 5-Color Logo
  if (norm.includes("figma")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        {...props}
      >
        <path fill="#F24E1E" d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" />
        <path fill="#FF7262" d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" />
        <path fill="#A259FF" d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" />
        <path fill="#1ABCFE" d="M12 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path fill="#0ACF83" d="M8 17a2.5 2.5 0 0 1 2.5-2.5H12v2.5a2.5 2.5 0 0 1-4 0z" />
      </svg>
    );
  }

  // Fallback for general design/tools
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0 text-primary", className)}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#EDE4DB" />
      <path
        d="M8 8l4 4-4 4m5 0h3"
        stroke="#7A4426"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
