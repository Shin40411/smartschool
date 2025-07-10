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
    <Link component={RouterLink} href={detailsHref}>
      <Box sx={{ position: 'relative', p: 1 }}>
        <Box component="span"
          sx={{
            position: 'absolute',
            top: 15,
            left: 20,
            color: '#fff',
            fontWeight: 800,
            fontSize: 10,
            backgroundColor: '#000',
            borderRadius: 0.5,
            boxShadow: 3,
            p: 0.5,
            zIndex: 2,
          }}
        >
          {code}
        </Box>

        <Tooltip title={!available && 'Hết hàng'} placement="bottom-end">
          <Image
            alt={name}
            src={coverUrl}
            ratio="1/1"
            sx={{ borderRadius: 1.5, ...(!available && { opacity: 0.48, filter: 'grayscale(1)' }) }}
          />
        </Tooltip>
      </Box>
    </Link>
  );

  const renderContent = () => (
    <Stack spacing={2.5} sx={{
      p: 3,
      pt: 2,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Link
        component={RouterLink}
        href={detailsHref}
        color="inherit"
        textAlign="center"
        variant="subtitle2"
        sx={{ '&:hover': { textDecoration: 'none' } }}
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
                fontSize: 13,
                color: 'text.disabled',
                textAlign: 'justify',
                display: '-webkit-box',
                WebkitLineClamp: 4,
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

      <Box sx={{ width: "100%" }}>
        {!!available && (
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            component="a"
            href="tel:(+84) 368 909 968"
            sx={{
              width: "100%",
              fontSize: {xs: 14, md: 17},
              fontWeight: 700,
              textTransform: 'none',
              gap: 1.5,
              boxShadow: 2,
              px: 2.5,
              py: 1,
              transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
              '&:hover': {
                backgroundColor: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%) !important',
                color: '#fff',
                boxShadow: 6,
                transform: 'scale(1.05) translateY(-2px)',
              },
            }}
          >
            <Iconify icon="solar:phone-bold" width={24} />
            Liên hệ
          </Fab>
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
        flexDirection: 'column',
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
