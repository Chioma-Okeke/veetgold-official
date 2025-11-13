export interface Testimonials {
    id: number;
    image: string;
    message: string;
    name: string;
    cohort: string;
}

export interface FeaturedCollections {
    fragrances: collectionData;
    beauty: collectionData;
    cosmetics: collectionData;
}

export interface collectionData {
    title: string;
    description: string;
    imgSrc: string[];
}

export interface IProduct {
    _id: string;
    name: string;
    slug: {
        current: string;
    };
    price: number;
    originalPrice?: number; // optional, since not all items have it
    description: string;
    category: IProductCategory[];
    tags: string[];
    images: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    }[];
    inStock: boolean;
    featured: boolean;
    newArrival?: boolean;
    bestSelling?: boolean;
    quantity?: number;
}

export interface IProductCategory {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
}

export interface ICartState {
    cart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    increaseQty: (productId: string) => void;
    decreaseQty: (productId: string) => void;
}
