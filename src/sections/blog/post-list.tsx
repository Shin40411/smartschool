import type { IPostItem } from 'src/types/blog';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';

import { PostItemSkeleton } from './post-skeleton';
import { PostItem, PostItemLatest } from './post-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
  loading?: boolean;
  limitData?: number;
};

export function PostList({ posts, loading, limitData }: Props) {
  const renderLoading = () => (
    <Box
      sx={{
        gap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
      }}
    >
      <PostItemSkeleton />
    </Box>
  );

  const renderList = (customLength?: number) => {
    const list = typeof customLength === 'number' ? posts.slice(0, customLength) : posts;

    return (
      <Grid container spacing={3}>
        {list.slice(0, 3).map((post, index) => (
          <Grid
            key={`latest-lg-${post.id}`}
            sx={{ display: { xs: 'none', lg: 'block' } }}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: index === 0 ? 6 : 3,
            }}
          >
            <PostItemLatest post={post} index={index} detailsHref={paths.post.details(post.title)} />
          </Grid>
        ))}

        {list.slice(0, 3).map((post) => (
          <Grid
            key={`latest-xs-${post.id}`}
            sx={{ display: { lg: 'none' } }}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <PostItem post={post} detailsHref={paths.post.details(post.title)} />
          </Grid>
        ))}

        {list.slice(3).map((post) => (
          <Grid
            key={`rest-${post.id}`}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <PostItem post={post} detailsHref={paths.post.details(post.title)} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {loading ? renderLoading() : renderList(limitData)}

      {posts.length > 8 && (typeof limitData === 'number' && limitData > 8) && (
        <Stack sx={{ mt: 8, alignItems: 'center' }}>
          <Button
            size="large"
            variant="outlined"
            startIcon={<CircularProgress size={18} color="inherit" />}
          >
            Load more
          </Button>
        </Stack>
      )}
    </>
  );
}
