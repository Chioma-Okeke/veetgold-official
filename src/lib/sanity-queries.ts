// Helper functions to fetch content from Sanity CMS
import { client } from "@/sanity/lib/client";

// Fetch home page content
export async function getHomePageContent() {
    const query = `*[_type == "homePage"][0]{
    heroSection{
      mainHeading,
      subHeading,
      heroImages[]{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      },
      stats{
        customersCount,
        customersLabel,
        productsCount,
        productsLabel
      }
    },
    aboutSection{
      heading,
      description,
      image{
        asset->{
          _id,
          url
        }
      }
    },
    productSections{
      newArrivalsTitle,
      bestSellingTitle,
      showNewArrivals,
      showBestSelling
    },
    featuredCollections{
      sectionTitle,
      collections[]{
        name,
        key,
        title,
        description,
        images[]{
          asset->{
            _id,
            url
          }
        }
      }
    },
    testimonialsSection{
      sectionSubtitle,
      sectionTitle,
      highlightedWord,
      testimonials[]{
        message,
        customerName,
        location
      }
    },
    sectionSettings{
      showHeroSection,
      showAboutSection,
      showFeaturedCollections,
      showTestimonials
    }
  }`;

    return await client.fetch(query);
}

// Fetch site settings
export async function getSiteSettings() {
    const query = `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    logo{
      asset->{
        _id,
        url
      }
    },
    contactInfo{
      phone,
      email,
      address,
      whatsapp
    },
    socialMedia{
      instagram,
      facebook,
      twitter,
      tiktok,
      youtube
    },
    navigation{
      menuItems[]{
        title,
        url,
        isExternal
      },
      ctaButton{
        text,
        url
      }
    },
    footer{
      companyDescription,
      footerLinks[]{
        groupTitle,
        links[]{
          title,
          url
        }
      },
      copyrightText
    },
    seo{
      metaTitle,
      metaDescription,
      favicon{
        asset->{
          _id,
          url
        }
      }
    }
  }`;

    return await client.fetch(query);
}

// Fetch all products with pagination and search
export async function getProducts(options?: {
    featured?: boolean;
    newArrival?: boolean;
    bestSelling?: boolean;
    category?: string;
    search?: string;
    showOutOfStock?: boolean;
    limit?: number;
    offset?: number;
}) {
    const {
        featured = false,
        newArrival = false,
        bestSelling = false,
        category,
        search,
        showOutOfStock = true,
        limit = 50,
        offset = 0,
    } = options || {};

    const filters = ['_type == "product"'];

    if (!showOutOfStock) filters.push("inStock == true");

    if (featured) filters.push("featured == true");
    if (newArrival) filters.push("newArrival == true");
    if (bestSelling) filters.push("bestSelling == true");
    if (category) filters.push(`"${category}" in category[]->slug.current`);

    // Add search functionality
    if (search && search.trim()) {
        const searchTerm = search.trim().toLowerCase();
        filters.push(`(
            name match "*${searchTerm}*" ||
            description match "*${searchTerm}*" ||
            "${searchTerm}" in tags[]
        )`);
    }

    const query = `*[${filters.join(" && ")}] | order(_createdAt desc) [${offset}...${offset + limit}]{
    _id,
    name,
    slug,
    price,
    originalPrice,
    description,
    "category": category[]->{
      _id,
      title,
      slug
    },
    tags,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    inStock,
    featured,
    newArrival,
    bestSelling,
    ingredients,
    howToUse,
    benefits,
    sizeVariants[]{
      size,
      price,
      inStock
    }
  }`;

    return await client.fetch(query);
}

// Fetch single product by slug
export async function getProduct(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    price,
    originalPrice,
    description,
    "category": category[]->{
      _id,
      title,
      slug
    },
    tags,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    inStock,
    featured,
    ingredients,
    howToUse,
    benefits,
    sizeVariants[]{
      size,
      price,
      inStock
    }
  }`;

    return await client.fetch(query, { slug });
}

// Fetch all categories
export async function getCategories() {
    const query = `*[_type == "category"] | order(title asc){
    _id,
    title,
    slug,
    description,
    image{
      asset->{
        _id,
        url
      }
    },
    featured
  }`;

    return await client.fetch(query);
}

// Fetch products count
export async function getProductsCount(options?: {
    category?: string;
    featured?: boolean;
    newArrival?: boolean;
    bestSelling?: boolean;
    search?: string;
    showOutOfStock?: boolean;
}) {
    const {
        category,
        featured = false,
        newArrival = false,
        bestSelling = false,
        search,
        showOutOfStock = true,
    } = options || {};

    const filters = ['_type == "product"'];

    // Only show in-stock products unless explicitly requested
    if (!showOutOfStock) filters.push("inStock == true");

    if (featured) filters.push("featured == true");
    if (newArrival) filters.push("newArrival == true");
    if (bestSelling) filters.push("bestSelling == true");
    if (category) filters.push(`"${category}" in category[]->slug.current`);

    // Add search functionality
    if (search && search.trim()) {
        const searchTerm = search.trim().toLowerCase();
        filters.push(`(
            name match "*${searchTerm}*" ||
            description match "*${searchTerm}*" ||
            "${searchTerm}" in tags[]
        )`);
    }

    const query = `count(*[${filters.join(" && ")}])`;

    return await client.fetch(query);
}

// Search products by name or category
export async function searchProducts(
    searchTerm: string,
    options?: {
        showOutOfStock?: boolean;
        limit?: number;
        offset?: number;
    }
) {
    const { showOutOfStock = true, limit = 50, offset = 0 } = options || {};

    if (!searchTerm || searchTerm.trim() === "") {
        return [];
    }

    const term = searchTerm.trim().toLowerCase();
    const filters = ['_type == "product"'];

    if (!showOutOfStock) filters.push("inStock == true");

    // Search in name, description, tags, and category titles
    filters.push(`(
        name match "*${term}*" ||
        description match "*${term}*" ||
        "${term}" in tags[] ||
        "${term}" in category[]->title
    )`);

    const query = `*[${filters.join(" && ")}] | order(featured desc, _createdAt desc) [${offset}...${offset + limit}]{
    _id,
    name,
    slug,
    price,
    originalPrice,
    description,
    "category": category[]->{
      _id,
      title,
      slug
    },
    tags,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    inStock,
    featured,
    newArrival,
    bestSelling,
    ingredients,
    howToUse,
    benefits,
    sizeVariants[]{
      size,
      price,
      inStock
    }
  }`;

    return await client.fetch(query);
}
