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
