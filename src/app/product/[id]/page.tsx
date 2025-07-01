'use client';

import type { Metadata } from 'next';
import type { IProductItem } from 'src/types/product';

import { CONFIG } from 'src/global-config';
import axios, { endpoints } from 'src/lib/axios';
import { getProduct } from 'src/actions/product-ssr';

import { ProductShopDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

// export const metadata: Metadata = { title: `Chi tiết sản phẩm - ${CONFIG.appName}` };

export default function Page() {
  return <ProductShopDetailsView />;
}

// ----------------------------------------------------------------------

// export async function generateStaticParams() {
//   const res = await axios.get(endpoints.product.list);

//   const products: IProductItem[] = CONFIG.isStaticExport
//     ? res.data.data.items || []
//     : (res.data.data.items || []).slice(0, 1);

//   return products.map((product) => ({
//     id: product.id,
//   }));
// }

