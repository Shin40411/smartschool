import { IProductItem } from "src/types/product";

export default function mapToProductItem(apiItem: any): IProductItem {
    return {
        id: apiItem.code,
        name: apiItem.name,
        price: apiItem.price,
        coverUrl: apiItem.coverUrl,
        category: apiItem.categoryName,
        sku: '',
        code: apiItem.code,
        taxes: 0,
        tags: [],
        sizes: [],
        publish: 'published',
        gender: [],
        images: [apiItem.coverUrl],
        colors: [],
        quantity: 0,
        available: apiItem.available || 0,
        totalSold: 0,
        description: apiItem.description || '',
        subDescription: '',
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
