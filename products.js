const PRODUCTS = [
 {
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
 status: "active",
 isFeatured: true,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: true,
 totalVariantStock: 124,
 lowStockThreshold: 5,
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
 images: [
 "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=800&auto=format&fit=crop"
 ],
 options: {
 processor: [
 "intel i7-14700H",
 "intel i9-14900HX",
 "amd ryzen 9 7950X"
 ],
 graphics: [
 "nvidia rtx 4070 8GB",
 "nvidia rtx 4080 12GB",
 "nvidia rtx 4090 16GB"
 ],
 ram: [
 "16GB DDR5",
 "32GB DDR5",
 "64GB DDR5"
 ],
 storage: [
 "512GB NVMe",
 "1TB NVMe",
 "2TB NVMe",
 "4TB NVMe"
 ],
 display: [
 "15.6\" FHD 144Hz",
 "15.6\" QHD 240Hz",
 "17.3\" FHD 144Hz",
 "17.3\" QHD 240Hz"
 ],
 os: [
 "windows 11 home",
 "windows 11 pro"
 ]
 },
 option_images: {
 processor: {
 "intel i9-14900HX": [
 "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop"
 ],
 "amd ryzen 9 7950X": [
 "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop"
 ]
 },
 graphics: {
 "nvidia rtx 4080 12GB": [
 "https://images.unsplash.com/photo-1555618568-bdf0a992c512?w=800&auto=format&fit=crop"
 ],
 "nvidia rtx 4090 16GB": [
 "https://images.unsplash.com/photo-1551643556-0e32e07d70dd?w=800&auto=format&fit=crop"
 ]
 },
 display: {
 "15.6\" QHD 240Hz": [
 "https://images.unsplash.com/photo-1551883040-0256b70c6ee9?w=800&auto=format&fit=crop"
 ],
 "17.3\" QHD 240Hz": [
 "https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?w=800&auto=format&fit=crop"
 ]
 }
 },
 variant_images: {
 "intel i9-14900HX|nvidia rtx 4090 16GB|17.3\" QHD 240Hz": [
 "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop"
 ],
 "amd ryzen 9 7950X|nvidia rtx 4080 12GB|15.6\" QHD 240Hz": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop"
 },
 option_variants_stock: {
 "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|512GB NVMe|15.6\" FHD 144Hz|windows 11 home": 15,
 "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 12,
 "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 10,
 "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 8,
 "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 10,
 "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 home": 8,
 "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 pro": 6,
 "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 5,
 "intel i9-14900HX|nvidia rtx 4090 16GB|32GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 7,
 "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 4,
 "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|4TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 2,
 "amd ryzen 9 7950X|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6\" FHD 144Hz|windows 11 home": 8,
 "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6\" QHD 240Hz|windows 11 home": 6,
 "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6\" QHD 240Hz|windows 11 pro": 5,
 "amd ryzen 9 7950X|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3\" QHD 240Hz|windows 11 pro": 3
 },
 option_price_adjustments: {
 "processor:intel i9-14900HX": 300,
 "processor:amd ryzen 9 7950X": 250,
 "graphics:nvidia rtx 4080 12GB": 300,
 "graphics:nvidia rtx 4090 16GB": 800,
 "ram:32GB DDR5": 150,
 "ram:64GB DDR5": 400,
 "storage:1TB NVMe": 100,
 "storage:2TB NVMe": 250,
 "storage:4TB NVMe": 500,
 "display:15.6\" QHD 240Hz": 200,
 "display:17.3\" FHD 144Hz": 150,
 "display:17.3\" QHD 240Hz": 350,
 "os:windows 11 pro": 100
 },
 option_shipping_adjustments: {
 "display:17.3\" FHD 144Hz": 10,
 "display:17.3\" QHD 240Hz": 10
 },
 weight: {
 value: 2.2,
 unit: "kg"
 },
 dimensions: {
 length: 36,
 width: 26,
 height: 2,
 unit: "cm"
 },
 option_dimension_overrides: {
 "display:17.3\" FHD 144Hz": {
 weight: {
 value: 2.5,
 unit: "kg"
 },
 dimensions: {
 length: 40,
 width: 28,
 height: 2.2,
 unit: "cm"
 }
 },
 "display:17.3\" QHD 240Hz": {
 weight: {
 value: 2.6,
 unit: "kg"
 },
 dimensions: {
 length: 40,
 width: 28,
 height: 2.3,
 unit: "cm"
 }
 }
 },
 categories: [
 101,
 105,
 110
 ],
 upselling: [
 3005,
 3010
 ],
 crossSelling: [
 3101,
 3201
 ],
 relatedProducts: [
 3002,
 3003
 ],
 createdAt: "2025-01-05T09:00:00Z",
 updatedAt: "2025-04-02T11:45:00Z"
 },
 {
 id: 3002,
 name: "New Product",
 description: "",
 base_price: 0,
 base_shipping_cost: 0,
 free_shipping: false,
 sku: "PRD-3002",
 slug: "new-product",
 brand: "",
 rating: 0,
 reviews_count: 0,
 status: "active",
 isFeatured: false,
 isOnSale: false,
 requiresShipping: true,
 requiresInventoryTracking: true,
 stock: 0,
 hasVariants: false,
 totalVariantStock: 0,
 lowStockThreshold: 5,
 features: {},
 images: [],
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
 categories: [],
 createdAt: "2025-04-10T09:37:31.470Z",
 updatedAt: "2025-04-10T09:37:31.470Z"
 }
];