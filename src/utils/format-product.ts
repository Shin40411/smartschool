import mapStemImgToItem from "src/_mock/stem_img";
import { IProductItem } from "src/types/product";

export default function mapToProductItem(apiItem: any): IProductItem {
    return {
        id: apiItem.code,
        name: apiItem.name,
        price: apiItem.price,
        coverUrl: mapStemImgToItem(apiItem.code).length > 0 ? mapStemImgToItem(apiItem.code)[0] : apiItem.coverUrl,
        category: apiItem.categoryName,
        sku: '',
        code: apiItem.code,
        taxes: 0,
        tags: [],
        sizes: [],
        publish: 'published',
        gender: [],
        images: mapStemImgToItem(apiItem.code).length > 0 ? mapStemImgToItem(apiItem.code) : [apiItem.coverUrl],
        colors: [],
        quantity: 0,
        available: apiItem.available || 0,
        totalSold: 0,
        description: apiItem.description || '',
        subDescription: apiItem.subDescription || '',
        totalRatings: 0,
        totalReviews: 0,
        createdAt: new Date().toISOString(),
        inventoryType: 'còn hàng',
        priceSale: null,
        reviews: [],
        newLabel: {
            content: 'Mới',
            enabled: false,
        },
        saleLabel: {
            content: 'Giảm giá',
            enabled: false,
        },
        ratings: [],
    };
}
