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
        <Box component="span" sx={{ width: 1 }}>
          Giải Pháp Công Nghệ Toàn Diện Cho
          Trường Học Thông Minh
        </Box>
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
            href={paths.dashboard.root}
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
        backgroundPosition: 'center',
        minHeight: '830px',
        height: '100vh',
        maxHeight: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
        px: { xs: 2, md: 45 },
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80%',
            md: '100%',
            lg: '60%',
            xl: '60%',
          },
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: {
            xs: 2,
            sm: 3,
            md: 5,
          },
          padding: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Stack spacing={3} sx={{ textAlign: 'center', py: { xs: 5, md: 10 } }}>
          <m.div>{renderHeading()}</m.div>
          <m.div>{renderText()}</m.div>
          <m.div>{renderButtons()}</m.div>
        </Stack>
      </Box>

      {/* <HeroBackground /> */}
    </ Box>
  );
}
