"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, Filter, X, ArrowDownUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { IProductCategory } from "@/types"
import ProductCard from "@/components/product/product-card"
import MaxContainer from "@/components/shared/max-container"

// Mock data - replace with actual Sanity.io data
const mockProducts = [
    {
        _id: "1",
        name: "Radiant Glow Foundation",
        slug: { current: "radiant-glow-foundation" },
        price: 45,
        originalPrice: 60,
        description: "Full coverage foundation with a natural, radiant finish",
        category: { _id: "1", title: "Face", slug: { current: "face" } },
        tags: ["foundation", "full-coverage", "radiant"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Foundation" }],
        inStock: true,
        featured: true,
    },
    {
        _id: "2",
        name: "Velvet Matte Lipstick",
        slug: { current: "velvet-matte-lipstick" },
        price: 28,
        description: "Long-lasting matte lipstick with intense color payoff",
        category: { _id: "2", title: "Lips", slug: { current: "lips" } },
        tags: ["lipstick", "matte", "long-lasting"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Lipstick" }],
        inStock: true,
        featured: false,
    },
    {
        _id: "3",
        name: "Luminous Eye Palette",
        slug: { current: "luminous-eye-palette" },
        price: 52,
        description: "12-shade eyeshadow palette with shimmer and matte finishes",
        category: { _id: "3", title: "Eyes", slug: { current: "eyes" } },
        tags: ["eyeshadow", "palette", "shimmer", "matte"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Eye Palette" }],
        inStock: true,
        featured: true,
    },
    {
        _id: "4",
        name: "Hydrating Face Serum",
        slug: { current: "hydrating-face-serum" },
        price: 38,
        description: "Intensive hydrating serum with hyaluronic acid",
        category: { _id: "4", title: "Skincare", slug: { current: "skincare" } },
        tags: ["serum", "hydrating", "hyaluronic-acid"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Face Serum" }],
        inStock: false,
        featured: false,
    },
    {
        _id: "5",
        name: "Precision Eyeliner",
        slug: { current: "precision-eyeliner" },
        price: 22,
        description: "Waterproof liquid eyeliner with ultra-fine tip",
        category: { _id: "3", title: "Eyes", slug: { current: "eyes" } },
        tags: ["eyeliner", "waterproof", "precision"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Eyeliner" }],
        inStock: true,
        featured: false,
    },
    {
        _id: "6",
        name: "Blush & Highlight Duo",
        slug: { current: "blush-highlight-duo" },
        price: 35,
        description: "Complementary blush and highlighter in one compact",
        category: { _id: "1", title: "Face", slug: { current: "face" } },
        tags: ["blush", "highlighter", "duo"],
        images: [{ url: "/placeholder.svg?height=400&width=400", alt: "Blush Duo" }],
        inStock: true,
        featured: true,
    },
]

const mockCategories = [
    { _id: "1", title: "Face", slug: { current: "face" } },
    { _id: "2", title: "Lips", slug: { current: "lips" } },
    { _id: "3", title: "Eyes", slug: { current: "eyes" } },
    { _id: "4", title: "Skincare", slug: { current: "skincare" } },
]

export default function CatalogPage() {
    const [products] = useState(mockProducts)
    const [categories] = useState(mockCategories)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [sortBy, setSortBy] = useState("featured")
    const [showOnlyInStock, setShowOnlyInStock] = useState(false)
    const [showOnlyFeatured, setShowOnlyFeatured] = useState(false)

    // In a real app, you would fetch data from Sanity here
    useEffect(() => {
        // fetchProducts({ search: searchQuery, categories: selectedCategories })
    }, [searchQuery, selectedCategories])

    const filteredAndSortedProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase()
                const matchesSearch =
                    product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.tags.some((tag) => tag.toLowerCase().includes(query))
                if (!matchesSearch) return false
            }

            // Category filter
            if (selectedCategories.length > 0) {
                if (!selectedCategories.includes(product.category.slug.current)) return false
            }

            // Stock filter
            if (showOnlyInStock && !product.inStock) return false

            // Featured filter
            if (showOnlyFeatured && !product.featured) return false

            return true
        })

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
    }, [products, searchQuery, selectedCategories, sortBy, showOnlyInStock, showOnlyFeatured])

    const handleCategoryChange = (categorySlug: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, categorySlug])
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== categorySlug))
        }
    }

    const activeFiltersCount = selectedCategories.length + (showOnlyInStock ? 1 : 0) + (showOnlyFeatured ? 1 : 0)

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-primary">
                <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
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
                </div>
            </div>

            <MaxContainer className="py-4 sm:py-8 max-w-[1440px] px-3">
                <div className="flex gap-6 lg:gap-8">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-100">
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
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1 min-w-0">
                        {/* Results Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                            <p className="text-sm sm:text-base">
                                {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? "s" : ""} found
                            </p>

                            {/* Active Filters - Mobile */}
                            {(selectedCategories.length > 0 || searchQuery || showOnlyInStock || showOnlyFeatured) && (
                                <div className="flex flex-wrap items-center gap-2">
                                    {searchQuery && (
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
                                    )}
                                    {selectedCategories.map((category) => (
                                        <Badge key={category} variant="secondary" className="bg-primary/10 text-primary text-xs">
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
                                    ))}
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
                                </div>
                            )}
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                            {filteredAndSortedProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredAndSortedProducts.length === 0 && (
                            <div className="text-center py-12 sm:py-16">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">No products found</h3>
                                <p className="mb-4 text-sm sm:text-base px-4">Try adjusting your search or filters</p>
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
                            </div>
                        )}
                    </div>
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

// function ProductCard({ product }: { product: IProduct }) {
//     const [isWishlisted, setIsWishlisted] = useState(false)

//     return (
//         <div className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-rose-100 hover:border-rose-200 transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/50">
//             <div className="relative aspect-square overflow-hidden">
//                 <Image
//                     src={product.images[0]?.url || "/placeholder.svg"}
//                     alt={product.images[0]?.alt || product.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />

//                 {/* Badges */}
//                 <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
//                     {product.featured && (
//                         <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 text-xs">
//                             <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
//                             Featured
//                         </Badge>
//                     )}
//                     {!product.inStock && (
//                         <Badge variant="secondary" className="bg-gray-500 text-white text-xs">
//                             Out of Stock
//                         </Badge>
//                     )}
//                 </div>

//                 {/* Wishlist Button */}
//                 <Button
//                     size="sm"
//                     variant="ghost"
//                     className="absolute top-2 sm:top-3 right-2 sm:right-3 h-7 w-7 sm:h-8 sm:w-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
//                     onClick={() => setIsWishlisted(!isWishlisted)}
//                 >
//                     <Heart
//                         className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : "text-rose-400"}`}
//                     />
//                 </Button>

//                 {/* Quick Add Button - Hidden on mobile, shown on hover for desktop */}
//                 <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
//                     <Button
//                         size="sm"
//                         className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs sm:text-sm h-8 sm:h-9"
//                         disabled={!product.inStock}
//                     >
//                         <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
//                         {product.inStock ? "Add to Bag" : "Out of Stock"}
//                     </Button>
//                 </div>
//             </div>

//             <div className="p-3 sm:p-4">
//                 <div className="mb-2">
//                     <Badge variant="outline" className="text-xs text-rose-600 border-rose-200">
//                         {product.category.title}
//                     </Badge>
//                 </div>

//                 <Link href={`/products/${product.slug.current}`}>
//                     <h3 className="font-semibold text-rose-900 mb-1 hover:text-rose-700 transition-colors text-sm sm:text-base line-clamp-2">
//                         {product.name}
//                     </h3>
//                 </Link>

//                 <p className="text-xs sm:text-sm text-rose-600/70 mb-3 line-clamp-2">{product.description}</p>

//                 <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center gap-2">
//                         <span className="font-bold text-rose-900 text-sm sm:text-base">${product.price}</span>
//                         {product.originalPrice && (
//                             <span className="text-xs sm:text-sm text-rose-400 line-through">${product.originalPrice}</span>
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile Add to Bag Button */}
//                 <div className="block sm:hidden mb-3">
//                     <Button
//                         size="sm"
//                         className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs h-8"
//                         disabled={!product.inStock}
//                     >
//                         <ShoppingBag className="h-3 w-3 mr-1" />
//                         {product.inStock ? "Add to Bag" : "Out of Stock"}
//                     </Button>
//                 </div>

//                 {/* Tags */}
//                 {product.tags.length > 0 && (
//                     <div className="flex flex-wrap gap-1">
//                         {product.tags.slice(0, 2).map((tag: string) => (
//                             <Badge key={tag} variant="secondary" className="text-xs bg-rose-50 text-rose-600 hover:bg-rose-100">
//                                 {tag}
//                             </Badge>
//                         ))}
//                         {product.tags.length > 2 && (
//                             <Badge variant="secondary" className="text-xs bg-rose-50 text-rose-600">
//                                 +{product.tags.length - 2}
//                             </Badge>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
