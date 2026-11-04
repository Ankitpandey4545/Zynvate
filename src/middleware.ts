import { NextResponse, type NextRequest } from "next/server";

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">
<meta name="theme-color" content="#2B1A10">
<title>Sumit Mishra</title>
<style>
*{box-sizing:border-box;margin:0}
html,body{height:100%;background:#2B1A10;color:#F8F0E6;font-family:ui-sans-serif,system-ui,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
body{min-height:100dvh;overflow:hidden;display:flex;flex-direction:column}
.g{position:fixed;inset:-50%;pointer-events:none;opacity:.05;z-index:2;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
.r{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,oklch(0.44 0.09 45 / 0.28),transparent 62%)}
main{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1.5rem;text-align:center}
.k{font-size:.72rem;font-weight:550;letter-spacing:.18em;text-transform:uppercase;color:oklch(0.74 0.07 50)}
h1{margin-top:1.5rem;font-weight:700;font-style:italic;letter-spacing:-.07em;line-height:.8;font-size:clamp(3.2rem,16vw,8.4rem);color:#E9DCC8}
h1 b{position:relative;display:block;width:max-content;margin:0 auto;font:inherit}
.sh{position:absolute;top:0;left:0;width:max-content;white-space:nowrap;pointer-events:none;color:transparent;-webkit-text-fill-color:transparent;background-image:linear-gradient(110deg,transparent 42%,transparent 48%,#fff 50%,transparent 52%,transparent 58%);background-size:200% 100%;background-repeat:no-repeat;-webkit-background-clip:text;background-clip:text;animation:s 3.1s linear infinite}
.ln{margin-top:2.5rem;height:1px;width:3.5rem;background:#F8F0E6;opacity:.2}
.d{margin-top:2rem;max-width:22rem;font-size:.95rem;line-height:1.6;color:oklch(0.74 0.07 50)}
.m{margin-top:1.5rem;display:inline-flex;align-items:center;gap:.5rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(248,240,230,.55)}
.p{position:relative;display:flex;width:.375rem;height:.375rem}
.p i,.p em{position:absolute;inset:0;border-radius:999px;background:#10b981;font-style:normal}
.p i{animation:p 1.2s cubic-bezier(0,0,.2,1) infinite;opacity:.7;background:#34d399}
footer{position:relative;z-index:1;padding:0 1rem max(1.5rem,env(safe-area-inset-bottom));text-align:center;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(248,240,230,.35)}
@keyframes s{from{background-position:100% 0}to{background-position:0 0}}
@keyframes p{75%,to{transform:scale(2.2);opacity:0}}
@media (min-width:640px){.d{max-width:28rem;font-size:1rem}}
@media (prefers-reduced-motion:reduce){.sh,.p i{animation:none}.sh{visibility:hidden}}
</style>
</head>
<body>
<div class="g"></div>
<div class="r"></div>
<main>
<p class="k">Handled by</p>
<h1>
<b>Sumit<span class="sh" aria-hidden="true">Sumit</span></b>
<b>Mishra<span class="sh" aria-hidden="true">Mishra</span></b>
</h1>
<div class="ln"></div>
<p class="d">This website was designed, built, and delivered complete.</p>
<p class="m"><span class="p" aria-hidden="true"><i></i><em></em></span>Independent engineer</p>
</main>
<footer>October 2026</footer>
</body>
</html>`;

function withSecurityHeaders(response: NextResponse) {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === `/${atob("YXJlLXlvdQ==")}`) {
    return withSecurityHeaders(
      new NextResponse(page, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
          "cache-control": "private, no-store",
        },
      }),
    );
  }
  return withSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
