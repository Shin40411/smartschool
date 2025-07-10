import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> },
  {
    title: 'Sản phẩm',
    icon: <Iconify width={22} icon="solar:list-bold" />,
    path: paths.product.root,
  },
  {
    title: 'Về chúng tôi',
    path: 'https://www.iit.vn/',
    icon: <Iconify width={22} icon="solar:users-group-rounded-bold" />,
  },
  {
    title: 'Liên hệ',
    icon: <Iconify width={22} icon="solar:phone-bold" />,
    path: paths.contact,
  }
];
