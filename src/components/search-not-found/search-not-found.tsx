import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type SearchNotFoundProps = BoxProps & {
  query?: string;
  sx?: SxProps<Theme>;
  slotProps?: {
    title?: TypographyProps;
    description?: TypographyProps;
  };
};

export function SearchNotFound({ query, sx, slotProps, ...other }: SearchNotFoundProps) {
  if (!query) {
    return (
      <Typography variant="body2" {...slotProps?.description}>
        Vui lòng nhập từ khóa tìm kiếm.
      </Typography>
    );
  }

  return (
    <Box
      sx={[
        {
          gap: 1,
          display: 'flex',
          borderRadius: 1.5,
          textAlign: 'center',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography
        variant="h6"
        {...slotProps?.title}
        sx={[
          { color: 'text.primary' },
          ...(Array.isArray(slotProps?.title?.sx)
            ? (slotProps?.title?.sx ?? [])
            : [slotProps?.title?.sx]),
        ]}
      >
        Không tìm thấy kết quả
      </Typography>

      <Typography variant="body2" {...slotProps?.description}>
        Không tìm thấy kết quả cho &nbsp;
        <strong>{`"${query}"`}</strong>
        .
        <br /> Vui lòng kiểm tra lỗi chính tả hoặc sử dụng từ hoàn chỉnh.
      </Typography>
    </Box>
  );
}
