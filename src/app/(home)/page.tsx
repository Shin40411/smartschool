import type { Metadata } from 'next';
import { _mock } from 'src/_mock';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Trường học thông minh',
  description:
    'Trường học thông minh - Nơi kết nối tri thức và công nghệ',
};

export default function Page() {
  return <HomeView />;
}
