import type { BoxProps } from '@mui/material/Box';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';
import { CONFIG } from 'src/global-config';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const settings = useSettingsContext();
  const bottomLines = () => (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
    </>
  );

  const renderContact = () => (
    <Box
      sx={[
        (theme) => ({
          px: { xs: 2, sm: 4 },
          py: { xs: 8, sm: 10 },
          width: '100%',
          color: theme.vars.palette.primary.dark,
          boxShadow: `0 8px 32px 0 ${theme.vars.palette.primary.main}22`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/images/mock/cover/getintouch.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: { xs: 300, sm: 400, md: 500 },
          overflow: 'hidden',
        }),
      ]}
    >
      {/* Falling Icons */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: -50,
            left: `${10 + i * 15}%`,
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 2,
            animation: `fall ${4 + i}s infinite linear`,
          }}
        >
          <Box
            component="img"
            src={`${CONFIG.assetsDir}/assets/icons/navbar/ic-mail.svg`}
            sx={{
              width: 24,
              height: 24,
              opacity: 1.8,
            }}
          />
        </Box>
      ))}

      {/* CSS animation */}
      <style>
        {`
      @keyframes fall {
        0% { transform: translateY(-40px) rotate(0deg); opacity: 0; }
        10% { opacity: 0.4; }
        100% { transform: translateY(600px) rotate(360deg); opacity: 0; }
      }
    `}
      </style>

      <Box sx={{ position: { xs: 'relative', sm: 'relative', md: 'absolute' }, right: { sm: 'unset', md: '10%' }, zIndex: 3, maxWidth: { xs: 720, sm: 720, md: 500 } }}>
        <SectionTitle
          title=""
          txtGradient="Liên hệ với chúng tôi ngay hôm nay"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.5,
            mb: 2,
          }}
          slotProps={{
            title: {
              sx: {
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              },
            },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'justify' },
            mt: 1,
            color: theme => theme.vars.palette.primary.darker,
            opacity: 0.9,
            maxWidth: 680,
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
            fontWeight: 600,
          }}
        >
          Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy gửi email cho chúng tôi để được tư vấn và giải đáp mọi thắc mắc về sản phẩm, dịch vụ hoặc hợp tác.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            href={paths.contact}
            startIcon={<Iconify icon="solar:letter-bold" />}
            color="primary"
            sx={{
              color: '#fff',
              borderRadius: 5,
              px: 4,
              py: 1.8,
              fontWeight: 700,
              fontSize: 18,
              boxShadow: 2,
              transition: 'all 0.2s',
              '&:hover': {
                background: theme => theme.vars.palette.primary.dark,
                color: '#fff',
                boxShadow: 4,
              },
            }}
          >
            Liên hệ ngay
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: settings.state.colorScheme === 'light' ? 'rgba(255,255,255,0.75)' : 'rgb(255 255 255 / 45%)',
          // bgcolor: 'rgba(255,255,255,0.75)',
          zIndex: 1,
        }}
      />
    </Box>
  );

  return (
    <Box component="section" sx={sx} {...other}>
      <MotionViewport sx={{ position: 'relative' }}>
        {/* {topLines()} */}
        {bottomLines()}

        {/* {renderContent()} */}
        <Stack sx={{
          position: 'relative',
          width: '100%',
        }}>
          {renderContact()}
        </Stack>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const topLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
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
