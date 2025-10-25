import { Suspense } from "react"
import { getProducts, getCategories } from "@/lib/sanity-queries"
import { IProduct, IProductCategory } from "@/types"
import CatalogPageClient from "./CatalogPageClient"

export default async function CatalogPage() {
    const [initialProducts, categories] = await Promise.all([
        getProducts({ showOutOfStock: true }) as Promise<IProduct[]>,
        getCategories() as Promise<IProductCategory[]>
    ])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CatalogPageClient
                initialProducts={initialProducts}
                categories={categories}
            />
        </Suspense>
    )
}

