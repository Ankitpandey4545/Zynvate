import type { ImageAsset } from "@/lib/types";

const photo = (id: string, alt: string): ImageAsset => ({
  src: `/photos/pages/${id}.jpg`,
  width: 1600,
  height: 1100,
  alt,
  credit: "Unsplash",
  isPlaceholder: true,
});

export type PageVisual = { story: ImageAsset; detail: ImageAsset };

/** One pair of photos per detail page, so product and service pages do not share a picture. */
export const pageVisuals: Record<string, PageVisual> = {
  "web-development": {
    story: photo("photo-1460925895917-afdab827c52f", "Analytics dashboard on a laptop in a bright workspace"),
    detail: photo("photo-1498050108023-c5249f4df085", "Developer workspace with code on a laptop"),
  },
  "mobile-app-development": {
    story: photo("photo-1512941937669-90a1b58e7e9c", "Hands holding a phone showing a mobile app"),
    detail: photo("photo-1516321318423-f06f85e504b3", "Person using a smartphone at a desk"),
  },
  "custom-software": {
    story: photo("photo-1555066931-4365d14bab8c", "Code on a monitor during a software build"),
    detail: photo("photo-1519389950473-47ba0277781c", "Engineering team working across several screens"),
  },
  "saas-development": {
    story: photo("photo-1551288049-bebda4e38f71", "Product dashboard with charts on a desktop display"),
    detail: photo("photo-1467232004584-a241de8bcf5d", "Designer reviewing a web product on a laptop"),
  },
  "ui-ux-design": {
    story: photo("photo-1561070791-2526d30994b5", "Design tools and colour studies on a desk"),
    detail: photo("photo-1586717791821-3f44a563fa4c", "Interface sketches spread across a work table"),
  },
  "backend-api-development": {
    story: photo("photo-1558494949-ef010cbdcc31", "Server room representing backend infrastructure"),
    detail: photo("photo-1544197150-b99a580bb7a8", "Network hardware in a data room"),
  },
  "business-automation": {
    story: photo("photo-1518770660439-4636190af475", "Circuit board suggesting automated systems"),
    detail: photo("photo-1485827404703-89b55fcc595e", "Robot arm standing in for repetitive work"),
  },
  "maintenance-support": {
    story: photo("photo-1581091226825-a6a2a5aee158", "Engineer inspecting equipment during support work"),
    detail: photo("photo-1581092918056-0c4c3acd3789", "Technical maintenance on a workbench"),
  },
  "saas-platforms": {
    story: photo("photo-1551434678-e076c223a692", "Team reviewing a SaaS product on screen"),
    detail: photo("photo-1542744173-8e7e53415bb0", "Workshop around a product roadmap"),
  },
  "business-tools": {
    story: photo("photo-1554224155-6726b3ff858f", "Calculator, notebook and laptop used for day-to-day business work"),
    detail: photo("photo-1454165804606-c3d57bc86b40", "Planning a business workflow with notes and a laptop"),
  },
  "internal-applications": {
    story: photo("photo-1553877522-43269d4ea984", "Operations team working from a shared internal system"),
    detail: photo("photo-1600880292203-757bb62b4baf", "Colleagues coordinating work across a table"),
  },
  "automation-products": {
    story: photo("photo-1504384308090-c894fdcc538d", "Office floor where routine work can be automated"),
    detail: photo("photo-1517245386807-bb43f82c33c4", "Team meeting about a workflow that should run itself"),
  },
  "customer-facing-platforms": {
    story: photo("photo-1556742049-0cfed4f6a45d", "Customer paying through a phone at a counter"),
    detail: photo("photo-1472851294608-062f824d29cc", "Storefront prepared for online orders"),
  },
  "custom-digital-products": {
    story: photo("photo-1522071820081-009f0129c71c", "Product team shaping a new digital idea"),
    detail: photo("photo-1552664730-d307ca884978", "Workshop turning a concept into a working product"),
  },
};

export function getPageVisual(slug: string): PageVisual {
  return (
    pageVisuals[slug] ?? {
      story: photo("photo-1522071820081-009f0129c71c", "Product team shaping a new digital idea"),
      detail: photo("photo-1552664730-d307ca884978", "Workshop turning a concept into a working product"),
    }
  );
}
