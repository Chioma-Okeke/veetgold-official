import { defineType, defineField } from "sanity";

const products = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string",
                            description: "Important for SEO and accessibility",
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.min(1).max(6),
        }),
        defineField({
            name: "price",
            title: "Current Price (₦)",
            type: "number",
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
            name: "originalPrice",
            title: "Original Price (₦)",
            type: "number",
            description:
                "Leave empty if no discount. Must be higher than current price.",
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            name: "description",
            title: "Product Description",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Product Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
            description:
                'Add relevant tags like "new", "bestseller", "organic", etc.',
        }),
        defineField({
            name: "inStock",
            title: "In Stock",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "featured",
            title: "Featured Product",
            type: "boolean",
            initialValue: false,
            description: "Show this product in featured sections",
        }),
        defineField({
            name: "newArrival",
            title: "New Arrival",
            type: "boolean",
            initialValue: false,
            description: 'Show this product in "New Arrivals" section',
        }),
        defineField({
            name: "bestSelling",
            title: "Best Selling",
            type: "boolean",
            initialValue: false,
            description: 'Show this product in "Best Selling" section',
        }),
        defineField({
            name: "ingredients",
            title: "Key Ingredients",
            type: "array",
            of: [{ type: "string" }],
            description: "List main ingredients of the product",
        }),
        defineField({
            name: "howToUse",
            title: "How to Use",
            type: "text",
            rows: 3,
            description: "Instructions on how to use the product",
        }),
        defineField({
            name: "benefits",
            title: "Product Benefits",
            type: "array",
            of: [{ type: "string" }],
            description: "List the main benefits of using this product",
        }),
        defineField({
            name: "sizeVariants",
            title: "Size Variants",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "size",
                            title: "Size",
                            type: "string",
                            description: "e.g., 50ml, 100ml, Travel Size",
                        }),
                        defineField({
                            name: "price",
                            title: "Price (₦)",
                            type: "number",
                        }),
                        defineField({
                            name: "inStock",
                            title: "In Stock",
                            type: "boolean",
                            initialValue: true,
                        }),
                    ],
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: "name",
            price: "price",
            media: "images.0",
            inStock: "inStock",
            featured: "featured",
        },
        prepare({ title, price, media, inStock, featured }) {
            const status = [];
            if (featured) status.push("⭐ Featured");
            if (!inStock) status.push("❌ Out of Stock");

            return {
                title,
                subtitle: `₦${price?.toLocaleString()} ${status.join(" ")}`,
                media,
            };
        },
    },
});

export default products;
