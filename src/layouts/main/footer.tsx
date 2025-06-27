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

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Menu chính',
    children: [
      { name: 'Giới thiệu', href: paths.about },
      { name: 'Sản phẩm', href: paths.product.root },
      // { name: 'Tin tức', href: paths.post.root },
    ],
  },
  { headline: 'Liên hệ', children: [{ name: 'info@iit.vn', href: '#' }] },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#f8f9fa',
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
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Logo />

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
                maxWidth: 300,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              })}
            >
              Mang đến cho con bạn sự khởi đầu tốt nhất trong cuộc sống
            </Typography>

            {/* <Box
              sx={(theme) => ({
                mt: 3,
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              })}
            >
              {_socials.map((social) => (
                <IconButton key={social.label}>
                  {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
                  {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
                  {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
                  {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
                </IconButton>
              ))}
            </Box> */}
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
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
                    flexDirection: 'column',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
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

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
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
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box>
      </Container>
    </FooterRoot>
  );
}
