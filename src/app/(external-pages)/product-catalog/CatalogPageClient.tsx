"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, Filter, X, ArrowDownUp, LoaderPinwheel } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { IProduct, IProductCategory } from "@/types"
import ProductCard from "@/components/product/product-card"
import MaxContainer from "@/components/shared/max-container"
import { getProducts } from "@/lib/sanity-queries"
import { useSearchParams, useRouter } from "next/navigation"

interface CatalogPageClientProps {
    initialProducts: IProduct[]
    categories: IProductCategory[]
}

export default function CatalogPageClient({ initialProducts, categories }: CatalogPageClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const featureFilter = searchParams.get("filter")
    const [products, setProducts] = useState<IProduct[]>(initialProducts)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>(featureFilter ? [featureFilter] : [])
    const [sortBy, setSortBy] = useState("featured")
    const [showOnlyInStock, setShowOnlyInStock] = useState(false)
    const [showOnlyFeatured, setShowOnlyFeatured] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (featureFilter) {
            setSelectedCategories([featureFilter])
            const params = new URLSearchParams(searchParams.toString())
            params.delete("filter")
            router.replace(`?${params.toString()}`, { scroll: false })
        }
    }, [featureFilter, searchParams, router])

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            setLoading(true)
            try {
                const filteredProducts = await getProducts({
                    search: searchQuery || undefined,
                    featured: showOnlyFeatured || undefined,
                    showOutOfStock: !showOnlyInStock,
                })
                setProducts(filteredProducts as IProduct[])
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFilteredProducts()
    }, [searchQuery, showOnlyInStock, showOnlyFeatured])

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = [...products]

        if (selectedCategories.length > 0) {
            filtered = filtered.filter((product) => {
                if (!product.category || product.category.length === 0) {
                    return false
                }
                return product.category.some((cat) => selectedCategories.includes(cat.slug.current))
            })
        }

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price
                case "price-high":
                    return b.price - a.price
                case "name":
                    return a.name.localeCompare(b.name)
                case "featured":
                default:
                    return b.featured ? 1 : -1
            }
        })

        return filtered
    }, [products, selectedCategories, sortBy])

    const handleCategoryChange = (categorySlug: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, categorySlug])
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== categorySlug))
        }
    }

    const activeFiltersCount = selectedCategories.length + (showOnlyInStock ? 1 : 0) + (showOnlyFeatured ? 1 : 0)

    return (
        <div className="min-h-screen w-full">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-primary">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
                    {/* Mobile Header */}
                    <div className="block lg:hidden space-y-4">
                        <h1 className="text-2xl sm:text-3xl font-semibold">
                            All Products
                        </h1>

                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
                            <input
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 focus:outline-none focus:ring-0 focus-visible:ring-0 h-11 w-full transition-all duration-300 ease-in-out border-b border-transparent focus:border-primary px-3"
                            />
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex gap-2">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-none shadow-none justify-start relative w-fit"
                                    >
                                        <Filter className="h-4 w-4 mr-2" />
                                        <p>Filters</p>
                                        {activeFiltersCount > 0 && (
                                            <Badge className="ml-2 h-5 w-5 p-0 text-xs bg-primary text-white rounded-full flex items-center justify-center">
                                                {activeFiltersCount}
                                            </Badge>
                                        )}
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                                    <SheetHeader>
                                        <SheetTitle >Filters</SheetTitle>
                                        <SheetDescription>Refine your product search</SheetDescription>
                                    </SheetHeader>
                                    <div className="space-y-6 pl-4">
                                        <FilterSection
                                            categories={categories}
                                            selectedCategories={selectedCategories}
                                            onCategoryChange={handleCategoryChange}
                                            showOnlyInStock={showOnlyInStock}
                                            setShowOnlyInStock={setShowOnlyInStock}
                                            showOnlyFeatured={showOnlyFeatured}
                                            setShowOnlyFeatured={setShowOnlyFeatured}
                                        />
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="flex-1 flex justify-end items-center gap-2 border-none shadow-none focus:ring-0 focus-visible:ring-0" showIcon={false}>
                                    <ArrowDownUp />
                                    <p>Sort By</p>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="featured">Featured</SelectItem>
                                    <SelectItem value="name">Name A-Z</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden lg:flex lg:items-center gap-6">
                        <div className="flex-1">
                            <h1 className="text-3xl xl:text-4xl font-semibold">
                                All Products
                            </h1>
                        </div>

                        {/* Desktop Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
                            <input
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 focus:outline-none focus:ring-0 focus-visible:ring-0 h-11 border-b border-transparent focus:border-primary focus:ring-primary w-full transition-all duration-300 ease-in-out"
                            />
                        </div>

                        {/* Desktop Sort */}
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="cursor-pointer flex items-center gap-2 border-none shadow-none focus:ring-0 focus-visible:ring-0" showIcon={false}>
                                <ArrowDownUp />
                                <p>Sort By</p>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="featured">Featured</SelectItem>
                                <SelectItem value="name">Name A-Z</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>
            </div>

            <MaxContainer className="py-4 sm:py-8 max-w-[1440px] px-3">
                <div className="flex gap-6 lg:gap-8">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-100">
                            <FilterSection
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onCategoryChange={handleCategoryChange}
                                showOnlyInStock={showOnlyInStock}
                                setShowOnlyInStock={setShowOnlyInStock}
                                showOnlyFeatured={showOnlyFeatured}
                                setShowOnlyFeatured={setShowOnlyFeatured}
                            />
                        </motion.div>
                    </div>

                    {/* Product Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 min-w-0">
                        {/* Results Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                            <motion.p
                                key={filteredAndSortedProducts.length}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm sm:text-base"
                            >
                                {loading ? (
                                    <span>Loading...</span>
                                ) : (
                                    <>
                                        <motion.span
                                            key={`count-${filteredAndSortedProducts.length}`}
                                            initial={{ scale: 1.2, color: "#ef4444" }}
                                            animate={{ scale: 1, color: "inherit" }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {filteredAndSortedProducts.length}
                                        </motion.span> product{filteredAndSortedProducts.length !== 1 ? "s" : ""} found
                                    </>
                                )}
                            </motion.p>

                            {/* Active Filters - Mobile */}
                            <AnimatePresence>
                                {(selectedCategories.length > 0 || searchQuery || showOnlyInStock || showOnlyFeatured) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-wrap items-center gap-2"
                                    >
                                        <AnimatePresence>
                                            {searchQuery && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                                        Search: {searchQuery}
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-4 w-4 p-0 ml-1 hover:bg-primary/10"
                                                            onClick={() => setSearchQuery("")}
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                </motion.div>
                                            )}
                                            {selectedCategories.map((category) => (
                                                <motion.div
                                                    key={category}
                                                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                                        {categories.find((c) => c.slug.current === category)?.title}
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-4 w-4 p-0 ml-1 hover:bg-primary/10"
                                                            onClick={() => handleCategoryChange(category, false)}
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => {
                                                    setSelectedCategories([])
                                                    setSearchQuery("")
                                                    setShowOnlyInStock(false)
                                                    setShowOnlyFeatured(false)
                                                }}
                                                className="text-primary hover:text-primary/80 hover:bg-primary/10 text-xs h-7"
                                            >
                                                Clear all
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Product Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 gap-y-8"
                        >
                            <AnimatePresence>
                                {filteredAndSortedProducts.map((product, index) => (
                                    <motion.div
                                        key={product._id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                            layout: { duration: 0.3 }
                                        }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Empty State */}
                        <AnimatePresence>
                            {!loading && filteredAndSortedProducts.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-center py-12 sm:py-16"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                                    >
                                        <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-lg sm:text-xl font-semibold mb-2"
                                    >
                                        No products found
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="mb-4 text-sm sm:text-base px-4"
                                    >
                                        Try adjusting your search or filters
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <Button
                                            onClick={() => {
                                                setSelectedCategories([])
                                                setSearchQuery("")
                                                setShowOnlyInStock(false)
                                                setShowOnlyFeatured(false)
                                            }}
                                            className="rounded-lg"
                                        >
                                            Clear all filters
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Loading State */}
                        {loading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <LoaderPinwheel className="mx-auto mb-4 h-10 w-10 text-primary animate-spin" />
                                <p className="text-lg">Loading products...</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </MaxContainer>
        </div>
    )
}

function FilterSection({
    categories,
    selectedCategories,
    onCategoryChange,
    showOnlyInStock,
    setShowOnlyInStock,
    showOnlyFeatured,
    setShowOnlyFeatured,
}: {
    categories: IProductCategory[]
    selectedCategories: string[]
    onCategoryChange: (slug: string, checked: boolean) => void
    showOnlyInStock: boolean
    setShowOnlyInStock: (value: boolean) => void
    showOnlyFeatured: boolean
    setShowOnlyFeatured: (value: boolean) => void
}) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <div key={category._id} className="flex items-center space-x-3">
                            <Checkbox
                                id={category.slug.current}
                                checked={selectedCategories.includes(category.slug.current)}
                                onCheckedChange={(checked) => onCategoryChange(category.slug.current, checked as boolean)}
                                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <Label htmlFor={category.slug.current} className="cursor-pointer flex-1">
                                {category.title}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="bg-primary" />

            <div>
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="in-stock"
                            checked={showOnlyInStock}
                            onCheckedChange={setShowOnlyInStock}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="in-stock" className="text-sm cursor-pointer flex-1">
                            In Stock Only
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="featured"
                            checked={showOnlyFeatured}
                            onCheckedChange={setShowOnlyFeatured}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="featured" className="text-sm cursor-pointer flex-1">
                            Featured Only
                        </Label>
                    </div>
                </div>
            </div>
        </div>
    )
}