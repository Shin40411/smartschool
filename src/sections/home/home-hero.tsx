import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _carouselsMembers, _mock, _socials } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Card, Container, Icon, IconButton, List, ListItem, ListItemIcon } from '@mui/material';
import '@fontsource/michroma';
import { SectionTitle } from './components/section-title';
import { Carousel, CarouselArrowFloatButtons, CarouselDotButtons, useCarousel } from 'src/components/carousel';
import { Iconify } from 'src/components/iconify';
import { Image } from 'src/components/image';
import { varFade } from 'src/components/animate';
import Autoplay from 'embla-carousel-autoplay';


// ----------------------------------------------------------------------

// const lgKey: Breakpoint = 'lg';


const mobileSlider = [
  {
    'id': 1,
    'bacground': `${CONFIG.assetsDir}/assets/images/mock/sample/1.jpg`,
    'content': 'Khám phá bộ sản phẩm',
    'contentSub': 'Thu thập dữ liệu nhanh hơn, kết nối thiết bị dễ dàng hơn',
    'txtGradient': 'Arduino STEM',
    'blur': 'linear-gradient(to top, rgb(92 52 129 / 91%), rgb(0 0 0 / 53%))'
  },
  {
    'id': 2,
    'bacground': `${CONFIG.assetsDir}/assets/images/mock/sample/2.jpg`,
    'content': '',
    'contentSub': 'Dễ dàng sử dụng',
    'txtGradient': 'Tích hợp vi điều khiển tân tiến',
    'blur': 'linear-gradient(to top, rgb(10 40 14 / 74%), rgb(0 0 0 / 54%))'
  },
  {
    'id': 3,
    'bacground': `${CONFIG.assetsDir}/assets/images/mock/sample/3.jpg`,
    'content': '',
    'contentSub': 'Khơi dậy tư duy',
    'txtGradient': 'Tích hợp cảm biến hiện đại',
    'blur': 'linear-gradient(to top, rgb(4 0 0 / 88%), rgb(0 0 0 / 44%))'
  }
];

export function HomeHero({ sx, ...other }: BoxProps) {
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

  const carousel = useCarousel({
    align: 'start',
    // slideSpacing: '24px',
    slidesToShow: 1,
    loop: true
  },
    // [Autoplay({ playOnInit: true, delay: 8000 })]
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 0, sm: 0, md: '800px !important', lg: '100%' },
        // height: '75vh',
        maxHeight: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
        px: { xs: 0, sm: 0, md: 5 },
        py: { xs: 0, sm: 0, md: 5 },
        // '@media (max-width:1103px) and (min-width:425px)': {
        //   px: 10
        // },
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          width: '100%',
          maxWidth: {
            xs: '100%',
            sm: 600,
            md: 900,
            lg: '100%',
            xl: '100%',
          },
          px: { xs: 2, sm: 3, md: 0 },
          mx: 'auto',
          height: '100%',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
          top: { xs: '5%', md: '10%' },
          bottom: { xs: 0, md: 0, lg: '2%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 0.5 },
            width: '100%',
            maxWidth: '100%',
            mx: 'auto',
            // height: 'auto',
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
              minHeight: { xs: 160, sm: 200, md: 400, xl: 600 },
              width: { xs: '100%', md: '66.66%', xl: '66.66%' },
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              p: 0,
              borderRadius: 2,
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
                p: { xs: 5, md: 10 },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '30px',
              }}
            >
              <>
                <SectionTitle title="Khám phá bộ sản phẩm" txtGradient='Arduino STEM' />
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', md: '33.33%' },
              gap: 2,
            }}
          >
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
                borderRadius: 2,
                minHeight: { xs: 160, sm: 200, md: 300 },
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
                  top: '10px',
                  zIndex: 3,
                  p: 2,
                  width: '100%',
                  maxWidth: '600px',
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
                        fontSize: { md: '1rem', lg: '25px', xl: '2rem' },
                        lineHeight: 2,
                        // textTransform: 'uppercase'
                      }}
                    >
                      Tích hợp vi điều khiển tân tiến
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
                        fontSize: { md: '1rem', lg: '25px', xl: '2rem' },
                        lineHeight: 2,
                        // textTransform: 'uppercase'
                      }}
                    >
                      Dễ dàng sử dụng
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: { xs: 16, sm: 20 },
                borderRadius: 2,
                fontWeight: 'bold',
                minHeight: { xs: 160, sm: 200, md: 300 },
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
                  top: '10px',
                  zIndex: 3,
                  p: 2,
                  width: '100%',
                  textAlign: 'center',
                  maxWidth: '600px',
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
                        fontSize: { md: '1rem', lg: '25px', xl: '2rem' },
                        lineHeight: 2,
                        // textTransform: 'uppercase'
                      }}
                    >
                      Tích hợp cảm biến hiện đại
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
                        fontSize: { md: '1rem', lg: '25px', xl: '2rem' },
                        lineHeight: 2,
                        // textTransform: 'uppercase'
                      }}
                    >
                      Khơi dậy tư duy
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

      <Container sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, px: '0 !important', position: 'relative' }}>
        <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options}
          slotProps={{
            prevBtn: {
              sx: {
                left: 30
              }
            },
            nextBtn: {
              sx: {
                right: 30
              }
            }
          }}
        />
        <Box sx={{
          position: 'relative',
          borderRadius: 2,
        }}>
          <CarouselDotButtons
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{
              bottom: 16,
              left: 50,
              position: 'absolute',
              color: 'common.white'
            }}
          />
          <Carousel carousel={carousel}>
            {mobileSlider.map((i) => (
              <Box
                key={i.id}
                component={m.div}
                variants={varFade('in')}
                sx={{
                  px: 5,
                  py: 10,
                  backgroundImage: `url(${i.bacground})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: '100%',
                  minHeight: '75vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  position: 'relative'
                }}
              >
                <HeroContent item={i} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box >
  );
}

type SlideItem = {
  id: number;
  bacground: string;
  content: string;
  contentSub: string;
  txtGradient: string;
  blur: string
};

function HeroContent({ item }: { item: SlideItem }) {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: item.blur,
        }}
      />
      <Box
        sx={{ textAlign: { xs: 'center', sm: 'left' }, zIndex: 1 }}
      >
        {item.content &&
          <Typography variant="h2" color="common.white"
            sx={{
              fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
              fontWeight: 700
            }}
          >
            {item.content}
          </Typography>
        }
        {item.txtGradient &&
          <SectionTitle title='' txtGradient={item.txtGradient} />
        }
        <Typography variant="subtitle1" color="common.white"
          sx={{
            fontFamily: '"Moterat", "Montserrat", "Arial", sans-serif',
            letterSpacing: 1.8,
          }}
        >
          {item.contentSub}
        </Typography>
      </Box>
    </>
  );
}
