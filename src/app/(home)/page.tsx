import type { Metadata } from 'next';
import { getProducts } from 'src/actions/product-ssr';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Minimals UI: The starting point for your next project',
  description:
    'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
};

export default async function Page() {
  const { products } = await getProducts();
  return <HomeView products={products} />;
}
