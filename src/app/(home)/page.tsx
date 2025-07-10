import type { Metadata } from 'next';
import { _mock } from 'src/_mock';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Sản phẩm Giáo Dục Stem Bắc Nam',
  description:
    'Sản phẩm Giáo Dục Stem Bắc Nam - Nơi kết nối tri thức và công nghệ',
};

export default function Page() {
  return <HomeView />;
}
