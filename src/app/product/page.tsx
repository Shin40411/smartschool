import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { getProducts } from 'src/actions/product-ssr';

import { ProductShopView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Sản phẩm - ${CONFIG.appName}` };

export default function Page() {
  return <ProductShopView allowTitle={false} />;
}
