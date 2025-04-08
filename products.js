const CATEGORIES = [
  {
    id: 1,
    name: "Libero cupiditate el",
    slug: "Cum possimus archit",
    description: "Labore sed tempore",
    image: "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/category_images/perfect images.png",
    featured: true,
    parent_id: null,
    active: false,
    display_order: 1,
    product_count: 0
  }
];

// Three Products with Increasing Complexity
const PRODUCTS = [
  // PRODUCT 1: Simple Digital E-book (No Variants)
  {
    // Basic Information
    id: 1001,
    name: "The Complete Guide to Modern Web Development",
    description: "Comprehensive e-book covering all aspects of modern web development including HTML5, CSS3, JavaScript, React, Node.js, and best practices for responsive design and performance optimization.",
    base_price: 24.99,
    base_shipping_cost: 0,
    free_shipping: true,
    sku: "EBOOK-WEB-1001",
    slug: "complete-guide-modern-web-development",
    brand: "TechPress Publishing",
    rating: 4.8,
    reviews_count: 163,

    // Status Information
    status: "active",
    isFeatured: true,
    isOnSale: false,
    requiresShipping: false,

    // Stock Management
    requiresInventoryTracking: true,
    stock: 999,  // Effectively unlimited (digital product)
    hasVariants: false,
    totalVariantStock: 0,
    lowStockThreshold: 10,

    // Product Details
    features: {
      pages: 450,
      format: "PDF, EPUB, MOBI",
      chapters: 15,
      includedResources: "Source code, examples, and templates",
      lastUpdated: "March 2025",
      accessType: "Immediate download",
      drm: "None - DRM free"
    },

    // Images
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
    ],

    // Product Configuration (empty since no variants)
    options: {},
    option_images: {},
    variant_images: {},
    option_variants_stock: {},
    option_price_adjustments: {},
    option_shipping_adjustments: {},

    // Physical Attributes (minimal since digital)
    weight: { value: 0, unit: 'kg' },
    dimensions: { length: 0, width: 0, height: 0, unit: 'cm' },
    option_dimension_overrides: {},

    // Categories
    categories: [501, 505, 510],  // Books, Technology, Web Development

    // Related Products
    upselling: [1005, 1008],       // Advanced courses
    crossSelling: [1101, 1201],    // Related tools, templates
    relatedProducts: [1002, 1003], // Other e-books

    // Timestamps
    createdAt: "2025-01-10T13:20:00Z",
    updatedAt: "2025-03-25T09:45:00Z"
  },

  // PRODUCT 2: Bluetooth Speaker (Medium Complexity)
  {
    // Basic Information
    id: 2001,
    name: "SoundWave Portable Bluetooth Speaker",
    description: "Premium portable speaker with rich sound, 24-hour battery life, and waterproof design. Perfect for outdoor adventures or home use with seamless Bluetooth connectivity and built-in microphone for calls.",
    base_price: 79.99,
    base_shipping_cost: 5.99,
    free_shipping: false,
    sku: "AUDIO-SPK-2001",
    slug: "soundwave-portable-bluetooth-speaker",
    brand: "SoundWave",
    rating: 4.6,
    reviews_count: 287,

    // Status Information
    status: "active",
    isFeatured: true,
    isOnSale: true,
    requiresShipping: true,

    // Stock Management
    requiresInventoryTracking: true,
    stock: 0,  // Must select a color
    hasVariants: true,
    totalVariantStock: 215,
    lowStockThreshold: 15,

    // Product Details
    features: {
      batteryLife: "24 hours",
      waterproofRating: "IPX7",
      bluetoothVersion: "5.2",
      powerOutput: "20W",
      chargingTime: "3 hours",
      connectivity: "Bluetooth, AUX, USB-C",
      microphoneType: "Noise-cancelling",
      warranty: "2 years"
    },

    // Images
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop"
    ],

    // Product Configuration
    options: {
      "color": ["black", "blue", "red", "green"],
      "edition": ["standard", "sport", "premium"]
    },

    // Option Images
    option_images: {
      "color": {
        "black": ["https://images.unsplash.com/photo-1626946616376-d11bde4ba48f?w=800&auto=format&fit=crop"],
        "blue": ["https://images.unsplash.com/photo-1626946616489-73df1434cfac?w=800&auto=format&fit=crop"],
        "red": ["https://images.unsplash.com/photo-1626946616503-dea845326235?w=800&auto=format&fit=crop"],
        "green": ["https://images.unsplash.com/photo-1626946616537-33ab7c35d228?w=800&auto=format&fit=crop"]
      },
      "edition": {
        "sport": ["https://images.unsplash.com/photo-1588075345872-d8ffdbeac7bd?w=800&auto=format&fit=crop"],
        "premium": ["https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=800&auto=format&fit=crop"]
      }
    },

    // Variant Images
    variant_images: {
      "blue|sport": "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?w=800&auto=format&fit=crop",
      "red|premium": "https://images.unsplash.com/photo-1610156440283-a6f09e654e0d?w=800&auto=format&fit=crop"
    },

    // Option Variants Stock
    option_variants_stock: {
      "black|standard": 30,
      "black|sport": 25,
      "black|premium": 15,
      "blue|standard": 25,
      "blue|sport": 20,
      "blue|premium": 10,
      "red|standard": 20,
      "red|sport": 15,
      "red|premium": 10,
      "green|standard": 20,
      "green|sport": 15,
      "green|premium": 10
    },

    // Option Price Adjustments
    option_price_adjustments: {
      "edition:sport": 20.00,
      "edition:premium": 50.00
    },

    // Option Shipping Cost Adjustments
    option_shipping_adjustments: {
      "edition:premium": 0  // Free shipping for premium edition
    },

    // Physical Attributes
    weight: { value: 0.85, unit: 'kg' },
    dimensions: { length: 20, width: 8, height: 8, unit: 'cm' },

    // Option Dimension Overrides
    option_dimension_overrides: {
      "edition:premium": {
        weight: { value: 1.2, unit: 'kg' },
        dimensions: { length: 25, width: 10, height: 10, unit: 'cm' }
      }
    },

    // Categories
    categories: [301, 305, 310],  // Electronics, Audio, Bluetooth Speakers

    // Related Products
    upselling: [2005, 2010],      // Premium models
    crossSelling: [2101, 2201],   // Carrying case, power bank
    relatedProducts: [2002, 2003], // Other speakers

    // Timestamps
    createdAt: "2025-01-15T11:30:00Z",
    updatedAt: "2025-03-28T14:15:00Z"
  },

  // PRODUCT 3: Custom Gaming Laptop (High Complexity)
  {
    // Basic Information
    id: 3001,
    name: "NexusForge Pro Gaming Laptop",
    description: "Professional-grade gaming laptop with customizable configuration. Built for esports professionals and hardcore gamers with cutting-edge performance, advanced cooling system, and premium display options.",
    base_price: 1499.99,
    base_shipping_cost: 29.99,
    free_shipping: false,
    sku: "COMP-LAPTOP-3001",
    slug: "nexusforge-pro-gaming-laptop",
    brand: "NexusForge",
    rating: 4.9,
    reviews_count: 324,

    // Status Information
    status: "active",
    isFeatured: true,
    isOnSale: false,
    requiresShipping: true,

    // Stock Management
    requiresInventoryTracking: true,
    stock: 0,  // Must configure
    hasVariants: true,
    totalVariantStock: 124,
    lowStockThreshold: 5,

    // Product Details
    features: {
      chassis: "Aircraft-grade aluminum",
      cooling: "Advanced dual-fan cooling system with copper heat pipes",
      keyboard: "Per-key RGB mechanical keyboard",
      audio: "3D surround sound with AI noise cancellation",
      battery: "Up to 6 hours gaming, 10 hours productivity",
      webcam: "1080p with privacy shutter",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4",
      warranty: "3-year premium support"
    },

    // Images
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=800&auto=format&fit=crop"
    ],

    // Product Configuration
    options: {
      "processor": ["intel i7-14700H", "intel i9-14900HX", "amd ryzen 9 7950X"],
      "graphics": ["nvidia rtx 4070 8GB", "nvidia rtx 4080 12GB", "nvidia rtx 4090 16GB"],
      "ram": ["16GB DDR5", "32GB DDR5", "64GB DDR5"],
      "storage": ["512GB NVMe", "1TB NVMe", "2TB NVMe", "4TB NVMe"],
      "display": ["15.6\" FHD 144Hz", "15.6\" QHD 240Hz", "17.3\" FHD 144Hz", "17.3\" QHD 240Hz"],
      "os": ["windows 11 home", "windows 11 pro"]
    },

    // Option Images
    option_images: {
      "processor": {
        "intel i9-14900HX": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop"],
        "amd ryzen 9 7950X": ["https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop"]
      },
      "graphics": {
        "nvidia rtx 4080 12GB": ["https://images.unsplash.com/photo-1555618568-bdf0a992c512?w=800&auto=format&fit=crop"],
        "nvidia rtx 4090 16GB": ["https://images.unsplash.com/photo-1551643556-0e32e07d70dd?w=800&auto=format&fit=crop"]
      },
      "display": {
        "15.6\" QHD 240Hz": ["https://images.unsplash.com/photo-1551883040-0256b70c6ee9?w=800&auto=format&fit=crop"],
        "17.3\" QHD 240Hz": ["https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?w=800&auto=format&fit=crop"]
      }
    },

    // Variant Images
    variant_images: {
      "intel i9-14900HX|nvidia rtx 4090 16GB|17.3\" QHD 240Hz": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop"
      ],
      "amd ryzen 9 7950X|nvidia rtx 4080 12GB|15.6\" QHD 240Hz": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop"
    },

    // Option Variants Stock
    option_variants_stock: {
      // Base models with i7 processor
      "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|512GB NVMe|15.6\" FHD 144Hz|windows 11 home": 15,
      "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 12,
      "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 10,
      "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 8,

      // Mid-tier models with i9 processor
      "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 10,
      "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 home": 8,
      "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 pro": 6,
      "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 5,

      // High-end models with i9 and RTX 4090
      "intel i9-14900HX|nvidia rtx 4090 16GB|32GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 7,
      "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 4,
      "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|4TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 2,

      // AMD models
      "amd ryzen 9 7950X|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 8,
      "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 6,
      "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 pro": 5,
      "amd ryzen 9 7950X|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 3
    },

    // Option Price Adjustments
    option_price_adjustments: {
      // Processor upgrades
      "processor:intel i9-14900HX": 300.00,
      "processor:amd ryzen 9 7950X": 250.00,

      // Graphics upgrades
      "graphics:nvidia rtx 4080 12GB": 300.00,
      "graphics:nvidia rtx 4090 16GB": 800.00,

      // RAM upgrades
      "ram:32GB DDR5": 150.00,
      "ram:64GB DDR5": 400.00,

      // Storage upgrades
      "storage:1TB NVMe": 100.00,
      "storage:2TB NVMe": 250.00,
      "storage:4TB NVMe": 500.00,

      // Display upgrades
      "display:15.6\" QHD 240Hz": 200.00,
      "display:17.3\" FHD 144Hz": 150.00,
      "display:17.3\" QHD 240Hz": 350.00,

      // OS upgrades
      "os:windows 11 pro": 100.00
    },

    // Option Shipping Cost Adjustments
    option_shipping_adjustments: {
      "display:17.3\" FHD 144Hz": 10.00,
      "display:17.3\" QHD 240Hz": 10.00
    },

    // Physical Attributes
    weight: { value: 2.2, unit: 'kg' },
    dimensions: { length: 36, width: 26, height: 2, unit: 'cm' },

    // Option Dimension Overrides
    option_dimension_overrides: {
      "display:17.3\" FHD 144Hz": {
        weight: { value: 2.5, unit: 'kg' },
        dimensions: { length: 40, width: 28, height: 2.2, unit: 'cm' }
      },
      "display:17.3\" QHD 240Hz": {
        weight: { value: 2.6, unit: 'kg' },
        dimensions: { length: 40, width: 28, height: 2.3, unit: 'cm' }
      }
    },

    // Categories
    categories: [101, 105, 110],  // Computers, Laptops, Gaming

    // Related Products
    upselling: [3005, 3010],      // Premium laptop models
    crossSelling: [3101, 3201],   // Gaming peripherals, laptop accessories
    relatedProducts: [3002, 3003], // Other gaming laptops

    // Timestamps
    createdAt: "2025-01-05T09:00:00Z",
    updatedAt: "2025-04-02T11:45:00Z"
  }
];