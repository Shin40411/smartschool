import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { ArcticonsZalo } from '../components/zalo-icon';
import { Stack } from '@mui/material';

// ----------------------------------------------------------------------
const addressText = 'Số 38/2D Đường Mậu Thân, Phường An Hòa, Quận Ninh Kiều, Thành phố Cần Thơ';

const LINKS = [
  {
    headline: 'Menu chính',
    children: [
      { name: 'Về chúng tôi', href: 'https://www.iit.vn/' },
      { name: 'Sản phẩm', href: paths.product.root },
      { name: 'Liên hệ', href: paths.contact },
    ],
  },
  {
    headline: 'Thông tin liên hệ',
    children: [
      {
        name: (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 13.065c-.27 0-.54-.08-.77-.24L3.5 6.98A2 2 0 0 1 5 6h14a2 2 0 0 1 1.5.98l-7.73 5.845a1.25 1.25 0 0 1-.77.24Zm8 1.435V8.25l-7.12 5.39a2.75 2.75 0 0 1-3.76 0L4 8.25v6.25A2 2 0 0 0 6 18h12a2 2 0 0 0 2-2v-1.5Z"
                fill="currentColor"
              />
            </svg>
            info@iit.vn
          </Box>
        ),
        href: 'mailto:info@iit.vn',
      },
      {
        name: (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
              <path
                d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                fill="currentColor"
              />
            </svg>
            (+84) 368 909 968
          </Box>
        ),
        href: 'tel:+84368909968',
      },
      {
        name: (
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              style={{ display: 'block', minWidth: 24, minHeight: 24 }}
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                fill="currentColor"
              />
            </svg>
            {addressText}
          </Box>
        ),
        href: paths.contact
      }
    ],
  },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#2196F3',
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

export function Footer({
  sx,
  layoutQuery = 'md',
  ...other
}: FooterProps & { layoutQuery?: Breakpoint }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Divider />
      <Stack
        sx={(theme) => ({
          pb: 1,
          pt: 3,
          m: 0,
          textAlign: 'center',
          color: '#fff !important',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              mx: 5,
              gap: 1,
              justifyContent: 'space-around',
              // [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'center' },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 4 }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                borderRadius: 5,
                px: 2,
                pb: 2,
                pt: 0,
                width: "100%"
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, alignItems: 'center' }}>
                <Logo sx={{
                  width: '100%',
                  maxWidth: 120,
                  height: '100%'
                }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      mx: 'auto',
                      textAlign: 'left',
                      maxWidth: 300,
                      [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
                    })}
                  >
                    Kết nối giáo dục và công nghệ, mở ra tương lai cho thế hệ trẻ
                  </Typography>
                  <Box
                    sx={(theme) => ({
                      mt: { xs: 1.5, md: 8 },
                      mb: 5,
                      display: 'flex',
                      justifyContent: 'center',
                      [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
                    })}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: 10,
                          color: '#fff',
                          fontWeight: 600,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                        }}
                      >
                        Theo dõi chúng tôi:
                      </Typography>
                    </Box>
                    {_socials.map((social) => (
                      <IconButton
                        key={social.label}
                        component="a"
                        href={social.path}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          backgroundColor: '#fff',
                          color: '#0C68E9',
                          p: 0.5,
                          mr: 1,
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                          },
                        }}
                      >
                        {social.value === 'facebook' &&
                          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                        {social.value === 'youtube' &&
                          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path
                              d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.87.56A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.5 12a28.6 28.6 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18.5 12 18.5 12 18.5s6.2 0 7.87-.56a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22.5 12a28.6 28.6 0 0 0-.7-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                        {social.value === 'zalo' &&
                          <ArcticonsZalo />
                        }
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

          </Grid>
          <Grid size={{ xs: 5, [layoutQuery]: 5 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              })}
            >
              {LINKS.map((list) => (
                <Box
                  key={list.headline}
                  sx={(theme) => ({
                    gap: 2,
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    // whiteSpace: {xs: 'nowrap', md: 'normal !important'},
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link, idx) => (
                    <Link
                      key={typeof link.name === 'string' ? link.name : `${list.headline}-${idx}`}
                      component={RouterLink}
                      href={link.href}
                      target={link.name === 'Về chúng tôi' ? '_blank' : undefined}
                      rel={link.name === 'Về chúng tôi' ? 'noopener' : undefined}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ px: 3, mt: 3, textAlign: { xs: 'center', md: 'left' } }}>
          © All rights reserved by Bắc Nam.
        </Typography>
      </Stack>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: FooterProps) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> by
          <Link href="https://minimals.cc/"> Bắc Nam </Link>
        </Box>
      </Container>
    </FooterRoot>
  );
}
