import { defineType, defineField } from "sanity";

export const category = defineType({
    name: "category",
    title: "Product Categories",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Category Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Category Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "image",
            title: "Category Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "featured",
            title: "Featured Category",
            type: "boolean",
            initialValue: false,
            description: "Show this category prominently on the website",
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "image",
            featured: "featured",
        },
        prepare({ title, media, featured }) {
            return {
                title,
                subtitle: featured ? "⭐ Featured Category" : "Category",
                media,
            };
        },
    },
});
