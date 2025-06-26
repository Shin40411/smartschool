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
import { CONFIG } from 'src/global-config';
import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------
// type Props = {
//   posts: IPostItem[];
// };

export function HomeView() {
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
        <HomePricing sx={{ position: 'relative', backgroundImage: `url(${CONFIG.assetsDir}/assets/background/ser-ab-7-1.png)`, }} />
      </Stack>

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>

        <ProductShopView
          allowTitle
          allowFilters={false}
          allowPagination={false}
          limitData={8}
          customTitle='Sản Phẩm Nổi Bật'
          customTitleStyle={(theme) => ({
            color: '#2196F3',
            fontWeight: 700,
            textAlign: 'center',
            mb: 3,
          })}
        />

        {/* <PostListHomeView posts={posts}
          CustomTitle='Tin tức & bài viết mới nhất'
          customTitleStyle={() => ({
            color: '#2196F3',
            fontWeight: 700,
            textAlign: 'center',
            mb: 5,
          }
          )}
          allowFilters={false}
          limitData={3}
        /> */}

        <HomeZoneUI />

        <HomeTestimonials />

        <HomeFAQs />

      </Stack>
    </>
  );
}
