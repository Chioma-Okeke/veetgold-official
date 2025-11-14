import { Suspense } from "react"
import { getProducts, getCategories } from "@/lib/sanity-queries"
import { IProduct, IProductCategory } from "@/types"
import CatalogPageClient from "./CatalogPageClient"
import { LoaderPinwheel } from "lucide-react"

export default async function CatalogPage() {
    const [initialProducts, categories] = await Promise.all([
        getProducts({ showOutOfStock: true }) as Promise<IProduct[]>,
        getCategories() as Promise<IProductCategory[]>
    ])

    return (
        <Suspense fallback={
            <div
                className="text-center py-12 min-h-screen flex flex-col justify-center items-center"
            >
                <LoaderPinwheel className="mx-auto mb-4 h-10 w-10 text-primary animate-spin" />
                <p className="text-lg">Loading products...</p>
            </div>
        }>
            <CatalogPageClient
                initialProducts={initialProducts}
                categories={categories}
            />
        </Suspense>
    )
}

