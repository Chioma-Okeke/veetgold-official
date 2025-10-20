import { defineType, defineField } from "sanity";

export const homePage = defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            initialValue: "Home Page",
            readOnly: true,
        }),

        // Hero Section
        defineField({
            name: "heroSection",
            title: "Hero Section",
            type: "object",
            fields: [
                defineField({
                    name: "mainHeading",
                    title: "Main Heading",
                    type: "text",
                    rows: 2,
                    description:
                        'The main headline of your website (e.g., "Skincare that Breathes With You")',
                }),
                defineField({
                    name: "subHeading",
                    title: "Sub Heading",
                    type: "string",
                    description:
                        'Supporting text under the main heading (e.g., "Nourish your glow. Own your skin. Shine, effortlessly.")',
                }),
                defineField({
                    name: "heroImages",
                    title: "Hero Background Images",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({
                                    name: "image",
                                    title: "Image",
                                    type: "image",
                                    options: {
                                        hotspot: true,
                                    },
                                }),
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                    description:
                                        "Describe what is in this image for accessibility",
                                }),
                            ],
                        },
                    ],
                    validation: (Rule) => Rule.max(5).min(1),
                    description:
                        "Add 3-5 images that will rotate in the hero section background",
                }),
                defineField({
                    name: "stats",
                    title: "Statistics",
                    type: "object",
                    fields: [
                        defineField({
                            name: "customersCount",
                            title: "Customers Count",
                            type: "string",
                            initialValue: "+250K",
                            description: "Number of customers (e.g., +250K)",
                        }),
                        defineField({
                            name: "customersLabel",
                            title: "Customers Label",
                            type: "string",
                            initialValue: "Our Customers",
                        }),
                        defineField({
                            name: "productsCount",
                            title: "Products Count",
                            type: "string",
                            initialValue: "+50K",
                            description: "Number of products (e.g., +50K)",
                        }),
                        defineField({
                            name: "productsLabel",
                            title: "Products Label",
                            type: "string",
                            initialValue: "Our Products",
                        }),
                    ],
                }),
            ],
        }),

        // Section After Hero
        defineField({
            name: "aboutSection",
            title: "About Section (After Hero)",
            type: "object",
            fields: [
                defineField({
                    name: "heading",
                    title: "Heading",
                    type: "text",
                    rows: 2,
                    description: "Main heading for the about section",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                    rows: 3,
                    description: "Supporting description text",
                }),
                defineField({
                    name: "image",
                    title: "Section Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                }),
            ],
        }),

        // New Arrivals & Best Selling Sections
        defineField({
            name: "productSections",
            title: "Product Sections",
            type: "object",
            fields: [
                defineField({
                    name: "newArrivalsTitle",
                    title: "New Arrivals Section Title",
                    type: "string",
                    initialValue: "New Arrivals",
                }),
                defineField({
                    name: "bestSellingTitle",
                    title: "Best Selling Section Title",
                    type: "string",
                    initialValue: "Best Selling",
                }),
                defineField({
                    name: "showNewArrivals",
                    title: "Show New Arrivals Section",
                    type: "boolean",
                    initialValue: true,
                }),
                defineField({
                    name: "showBestSelling",
                    title: "Show Best Selling Section",
                    type: "boolean",
                    initialValue: true,
                }),
            ],
        }),

        // Featured Collections
        defineField({
            name: "featuredCollections",
            title: "Featured Collections Section",
            type: "object",
            fields: [
                defineField({
                    name: "sectionTitle",
                    title: "Section Title",
                    type: "string",
                    initialValue: "Our Featured Collections",
                }),
                defineField({
                    name: "collections",
                    title: "Collections",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            name: "collection",
                            title: "Collection",
                            fields: [
                                defineField({
                                    name: "name",
                                    title: "Collection Name",
                                    type: "string",
                                    description:
                                        "e.g., Fragrances, Beauty, Cosmetics",
                                }),
                                defineField({
                                    name: "key",
                                    title: "Collection Key",
                                    type: "string",
                                    description:
                                        "Internal key (lowercase, no spaces) e.g., fragrances, beauty, cosmetics",
                                }),
                                defineField({
                                    name: "title",
                                    title: "Display Title",
                                    type: "string",
                                }),
                                defineField({
                                    name: "description",
                                    title: "Description",
                                    type: "text",
                                    rows: 5,
                                }),
                                defineField({
                                    name: "images",
                                    title: "Collection Images",
                                    type: "array",
                                    of: [
                                        {
                                            type: "image",
                                            options: {
                                                hotspot: true,
                                            },
                                        },
                                    ],
                                    validation: (Rule) => Rule.max(5).min(1),
                                }),
                            ],
                        },
                    ],
                    validation: (Rule) => Rule.max(5).min(1),
                }),
            ],
        }),

        // Testimonials Section
        defineField({
            name: "testimonialsSection",
            title: "Testimonials Section",
            type: "object",
            fields: [
                defineField({
                    name: "sectionSubtitle",
                    title: "Section Subtitle",
                    type: "string",
                    initialValue: "TESTIMONIAL",
                }),
                defineField({
                    name: "sectionTitle",
                    title: "Section Title",
                    type: "string",
                    initialValue: "What Our Customers Say",
                }),
                defineField({
                    name: "highlightedWord",
                    title: "Highlighted Word",
                    type: "string",
                    initialValue: "Customers",
                    description: "Word to highlight in gold color",
                }),
                defineField({
                    name: "testimonials",
                    title: "Customer Testimonials",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            name: "testimonial",
                            title: "Testimonial",
                            fields: [
                                defineField({
                                    name: "message",
                                    title: "Customer Message",
                                    type: "text",
                                    rows: 4,
                                }),
                                defineField({
                                    name: "customerName",
                                    title: "Customer Name",
                                    type: "string",
                                }),
                                defineField({
                                    name: "location",
                                    title: "Customer Location",
                                    type: "string",
                                    description:
                                        "City or area where customer is from",
                                }),
                            ],
                        },
                    ],
                    validation: (Rule) => Rule.min(3),
                }),
            ],
        }),

        // Section Settings
        defineField({
            name: "sectionSettings",
            title: "Section Display Settings",
            type: "object",
            fields: [
                defineField({
                    name: "showHeroSection",
                    title: "Show Hero Section",
                    type: "boolean",
                    initialValue: true,
                }),
                defineField({
                    name: "showAboutSection",
                    title: "Show About Section",
                    type: "boolean",
                    initialValue: true,
                }),
                defineField({
                    name: "showFeaturedCollections",
                    title: "Show Featured Collections",
                    type: "boolean",
                    initialValue: true,
                }),
                defineField({
                    name: "showTestimonials",
                    title: "Show Testimonials",
                    type: "boolean",
                    initialValue: true,
                }),
            ],
        }),
    ],

    preview: {
        select: {
            title: "title",
            heroHeading: "heroSection.mainHeading",
        },
        prepare({ title, heroHeading }) {
            return {
                title: title || "Home Page",
                subtitle: heroHeading
                    ? `Hero: ${heroHeading.slice(0, 50)}...`
                    : "No hero heading set",
            };
        },
    },
});
