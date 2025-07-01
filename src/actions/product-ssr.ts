import axios, { endpoints } from 'src/lib/axios';
import mapToProductItem from 'src/utils/format-product';

// ----------------------------------------------------------------------
type ProductQueryParams = {
  pageNumber?: number;
  pageSize?: number;
  category?: string;
  productName?: string;
};

export async function getProducts(params?: ProductQueryParams) {
  const res = await axios.get(endpoints.product.list, {
    params,
  });

  return res.data;
}
// ----------------------------------------------------------------------

export async function getProduct(id: string) {
  const URL = id ? `${endpoints.product.details}?productId=${id}` : '';

  const res = await axios.get(URL);
  console.log(res.data);

  return mapToProductItem(res.data.data);
}
