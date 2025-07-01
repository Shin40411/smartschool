'use client';


import { useTabs } from 'minimal-shared/hooks';
import { varAlpha } from 'minimal-shared/utils';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { CartIcon } from '../cart-icon';
import { useCheckoutContext } from '../../checkout/context';
import { ProductDetailsReview } from '../product-details-review';
import { ProductDetailsSummary } from '../product-details-summary';
import { ProductDetailsCarousel } from '../product-details-carousel';
import { ProductDetailsDescription } from '../product-details-description';
import { useMemo } from 'react';
import productsData from 'public/assets/data/data.json';
import mapToProductItem from 'src/utils/format-product';
import { usePathname } from 'next/navigation';


// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Sản phẩm chính hãng',
    description: 'Thiết bị được cung cấp bởi các thương hiệu uy tín, đảm bảo nguồn gốc rõ ràng và chất lượng đạt chuẩn giáo dục.',
    icon: 'solar:verified-check-bold',
  },
  {
    title: 'Hỗ trợ đổi trả 10 ngày',
    description: 'Đổi trả dễ dàng trong vòng 10 ngày nếu phát sinh lỗi từ nhà sản xuất hoặc không đúng mô tả.',
    icon: 'solar:clock-circle-bold',
  },
  {
    title: 'Bảo hành 2 năm',
    description: 'Chế độ bảo hành lên đến 24 tháng giúp đảm bảo an tâm sử dụng trong môi trường học đường.',
    icon: 'solar:shield-check-bold',
  },
] as const;

// ----------------------------------------------------------------------
export function ProductShopDetailsView() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const param = segments.pop();
  const rawProduct = useMemo(() => {
    return productsData.find((item) => item.code === param);
  }, [param]);

  const product = rawProduct ? mapToProductItem(rawProduct) : null;

  const { state: checkoutState, onAddToCart } = useCheckoutContext();

  const tabs = useTabs('description');

  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <CartIcon totalItems={checkoutState.totalItems} />

      <CustomBreadcrumbs
        links={[
          { name: 'Trang chủ', href: '/' },
          { name: 'Sản phẩm', href: paths.product.root },
          { name: product?.name },
        ]}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <ProductDetailsCarousel images={product?.images} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          {product && (
            <ProductDetailsSummary
              product={product}
              items={checkoutState.items}
              onAddToCart={onAddToCart}
              disableActions={!product?.available}
            />
          )}
        </Grid>
      </Grid>
      <Box
        sx={{
          gap: 5,
          my: 10,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: 'center', px: 5 }}>
            <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Card>
        <Tabs
          value={tabs.value}
          onChange={tabs.onChange}
          sx={[
            (theme) => ({
              px: 3,
              boxShadow: `inset 0 -2px 0 0 ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
            }),
          ]}
        >
          {[
            { value: 'description', label: 'Mô tả sản phẩm' },
            // { value: 'reviews', label: `Đánh giá (${product?.reviews.length})`, icon: 'solar:star-bold' },
          ].map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Iconify icon="solar:list-bold" width={24} height={24} />
                  {tab.label}
                </Box>
              }
            />
          ))}
        </Tabs>

        {tabs.value === 'description' && (
          <ProductDetailsDescription description={product?.description} />
        )}

        {tabs.value === 'reviews' && (
          <ProductDetailsReview
            ratings={product?.ratings}
            reviews={product?.reviews}
            totalRatings={product?.totalRatings}
            totalReviews={product?.totalReviews}
          />
        )}
      </Card>
    </Container>
  );
}
