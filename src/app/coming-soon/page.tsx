import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';

import { ComingSoonView } from 'src/sections/coming-soon/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Trang đang được phát triển - ${CONFIG.appName}` };

export default function Page() {
  return <ComingSoonView />;
}
