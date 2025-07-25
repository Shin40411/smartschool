import type { IAddressItem } from 'src/types/common';
import type { PaperProps } from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  action?: React.ReactNode;
  address: IAddressItem;
};

export function AddressItem({ address, action, sx, ...other }: Props) {
  return (
    <Paper
      sx={[
        {
          gap: 2,
          display: 'flex',
          position: 'relative',
          alignItems: { md: 'flex-end' },
          flexDirection: { xs: 'column', md: 'row' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          gap: 1,
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle2">
            {address.name}
            <Box component="span" sx={{ ml: 0.5, typography: 'body2', color: 'text.secondary' }}>
              ({address.addressType})
            </Box>
          </Typography>

          {address.primary && (
            <Label color="info" sx={{ ml: 1 }}>
              Mặc định
            </Label>
          )}
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {address.fullAddress.replace(/(, )+$/, '')}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {address.phoneNumber}
        </Typography>
      </Box>

      {action && action}
    </Paper>
  );
}

