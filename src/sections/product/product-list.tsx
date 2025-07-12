import { useState } from 'react';

import type { BoxProps } from '@mui/material/Box';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';

import { ProductItem } from './product-item';
import { ProductItemSkeleton } from './product-skeleton';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  loading?: boolean;
  products: IProductItem[];
  allowPagination?: boolean;
  limitData?: number;
  customTitle?: string;
};

export function ProductList({ products, loading, allowPagination, limitData, customTitle, sx, ...other }: Props) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const renderLoading = () => <ProductItemSkeleton />;

  const renderList = (customLength?: number) => {
    let list = products;
    if (typeof customLength === 'number') {
      list = products.slice(0, customLength);
    } else if (allowPagination && products.length > itemsPerPage) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      list = products.slice(start, end);
    }
    return list.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        detailsHref={paths.product.details(product.id)}
        customTitle={customTitle}
      />
    ));
  };

  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <Box>
      <Box
        sx={[
          () => ({
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
              // lg: 'repeat(4, 1fr)',
            },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {loading ? renderLoading() : renderList(limitData)}
      </Box>

      {allowPagination && products.length > itemsPerPage && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          color='primary'
          sx={{
            mt: { xs: 5, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </Box>
  );
}
