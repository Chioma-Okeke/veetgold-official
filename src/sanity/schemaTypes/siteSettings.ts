import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        // General Site Information
        defineField({
            name: "siteName",
            title: "Site Name",
            type: "string",
            initialValue: "VeetGold Official",
        }),
        defineField({
            name: "siteDescription",
            title: "Site Description",
            type: "text",
            rows: 3,
            description: "Brief description of your website for SEO",
        }),
        defineField({
            name: "logo",
            title: "Site Logo",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

        // Contact Information
        defineField({
            name: "contactInfo",
            title: "Contact Information",
            type: "object",
            fields: [
                defineField({
                    name: "phone",
                    title: "Phone Numbers",
                    type: "array",
                    of: [{ type: "string" }],
                    description: "Add multiple phone numbers",
                }),
                defineField({
                    name: "email",
                    title: "Email Address",
                    type: "string",
                }),
                defineField({
                    name: "address",
                    title: "Physical Address",
                    type: "text",
                    rows: 2,
                }),
                defineField({
                    name: "whatsapp",
                    title: "WhatsApp Number",
                    type: "string",
                    description: "WhatsApp number for customer service",
                }),
            ],
        }),

        // Social Media Links
        defineField({
            name: "socialMedia",
            title: "Social Media Links",
            type: "object",
            fields: [
                defineField({
                    name: "instagram",
                    title: "Instagram",
                    type: "url",
                    description: "Full Instagram URL",
                }),
                defineField({
                    name: "facebook",
                    title: "Facebook",
                    type: "url",
                    description: "Full Facebook URL",
                }),
                defineField({
                    name: "twitter",
                    title: "Twitter",
                    type: "url",
                    description: "Full Twitter URL",
                }),
                defineField({
                    name: "tiktok",
                    title: "TikTok",
                    type: "url",
                    description: "Full TikTok URL",
                }),
                defineField({
                    name: "youtube",
                    title: "YouTube",
                    type: "url",
                    description: "Full YouTube URL",
                }),
            ],
        }),

        // Header & Navigation
        defineField({
            name: "navigation",
            title: "Navigation Menu",
            type: "object",
            fields: [
                defineField({
                    name: "menuItems",
                    title: "Menu Items",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            name: "menuItem",
                            title: "Menu Item",
                            fields: [
                                defineField({
                                    name: "title",
                                    title: "Menu Title",
                                    type: "string",
                                }),
                                defineField({
                                    name: "url",
                                    title: "Menu URL",
                                    type: "string",
                                    description:
                                        "e.g., /, /about-us, /contact-us, /product-catalog",
                                }),
                                defineField({
                                    name: "isExternal",
                                    title: "External Link",
                                    type: "boolean",
                                    initialValue: false,
                                    description:
                                        "Check if this links to an external website",
                                }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "ctaButton",
                    title: "CTA Button (Header)",
                    type: "object",
                    fields: [
                        defineField({
                            name: "text",
                            title: "Button Text",
                            type: "string",
                            initialValue: "Shop Now",
                        }),
                        defineField({
                            name: "url",
                            title: "Button URL",
                            type: "string",
                            initialValue: "/product-catalog",
                        }),
                    ],
                }),
            ],
        }),

        // Footer Settings
        defineField({
            name: "footer",
            title: "Footer Settings",
            type: "object",
            fields: [
                defineField({
                    name: "companyDescription",
                    title: "Company Description",
                    type: "text",
                    rows: 3,
                    description:
                        "Brief description about your company for footer",
                }),
                defineField({
                    name: "footerLinks",
                    title: "Footer Links",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            name: "linkGroup",
                            title: "Link Group",
                            fields: [
                                defineField({
                                    name: "groupTitle",
                                    title: "Group Title",
                                    type: "string",
                                    description:
                                        "e.g., Quick Links, Products, Support",
                                }),
                                defineField({
                                    name: "links",
                                    title: "Links",
                                    type: "array",
                                    of: [
                                        {
                                            type: "object",
                                            fields: [
                                                defineField({
                                                    name: "title",
                                                    title: "Link Title",
                                                    type: "string",
                                                }),
                                                defineField({
                                                    name: "url",
                                                    title: "Link URL",
                                                    type: "string",
                                                }),
                                            ],
                                        },
                                    ],
                                }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "copyrightText",
                    title: "Copyright Text",
                    type: "string",
                    initialValue:
                        "© 2024 VeetGold Official. All rights reserved.",
                }),
            ],
        }),

        // SEO Settings
        defineField({
            name: "seo",
            title: "SEO Settings",
            type: "object",
            fields: [
                defineField({
                    name: "metaTitle",
                    title: "Default Meta Title",
                    type: "string",
                    description: "Default title for search engines",
                }),
                defineField({
                    name: "metaDescription",
                    title: "Default Meta Description",
                    type: "text",
                    rows: 2,
                    description:
                        "Default description for search engines (155 characters max)",
                    validation: (Rule) => Rule.max(155),
                }),
                defineField({
                    name: "favicon",
                    title: "Favicon",
                    type: "image",
                    description: "Small icon for browser tabs",
                }),
            ],
        }),
    ],

    preview: {
        select: {
            title: "siteName",
            media: "logo",
        },
        prepare({ title, media }) {
            return {
                title: title || "Site Settings",
                media,
            };
        },
    },
});
