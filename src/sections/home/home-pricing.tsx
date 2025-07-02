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
            overflow: 'hidden',
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
              transition: 'background 0.3s',
            },
            "& .bg-image": {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -2,
              backgroundImage: `url(${plan.bg_image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
              willChange: 'transform',
            },
            "&:hover .bg-image": {
              transform: 'scale(1.08)',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Box className="bg-image" />

        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {plan.icons.map((icon, index) => (
            <Box
              key={icon}
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 2,
              }}
            >
              <Box
                component={m.img}
                variants={varFade('in')}
                alt={`icon-${index}`}
                src={icon}
                draggable={false}
                sx={{
                  width: 40,
                  height: 40,
                  opacity: '1 !important',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Title & underline */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <m.div variants={varFade('inLeft', { distance: 24 })}>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', cursor: 'default' }}>
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
    'Xe Tự Hành STEM – Giải pháp học lập trình và công nghệ thông minh',
    'Khóa học thực hành xe tự hành – Tăng cường kỹ năng công nghệ cho học sinh',
    'Giám sát, điều khiển và tự động hóa – Ứng dụng thực tiễn với xe tự hành giáo dục'
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
    '#715cc5',
    '#715cc5',
    '#715cc5'
  ][index],
  bg_image: [
    `${CONFIG.assetsDir}/assets/images/mock/m-product/robotnew.jpg`,
    `${CONFIG.assetsDir}/assets/images/mock/course/course-2.webp`,
    `${CONFIG.assetsDir}/assets/images/mock/m-product/security.png`
  ][index],
}));
