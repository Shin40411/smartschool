'use client';

import { AboutHero } from '../about-hero';
import { AboutWhat } from '../about-what';
import { AboutTeam } from '../about-team';
import { AboutVision } from '../about-vision';
import { AboutTestimonials } from '../about-testimonials';
import { HomeTestimonials } from 'src/sections/home/home-testimonials';
import { HomeFAQs } from 'src/sections/home/home-faqs';

// ----------------------------------------------------------------------

export function AboutView() {
  return (
    <>
      <AboutHero />

      {/* <AboutWhat />

      <AboutVision />

      <AboutTeam /> */}

      {/* <AboutTestimonials /> */}

      <HomeTestimonials />
      <HomeFAQs />
    </>
  );
}
