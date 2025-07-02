import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'How can I get the update?',
    answer: (
      <Typography>
        You will get 12 months of free
        <Link
          href="https://support.mui.com/hc/en-us/articles/360008775240-How-do-I-get-access-to-an-item-I-purchased"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          updates
        </Link>
        with the purchase. Please renew your license to get updates after that.
      </Typography>
    ),
  },
  {
    question: 'Which license is right for you?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> All licenses do not apply to open source.</li>
        <li> One licenses / one end product (3 licenses / 3 products...).</li>
        <li>
          <strong>Standard / Plus</strong> license used in free products (Internal management...).
        </li>
        <li>
          <strong>Extended</strong> license used in charge products, collect fees from users
          (SAAS...).
        </li>
        <li>
          Learn more about the
          <Link
            href="https://docs.minimals.cc/package/"
            target="_blank"
            rel="noopener"
            sx={{ mx: 0.5 }}
          >
            package & license
          </Link>
        </li>
      </Box>
    ),
  },
  {
    question: 'How long is my license valid for?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> The license is lifetime.</li>
        <li> You get 12 months of free updates.</li>
      </Box>
    ),
  },
  {
    question: 'Which platforms will the template support?',
    answer: (
      <Typography>
        {`The components in MUI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. We don't support Internet Explorer 11. `}
        Learn more about the
        <Link
          href="https://mui.com/material-ui/getting-started/supported-platforms/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          supported platforms
        </Link>
      </Typography>
    ),
  },
  {
    question: 'For what kind of projects is the Standard license intended?',
    answer: (
      <Typography>
        The Standard license is designed for internal applications in which staff will access the
        application. An example could be the back-office dashboard of a public-facing e-commerce
        website in which staff would sign in and manage inventory, customers, etc.
      </Typography>
    ),
  },
  {
    question: 'Do you have a free demo to review the code before purchasing?',
    answer: (
      <Typography>
        Yes, you can check out our
        <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this Paid version.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(FAQs[0].question);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = () => (
    <SectionTitle
      title=""
      txtGradient="Liên hệ với chúng tôi ngay hôm nay"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = () => (
    <Stack
      spacing={1}
      sx={[
        () => ({
          mt: 8,
          mx: 'auto',
          maxWidth: 720,
          mb: { xs: 5, md: 8 },
        }),
      ]}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade('inUp', { distance: 24 })}
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          sx={(theme) => ({
            borderRadius: 2,
            transition: theme.transitions.create(['background-color'], {
              duration: theme.transitions.duration.short,
            }),
            '&::before': { display: 'none' },
            '&:hover': { bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16) },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          })}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6"> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );


  const bottomLines = () => (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      {/* <FloatLine sx={{ bottom: 0, left: 0 }} /> */}
      {/* <FloatPlusIcon sx={{ top: -8, left: 72 }} /> */}
      {/* <FloatPlusIcon sx={{ bottom: -8, left: 72 }} /> */}
    </>
  );

  const renderContact = () => (
    <Box
      sx={[
        (theme) => ({
          px: { xs: 2, sm: 20 },
          py: { xs: 4, sm: 5 },
          width: '100%',
          mt: 6,
          mb: 2,
          borderRadius: 3,
          color: theme.vars.palette.primary.dark,
          boxShadow: `0 8px 32px 0 ${theme.vars.palette.primary.main}22`,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 3, md: 5 },
        }),
      ]}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 3, md: 0 },
          pl: { xs: 0, md: 10 },
        }}
      >
        <Box
          component={m.img}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          src={`${CONFIG.assetsDir}/assets/images/mock/cover/getintouch.jpg`}
          alt="Liên hệ"
          sx={{
            width: '100%',
            maxWidth: '100%',
            height: { xs: 180, sm: 240, md: 320, lg: 360 },
            objectFit: 'cover',
            borderRadius: 2,
            display: 'block',
            minHeight: 120,
            minWidth: { xs: 0, md: 500 },
            boxShadow: 2,
          }}
        />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <SectionTitle
          title=""
          txtGradient="Liên hệ với chúng tôi ngay hôm nay"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 2, md: 0 },
            fontWeight: 700,
            fontSize: { xs: 22, sm: 26, md: 28 },
            letterSpacing: 0.5,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: theme => theme.vars.palette.primary.darker,
            opacity: 0.85,
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: 720,
            width: '100%',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy gửi email cho chúng tôi để được tư vấn và giải đáp mọi thắc mắc về sản phẩm, dịch vụ hoặc hợp tác.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'left' }, mt: { xs: 3, md: 3 } }}>
          <Button
            variant="contained"
            href="mailto:info@iit.vn?subject=[Feedback] from Customer"
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
              background: theme => theme.vars.palette.primary.main,
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
