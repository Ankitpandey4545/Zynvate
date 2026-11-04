import type { SVGProps } from "react";

export function WebDev3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient
          id="wd-win"
          x1="20"
          y1="20"
          x2="190"
          y2="170"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FDFBF8" />
          <stop offset="50%" stopColor="#F5ECE3" />
          <stop offset="100%" stopColor="#E4D3C2" />
        </linearGradient>
        <linearGradient id="wd-bar" x1="30" y1="25" x2="180" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ECE0D3" />
          <stop offset="100%" stopColor="#DFCEBE" />
        </linearGradient>
        <linearGradient id="wd-bracket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8EEE5" />
          <stop offset="60%" stopColor="#DEBAA2" />
          <stop offset="100%" stopColor="#C48E70" />
        </linearGradient>
        <filter id="wd-shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="4" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
        <filter id="wd-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#7A4426" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Tilted 3D Browser Window Frame */}
      <g filter="url(#wd-shadow)" transform="rotate(-6 110 90)">
        <rect x="25" y="20" width="165" height="135" rx="18" fill="url(#wd-win)" />
        {/* Window Header Bar */}
        <path
          d="M25 38 C25 28 33 20 43 20 L172 20 C182 20 190 28 190 38 L190 48 L25 48 Z"
          fill="url(#wd-bar)"
        />
        {/* 3 Window Dots */}
        <circle cx="42" cy="34" r="3.5" fill="#D6B8A2" />
        <circle cx="53" cy="34" r="3.5" fill="#DFCEBE" />
        <circle cx="64" cy="34" r="3.5" fill="#DFCEBE" />
        {/* Inner Window Canvas Area */}
        <rect x="35" y="56" width="145" height="88" rx="10" fill="#FDFBF9" fillOpacity="0.65" />
      </g>

      {/* 3D Claymorphic Code Brackets < / > */}
      <g filter="url(#wd-shadow)">
        {/* Left Bracket < */}
        <path
          d="M74 88 L54 104 L74 120"
          stroke="url(#wd-bracket)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Slash / */}
        <path d="M93 126 L107 82" stroke="url(#wd-bracket)" strokeWidth="9" strokeLinecap="round" />
        {/* Right Bracket > */}
        <path
          d="M126 88 L146 104 L126 120"
          stroke="url(#wd-bracket)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function MobileDev3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient
          id="mob-body"
          x1="70"
          y1="10"
          x2="190"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F9F2EB" />
          <stop offset="80%" stopColor="#EBD7C5" />
          <stop offset="100%" stopColor="#DFBEA5" />
        </linearGradient>
        <linearGradient
          id="mob-cam"
          x1="100"
          y1="25"
          x2="145"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#EFE3D7" />
          <stop offset="100%" stopColor="#DFCCBB" />
        </linearGradient>
        <linearGradient id="mob-lens" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5A341E" />
          <stop offset="100%" stopColor="#301A0E" />
        </linearGradient>
        <filter id="mob-shadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="-6" dy="10" stdDeviation="9" floodColor="#7A4426" floodOpacity="0.18" />
        </filter>
        <filter id="mob-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#7A4426" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Tilted Smartphone Back Corner (matching user image) */}
      <g filter="url(#mob-shadow)" transform="rotate(-8 135 110)">
        {/* Phone Body with Rounded Corner */}
        <rect x="75" y="15" width="125" height="175" rx="28" fill="url(#mob-body)" />
        {/* Specular Highlight Rim */}
        <rect
          x="76.5"
          y="16.5"
          width="122"
          height="172"
          rx="26.5"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeOpacity="0.8"
        />

        {/* Camera Island Platform */}
        <rect
          x="96"
          y="32"
          width="46"
          height="52"
          rx="14"
          fill="url(#mob-cam)"
          filter="url(#mob-soft)"
        />
        {/* Top Camera Lens */}
        <circle cx="119" cy="48" r="8.5" fill="url(#mob-lens)" />
        <circle cx="117.5" cy="46" r="2.5" fill="#FFFFFF" fillOpacity="0.75" />
        {/* Camera Ring */}
        <circle cx="119" cy="48" r="10.5" stroke="#CBB19B" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function CustomSoftware3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDFB" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EED9C7" />
          <stop offset="100%" stopColor="#DDBFA9" />
        </linearGradient>
        <linearGradient id="cube-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFA88E" />
          <stop offset="100%" stopColor="#BD9074" />
        </linearGradient>
        <filter id="cube-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#7A4426" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Main Base Cube */}
      <g filter="url(#cube-shadow)">
        {/* Top Face */}
        <path d="M125 75 L165 95 L125 115 L85 95 Z" fill="url(#cube-top)" />
        {/* Left Face */}
        <path d="M85 95 L125 115 L125 165 L85 145 Z" fill="url(#cube-left)" />
        {/* Right Face */}
        <path d="M125 115 L165 95 L165 145 L125 165 Z" fill="url(#cube-right)" />
      </g>

      {/* Left Front Smaller Cube */}
      <g filter="url(#cube-shadow)">
        <path d="M75 110 L102 124 L75 138 L48 124 Z" fill="url(#cube-top)" />
        <path d="M48 124 L75 138 L75 168 L48 154 Z" fill="url(#cube-left)" />
        <path d="M75 138 L102 124 L102 154 L75 168 Z" fill="url(#cube-right)" />
      </g>

      {/* Floating Top Cube */}
      <g filter="url(#cube-shadow)" transform="translate(18, -24)">
        <path d="M135 50 L155 60 L135 70 L115 60 Z" fill="url(#cube-top)" />
        <path d="M115 60 L135 70 L135 90 L115 80 Z" fill="url(#cube-left)" />
        <path d="M135 70 L155 60 L155 80 L135 90 Z" fill="url(#cube-right)" />
      </g>
    </svg>
  );
}

export function Saas3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="cloud-main" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F9F2EB" />
          <stop offset="85%" stopColor="#E9D6C4" />
          <stop offset="100%" stopColor="#DCBEA6" />
        </radialGradient>
        <radialGradient id="cloud-small" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F7EFE7" />
          <stop offset="100%" stopColor="#E4CCA8" />
        </radialGradient>
        <filter id="cloud-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="10" stdDeviation="9" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
        <filter id="cloud-front" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-2" dy="6" stdDeviation="5" floodColor="#7A4426" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Big Volumetric Cloud */}
      <g filter="url(#cloud-shadow)">
        <circle cx="125" cy="115" r="32" fill="url(#cloud-main)" />
        <circle cx="150" cy="125" r="26" fill="url(#cloud-main)" />
        <circle cx="95" cy="128" r="24" fill="url(#cloud-main)" />
        <circle cx="145" cy="98" r="22" fill="url(#cloud-main)" />
        <rect x="90" y="118" width="85" height="32" rx="16" fill="url(#cloud-main)" />
      </g>

      {/* Floating Foreground Baby Cloud */}
      <g filter="url(#cloud-front)">
        <circle cx="158" cy="138" r="16" fill="url(#cloud-small)" />
        <circle cx="174" cy="144" r="13" fill="url(#cloud-small)" />
        <circle cx="146" cy="145" r="11" fill="url(#cloud-small)" />
        <rect x="144" y="139" width="38" height="17" rx="8.5" fill="url(#cloud-small)" />
      </g>
    </svg>
  );
}

export function UIUX3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="ui-card1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F7EFE7" />
          <stop offset="100%" stopColor="#E7D3BF" />
        </linearGradient>
        <linearGradient id="ui-card2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9F3EC" />
          <stop offset="100%" stopColor="#DFCEBC" />
        </linearGradient>
        <linearGradient id="ui-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DEBAA2" />
          <stop offset="100%" stopColor="#B37D5C" />
        </linearGradient>
        <filter id="ui-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Back Layout Wireframe Card */}
      <g filter="url(#ui-shadow)" transform="rotate(-12 110 90)">
        <rect x="55" y="35" width="115" height="120" rx="14" fill="url(#ui-card2)" />
        <rect x="67" y="47" width="40" height="7" rx="3.5" fill="#D3BAA3" />
        <circle cx="152" cy="50" r="4" fill="#D3BAA3" />
        <rect x="67" y="65" width="90" height="35" rx="8" fill="#FDFBF9" fillOpacity="0.75" />
        <rect x="67" y="110" width="42" height="30" rx="6" fill="#DBC4AF" fillOpacity="0.6" />
        <rect x="115" y="110" width="42" height="30" rx="6" fill="#DBC4AF" fillOpacity="0.6" />
      </g>

      {/* Front Foreground Overlapping Wireframe Card */}
      <g filter="url(#ui-shadow)" transform="rotate(4 135 115)">
        <rect x="95" y="70" width="95" height="100" rx="14" fill="url(#ui-card1)" />
        {/* Header bar */}
        <circle cx="110" cy="85" r="4" fill="url(#ui-accent)" />
        <rect x="120" y="82" width="40" height="6" rx="3" fill="#D3BAA3" />
        {/* Pill buttons */}
        <rect
          x="105"
          y="100"
          width="75"
          height="28"
          rx="8"
          fill="url(#ui-accent)"
          fillOpacity="0.25"
        />
        <rect x="115" y="110" width="30" height="8" rx="4" fill="url(#ui-accent)" />
        {/* Toggle / switch */}
        <rect x="105" y="138" width="75" height="18" rx="9" fill="#E8D5C2" />
        <circle cx="166" cy="147" r="6" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function Backend3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="db-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="db-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAD6C3" />
          <stop offset="100%" stopColor="#CFA88E" />
        </linearGradient>
        <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DEBAA2" />
          <stop offset="100%" stopColor="#B37D5C" />
        </linearGradient>
        <filter id="db-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Bottom Cylinder */}
      <g filter="url(#db-shadow)">
        <path
          d="M75 125 C75 115 105 107 140 107 C175 107 205 115 205 125 L205 152 C205 162 175 170 140 170 C105 170 75 162 75 152 Z"
          fill="url(#db-side)"
        />
        <ellipse cx="140" cy="125" rx="65" ry="18" fill="url(#db-top)" />
      </g>

      {/* Middle Cylinder */}
      <g filter="url(#db-shadow)">
        <path
          d="M85 92 C85 83 110 76 140 76 C170 76 195 83 195 92 L195 116 C195 125 170 132 140 132 C110 132 85 125 85 116 Z"
          fill="url(#db-side)"
        />
        <ellipse cx="140" cy="92" rx="55" ry="16" fill="url(#db-top)" />
      </g>

      {/* Connecting Pipe / Data Flow Node */}
      <g filter="url(#db-shadow)">
        <circle cx="80" cy="80" r="14" fill="url(#pipe)" />
        <circle cx="76" cy="76" r="4" fill="#FFFFFF" fillOpacity="0.75" />
        <path d="M80 94 L80 130" stroke="url(#pipe)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="80" cy="130" r="8" fill="url(#db-top)" />
      </g>
    </svg>
  );
}

export function Automation3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="gear-main" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F9F2EB" />
          <stop offset="85%" stopColor="#E6D1BD" />
          <stop offset="100%" stopColor="#C99E7F" />
        </radialGradient>
        <linearGradient id="gear-small" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4E9DD" />
          <stop offset="100%" stopColor="#D5B69E" />
        </linearGradient>
        <filter id="gear-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Main Large Cogwheel */}
      <g filter="url(#gear-shadow)" transform="translate(115, 115)">
        <circle cx="0" cy="0" r="46" fill="url(#gear-main)" />
        {/* Teeth around perimeter */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x="-7"
            y="-56"
            width="14"
            height="18"
            rx="4"
            fill="url(#gear-main)"
            transform={`rotate(${deg})`}
          />
        ))}
        {/* Center bore cutout */}
        <circle cx="0" cy="0" r="19" fill="#E4CFBC" />
        <circle cx="0" cy="0" r="14" fill="#F8EFE7" />
      </g>

      {/* Secondary Companion Gear */}
      <g filter="url(#gear-shadow)" transform="translate(56, 130)">
        <circle cx="0" cy="0" r="28" fill="url(#gear-small)" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <rect
            key={deg}
            x="-4"
            y="-35"
            width="8"
            height="12"
            rx="2.5"
            fill="url(#gear-small)"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle cx="0" cy="0" r="10" fill="#EAD9C9" />
      </g>
    </svg>
  );
}

export function Maintenance3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="tool-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F6ECE1" />
          <stop offset="100%" stopColor="#E2CDBA" />
        </linearGradient>
        <linearGradient id="tool-wrench" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9F1EA" />
          <stop offset="50%" stopColor="#DCB89F" />
          <stop offset="100%" stopColor="#A86F4E" />
        </linearGradient>
        <filter id="tool-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* 3D Shield Base */}
      <g filter="url(#tool-shadow)" transform="rotate(-6 125 110)">
        <path
          d="M80 65 C80 65 125 50 170 65 C170 115 145 155 125 168 C105 155 80 115 80 65 Z"
          fill="url(#tool-shield)"
        />
        <path
          d="M90 75 C90 75 125 64 160 75 C160 115 140 145 125 156 C110 145 90 115 90 75 Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeOpacity="0.8"
        />
      </g>

      {/* 3D Wrench Tool */}
      <g filter="url(#tool-shadow)" transform="rotate(35 125 105)">
        <rect x="118" y="55" width="14" height="75" rx="7" fill="url(#tool-wrench)" />
        {/* Wrench Head */}
        <path
          d="M110 45 C110 32 120 22 135 22 C142 22 148 25 152 30 L138 44 L138 52 L146 52 L160 38 C163 42 165 48 165 55 C165 70 152 80 137 80 C122 80 110 68 110 45 Z"
          fill="url(#tool-wrench)"
        />
      </g>
    </svg>
  );
}
