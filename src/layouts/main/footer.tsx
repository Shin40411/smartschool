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

// ----------------------------------------------------------------------
const addressText = 'Số 38/2D Đường Mậu Thân, Phường An Hòa, Quận Ninh Kiều, Thành phố Cần Thơ, Việt Nam';

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
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20V8.24l7.29 6.59a1 1 0 0 0 1.42 0L20 8.24V20H4Z"
                fill="currentColor"
              />
            </svg>
            info@iit.vn
          </Box>
        ),
        href: '#',
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
        href: '#',
      },
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
      <Container
        sx={(theme) => ({
          pb: 5,
          pt: 10,
          textAlign: 'center',
          color: '#fff !important',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Box
          sx={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            borderRadius: 5,
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Logo />
            <Box
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                display: { xs: 'none', md: 'block' },
                pl: 1,
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
                  background: 'linear-gradient(130deg, rgb(97, 59, 187, 0.2) 0%,rgba(57, 54, 216) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                STEM IIT
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              justifyContent: 'center',
              [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="h4"
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
                mt: { xs: 3, md: 8 },
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
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
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
                    flexDirection: 'column',
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
            <Box
              sx={{
                mt: 5,
                px: { xs: 2, md: 0 },
                maxWidth: '100%',
                textAlign: { xs: 'center', [layoutQuery]: 'left' },
              }}
            >
              <Typography component="div" variant="overline" sx={{
                mb: 2, display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1
              }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.39 8.09 11.13a1 1 0 0 0 1.18 0C13.95 21.39 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 17.88C9.14 17.1 5 13.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.61-4.14 6.1-7 8.88ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                    fill="currentColor"
                  />
                </svg>
                Địa chỉ
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                {addressText}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved by IIT JSC.
        </Typography>
      </Container>
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
          <Link href="https://minimals.cc/"> IIT JSC </Link>
        </Box>
      </Container>
    </FooterRoot>
  );
}
