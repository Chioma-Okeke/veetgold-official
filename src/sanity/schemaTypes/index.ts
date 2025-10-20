import { type SchemaTypeDefinition } from "sanity";
import products from "./product";
import { homePage } from "./homePage";
import { siteSettings } from "./siteSettings";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Site Content Management
        homePage,
        siteSettings,

        // Products & Categories
        category,
        products,
    ],
};
