import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';
import type { MotionProps, MotionValue, SpringOptions } from 'framer-motion';

import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { HeroBackground } from './components/hero-background';
import { SectionTitle } from './components/section-title';


// ----------------------------------------------------------------------

const lgKey: Breakpoint = 'lg';

export function HomeHero({ sx, ...other }: BoxProps) {

  const renderHeading = () => (
    <m.div>
      <Box
        sx={[
          (theme) => ({
            my: 0,
            mx: 'auto',
            maxWidth: 680,
            display: 'flex',
            flexWrap: 'wrap',
            typography: 'h5',
            justifyContent: 'center',
            fontFamily: theme.typography.fontSecondaryFamily,
            [theme.breakpoints.up(lgKey)]: {
              fontSize: 35,
            },
          }),
        ]}
      >
        <SectionTitle
          caption="STEM IIT"
          title="Sản phẩm Giáo Dục"
          txtGradient="STEM IIT"
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
        />
      </Box>
    </m.div>
  );

  const renderText = () => (
    <Typography
      variant="body2"
      sx={[
        (theme) => ({
          mx: 'auto',
          [theme.breakpoints.up(lgKey)]: { fontSize: 18, lineHeight: '36px' },
        }),
      ]}
    >
      {`Đồng hành cùng nhà trường nâng cao khả năng quản trị, đào tạo, phát triển giáo dục, góp phần đẩy mạnh quá trình chuyển đổi số của nhà trường.`}
    </Typography>
  );

  const renderButtons = () => (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 1.5, sm: 2 },
      }}
    >
      <m.div>
        <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
          <Button
            component={RouterLink}
            href={paths.contact}
            color="primary"
            size="large"
            variant="contained"
          >
            <span>
              Đăng ký tư vấn
            </span>
          </Button>
        </Stack>
      </m.div>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundImage: `url(${CONFIG.assetsDir}/assets/background/backgroundhero.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        minHeight: { xs: '800px', md: '830px' },
        height: '100vh',
        maxHeight: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
        px: { xs: 2, md: 45 },
        '@media (max-width:1103px) and (min-width:425px)': {
          px: 10
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '70%',
            lg: '60%',
            xl: '50%',
          },
          '@media (max-width:1024px)': {
            width: 720,
            marginRight: 'auto',
            marginLeft: 0,
          },
          '@media (min-width:1536px)': {
            width: 600,
            marginRight: 'auto',
            marginLeft: 0,
          },
          '@media (max-width:1403px)': {
            width: 500,
            marginRight: 'auto',
            marginLeft: 0,
          },
          '@media (max-width:1103px)': {
            width: 720,
            marginRight: 'auto',
            marginLeft: 0,
          },
          backgroundColor: '#00000096',
          padding: {
            xs: 2,
            sm: 3,
            md: 6,
          },
          clipPath:
            'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          WebkitClipPath:
            'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
          color: '#fff',
          animation: 'floatGlow 4s ease-in-out infinite',
          position: 'relative',
          zIndex: 1,

          mx: {
            xs: 'auto',
            sm: 'auto',
            md: 0,
            lg: 0,
            xl: 0,
          },
          ml: {
            lg: 0,
            xl: 0,
          },

          '@keyframes floatGlow': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        }}
      >
        <Stack spacing={3} sx={{ textAlign: 'center', py: { xs: 10, md: 10 }, zIndex: 5 }}>
          <m.div>{renderHeading()}</m.div>
          <m.div>{renderText()}</m.div>
          <m.div>{renderButtons()}</m.div>
        </Stack>
      </Box>
    </Box>
  );
}
