import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `url(${CONFIG.assetsDir}/assets/background/overlay.svg)`,
              `url(${CONFIG.assetsDir}/assets/images/mock/m-product/vision.jpg)`,
            ],
          }),
          height: { md: 560 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['Sản phẩm Giáo Dục Stem Bắc Nam', 'là gì?']}
            variants={varFade('inRight', { distance: 50 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="4"]`]: { color: 'primary.main' },
              },
            }}
          />

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="h4"
              sx={{ mt: 3, color: 'common.white', fontWeight: 'fontWeightSemiBold', textAlign: { xs: 'center', md: 'justify' } }}
            >
              Giáo dục thông minh đã và đang trở thành xu thế mới của nền giáo dục trên thế giới,
              <br /> hướng đến mục tiêu xây dựng các thế hệ công dân thông minh nhằm xây dựng quốc gia thông minh.
              <br /> Sản phẩm giáo dục Stem Bắc Nam là mô hình trường tiên tiến, tạo điều kiện
              <br /> và cơ hội để tăng cường năng lực phát triển, thích ứng trước những biến đổi nhanh chóng của xã hội.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
