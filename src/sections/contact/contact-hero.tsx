import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';
import { IconButton, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export function ContactHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        bgcolor: 'background.default',
        height: '100%',
        // minHeight: 900
      }}
    >
      <Box
        sx={{
          flex: { md: '0 0 70%' },
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <iframe
          // title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.009644897577!2d105.76699697635104!3d10.040561639816655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089df825e151d%3A0x1c035b92a8057e95!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gSUlU!5e0!3m2!1svi!2s!4v1751421588859!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
        // loading="lazy"
        />
      </Box>
      <Box
        component="section"
        sx={[
          (theme) => ({
            ...theme.mixins.bgGradient({
              images: [
                `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)})`,
                `url(${CONFIG.assetsDir}/assets/background/robotnew.jpg)`,
              ],
            }),
            overflow: 'hidden',
            position: 'relative',
            py: { xs: 10, md: 0 },
            px: { xs: 2, md: 3 },
            flex: { md: '0 0 30%' },
            width: '100%',
            boxShadow: 5,
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container component={MotionContainer} sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left',
          px: { xs: 2, md: 2, lg: 3 },
        }}>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <AnimateText
              component="h1"
              variant="h2"
              textContent={['Liên hệ']}
              variants={varFade('inUp', { distance: 24 })}
              sx={{
                color: 'common.white',
                [`& .${animateTextClasses.line}[data-index="0"]`]: {
                  [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
                  [`& .${animateTextClasses.word}[data-index="1"]`]: { color: 'primary.main' },
                },
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{ color: 'common.white', opacity: 0.8, mt: 2, mb: 4, letterSpacing: '0.1rem' }}
              component={m.p}
              variants={varFade('inUp', { distance: 24 })}
            >
              Chúng tôi sẵn sàng lắng nghe ý kiến của bạn.
            </Typography>

            <Box
              component="ul"
              sx={{
                mt: 5,
                display: 'flex',
                color: 'common.white',
                rowGap: { xs: 5, md: 0 },
                columnGap: { xs: 2, md: 5 },
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              }}
            >
              {CONTACTS.map((contact) => (
                <li key={contact.addresstitle}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <m.div variants={varFade('inUp', { distance: 24 })}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </Box>
                        <Typography variant="h6">
                          {contact.addresstitle}
                        </Typography>
                      </Stack>
                      <Typography variant="body2"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 15, sm: 15, md: 14, lg: 17 },
                          opacity: 0.8,
                          pl: { md: 0, lg: 3.5 },
                          textAlign: { xs: 'left', sm: 'left', md: 'justify', lg: 'left', xl: 'left' }
                        }}>
                        {contact.address}
                      </Typography>
                    </m.div>
                  </Box>
                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
                    <m.div variants={varFade('inUp', { distance: 24 })}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                              fill="currentColor"
                            />
                          </svg>
                        </Box>
                        <Typography variant="h6">
                          {contact.phoneNumberTitle}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ fontWeight: 800, fontSize: { xs: 15, sm: 15, md: 14, lg: 17 }, opacity: 0.8, pl: { md: 0, lg: 3.5 }, textAlign: 'left' }}>
                        {contact.phoneNumber}
                      </Typography>
                    </m.div>
                  </Box>
                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
                    <m.div variants={varFade('inUp', { distance: 24 })}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"
                              fill="currentColor"
                            />
                          </svg>
                        </Box>
                        <Typography variant="h6">
                          {contact.emailTitle}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ fontWeight: 800, fontSize: 17, opacity: 0.8, pl: { md: 0, lg: 3.5 }, textAlign: 'left' }}>
                        {contact.email}
                      </Typography>
                    </m.div>
                  </Box>
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2}>
                      <m.div variants={varFade('inUp', { distance: 24 })}>
                        <IconButton
                          component="a"
                          href="https://www.youtube.com/@IITJSC"
                          target="_blank"
                          rel="noopener"
                          sx={{ color: 'common.white', bgcolor: 'error.main', '&:hover': { bgcolor: 'error.dark' } }}
                        >
                          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.87.56A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.5 12a28.6 28.6 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18.5 12 18.5 12 18.5s6.2 0 7.87-.56a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22.5 12a28.6 28.6 0 0 0-.7-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </IconButton>
                      </m.div>
                      <m.div variants={varFade('inUp', { distance: 24 })}>
                        <IconButton
                          component="a"
                          href="https://www.facebook.com/iitmekong"
                          target="_blank"
                          rel="noopener"
                          sx={{ color: 'common.white', bgcolor: '#1877F3', '&:hover': { bgcolor: '#145db2' } }}
                        >
                          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12Z"
                              fill="currentColor"
                            />
                          </svg>
                        </IconButton>
                      </m.div>
                      <m.div variants={varFade('inUp', { distance: 24 })}>
                        <IconButton
                          component="a"
                          href="https://zalo.me/(+84)368909968"
                          target="_blank"
                          rel="noopener"
                          sx={{ color: 'common.white', bgcolor: '#1877F3', '&:hover': { bgcolor: '#145db2' } }}
                        >
                          <Box
                            component="img"
                            src={`${CONFIG.assetsDir}/assets/icons/apps/ic-zalo.svg`}
                            alt="Zalo"
                            sx={{ width: 24, height: 24 }}
                          />
                        </IconButton>
                      </m.div>
                    </Stack>
                  </Box>
                </li>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    addresstitle: 'Địa chỉ',
    address: 'Số 38/2D Đường Mậu Thân, Phường An Hòa, Quận Ninh Kiều, Thành phố Cần Thơ',
    phoneNumberTitle: 'Số điện thoại',
    phoneNumber: '(+84) 368 909 968',
    emailTitle: 'Email',
    email: 'info@iit.vn'
  },
];
