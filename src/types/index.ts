export interface Testimonials {
    id: number
    image: string
    message: string
    name: string
    cohort: string
}

export interface FeaturedCollections {
    fragrances: collectionData
    beauty: collectionData
    cosmetics: collectionData
}

export interface collectionData {
    title: string
    description: string
    imgSrc: string[]
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
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  tags: string[];
  images: {
    url: string;
    alt: string;
  }[];
  inStock: boolean;
  featured: boolean;
}

export interface IProductCategory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

