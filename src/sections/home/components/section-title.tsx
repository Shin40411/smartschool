import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

type TextProps = {
  sx?: SxProps<Theme>;
  title: React.ReactNode;
  variants?: MotionProps['variants'];
};

type SectionTitleProps = BoxProps & {
  txtGradient?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  caption?: string;
  slotProps?: {
    title?: Omit<TextProps, 'title'>;
    caption?: Omit<TextProps, 'title'>;
    description?: Omit<TextProps, 'title'>;
  };
};

export function SectionTitle({
  sx,
  title,
  slotProps,
  txtGradient,
  description,
  caption,
  ...other
}: SectionTitleProps) {
  return (
    <Box
      sx={[
        {
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography
        component={m.h2}
        variant="h2"
        variants={slotProps?.title?.variants ?? varFade('inUp', { distance: 24 })}
        sx={slotProps?.title?.sx}
      >
        {`${title} `}
        <Box
          component="span"
          sx={(theme) => ({
            opacity: 1,
            display: 'inline-block',
            ...theme.mixins.textGradient(
              `to right, #2196F3,rgb(255, 255, 255)`
            ),
          })}
        >
          {txtGradient}
        </Box>
      </Typography>

      {description && (
        <Typography
          component={m.p}
          variants={slotProps?.description?.variants ?? varFade('inUp', { distance: 24 })}
          sx={[
            { color: 'text.secondary', textAlign: 'justify' },
            ...(Array.isArray(slotProps?.description?.sx)
              ? (slotProps?.description?.sx ?? [])
              : [slotProps?.description?.sx]),
          ]}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function SectionCaption({ title, variants, sx, ...other }: TextProps) {
  return (
    <Box
      component={m.span}
      variants={variants ?? varFade('inUp', { distance: 24 })}
      sx={[
        () => ({ typography: 'overline', color: 'text.disabled' }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {title}
    </Box>
  );
}
