'use client';

import type { Breakpoint } from '@mui/material/styles';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';

import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { Footer } from './footer';
import { MainSection } from '../core/main-section';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { navData as mainNavData } from '../nav-config-main';

import type { FooterProps } from './footer';
import type { NavMainProps } from './nav/types';
import type { MainSectionProps } from '../core/main-section';
import type { HeaderSectionProps } from '../core/header-section';
import type { LayoutSectionProps } from '../core/layout-section';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type MainLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    nav?: {
      data?: NavMainProps['data'];
    };
    main?: MainSectionProps;
    footer?: FooterProps;
  };
};

export function MainLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: MainLayoutProps) {
  const pathname = usePathname();

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const isCommingSoonPage = pathname === '/coming-soon/';

  const navData = slotProps?.nav?.data ?? mainNavData;

  const renderHeader = () => {
    if (isCommingSoonPage) return null;

    const headerSlots: HeaderSectionProps['slots'] = {
      topArea: (
        <Box width='100%' sx={{ display: 'none', margin: '0 auto', padding: '15px 0 40px 0', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Typography
            variant='body1'
            color='#fff'
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Chào mừng đến với sản phẩm Giáo Dục Stem IIT
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon="material-symbols:mail-outline" color='#fff' width="24" height="24" />
                    <Typography variant="body2" color="#fff" sx={{ ml: 0.5 }}>
                      info@iit.vn
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon="material-symbols:call-outline" color='#fff' width="24" height="24" />
                    <Typography variant="body2" color="#fff" sx={{ ml: 0.5 }}>
                      (+84) 368 909 968
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          </Box>
        </Box>
      ),
      leftArea: (
        <>
          <MenuButton
            onClick={onOpen}
            sx={(theme) => ({
              mr: 1,
              ml: -1,
              [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
            })}
          />
          <NavMobile data={navData} open={open} onClose={onClose} />

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
                  background: 'linear-gradient(90deg, #2196F3 0%, rgb(146,146,146) 100%)',
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
        </>
      ),
      // centerArea: (
      //   <>
      //     <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
      //       <>
      //         <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      //           <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
      //               <Icon icon="material-symbols:mail-outline" width="24" height="24" />
      //               <Typography variant="body2" sx={{ ml: 0.5 }}>
      //                 info@iit.vn
      //               </Typography>
      //             </Box>
      //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
      //               <Icon icon="material-symbols:call-outline" width="24" height="24" />
      //               <Typography variant="body2" sx={{ ml: 0.5 }}>
      //                 (+84) 368 909 968
      //               </Typography>
      //             </Box>
      //           </Box>
      //         </Box>
      //       </>
      //     </Box>
      //   </>
      // ),
      rightArea: (
        <>
          <NavDesktop
            data={navData}
            sx={(theme) => ({
              display: 'none',
              color: '#000',
              [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
            })}
          />
        </>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () =>
    !isCommingSoonPage && (
      <Footer sx={slotProps?.footer?.sx} layoutQuery={layoutQuery} />
    );

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
