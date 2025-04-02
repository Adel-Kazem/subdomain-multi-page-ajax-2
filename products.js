const PRODUCTS = [
  {
    id: 1,
    sku: "323424",
    name: 'Premium Wireless Headphones',
    slug: 'sdfasdf',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day listening.',
    metaDescription: '',
    price: 199.99,
    salePrice: null,
    costPrice: 0,
    taxClass: 'standard',
    rating: 4.7,
    reviewCount: 0,
    stock: 15,
    lowStockThreshold: 5,
    categoryId: 1,
    tags: [],
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    shipping: {
      weight: {
        value: 0,
        unit: 'lb'
      },
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
        unit: 'in'
      },
      freeShipping: false
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'v1743605145464',
        sku: "VAR-1",
        name: "Premium Wireless Headphones Option 1",
        price: 199.99,
        salePrice: 0.06,
        stock: 4,
        attributes: {
          df: "f",
          asdf: "f"
        },
        weight: 333,
        dimensions: {
          length: 0.03,
          width: 0.03,
          height: 0.03,
          unit: 'cm'
        }
      }
    ],
    features: [
      'Active Noise Cancellation',
      'Bluetooth 5.0',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Voice assistant compatible'
    ],
    specifications: {
    },
    relatedProducts: [],
    upsellProducts: [],
    availability: "in_stock",
    backorderLimit: 0
  },
  {
    id: 2,
    sku: "asdf",
    name: 'Smart Fitness Tracker',
    slug: 'asdf',
    description: 'Track your health and fitness goals with our advanced smart fitness tracker. Monitor heart rate, sleep patterns, and activity levels with precision sensors and a vibrant display.',
    metaDescription: '',
    price: 89.99,
    salePrice: null,
    costPrice: 0,
    taxClass: 'standard',
    rating: 4.5,
    reviewCount: 0,
    stock: 42,
    lowStockThreshold: 5,
    categoryId: 1,
    tags: [],
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    shipping: {
      weight: {
        value: 0,
        unit: 'lb'
      },
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
        unit: 'in'
      },
      freeShipping: false
    },
    images: [
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [],
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      'Water resistant (50m)',
      '7-day battery life',
      'Smartphone notifications'
    ],
    specifications: {
    },
    relatedProducts: [],
    upsellProducts: [],
    availability: "in_stock",
    backorderLimit: 0
  },
  {
    id: 3,
    sku: "Consequat Laboris a",
    name: 'Odio voluptatem Dol',
    slug: 'Temporibus laboris e',
    description: 'Take your music anywhere with our compact yet powerful Bluetooth speaker. Featuring 360° sound, waterproof design, and 12 hours of playback for the perfect outdoor companion.',
    metaDescription: '',
    price: 59.99,
    salePrice: null,
    costPrice: 0,
    taxClass: 'standard',
    rating: 4.2,
    reviewCount: 0,
    stock: 28,
    lowStockThreshold: 5,
    categoryId: 1,
    tags: [],
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    shipping: {
      weight: {
        value: 0,
        unit: 'lb'
      },
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
        unit: 'in'
      },
      freeShipping: false
    },
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'v1743605125751',
        sku: "Sint ex temporibus a",
        name: "Sapiente tempora non",
        price: 37,
        salePrice: 88,
        stock: 98,
        attributes: {
        },
        weight: 46,
        dimensions: {
          length: 40,
          width: 97,
          height: 27,
          unit: 'cm'
        }
      }
    ],
    features: [
      'Waterproof (IPX7)',
      '360° sound technology',
      '12-hour battery life',
      'Built-in microphone',
      'Portable design'
    ],
    specifications: {
    },
    relatedProducts: [],
    upsellProducts: [],
    availability: "in_stock",
    backorderLimit: 0
  },
  {
    id: 4,
    sku: "Perspiciatis dolor",
    name: 'Facilis debitis labo',
    slug: 'Ad provident aliqua',
    description: 'Rem maxime porro dis',
    metaDescription: 'Exercitation deserun',
    price: 57,
    salePrice: 74,
    costPrice: 20,
    taxClass: 'zero',
    rating: 0,
    reviewCount: 28,
    stock: 84,
    lowStockThreshold: 87,
    categoryId: 2,
    tags: [],
    brand: 'Consectetur nihil e',
    featured: true,
    new: true,
    onSale: true,
    shipping: {
      weight: {
        value: 4,
        unit: 'kg'
      },
      dimensions: {
        length: 69,
        width: 36,
        height: 42,
        unit: 'in'
      },
      freeShipping: true
    },
    images: [
      'https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/Belts-Style-Image-3.jpg',
      'https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/Belts-Style-Image-4.jpg'
    ],
    variants: [
      {
        id: 'v1743605499223',
        sku: "Ea pariatur Officia",
        name: "Deserunt dicta magni",
        price: 8,
        salePrice: 78,
        stock: 30,
        attributes: {
        },
        weight: 55,
        dimensions: {
          length: 19,
          width: 46,
          height: 66,
          unit: 'in'
        }
      }
    ],
    features: [],
    specifications: {
    },
    relatedProducts: [],
    upsellProducts: [],
    availability: "in_stock",
    backorderLimit: 0
  }
];