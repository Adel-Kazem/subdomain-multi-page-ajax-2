const PRODUCTS = [
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
        stock: 999,
        hasVariants: false,
        totalVariantStock: 0, // No variants
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

        // Product Configuration (Empty for this product)
        options: {},
        option_images: {},
        variant_images: {},
        option_variants_stock: {},

        // Variant Pricing Adjustments (Empty for this product)
        option_price_adjustments: {},

        // Option Shipping Cost Adjustments (Empty for this product)
        option_shipping_adjustments: {},

        // Physical Attributes
        weight: { value: 0, unit: "kg" },
        dimensions: { length: 0, width: 0, height: 0, unit: "cm" },

        // Option Dimension Overrides (Empty for this product)
        option_dimension_overrides: {},

        // Categories
        categories: [ 501, 505, 510 ],

        // Related Products
        upselling: [ 1005, 1008 ],
        crossSelling: [ 1101, 1201 ],
        relatedProducts: [ 1002, 1003 ],

        // Timestamps
        createdAt: "2025-01-10T13:20:00Z",
        updatedAt: "2025-03-25T09:45:00Z"
    },
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
        stock: 0, // Base stock is 0 as it has variants
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
            color: ["black", "blue", "red", "green"],
            edition: ["standard", "sport", "premium"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1626946616376-d11bde4ba48f?w=800&auto=format&fit=crop"],
                blue: ["https://images.unsplash.com/photo-1626946616489-73df1434cfac?w=800&auto=format&fit=crop"],
                red: ["https://images.unsplash.com/photo-1626946616503-dea845326235?w=800&auto=format&fit=crop"],
                green: ["https://images.unsplash.com/photo-1626946616537-33ab7c35d228?w=800&auto=format&fit=crop"]
            },
            edition: {
                sport: ["https://images.unsplash.com/photo-1588075345872-d8ffdbeac7bd?w=800&auto=format&fit=crop"],
                premium: ["https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=800&auto=format&fit=crop"]
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

        // Variant Pricing Adjustments - NEW STRUCTURE
        option_price_adjustments: {
            "edition": {
                "sport": 20,
                "premium": 50
            }
            // No price adjustments for 'color'
        },

        // Option Shipping Cost Adjustments - NEW STRUCTURE
        option_shipping_adjustments: {
            "edition": {
                "premium": 0 // Explicitly setting 0 adjustment, could be omitted if no change
            }
            // No shipping adjustments for 'color'
        },

        // Physical Attributes
        weight: { value: 0.85, unit: "kg" },
        dimensions: { length: 20, width: 8, height: 8, unit: "cm" },

        // Option Dimension Overrides - NEW STRUCTURE
        option_dimension_overrides: {
            "edition": {
                "premium": {
                    weight: { value: 1.2, unit: "kg" },
                    dimensions: { length: 25, width: 10, height: 10, unit: "cm" }
                }
            }
            // No dimension overrides for 'color'
        },

        // Categories
        categories: [ 301, 305, 310 ],

        // Related Products
        upselling: [ 2005, 2010 ],
        crossSelling: [ 2101, 2201 ],
        relatedProducts: [ 2002, 2003 ],

        // Timestamps
        createdAt: "2025-01-15T11:30:00Z",
        updatedAt: "2025-03-28T14:15:00Z"
    },
    {
        // Basic Information
        id: 3001,
        name: "NexusForge Pro Gaming Laptop", // Corrected: removed "sdfsdf"
        description: "Professional-grade gaming laptop with customizable configuration. Built for esports professionals and hardcore gamers with cutting-edge performance, advanced cooling system, and premium display options.", // Corrected: removed "sdf"
        base_price: 1499.99,
        base_shipping_cost: 29.99,
        free_shipping: false,
        sku: "COMP-LAPTOP-3001", // Corrected: removed "sdf"
        slug: "nexusforge-pro-gaming-laptop",
        brand: "NexusForge",
        rating: 4.9,
        reviews_count: 324,

        // Status Information
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,

        // Stock Management (Using values from the provided 'new updated structure' example for this product)
        requiresInventoryTracking: true,
        stock: 0, // Base stock 0 as variants must be configured
        hasVariants: true,
        totalVariantStock: 124, // Updated from example
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
            "processor": ["intel i7-14700H", "intel i9-14900HX", "amd ryzen 9 7950X"], // Corrected key and value
            "graphics": ["nvidia rtx 4070 8GB", "nvidia rtx 4080 12GB", "nvidia rtx 4090 16GB"],
            "ram": ["16GB DDR5", "32GB DDR5", "64GB DDR5"],
            "storage": ["512GB NVMe", "1TB NVMe", "2TB NVMe", "4TB NVMe"],
            "display": ["15.6\" FHD 144Hz", "15.6\" QHD 240Hz", "17.3\" FHD 144Hz", "17.3\" QHD 240Hz"],
            "os": ["windows 11 home", "windows 11 pro"]
        },
        option_images: {
            "processor": { // Corrected key
                "intel i7-14700H": ["https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/Screenshot_1.png"], // Added from old structure under wrong key
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
        variant_images: { // Using data from example
            "intel i9-14900HX|nvidia rtx 4090 16GB|17.3\" QHD 240Hz": [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop"
            ],
            "amd ryzen 9 7950X|nvidia rtx 4080 12GB|15.6\" QHD 240Hz": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop"
        },
        option_variants_stock: { // Using data from example
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

        // Variant Pricing Adjustments - NEW STRUCTURE (Using data from example)
        option_price_adjustments: {
            "processor": {
                "intel i9-14900HX": 300.00,
                "amd ryzen 9 7950X": 250.00
            },
            "graphics": {
                "nvidia rtx 4080 12GB": 300.00,
                "nvidia rtx 4090 16GB": 800.00
            },
            "ram": {
                "32GB DDR5": 150.00,
                "64GB DDR5": 400.00
            },
            "storage": {
                "1TB NVMe": 100.00,
                "2TB NVMe": 250.00,
                "4TB NVMe": 500.00
            },
            "display": {
                "15.6\" QHD 240Hz": 200.00,
                "17.3\" FHD 144Hz": 150.00,
                "17.3\" QHD 240Hz": 350.00
            },
            "os": {
                "windows 11 pro": 100.00
            }
        },

        // Option Shipping Cost Adjustments - NEW STRUCTURE (Using data from example)
        option_shipping_adjustments: {
            "display": {
                "17.3\" FHD 144Hz": 10.00,
                "17.3\" QHD 240Hz": 10.00
            }
        },

        // Physical Attributes
        weight: { value: 2.2, unit: 'kg' },
        dimensions: { length: 36, width: 26, height: 2, unit: 'cm' },

        // Option Dimension Overrides - NEW STRUCTURE
        option_dimension_overrides: {
            "display": {
                "17.3\" FHD 144Hz": {
                    weight: { value: 2.5, unit: 'kg' },
                    dimensions: { length: 40, width: 28, height: 2.2, unit: 'cm' }
                },
                "17.3\" QHD 240Hz": {
                    weight: { value: 2.6, unit: 'kg' },
                    dimensions: { length: 40, width: 28, height: 2.3, unit: 'cm' }
                }
            }
        },

        // Categories
        categories: [ 101, 105, 110 ],

        // Related Products
        upselling: [ 3005, 3010 ],
        crossSelling: [ 3101, 3201 ],
        relatedProducts: [ 3002, 3003 ],

        // Timestamps (Using updatedAt from example)
        createdAt: "2025-01-05T09:00:00Z",
        updatedAt: "2025-04-02T11:45:00Z" // From example
    },
    {
        // Basic Information
        id: 3002,
        name: "Heets",
        description: "Qui sit proident ex",
        base_price: 10,
        base_shipping_cost: 74, // Note: Seems high for the base price
        free_shipping: false,
        sku: "Anim recusandae Eos",
        slug: "new-product", // Consider changing this to be more descriptive
        brand: "Explicabo Optio as",
        rating: 0,
        reviews_count: 0,

        // Status Information
        status: "archived",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: false, // Changed from true in old, as it seems unlikely for this type? Revert if needed.

        // Stock Management
        requiresInventoryTracking: true,
        stock: 0,
        hasVariants: true,
        totalVariantStock: 50,
        lowStockThreshold: 12,

        // Product Details
        features: {}, // Empty in original

        // Images
        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets1.png"
        ],

        // Product Configuration
        options: {
            color: ["green", "yellow"],
            set: ["1-pack", "heeting device & 1-pack"]
        },
        option_images: {
            color: {
                green: ["https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets4.png"],
                yellow: ["https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets3.png"]
            },
            set: {
                "heeting device & 1-pack": ["https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/h6.png"]
            }
        },
        variant_images: {
            "green|1-pack": [
                "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/h5.png",
                "https://raw.githubusercontent.com/Adel-Kazem/subdomain-multi-page-ajax-2/main/products_images/heets1.png"
            ]
        },
        option_variants_stock: {
            "green|1-pack": 10,
            "green|heeting device & 1-pack": 14,
            "yellow|1-pack": 13,
            "yellow|heeting device & 1-pack": 13
        },

        // Variant Pricing Adjustments - NEW STRUCTURE
        option_price_adjustments: {
            // None specified in original
        },

        // Option Shipping Cost Adjustments - NEW STRUCTURE
        option_shipping_adjustments: {
            // None specified in original
        },

        // Physical Attributes
        weight: { value: 63, unit: "oz" }, // Note: oz might be unusual with kg elsewhere
        dimensions: { length: 43, width: 58, height: 14, unit: "in" }, // Note: in might be unusual with cm elsewhere

        // Option Dimension Overrides - NEW STRUCTURE
        option_dimension_overrides: {
            "color": {
                "yellow": { // This seems to just repeat the base dimensions, likely unnecessary unless it actually differs
                    weight: { value: 63, unit: "oz" },
                    dimensions: { length: 43, width: 58, height: 14, unit: "in" }
                }
            }
        },

        // Categories
        categories: [], // Empty in original

        // Related Products (None specified in original)
        upselling: [],
        crossSelling: [],
        relatedProducts: [],

        // Timestamps
        createdAt: "2025-04-11T07:25:54.546Z",
        updatedAt: "2025-04-11T11:29:32.645Z"
    }
];
