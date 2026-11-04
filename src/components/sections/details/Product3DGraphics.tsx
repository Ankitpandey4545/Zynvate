import type { SVGProps } from "react";

export function SaasPlatforms3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="sp-cloud" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F9F1EA" />
          <stop offset="85%" stopColor="#E6D1BD" />
          <stop offset="100%" stopColor="#C99E7F" />
        </radialGradient>
        <linearGradient id="sp-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDFB" />
          <stop offset="100%" stopColor="#E9D6C4" />
        </linearGradient>
        <filter id="sp-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#sp-shadow)">
        <circle cx="115" cy="115" r="34" fill="url(#sp-cloud)" />
        <circle cx="145" cy="125" r="28" fill="url(#sp-cloud)" />
        <circle cx="85" cy="128" r="26" fill="url(#sp-cloud)" />
        <circle cx="140" cy="95" r="24" fill="url(#sp-cloud)" />
        <rect x="75" y="118" width="95" height="34" rx="17" fill="url(#sp-cloud)" />
      </g>
      <g filter="url(#sp-shadow)" transform="rotate(-6 120 70)">
        <rect x="65" y="35" width="105" height="52" rx="12" fill="url(#sp-card)" />
        <circle cx="82" cy="50" r="5" fill="#C48E70" />
        <rect x="94" y="47" width="45" height="6" rx="3" fill="#D3BAA3" />
        <rect x="80" y="66" width="75" height="10" rx="5" fill="#7A4426" fillOpacity="0.85" />
      </g>
    </svg>
  );
}

export function BusinessTools3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bt-doc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F7EFE7" />
          <stop offset="100%" stopColor="#E4CCA8" />
        </linearGradient>
        <linearGradient id="bt-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DEBAA2" />
          <stop offset="100%" stopColor="#7A4426" />
        </linearGradient>
        <filter id="bt-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#bt-shadow)" transform="rotate(-8 105 95)">
        <rect x="45" y="25" width="115" height="135" rx="16" fill="url(#bt-doc)" />
        <rect x="62" y="45" width="45" height="8" rx="4" fill="#CBB19B" />
        <rect x="62" y="65" width="80" height="6" rx="3" fill="#DFCEBE" />
        <rect x="62" y="80" width="70" height="6" rx="3" fill="#DFCEBE" />
        <rect x="62" y="95" width="80" height="6" rx="3" fill="#DFCEBE" />
        <rect x="62" y="115" width="80" height="24" rx="8" fill="#F4E8DC" />
        <circle cx="132" cy="127" r="6" fill="url(#bt-accent)" />
      </g>
    </svg>
  );
}

export function InternalApps3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="ia-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDFB" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="ia-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EED9C7" />
          <stop offset="100%" stopColor="#DDBFA9" />
        </linearGradient>
        <linearGradient id="ia-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFA88E" />
          <stop offset="100%" stopColor="#BD9074" />
        </linearGradient>
        <filter id="ia-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#7A4426" floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#ia-shadow)">
        <rect x="40" y="35" width="130" height="115" rx="18" fill="url(#ia-top)" stroke="#E5D3C1" strokeWidth="2" />
        <rect x="52" y="50" width="32" height="88" rx="10" fill="url(#ia-left)" />
        <rect x="92" y="50" width="66" height="26" rx="8" fill="url(#ia-right)" />
        <rect x="92" y="84" width="66" height="54" rx="8" fill="#FBF8F4" />
        <circle cx="106" cy="102" r="6" fill="#7A4426" />
        <rect x="118" y="99" width="30" height="6" rx="3" fill="#D3BAA3" />
      </g>
    </svg>
  );
}

export function AutomationProducts3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="ap-gear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F6ECE1" />
          <stop offset="100%" stopColor="#D7B69C" />
        </linearGradient>
        <filter id="ap-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="8" stdDeviation="7" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#ap-shadow)" transform="translate(110, 95)">
        <circle cx="0" cy="0" r="42" fill="url(#ap-gear)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x="-6"
            y="-52"
            width="12"
            height="16"
            rx="3.5"
            fill="url(#ap-gear)"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle cx="0" cy="0" r="18" fill="#DFCEBE" />
        <circle cx="0" cy="0" r="12" fill="#FBF8F5" />
      </g>
      <g filter="url(#ap-shadow)">
        <path d="M45 130 C45 80 85 55 125 55" stroke="#7A4426" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 6" />
        <circle cx="45" cy="130" r="10" fill="#7A4426" />
        <circle cx="45" cy="130" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function CustomerFacing3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="cf-portal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F9F2EB" />
          <stop offset="100%" stopColor="#DFBEA5" />
        </linearGradient>
        <filter id="cf-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#7A4426" floodOpacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#cf-shadow)" transform="rotate(-5 105 90)">
        <rect x="45" y="25" width="118" height="135" rx="22" fill="url(#cf-portal)" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="70" cy="52" r="12" fill="#E4CCA8" />
        <rect x="90" y="46" width="55" height="8" rx="4" fill="#D3BAA3" />
        <rect x="90" y="58" width="38" height="6" rx="3" fill="#EAD9C9" />
        <rect x="60" y="82" width="88" height="60" rx="14" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="104" cy="112" r="16" fill="#7A4426" />
        <path d="M100 112 L103 115 L109 108" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function CustomDigital3D(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="cd-cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDFB" />
          <stop offset="100%" stopColor="#F5ECE2" />
        </linearGradient>
        <linearGradient id="cd-cube-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EED9C7" />
          <stop offset="100%" stopColor="#DDBFA9" />
        </linearGradient>
        <linearGradient id="cd-cube-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFA88E" />
          <stop offset="100%" stopColor="#BD9074" />
        </linearGradient>
        <filter id="cd-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#7A4426" floodOpacity="0.18" />
        </filter>
      </defs>
      <g filter="url(#cd-shadow)">
        <path d="M110 50 L155 75 L110 100 L65 75 Z" fill="url(#cd-cube-top)" />
        <path d="M65 75 L110 100 L110 150 L65 125 Z" fill="url(#cd-cube-left)" />
        <path d="M110 100 L155 75 L155 125 L110 150 Z" fill="url(#cd-cube-right)" />
      </g>
      <g filter="url(#cd-shadow)" transform="translate(-10, 20)">
        <path d="M140 45 L165 58 L140 71 L115 58 Z" fill="url(#cd-cube-top)" />
        <path d="M115 58 L140 71 L140 96 L115 83 Z" fill="url(#cd-cube-left)" />
        <path d="M140 71 L165 58 L165 83 L140 96 Z" fill="url(#cd-cube-right)" />
      </g>
    </svg>
  );
}
