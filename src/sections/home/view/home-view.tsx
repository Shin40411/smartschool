'use client';

import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomeZoneUI } from '../home-zone-ui';
import { HomePricing } from '../home-pricing';
import { HomeTestimonials } from '../home-testimonials';
import { ProductShopView } from 'src/sections/product/view';
import { IProductItem } from 'src/types/product';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------
type Props = {
  products: IProductItem[];
};

export function HomeView({ products }: Props) {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <BackToTopButton />

      <Stack sx={{ position: 'relative' }}>
        <HomeHero />
        <HomePricing sx={{ position: 'absolute', bgcolor: 'transparent' }} />
      </Stack>

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>

        <ProductShopView products={products} allowTitle allowFilters={false} allowPagination={false} limitData={8} />

        <HomeZoneUI />

        <HomeTestimonials />

        <HomeFAQs />

      </Stack>
    </>
  );
}
