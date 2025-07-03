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
import { HeroBackground } from './components/hero-background';
import { SectionTitle } from './components/section-title';
import { Icon, List, ListItem, ListItemIcon } from '@mui/material';
import { useRouter } from 'next/router';


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
        <SectionTitle
          caption="STEM IIT"
          title="Sản phẩm Giáo Dục"
          txtGradient="STEM IIT"
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
        />
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
            href={paths.product.root}
            color="primary"
            size="large"
            variant="contained"
          >
            <span>
              Tìm hiểu thêm
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
        minHeight: { xs: '800px', md: '800px' },
        height: '75vh',
        maxHeight: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
        px: { xs: 2, md: 5 },
        '@media (max-width:1103px) and (min-width:425px)': {
          px: 10
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: {
            xs: '100%',
            sm: 600,
            md: 700,
            lg: 800,
            xl: '100%',
          },
          px: { xs: 2, sm: 3, md: 1 },
          mx: 'auto',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
          bottom: { xs: 0, md: 0, lg: '2%' },
          // animation: 'floatGlow 4s ease-in-out infinite',
          // '@keyframes floatGlow': {
          //   '0%, 100%': { transform: 'translateY(0px)' },
          //   '50%': { transform: 'translateY(-10px)' },
          // },
        }}
      >
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              gap: { xs: 2, sm: 2, md: 2 },
              width: '100%',
              maxWidth: '100%',
              mx: 'auto',
              height: 'auto',
            }}
          >
            {/* Box 1 */}
            <Box
              onClick={() => {
                window.location.href = '/product';
              }}
              sx={{
                position: 'relative',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: { xs: 24, sm: 32 },
                fontWeight: 'bold',
                minHeight: { xs: 160, sm: 200, md: 600 },
                width: { xs: '100%', md: '66.66%' },
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                p: 0,
                cursor: 'pointer',
                overflow: 'hidden',
                mb: { xs: 2, sm: 2, md: 0 },
                mr: { md: 2 },
                '&:hover .image-layer': {
                  opacity: 0,
                },
                '&:hover .color-layer': {
                  opacity: 1,
                },
              }}
            >
              <Box
                className="image-layer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'opacity 0.4s ease',
                }}
                component="img"
                src={`${CONFIG.assetsDir}/assets/images/mock/sample/1.jpg`}
                alt=""
                draggable={false}
              />

              <Box
                className="color-layer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  backgroundColor: '#2196F3',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgb(92 52 129 / 91%), rgb(0 0 0 / 53%))',
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 3,
                  p: 10,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '30px',
                }}
              >
                <>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      fontSize: '2rem !important',
                      textAlign: 'left',
                      fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                    }}
                  >
                    Khám phá bộ sản phẩm Arduino STEM IIT
                  </Typography>
                  <Typography variant="subtitle1" color="common.white"
                    sx={{
                      fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                      letterSpacing: 1.8,
                    }}
                  >
                    Thu thập dữ liệu nhanh hơn, kết nối thiết bị dễ dàng hơn
                  </Typography>
                </>
                {renderButtons()}
              </Box>
            </Box>

            {/* Box 2 */}
            <Box
              onClick={() => {
                window.location.href = '/product';
              }}
              sx={{
                position: 'relative',
                bgcolor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: { xs: 16, sm: 20 },
                fontWeight: 'bold',
                minHeight: { xs: 120, sm: 160, md: 600 },
                width: { xs: '100%', md: '33.33%' },
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                overflow: 'hidden',
                cursor: 'pointer',
                mb: { xs: 2, sm: 2, md: 0 },
                '&:hover .image-layer': {
                  opacity: 0,
                },
                '&:hover .color-layer': {
                  opacity: 1,
                },
                flexDirection: 'column',
              }}
            >
              <Box
                component="img"
                className="image-layer"
                src={`${CONFIG.assetsDir}/assets/images/mock/sample/2.jpg`}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'all 0.5s ease',
                }}
                draggable={false}
              />

              <Box
                className="color-layer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'secondary.dark',
                  opacity: 0,
                  zIndex: 1,
                  transition: 'opacity 0.5s ease',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgb(10 40 14 / 74%), rgb(0 0 0 / 54%))',
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 3,
                  p: 2,
                  width: '100%',
                  maxWidth: '500px',
                  textAlign: 'center',
                }}
              >
                <List sx={{ color: '#fff', pl: 1, '& .MuiListItem-root': { alignItems: 'center' } }}>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                      <Icon
                        component="img"
                        src="/assets/icons/components/ic-checkbox.svg"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                        textTransform: 'uppercase'
                      }}
                    >
                      Tích hợp vi điều khiển
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                      <Icon
                        component="img"
                        src="/assets/icons/components/ic-checkbox.svg"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                        textTransform: 'uppercase'
                      }}
                    >
                      Cảm biến thông minh
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>

            {/* Box 3 */}
            <Box
              onClick={() => {
                window.location.href = '/product';
              }}
              sx={{
                position: 'relative',
                bgcolor: 'info.main',
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: { xs: 16, sm: 20 },
                fontWeight: 'bold',
                minHeight: { xs: 120, sm: 160, md: 600 },
                width: '100%',
                cursor: 'pointer',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                overflow: 'hidden',
                '&:hover .image-layer': {
                  opacity: 0,
                },
                '&:hover .color-layer': {
                  opacity: 1,
                },
                flexDirection: 'column',
                mb: { xs: 2, sm: 2, md: 0 },
              }}
            >
              <Box
                component="img"
                className="image-layer"
                src={`${CONFIG.assetsDir}/assets/images/mock/sample/3.jpg`}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'all 0.5s ease',
                }}
                draggable={false}
              />
              <Box
                className="color-layer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'info.dark',
                  opacity: 0,
                  zIndex: 1,
                  transition: 'opacity 0.5s ease',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgb(4 0 0 / 88%), rgb(0 0 0 / 44%))',
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 3,
                  p: 2,
                  width: '100%',
                  textAlign: 'center',
                  maxWidth: '500px',
                }}
              >
                <List sx={{ color: '#fff', pl: 1, '& .MuiListItem-root': { alignItems: 'center' } }}>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                      <Icon
                        component="img"
                        src="/assets/icons/components/ic-checkbox.svg"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                        textTransform: 'uppercase',
                        textAlign: 'left'
                      }}
                    >
                      Điều khiển thiết bị tự động hiệu quả và đầy sáng tạo
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>

            {/* Box 3 for desktop */}
            <Box
              onClick={() => {
                window.location.href = '/product';
              }}
              sx={{
                position: 'relative',
                bgcolor: 'info.main',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: { xs: 16, sm: 20 },
                fontWeight: 'bold',
                minHeight: { md: 295, lg: 295 },
                width: { md: '33.33%' },
                cursor: 'pointer',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                overflow: 'hidden',
                '&:hover .image-layer': {
                  opacity: 0,
                },
                '&:hover .color-layer': {
                  opacity: 1,
                },
                flexDirection: 'column',
                // mt: { md: 2 },
              }}
            >
              <Box
                component="img"
                className="image-layer"
                src={`${CONFIG.assetsDir}/assets/images/mock/sample/3.jpg`}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'all 0.5s ease',
                }}
                draggable={false}
              />
              <Box
                className="color-layer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'info.dark',
                  opacity: 0,
                  zIndex: 1,
                  transition: 'opacity 0.5s ease',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgb(4 0 0 / 88%), rgb(0 0 0 / 44%))',
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 3,
                  p: 2,
                  width: '100%',
                  textAlign: 'center',
                  maxWidth: '365px',
                }}
              >
                <List sx={{ color: '#fff', pl: 1, '& .MuiListItem-root': { alignItems: 'center' } }}>
                  <ListItem sx={{ py: 0.5 }}>
                    {/* <ListItemIcon sx={{ minWidth: 32, mr: 0, mt: '2px' }}>
                      <Icon
                        component="img"
                        src="/assets/icons/components/ic-checkbox.svg"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemIcon> */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
                        textTransform: 'uppercase',
                        textAlign: 'left'
                      }}
                    >
                      Điều khiển thiết bị tự động hiệu quả và đầy sáng tạo
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </m.div>
      </Box>
    </Box>
  );
}
