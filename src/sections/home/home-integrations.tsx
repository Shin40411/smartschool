import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/global-config';

import { varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';
import { Button, Card } from '@mui/material';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(-50%)',
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeIntegrations({ sx, ...other }: BoxProps) {
  const renderButtons = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        mt: 2
      }}
    >
      <Button
        component={RouterLink}
        href={paths.contact}
        color="primary"
        size="large"
        variant="contained"
      >
        Đăng ký tư vấn
      </Button>
    </Box>
  );
  const renderDescription = () => (
    <SectionTitle
      caption="STEM IIT"
      title="Tại sao chọn"
      txtGradient="STEM IIT"
      description={
        <>
          <Box component="span" sx={{ mb: 1, display: 'block', color: '#fff' }}>
            Các bộ sản phẩm như xe tự hành, cảm biến phát hiện rò rỉ nước, hệ thống dò line, điều khiển qua Bluetooth,... đều được thiết kế chuyên biệt cho môi trường giáo dục và nghiên cứu.
          </Box>
          {/* <Box sx={{ mb: 5, display: 'block'}}> */}
          {/* Chương trình học luôn cập nhật theo xu hướng công nghệ mới, giúp học sinh phát triển tư duy sáng tạo, kỹ năng thực hành và khả năng làm việc nhóm hiệu quả. */}
          {/* </Box> */}
          <Box
            component="span"
            sx={{ fontStyle: 'italic', color: '#fff', typography: 'caption', mb: 10 }}
          >
            * Phù hợp với mọi cấp học từ Tiểu học đến THPT.
            <br />* Tích hợp lập trình Arduino, IoT, tự động hóa và kỹ năng giải quyết vấn đề.
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2,
              color: '#fff',
              typography: 'body1',
              fontWeight: 500,
              gap: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                mr: 1,
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                style={{ display: 'block' }}
              >
                <path
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                  fill="#fff"
                />
              </svg>
            </Box>
            (+84) 368 909 968
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              color: '#fff',
              typography: 'body1',
              fontWeight: 500,
              gap: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(120deg, #2196F3 10%, #21CBF3 90%)',
                mr: 1,
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                style={{ display: 'block' }}
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                  fill="#fff"
                />
              </svg>
            </Box>
            info@iit.vn
          </Box>
          {renderButtons()}
        </>
      }
      sx={{ textAlign: { xs: 'center', md: 'left', color: '#fff', justifyContent: 'center' } }}
    />
  );

  const renderImage = () => (
    <Box
      component={m.img}
      variants={{ ...varScale('in'), initial: { scale: 0.8, opacity: 0 } }}
      alt="Integration"
      src={`${CONFIG.assetsDir}/assets/illustrations/characters/character-study.webp`}
      sx={{
        width: 200,
        objectFit: 'cover',
        aspectRatio: '0/1',
        position: 'relative',
        zIndex: 2,
        borderRadius: 2,
      }}
      draggable={false}
    />
  );

  return (
    <Box
      component="section"
      sx={[{ pt: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        {/* {renderLines()} */}

        <Container>
          <Card
            sx={{
              background: 'linear-gradient(135deg,rgb(14, 24, 31) 0%, #2196F3 100%)',
              borderRadius: 4,
              p: { xs: 0, md: 0 },
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }}>
              <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ p: 5 }}>{renderDescription()}</Grid>

              <Grid
                sx={{
                  textAlign: { xs: 'center', md: 'center' },
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${CONFIG.assetsDir}/assets/background/bg-tech.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 3,
                  p: 6,
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backdropFilter: 'blur(2px)',
                    zIndex: -1,
                  }, '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '30%',
                    zIndex: -1,
                  },
                }}
                size={{ xs: 12, md: 6, lg: 6 }}>
                {renderImage()}
              </Grid>
            </Grid>
          </Card>
        </Container>
      </MotionViewport>
    </Box>
  );
}

