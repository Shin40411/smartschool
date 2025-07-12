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
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeForDesigner } from '../home-for-designer';
import { HomeMinimal } from '../home-minimal';
import { Box, Divider } from '@mui/material';
import SocialPopin from 'src/components/socials/socical-popin';
import WaveParallax from 'src/components/animate/wave-paralax';
import { FloatLine, FloatXIcon } from '../components/svg-elements';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------
// type Props = {
//   posts: IPostItem[];
// };

export function HomeView() {
  const pageProgress = useScrollProgress();
  const settings = useSettingsContext();
  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <BackToTopButton />

      <Stack sx={{ position: 'relative', mt: { xs: 2, md: 0 } }}>
        <HomeHero />
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          background:
            settings.state.colorScheme === 'light'
              ? 'linear-gradient(50deg, rgb(255, 255, 255) 80%, #2196F3 20%)'
              : undefined,
        }}
      >
        <HomeMinimal />
        <>
          <FloatLine sx={{ top: 0, left: 0 }} />
          <FloatXIcon sx={{ top: -8, left: 72 }} />
        </>
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          mt: { xs: 5, md: -10 },
          backgroundImage:
            settings.state.colorScheme === 'light'
              ? `url(${CONFIG.assetsDir}/assets/background/ser-ab-7-1.png)`
              : undefined,
        }}
        spacing={8}
      >
        <HomeIntegrations sx={{ mb: { xs: 5, md: 0 } }} />
        <HomePricing sx={{ display: { xs: 'none', md: 'block' } }} />
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          // background: 'linear-gradient(-50deg,rgb(255, 255, 255) 80%, #2196F3 20%)'
        }}
      >
        <HomeZoneUI />
      </Stack>
      <Stack sx={{ mt: 5 }}>
        <ProductShopView
          allowTitle
          allowFilters={false}
          allowPagination={false}
          limitData={12}
          customTitle='Sản Phẩm Nổi Bật'
          customTitleStyle={(theme) => ({
            color: '#00B8D9',
            fontWeight: 700,
            textAlign: 'center',
            mb: 10,
          })}
        />

        {/* <PostListHomeView posts={posts}
          CustomTitle='Tin tức & bài viết mới nhất'
          customTitleStyle={() => ({
        color: '#00B8D9',
        fontWeight: 700,
        textAlign: 'center',
        mb: 5,
          })}
          allowFilters={false}
          limitData={3}
        /> */}

        <HomeTestimonials />

        <HomeFAQs />
      </Stack>
    </>
  );
}
