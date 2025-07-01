import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useTabs } from 'minimal-shared/hooks';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatXIcon } from './components/svg-elements';
import { IconButton } from '@mui/material';

// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }: BoxProps) {
  const tabs = useTabs(PLANS[0].license);
  const renderContentDesktop = () => (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-between',
        px: 2,
        gap: 3,
      }}
    >
      {PLANS.map((plan) => (
        <PlanCard
          key={plan.license}
          plan={plan}
          sx={(theme) => ({
            borderRadius: 2,
            flex: 1,
            color: theme.palette.common.white,
            zIndex: 1,
          })}
        />
      ))}
    </Box>
  );

  const bottomLines = () => (
    <>
      {/* <FloatLine sx={{ top: 0, left: 0 }} /> */}
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      {/* <FloatPlusIcon sx={{ top: -8, left: 72 }} /> */}
      {/* <FloatPlusIcon sx={{ bottom: -8, left: 72 }} /> */}
    </>
  );

  const renderContentMobile = () => (
    <Stack spacing={5} alignItems="center" sx={{ display: { md: 'none' } }}>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={(theme) => ({
          boxShadow: `0px -2px 0px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)} inset`,
          bgcolor: '#fff',
          px: 2,
          borderRadius: 2,
        })}
      >
        {PLANS.map((tab) => (
          <Tab key={tab.license} value={tab.license} label={tab.license} />
        ))}
      </Tabs>

      <Box
        sx={(theme) => ({
          width: 1,
          borderRadius: 2,
          border: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
        })}
      >
        {PLANS.map(
          (tab) => tab.license === tabs.value && <PlanCard key={tab.license} plan={tab}
            sx={(theme) => ({
              zIndex: 1,
              color: theme.palette.common.white,
            })} />
        )}
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ pb: 10, top: 0, right: 0, left: 0 }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          position: 'relative',
        })}
      >
        <Container>{renderContentDesktop()}</Container>
      </Box>

      <Container>{renderContentMobile()}</Container>
      {bottomLines()}
    </Box>
  );
}

// ----------------------------------------------------------------------

type PlanCardProps = BoxProps & {
  plan: {
    license: string;
    // price: number;
    commons: string[];
    icons: string[];
    bg_color: string;
    bg_image?: string;
  };
};

function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  return (
    <MotionViewport>
      <Box
        sx={[
          {
            px: 4,
            py: 4,
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundImage: `url(${plan.bg_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2,
            boxShadow: 3,
            height: '100%',
            ":before": {
              bgcolor: plan.bg_color,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              content: '""',
              opacity: 0.9,
              zIndex: -1,
              borderRadius: 2,
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {/* Icons */}
        <Box sx={{
          display: 'none',
          justifyContent: 'center',
          width: 135,
          height: 131,
          alignItems: 'center',
          margin: '-63px auto 20px',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/icons/glass/ser-col-bg7.svg)`,
          backgroundPosition: 'center center',
        }}>
          {plan.icons.map((icon, index) => (
            <Box
              component={m.img}
              variants={varFade('in')}
              key={icon}
              alt={`icon-${index}`}
              src={icon}
              sx={{
                maxWidth: '100%',
                width: 50,
                height: 'auto',
              }}
            />
          ))}
        </Box>

        {/* Title & underline */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <m.div variants={varFade('inLeft', { distance: 24 })}>
              <Typography variant="h4" component="h6" sx={{ textAlign: 'center' }}>
                {plan.license}
              </Typography>
            </m.div>

            {/* <m.div variants={varScale('inX')}>
              <Box
                sx={{
                  width: 32,
                  height: 6,
                  borderRadius: 1,
                  opacity: 0.24,
                  bgcolor: 'primary.main',
                }}
              />
            </m.div> */}
          </Box>
        </Box>

        {/* Feature list */}
        {/* <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Box
              key={option}
              component={m.div}
              variants={varFade('in')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                typography: 'body2',
              }}
            >
              <Iconify width={16} icon="eva:checkmark-fill" />
              {option}
            </Box>
          ))}
        </Stack> */}

        {/* CTA button */}
        {/* <m.div variants={varFade('inUp', { distance: 24 })}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              // href={paths.minimalStore}
              // target="_blank"
              rel="noopener"
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                padding: 2,
                margin: '0 0 -50px 0'
              }}
            >
              <Iconify icon="eva:arrow-ios-forward-fill" width={24} height={24} />
            </IconButton>
          </Box>
        </m.div> */}
      </Box>
    </MotionViewport >
  );
}

// ----------------------------------------------------------------------

const PLANS = Array.from({ length: 3 }, (_, index) => ({
  license: [
    'Sản phẩm Giáo Dục Stem IIT',
    'Đào tạo trực tuyến E-Learning',
    'Kiểm soát an toàn, xác minh truy cập'
  ][index],
  commons: [
    [
      'Quản lý tổng thể các mảng công việc của nhà trường',
    ],
    [
      'Học tập và giảng dạy trực tuyến với các bài giảng điện tử',
    ],
    [
      'Giám sát toàn bộ quá trình hoạt động từ đón trả',
    ],
  ][index],
  icons: [
    [`${CONFIG.assetsDir}/assets/images/cpu-large.png`],
    [`${CONFIG.assetsDir}/assets/images/online-learning-large.png`],
    [`${CONFIG.assetsDir}/assets/images/protection-large.png`],
  ][index],
  bg_color: [
    '#a5871b',
    '#715cc5',
    '#334658'
  ][index],
  bg_image: [
    `${CONFIG.assetsDir}/assets/images/mock/course/course-1.webp`,
    `${CONFIG.assetsDir}/assets/images/mock/course/course-2.webp`,
    `${CONFIG.assetsDir}/assets/images/mock/course/course-3.webp`
  ][index],
}));
