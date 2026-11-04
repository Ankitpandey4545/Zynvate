import type { WhyUsItem } from "@/lib/types";

export const whyIntro = {
  eyebrow: "05 / Why ZYNOVATE",
  title: "Why choose ZYNOVATE.",
  description:
    "Practical reasons to work with us, from the first requirement through support after launch.",
};

export const whyUs: WhyUsItem[] = [
  {
    title: "Requirement-focused",
    signal: "scope.from(requirements)",
    description:
      "We start from the problem you need solved and the people who will use the product.",
  },
  {
    title: "Custom solutions",
    signal: "build.custom({ template: false })",
    description: "The work follows your workflow and constraints, rather than a generic package.",
  },
  {
    title: "Modern technology",
    signal: "stack.select({ fit: true })",
    description: "We choose current, well-supported tools because they fit the product.",
  },
  {
    title: "Scalable architecture",
    signal: 'architecture.prepare("next feature")',
    description: "We structure the build so later features have a sensible place to land.",
  },
  {
    title: "Transparent communication",
    signal: "status.share({ often: true })",
    description: "You hear where the work stands, what is next, and what a change will affect.",
  },
  {
    title: "Flexible engagement",
    signal: 'engagement.scope("agreed first")',
    description:
      "We can take a focused first release or a longer build. Scope is agreed before we start.",
  },
  {
    title: "Product mindset",
    signal: 'product.think("beyond v1")',
    description:
      "We look at how the product will be used and looked after, not only at the first feature list.",
  },
  {
    title: "End-to-end development",
    signal: 'pipeline.run("idea → launch")',
    description:
      "Discovery, design, engineering, and launch can stay with one team so the product stays coherent.",
  },
  {
    title: "Post-launch support",
    signal: 'support.after("release")',
    description: "After release we can stay on for fixes, adjustments, and the next slice of work.",
  },
];
