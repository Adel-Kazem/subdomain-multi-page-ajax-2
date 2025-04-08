const CATEGORIES = [
  {
    id: 1,
    name: "Pariatur Non in vol",
    slug: "Eu consequatur rem v",
    description: "Quia aute nesciunt",
    image: "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/category_images/perfect images.png",
    featured: true,
    parent_id: null,
    active: true,
    display_order: 40,
    product_count: 0
  }
];

const PRODUCTS = [
  {
    id: 1,
    sku: '323424',
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
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {"id":"v1743605145464","sku":"VAR-1","name":"Premium Wireless Headphones Option 1","price":199.99,"salePrice":0.06,"stock":4,"attributes":{"df":"f","asdf":"f"},"weight":333,"dimensions":{"length":0.03,"width":0.03,"height":0.03,"unit":"cm"}}
    ],
    features: [
      'Active Noise Cancellation',
      'Bluetooth 5.0',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Voice assistant compatible'
    ],
    relatedProducts: [
    ],
    upsellProducts: [
    ],
    availability: 'in_stock',
    backorderLimit: 0,
    status: 'active',
    category_ids: [
    ],
    options: {
    },
    inventory: {
    },
    sale: false,
    created_at: '2025-04-08T11:26:38.286Z',
    updated_at: '2025-04-08T11:26:38.286Z'
  },
  {
    id: 2,
    sku: 'PRD-002',
    name: 'Smart Fitness Tracker',
    slug: 'smart-fitness-tracker',
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
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1626371353531-b2cf4f8a4038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
    ],
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      'Water resistant (50m)',
      '7-day battery life',
      'Smartphone notifications'
    ],
    relatedProducts: [
    ],
    upsellProducts: [
    ],
    availability: 'in_stock',
    backorderLimit: 0,
    status: 'active',
    category_ids: [
    ],
    options: {
    },
    inventory: {
    },
    sale: false,
    created_at: '2025-04-08T11:26:38.286Z',
    updated_at: '2025-04-08T11:26:38.286Z'
  },
  {
    id: 3,
    sku: 'Consequat Laboris a',
    name: 'Odio voluptatem Dolcasdfasdf asdf ',
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
    brand: '',
    featured: false,
    new: false,
    onSale: false,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {"id":"v1743605125751","sku":"Sint ex temporibus a","name":"Sapiente tempora non","price":37,"salePrice":88,"stock":98,"attributes":{},"weight":46,"dimensions":{"length":40,"width":97,"height":27,"unit":"cm"}}
    ],
    features: [
      'Waterproof (IPX7)',
      '360° sound technology',
      '12-hour battery life',
      'Built-in microphone',
      'Portable design'
    ],
    relatedProducts: [
    ],
    upsellProducts: [
    ],
    availability: 'in_stock',
    backorderLimit: 0,
    status: 'active',
    category_ids: [
    ],
    options: {
    },
    inventory: {
    },
    sale: false,
    created_at: '2025-04-08T11:26:38.286Z',
    updated_at: '2025-04-08T19:08:33.094Z'
  }
];