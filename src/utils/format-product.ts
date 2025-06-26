import { IProductItem } from "src/types/product";

export default function mapToProductItem(apiItem: any): IProductItem {
    return {
        id: apiItem.id,
        name: apiItem.name,
        price: apiItem.price,
        coverUrl: apiItem.mainImage,
        category: apiItem.categoryName,
        sku: '',
        code: '',
        taxes: 0,
        tags: [],
        sizes: [],
        publish: 'published',
        gender: [],
        images: [apiItem.mainImage],
        colors: [],
        quantity: 0,
        available: 1,
        totalSold: 0,
        description: '',
        subDescription: '',
        totalRatings: 0,
        totalReviews: 0,
        createdAt: new Date().toISOString(),
        inventoryType: 'in_stock',
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
