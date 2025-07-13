'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { PageNotFoundIllustration } from 'src/assets/illustrations';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export function NotFoundView() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      component={MotionContainer}
    >
      <m.div variants={varBounce('in')}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Không tìm thấy trang
        </Typography>
      </m.div>

      <m.div variants={varBounce('in')}>
        <Typography sx={{ color: 'text.secondary' }}>
          Xin lỗi, chúng tôi không thể tìm thấy trang mà bạn đang tìm kiếm. Có thể bạn đã nhập sai địa chỉ URL? Vui lòng kiểm tra lại chính tả.
        </Typography>
      </m.div>

      <m.div variants={varBounce('in')}>
        <PageNotFoundIllustration sx={{ my: { xs: 5, sm: 10 } }} />
      </m.div>

      <Button component={RouterLink} href="/" size="large" variant="contained">
        Về trang chủ
      </Button>
    </Container>
  );
}
