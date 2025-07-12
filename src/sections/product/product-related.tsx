import productsData from 'public/assets/data/data.json';
import { ProductItem } from './product-item';
import Typography from '@mui/material/Typography';
import mapToProductItem from 'src/utils/format-product';
import { Box, Container, Divider } from '@mui/material';

export function ProductRelated({ code }: { code: string }) {
    const mappedProducts = productsData.map(mapToProductItem);

    const match = code.match(/^([A-Z]+)(\d+)-(\d+)([A-Z]+)$/);
    if (!match) return null;

    const [_, prefix, midPart, numberStr, suffix] = match;
    const number = parseInt(numberStr, 10);

    const nextCodes = Array.from({ length: 10 }, (_, i) => {
        const nextNumber = number + i + 1;
        const padded = String(nextNumber).padStart(numberStr.length, '0');
        return `${prefix}${midPart}-${padded}${suffix}`;
    });

    let related = mappedProducts
        .filter((item) => nextCodes.includes(item.code))
        .slice(0, 4);

    if (related.length < 4) {
        const needed = 4 - related.length;
        const prefixMatch = `${prefix}${midPart}-`;

        const fallback = mappedProducts
            .filter((item) =>
                item.code.startsWith(prefixMatch) &&
                item.code.endsWith(suffix)
            )
            .sort((a, b) => {
                const numA = parseInt(a.code.match(/\d+(?=[A-Z]+$)/)?.[0] || '0', 10);
                const numB = parseInt(b.code.match(/\d+(?=[A-Z]+$)/)?.[0] || '0', 10);
                return numA - numB;
            })
            .filter((item) => item.code !== code && !related.includes(item))
            .slice(0, needed);

        related = [...related, ...fallback];
    }

    return (
        <Container sx={{ my: 5 }}>
            {related.length > 0 &&
                <Typography variant="h5" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif' }}>
                    Sản phẩm liên quan
                </Typography>
            }
            <Box
                sx={[
                    () => ({
                        position: 'relative',
                        gap: 3,
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(2, 1fr)',
                        },
                    }),
                ]}
            >
                {related.map((product) => (
                    <ProductItem key={product.id} product={product} detailsHref={`/product/${product.code}`} />
                ))}
            </Box>
        </Container>
    );
}

