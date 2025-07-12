'use client';

import type { IProductItem, IProductFilters } from 'src/types/product';

import { useEffect, useState } from 'react';
import { orderBy } from 'es-toolkit';
import { useBoolean, useSetState } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import {
  PRODUCT_SORT_OPTIONS,
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_RATING_OPTIONS,
  PRODUCT_CATEGORY_OPTIONS,
} from 'src/_mock';

import { EmptyContent } from 'src/components/empty-content';

import { CartIcon } from '../cart-icon';
import { ProductList } from '../product-list';
import { ProductSort } from '../product-sort';
import { ProductSearch } from '../product-search';
import { useCheckoutContext } from '../../checkout/context';
import { ProductFiltersDrawer } from '../product-filters-drawer';
import { ProductFiltersResult } from '../product-filters-result';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { getProducts } from 'src/actions/product-ssr';
import mapToProductItem from 'src/utils/format-product';
import productsData from 'public/assets/data/data.json';
import { SectionCaption, SectionTitle } from 'src/sections/home/components/section-title';
import SocialPopin from 'src/components/socials/socical-popin';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

type Props = {
  allowTitle: boolean;
  allowFilters?: boolean;
  allowPagination?: boolean;
  limitData?: number;
  customTitle?: string;
  customTitleStyle?: SxProps<Theme>;
};

export function ProductShopView({
  allowTitle,
  allowFilters = true,
  allowPagination = true,
  limitData,
  customTitle,
  customTitleStyle
}: Props) {

  // const [products, setProducts] = useState<IProductItem[]>([]);

  const openFilters = useBoolean();
  const [sortBy, setSortBy] = useState('featured');
  const filters = useSetState<IProductFilters>({
    gender: [],
    colors: [],
    rating: '',
    category: 'all',
    priceRange: [0, 200],
  });
  const { state: currentFilters } = filters;

  // useEffect(() => {
  // getProducts({ pageNumber: 1, pageSize: 10 }).then(({ data }) => {
  //   const pro = data.items.map(mapToProductItem);
  //   setProducts(pro);
  // });

  // getProducts().then(({ data }) => {
  //   data.forEach((product: any, index: number) => {
  //     const mockName = _mock.productName(index);
  //     if (mockName) {
  //       product.name = mockName;
  //     }
  //     const mockCoverUrl = _mock.image.coverProduct(mockName);
  //     if (mockCoverUrl) {
  //       product.coverUrl = mockCoverUrl;
  //     }
  //   });
  //   setProducts(data);
  // });
  // }, []);

  const products = (productsData as any[]).map(mapToProductItem);

  const dataFiltered = applyFilter({
    inputData: products,
    filters: currentFilters,
    sortBy,
  });

  const canReset =
    currentFilters.gender.length > 0 ||
    currentFilters.colors.length > 0 ||
    currentFilters.rating !== '' ||
    currentFilters.category !== 'all' ||
    currentFilters.priceRange[0] !== 0 ||
    currentFilters.priceRange[1] !== 200;

  const notFound = !dataFiltered.length && canReset;
  const isEmpty = !products.length;

  const renderFilters = () => (
    <Box
      sx={{
        gap: 3,
        display: 'flex',
        justifyContent: 'space-between',
        // flexDirection: { xs: 'column', sm: 'row' },
        flexDirection: 'column',
        // alignItems: { xs: 'flex-end', sm: 'center' },
      }}
    >
      <ProductSearch redirectPath={(id: string) => paths.product.details(id)} />

      <Box sx={{ gap: 1, flexShrink: 0, display: 'flex' }}>
        {/* <ProductFiltersDrawer
          filters={filters}
          canReset={canReset}
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          options={{
            colors: PRODUCT_COLOR_OPTIONS,
            ratings: PRODUCT_RATING_OPTIONS,
            genders: PRODUCT_GENDER_OPTIONS,
            categories: ['all', ...PRODUCT_CATEGORY_OPTIONS],
          }}
        /> */}

        <ProductSort
          sort={sortBy}
          onSort={(newValue: string) => setSortBy(newValue)}
          sortOptions={PRODUCT_SORT_OPTIONS}
        />
      </Box>
    </Box>
  );

  const renderResults = () => (
    <ProductFiltersResult filters={filters} totalResults={dataFiltered.length} />
  );

  const renderNotFound = () => <EmptyContent filled sx={{ py: 10 }} />;

  return (
    <Stack sx={{
      mb: 10,
      // maxWidth: { xs: '800px', md: '1500px' }
    }}>
      {/* <CartIcon totalItems={checkoutState.totalItems} /> */}
      <SocialPopin />

      <Box sx={
        !customTitle ? {
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '30vh',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/background/backgroundhero.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          mb: 4,
          px: 5,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center'
        }
          : undefined
      }>
        {!customTitle &&
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#000000f7',
              opacity: 0.5,
              zIndex: 1,
              transition: 'opacity 0.5s ease',
            }}
          />
        }

        {allowTitle == true &&
          <SectionTitle
            title={''}
            txtGradient={customTitle || 'Sản phẩm của chúng tôi'}
            sx={customTitleStyle ? customTitleStyle : { my: { xs: 3, md: 5 } }}
          />
        }

        {!customTitle &&
          <SectionCaption title={!customTitle ? 'Bộ kit trọn gói: đầy đủ cho sự sáng tạo kỳ diệu' : ''} sx={{ color: '#ddd', zIndex: 2, mt: { xs: 2, sm: 0 } }} />
        }
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, px: { xs: 5, sm: 5, md: 5, lg: 10, xl: 30 } }}>

        {allowFilters &&
          <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
            {renderFilters()}
            {canReset && renderResults()}
          </Stack>
        }

        {notFound || isEmpty ? renderNotFound()
          :
          <ProductList
            customTitle={customTitle}
            products={dataFiltered}
            allowPagination={allowPagination}
            limitData={limitData}
          />}
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  sortBy: string;
  filters: IProductFilters;
  inputData: IProductItem[];
};

function applyFilter({ inputData, filters, sortBy }: ApplyFilterProps) {
  const { gender, category, colors, priceRange, rating } = filters;

  const min = priceRange[0];
  const max = priceRange[1];

  // Sort by
  if (sortBy === 'featured') {
    inputData = orderBy(inputData, ['totalSold'], ['desc']);
  }

  if (sortBy === 'newest') {
    inputData = orderBy(inputData, ['code'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    inputData = orderBy(inputData, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    inputData = orderBy(inputData, ['price'], ['asc']);
  }

  // filters
  if (gender.length) {
    inputData = inputData.filter((product) => product.gender.some((i) => gender.includes(i)));
  }

  if (category !== 'all') {
    inputData = inputData.filter((product) => product.category === category);
  }

  if (colors.length) {
    inputData = inputData.filter((product) =>
      product.colors.some((color) => colors.includes(color))
    );
  }

  if (min !== 0 || max !== 200) {
    inputData = inputData.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  if (rating) {
    inputData = inputData.filter((product) => {
      const convertRating = (value: string) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return product.totalRatings > convertRating(rating);
    });
  }

  return inputData;
}
