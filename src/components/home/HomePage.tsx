"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Technologies } from "@/components/sections/Technologies";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";
import { ParallaxCloser } from "@/components/sections/ParallaxCloser";
import { TeamGallery } from "@/components/sections/TeamGallery";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <FeaturedWork />
      <Technologies />
      <WhyUs />
      <Process />
      <Industries />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
      <ParallaxCloser />
      <TeamGallery />
    </>
  );
}
