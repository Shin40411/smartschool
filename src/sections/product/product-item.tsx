import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Fab, { fabClasses } from '@mui/material/Fab';

import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { ColorPreview } from 'src/components/color-utils';

import { useCheckoutContext } from '../checkout/context';
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
  detailsHref: string;
};

export function ProductItem({ product, detailsHref }: Props) {
  const { onAddToCart } = useCheckoutContext();

  const {
    id,
    name,
    coverUrl,
    price,
    colors,
    available,
    sizes,
    priceSale,
    newLabel,
    code,
    rawDescription,
    saleLabel }
    =
    product;

  const handleAddCart = async () => {
    const newProduct = {
      id,
      name,
      coverUrl,
      available,
      price,
      colors: [colors[0]],
      size: sizes[0],
      quantity: 1,
    };
    try {
      onAddToCart(newProduct);
    } catch (error) {
      console.error(error);
    }
  };

  const renderLabels = () =>
    (newLabel.enabled || saleLabel.enabled) && (
      <Box
        sx={{
          gap: 1,
          top: 16,
          zIndex: 9,
          right: 16,
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
        }}
      >
        {newLabel.enabled && (
          <Label variant="filled" color="info">
            {newLabel.content}
          </Label>
        )}
        {saleLabel.enabled && (
          <Label variant="filled" color="error">
            {saleLabel.content}
          </Label>
        )}
      </Box>
    );

  const renderImage = () => (
    <Link component={RouterLink} href={detailsHref} sx={{ width: { xs: '100%', sm: '100%', md: '40%' } }}>
      <Box sx={{ position: 'relative', p: 1, pb: { xs: 0, md: '15%' } }}>
        <Tooltip title={!available && 'Hết hàng'} placement="bottom-end">
          <Image
            alt={name}
            src={coverUrl}
            sx={{ aspectRatio: '1/1', borderRadius: 1.5, ...(!available && { opacity: 0.48, filter: 'grayscale(1)' }) }}
          />
        </Tooltip>
      </Box>
    </Link>
  );

  const renderContent = () => (
    <Stack spacing={2} sx={{
      width: { xs: '100%', sm: '100%', md: '60%' },
      p: 2,
      // pt: 2,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}>
      <Link
        component={RouterLink}
        href={detailsHref}
        color="inherit"
        sx={{ fontSize: { xs: 20, md: '1.25rem', xl: '1rem' }, fontWeight: 700, '&:hover': { textDecoration: 'none' }, textAlign: { xs: 'center', sm: 'left' } }}
      >
        {name}
      </Link>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Tooltip title="Color">
          <ColorPreview colors={colors} />
        </Tooltip>

        <Box sx={{
          gap: 1,
          display: 'flex',
          typography: 'subtitle1',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {priceSale && (
            <Box component="span" sx={{
              color: 'text.disabled',
              textDecoration: 'line-through',
              fontWeight: 800,
              fontSize: 17
            }}>
              {fCurrency(priceSale)}
            </Box>
          )}
          <Box component="span" sx={{ display: 'none', fontWeight: 800, fontSize: 17, color: '#FF5630' }}>{fCurrency(price)}</Box>

          <Tooltip title={rawDescription} placement="top" arrow
            componentsProps={{
              tooltip: {
                sx: {
                  textAlign: 'justify',
                  maxWidth: 300,
                  fontSize: 13,
                },
              },
            }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 13, sm: '1rem', md: 12, xl: 15 },
                color: 'text.disabled',
                textAlign: { xs: 'justify', sm: 'justify', md: 'justify' },
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                cursor: 'help',
              }}
            >
              {rawDescription}
            </Box>
          </Tooltip>
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: 'flex', justifyContent: { xs: 'space-between', sm: 'space-between', md: 'space-around' }, alignItems: 'center' }}>
        {!!available && (
          <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'column' }, gap: { sm: 2, md: 0 }, alignItems: { sm: 'center', md: 'unset' } }}>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: 12, sm: 16, md: 14, lg: 12, xl: 13 },
                  fontWeight: 600,
                }}
              >
                Mã sản phẩm:
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 12, sm: 20, md: 15, lg: 13, xl: 14 },
                }}
              >
                {code}
              </Box>
            </Box>

            <Divider
              component="div"
              orientation="vertical"
              flexItem
              sx={[
                (theme) => ({
                  width: '1px',
                  opacity: 0.16,
                  border: 'none',
                  background: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
                  display: 'block',
                }),
              ]}
            />
            <Fab
              variant="extended"
              color="primary"
              component="a"
              href="tel:(+84) 368 909 968"
              sx={{
                height: { xs: 15, sm: 20, md: 24, lg: 34 },
                minHeight: { xs: 15, sm: 20, md: 24, lg: 34 },
                fontSize: { xs: 14, sm: 20, md: 15, lg: 16, xl: 16 },
                fontWeight: 700,
                textTransform: 'none',
                gap: 0.5,
                boxShadow: 2,
                padding: { xs: '17px', sm: '20px', md: '20px', lg: '2px 10px' },
                transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                '&:hover': {
                  backgroundColor: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%) !important',
                  color: '#fff',
                  boxShadow: 6,
                  transform: 'scale(1.05) translateY(-2px)',
                },
              }}
            >
              <Iconify icon="solar:phone-bold" sx={{ width: { xs: 25, sm: 20, md: 20, lg: 20, xl: 24 } }} />
              Liên hệ
            </Fab>
          </>
          // <Fab
          //   variant="extended"
          //   size="medium"
          //   color="primary"
          //   onClick={handleAddCart}
          //   sx={{
          //     width: "100%",
          //     fontWeight: 700,
          //     textTransform: 'none',
          //     gap: 1.5,
          //     boxShadow: 2,
          //     px: 2.5,
          //     py: 1,
          //     transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
          //     '&:hover': {
          //       backgroundColor: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%) !important',
          //       color: '#fff',
          //       boxShadow: 6,
          //       transform: 'scale(1.05) translateY(-2px)',
          //     },
          //   }}
          // >
          //   <Iconify icon="solar:cart-plus-bold" width={24} />
          //   Thêm vào giỏ hàng
          // </Fab>
        )}
      </Box>
    </Stack>
  );

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        borderRadius: 2,
        // '&:hover': {
        //   [`& .${fabClasses.root}`]: { opacity: 1, transform: 'scale(1)' },
        // },
        boxShadow: 8,
      }}
    >
      {renderLabels()}
      {renderImage()}
      {renderContent()}
    </Card>
  );
}
