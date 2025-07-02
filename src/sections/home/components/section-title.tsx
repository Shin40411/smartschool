import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';
import { useEffect, useState } from 'react';

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
  typingDescription?: boolean;
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
  typingDescription = false,
  caption,
  ...other
}: SectionTitleProps) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 20;

  const characters =
    typingDescription && typeof description === 'string'
      ? Array.from(description)
      : [];

  useEffect(() => {
    if (!typingDescription || typeof description !== 'string') return;
    setTypedText('');
    setCurrentIndex(0);
  }, [typingDescription, description]);

  useEffect(() => {
    if (
      !typingDescription ||
      typeof description !== 'string' ||
      currentIndex >= characters.length
    )
      return;

    const timeout = setTimeout(() => {
      setTypedText((prev) => prev + characters[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, characters, typingDescription, description]);

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
            ...theme.mixins.textGradient('to right, #2196F3, rgb(146, 146, 146)'),
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
            { color: 'text.secondary', textAlign: 'justify', whiteSpace: 'pre-line' },
            ...(Array.isArray(slotProps?.description?.sx)
              ? slotProps?.description?.sx
              : [slotProps?.description?.sx]),
          ]}
        >
          {typingDescription && typeof description === 'string'
            ? typedText
            : description}
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
