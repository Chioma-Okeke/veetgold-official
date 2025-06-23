// sanity/schemaTypes/product.ts

import { defineType } from "sanity"

const products = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price (₦)',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
})
export default products
