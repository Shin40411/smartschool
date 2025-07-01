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
import { Card } from '@mui/material';

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
  const renderDescription = () => (
    <SectionTitle
      caption="STEM IIT"
      title="Tại sao chọn sản phẩm giáo dục"
      txtGradient="STEM IIT"
      description={
        <>
          <Box component="span" sx={{ mb: 1, display: 'block', color: '#fff' }}>
            Các bộ sản phẩm như xe tự hành, cảm biến phát hiện rò rỉ nước, hệ thống dò line, điều khiển qua Bluetooth,... đều được thiết kế chuyên biệt cho môi trường giáo dục và nghiên cứu.
          </Box>

          <Box
            component="span"
            sx={{ fontStyle: 'italic', color: '#fff', typography: 'caption' }}
          >
            * Phù hợp với mọi cấp học từ Tiểu học đến THPT.
            <br />* Tích hợp lập trình Arduino, IoT, tự động hóa và kỹ năng giải quyết vấn đề.
          </Box>
        </>
      }
      sx={{ textAlign: { xs: 'center', md: 'left', color: '#fff' } }}
    />
  );

  const renderImage = () => (
    <Box
      component={m.img}
      variants={{ ...varScale('in'), initial: { scale: 0.8, opacity: 0 } }}
      alt="Integration"
      src={`${CONFIG.assetsDir}/assets/illustrations/characters/character-study.webp`}
      sx={{ width: 200, objectFit: 'cover', aspectRatio: '0/1' }}
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
              p: { xs: 4, md: 6 },
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }}>
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>{renderDescription()}</Grid>

              <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }} size={{ xs: 12, md: 6, lg: 6 }}>
                {renderImage()}
              </Grid>
            </Grid>
          </Card>
        </Container>
      </MotionViewport>
    </Box>
  );
}

