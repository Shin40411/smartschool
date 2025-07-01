import type { SWRConfiguration } from 'swr';
import type { IProductItem } from 'src/types/product';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/lib/axios';
import mapToProductItem from 'src/utils/format-product';
import productsData from 'public/assets/data/data.json';
// import fs from 'fs';
// import path from 'path';
// import { NextApiRequest, NextApiResponse } from 'next';

// ----------------------------------------------------------------------

const swrOptions: SWRConfiguration = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type ProductsData = {
  products: IProductItem[];
};

export function useGetProducts() {
  const url = endpoints.product.list;

  const { data, isLoading, error, isValidating } = useSWR<ProductsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      products: data?.products || [],
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !isValidating && !data?.products.length,
    }),
    [data?.products, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type ProductData = {
  product: IProductItem;
};

export function useGetProduct(productId: string) {
  const url = productId ? [endpoints.product.details, { params: { productId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<ProductData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      product: data?.product,
      productLoading: isLoading,
      productError: error,
      productValidating: isValidating,
    }),
    [data?.product, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type SearchResultsData = {
  data: {
    items: IProductItem[];
  };
};

// export function useSearchProducts(query: string) {
//   const url = query
//     ? [endpoints.product.search, { params: { productName: query, pageNumber: 1, pageSize: 100 } }]
//     : null;

//   const { data, isLoading, error, isValidating } = useSWR<SearchResultsData>(url, fetcher, {
//     ...swrOptions,
//     keepPreviousData: true,
//   });

//   const mappedResults: IProductItem[] = useMemo(
//     () => (data?.data?.items || []).map(mapToProductItem),
//     [data]
//   );

//   const memoizedValue = useMemo(
//     () => ({
//       searchResults: mappedResults,
//       searchLoading: isLoading,
//       searchError: error,
//       searchValidating: isValidating,
//       searchEmpty: !isLoading && !isValidating && mappedResults.length === 0,
//     }),
//     [mappedResults, error, isLoading, isValidating]
//   );

//   return memoizedValue;
// }

export function useSearchProducts(query: string) {
  const mappedData: IProductItem[] = useMemo(
    () => productsData.map(mapToProductItem),
    []
  );

  const filteredResults = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase();

    return mappedData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.sku?.toLowerCase().includes(lowerQuery)
    );
  }, [query, mappedData]);

  return {
    searchResults: filteredResults,
    searchLoading: false,
    searchError: null,
    searchValidating: false,
    searchEmpty: filteredResults.length === 0,
  };
}


// export default function Imageshandler(req: NextApiRequest, res: NextApiResponse) {
//   const baseDir = path.join(process.cwd(), 'public/images/stem-product');
//   const result: Record<string, string[]> = {};

//   try {
//     const folders = fs.readdirSync(baseDir);

//     folders.forEach((folder) => {
//       const folderPath = path.join(baseDir, folder);
//       if (fs.statSync(folderPath).isDirectory()) {
//         const files = fs.readdirSync(folderPath).filter((file) =>
//           /\.(jpg|jpeg|png|gif|jfif)$/i.test(file)
//         );
//         result[folder] = files;
//       }
//     });

//     res.status(200).json(result);
//   } catch (error) {
//     console.error('Failed to read image folders:', error);
//     res.status(500).json({ error: 'Failed to load stem product images.' });
//   }
// }