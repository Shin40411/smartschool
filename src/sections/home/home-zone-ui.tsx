import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, CircleSvg, FloatTriangleDownIcon, FloatPlusIcon, FloatXIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      sx={{
        top: 64,
        left: 80,
        alignItems: 'center',
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon
        sx={{
          width: 30,
          height: 15,
          opacity: 0.24,
          position: 'static',
        }}
      />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeZoneUI({ sx, ...other }: BoxProps) {
  const renderDescription = () => (
    <SectionTitle
      title="Giải pháp công nghệ"
      txtGradient="STEM Bắc Nam"
      description="Số hóa, quản lý và khai thác các nguồn lực, đối tượng và hoạt động giáo dục trong nhà trường, giữa các trường trong hệ thống giáo dục,… đảm bảo liên kết thời gian thực trên cùng một nền tảng kết nối, chia sẻ dữ liệu của ngành giáo dục, sẵn sàng để ứng dụng trí tuệ nhân tạo trong tương lai."
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
      typingDescription={true}
    />
  );

  const bottomLines = () => (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      <FloatXIcon sx={{ top: -8, left: 72 }} />
      <FloatXIcon sx={{ bottom: -8, right: 72 }} />
    </>
  );

  const renderImage = () => (
    <Stack
      component={m.div}
      variants={varFade('inDown', { distance: 24 })}
      sx={[
        (theme) => ({
          alignItems: 'flex-end',
          filter: `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)})`,
          ...theme.applyStyles('dark', {
            filter: `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
          }),
        }),
      ]}
    >
      <Box
        component="img"
        alt="Zone landing page"
        src={`${CONFIG.assetsDir}/assets/background/stembg.png`}
        sx={[
          (theme) => ({
            width: 720,
            objectFit: 'cover',
            aspectRatio: '16/10',
            borderRadius: '16px',
            border: `solid 2px ${theme.vars.palette.common.white}`,
          }),
        ]}
      />

      {/* <Box sx={{ p: 0.5, bgcolor: 'common.white', borderRadius: '0 0 8px 8px' }}>
        <Button
          variant="contained"
          target="_blank"
          rel="noopener"
          href={paths.zoneStore}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          sx={{
            color: 'grey.800',
            bgcolor: 'common.white',
            '&:hover': { bgcolor: 'common.white' },
          }}
        >
          Visit Zone UI
        </Button>
      </Box> */}
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pt: 10,
          position: 'relative',
          pb: { xs: 5, md: 7 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>

        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderImage()}</Grid>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderDescription()}</Grid>
          </Grid>

          {/* <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} /> */}
        </Container>
      </MotionViewport>
      {bottomLines()}
    </Box>
  );
}
