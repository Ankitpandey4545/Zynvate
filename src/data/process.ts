import type { ProcessStep } from "@/lib/types";

export const processIntro = {
  eyebrow: "06 / Process",
  title: "From idea to launch.",
  description:
    "Six stages we run so a product moves from a rough idea to a release you can stand behind.",
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We learn the idea, who it is for, and what a useful outcome looks like.",
    command: "zyn understand --brief",
    output: "✓ goals, users and outcome captured",
  },
  {
    number: "02",
    title: "Plan",
    description: "We shape the scope, the sequence, and the decisions that need to happen first.",
    command: "zyn plan --scope",
    output: "✓ scope, sequence and first decisions set",
  },
  {
    number: "03",
    title: "Design",
    description: "We turn the plan into screens and flows you can react to.",
    command: "zyn design --flows",
    output: "✓ screens and flows ready for review",
  },
  {
    number: "04",
    title: "Build",
    description: "We develop the product in working increments you can review.",
    command: "zyn build --incremental",
    output: "✓ working increments ready for review",
  },
  {
    number: "05",
    title: "Test",
    description: "We check behavior and edge cases before anything goes live.",
    command: "zyn test --edge-cases",
    output: "✓ behavior checked before release",
  },
  {
    number: "06",
    title: "Launch",
    description: "We release, watch the first real use, and hand over what you need to run it.",
    command: "zyn launch --handover",
    output: "✓ released and handed over",
  },
];
