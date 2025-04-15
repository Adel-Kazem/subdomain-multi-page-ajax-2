const PRODUCTS = [
  {
    id: 1001,
    name: "The Complete Guide to Modern Web Developmentdddd",
    description: "Comprehensive e-book covering all aspects of modern web development including HTML5, CSS3, JavaScript, React, Node.js, and best practices for responsive design and performance optimization.",
    base_price: 24.99,
    base_shipping_cost: 0,
    free_shipping: true,
    sku: "EBOOK-WEB-1001",
    slug: "complete-guide-modern-web-development",
    brand: "TechPress Publishing",
    rating: 4.8,
    reviews_count: 163,
    status: "active",
    isFeatured: true,
    isOnSale: false,
    requiresShipping: false,
    requiresInventoryTracking: true,
    stock: 999,
    hasVariants: false,
    totalVariantStock: 0,
    lowStockThreshold: 10,
    features: {
      pages: 450,
      format: "PDF, EPUB, MOBI",
      chapters: 15,
      includedResources: "Source code, examples, and templates",
      lastUpdated: "March 2025",
      accessType: "Immediate download",
      drm: "None - DRM free"
    },
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
    ],
    options: {},
    option_images: {},
    variant_images: {},
    option_variants_stock: {},
    option_price_adjustments: {},
    option_shipping_adjustments: {},
    weight: {
      value: 0,
      unit: "kg"
    },
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
      unit: "cm"
    },
    option_dimension_overrides: {},
    categories: [
      501,
      505,
      510,
      1003
    ],
    upselling: [
      1005,
      1008
    ],
    crossSelling: [
      1101,
      1201
    ],
    relatedProducts: [
      1002,
      1003
    ],
    createdAt: "2025-01-10T13:20:00Z",
    updatedAt: "2025-04-15T11:11:03.444Z"
  },
  {
    id: 2001,
    name: "SoundWave Portable Bluetooth Speakerddf ",
    description: "Premium portable speaker with rich sound, 24-hour battery life, and waterproof design. Perfect for outdoor adventures or home use with seamless Bluetooth connectivity and built-in microphone for calls.",
    base_price: 79.99,
    base_shipping_cost: 5.99,
    free_shipping: false,
    sku: "AUDIO-SPK-2001",
    slug: "soundwave-portable-bluetooth-speaker",
    brand: "SoundWave",
    rating: 4.6,
    reviews_count: 287,
    status: "active",
    isFeatured: true,
    isOnSale: true,
    requiresShipping: true,
    requiresInventoryTracking: true,
    stock: 0,
    hasVariants: true,
    totalVariantStock: 215,
    lowStockThreshold: 15,
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
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop"
    ],
    options: {
      color: [
        "black",
        "blue",
        "red",
        "green"
      ],
      edition: [
        "standard",
        "sport",
        "premium"
      ]
    },
    option_images: {
      color: {
        black: [
          "https://images.unsplash.com/photo-1626946616376-d11bde4ba48f?w=800&auto=format&fit=crop"
        ],
        blue: [
          "https://images.unsplash.com/photo-1626946616489-73df1434cfac?w=800&auto=format&fit=crop"
        ],
        red: [
          "https://images.unsplash.com/photo-1626946616503-dea845326235?w=800&auto=format&fit=crop"
        ],
        green: [
          "https://images.unsplash.com/photo-1626946616537-33ab7c35d228?w=800&auto=format&fit=crop"
        ]
      },
      edition: {
        sport: [
          "https://images.unsplash.com/photo-1588075345872-d8ffdbeac7bd?w=800&auto=format&fit=crop"
        ],
        premium: [
          "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=800&auto=format&fit=crop"
        ]
      }
    },
    variant_images: {
      "blue|sport": "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?w=800&auto=format&fit=crop",
      "red|premium": "https://images.unsplash.com/photo-1610156440283-a6f09e654e0d?w=800&auto=format&fit=crop"
    },
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
    option_price_adjustments: {
      edition: {
        sport: 20,
        premium: 50
      }
    },
    option_shipping_adjustments: {
      edition: {
        premium: 0
      }
    },
    weight: {
      value: 0.85,
      unit: "kg"
    },
    dimensions: {
      length: 20,
      width: 8,
      height: 8,
      unit: "cm"
    },
    option_dimension_overrides: {
      edition: {
        premium: {
          weight: {
            value: 1.2,
            unit: "kg"
          },
          dimensions: {
            length: 25,
            width: 10,
            height: 10,
            unit: "cm"
          }
        }
      }
    },
    categories: [
      1001,
      1003
    ],
    upselling: [
      2005,
      2010
    ],
    crossSelling: [
      2101,
      2201
    ],
    relatedProducts: [
      2002,
      2003
    ],
    createdAt: "2025-01-15T11:30:00Z",
    updatedAt: "2025-04-15T11:11:00.580Z"
  },
  {
    id: 3002,
    name: "this is the ex to the zee",
    description: "Qui sit proident ex",
    base_price: 10,
    base_shipping_cost: 74,
    free_shipping: false,
    sku: "Anim recusandae Eos",
    slug: "new-product",
    brand: "Explicabo Optio as",
    rating: 0,
    reviews_count: 0,
    status: "active",
    isFeatured: false,
    isOnSale: true,
    requiresShipping: false,
    requiresInventoryTracking: true,
    stock: 0,
    hasVariants: true,
    totalVariantStock: 50,
    lowStockThreshold: 12,
    features: {
      package: "solid",
      taste: "nice"
    },
    images: [
      "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets1.png",
      "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/Harrington-Jacket-650-Ashley-Weston-Mens-Wardrobe-Essentials-3.jpg"
    ],
    options: {
      color: [
        "sadfsdf",
        "yellow"
      ],
      set: [
        "1-pack",
        "heeting device & 1-pack"
      ]
    },
    option_images: {
      color: {
        green: [
          "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets4.png"
        ],
        yellow: [
          "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets3.png"
        ]
      },
      set: {
        "heeting device & 1-pack": [
          "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/h6.png"
        ],
        "1-pack": [
          "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets4.png"
        ]
      }
    },
    variant_images: {
      "green|1-pack": [
        "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/h5.png",
        "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets1.png"
      ],
      "green|heeting device & 1-pack": "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/HarringtonJacketAshley.Weston.jpg"
    },
    option_variants_stock: {
      "green|1-pack": 10,
      "green|heeting device & 1-pack": 14,
      "yellow|1-pack": 13,
      "yellow|heeting device & 1-pack": 13
    },
    option_price_adjustments: {
      color: {
        green: 0.06
      }
    },
    option_shipping_adjustments: {
      color: {
        green: 0.03
      }
    },
    weight: {
      value: 63,
      unit: "oz"
    },
    dimensions: {
      length: 43,
      width: 58,
      height: 14,
      unit: "in"
    },
    option_dimension_overrides: {
      color: {
        yellow: {
          weight: {
            value: 63,
            unit: "oz"
          },
          dimensions: {
            length: 43,
            width: 58,
            height: 14,
            unit: "in"
          }
        },
        green: {
          weight: {
            value: 63,
            unit: "oz"
          },
          dimensions: {
            length: 43,
            width: 58,
            height: 14,
            unit: "in"
          }
        }
      }
    },
    categories: [
      1000,
      1001
    ],
    upselling: [],
    crossSelling: [],
    relatedProducts: [],
    createdAt: "2025-04-11T07:25:54.546Z",
    updatedAt: "2025-04-15T11:11:00.580Z"
  }
];