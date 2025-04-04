// router.js - Client-side router for Prime Beef SPA with hash-based routing

// Define routes configuration
const routes = {
    '/': {
        title: 'Prime Beef Lebanon - Premium Beef Butchery',
        template: 'home-template',
        init: initHomePage
    },
    '/products': {
        title: 'Our Products - Prime Beef Lebanon',
        template: 'products-template',
        init: initProductsPage
    },
    '/product/:id': {
        title: 'Product Details - Prime Beef Lebanon',
        template: 'product-detail-template',
        init: initProductDetailPage
    },
    '/cart': {
        title: 'Your Cart - Prime Beef Lebanon',
        template: 'cart-template',
        init: initCartPage
    },
    '/checkout': {
        title: 'Checkout - Prime Beef Lebanon',
        template: 'checkout-template',
        init: initCheckoutPage
    },
    '/about': {
        title: 'About Us - Prime Beef Lebanon',
        template: 'about-template',
        init: initStaticPage
    },
    '/contact': {
        title: 'Contact Us - Prime Beef Lebanon',
        template: 'contact-template',
        init: initContactPage
    }
};

// Router state
let currentRoute = null;
let params = {};

// Initialize router
function initRouter() {
    // Listen for hash changes
    window.addEventListener('hashchange', handleRouteChange);

    // Handle clicks on links with data-spa-link attribute
    document.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (link && link.hasAttribute('data-spa-link')) {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigateTo(href);
        }
    });

    // Initial route handling
    handleRouteChange();
}

// Handle route changes
function handleRouteChange() {
    // Get path from hash or default to home page
    // Remove the # and get the path that follows, or use '/' if no hash exists
    const path = window.location.hash.slice(1) || '/';

    // Find matching route
    let matchedRoute = null;
    let matchedParams = {};

    // Check for exact route match first
    if (routes[path]) {
        matchedRoute = routes[path];
    } else {
        // Check for parameterized routes
        for (const routePath in routes) {
            if (routePath.includes(':')) {
                const routeParts = routePath.split('/');
                const pathParts = path.split('/');
                if (routeParts.length === pathParts.length) {
                    let isMatch = true;
                    const params = {};
                    for (let i = 0; i < routeParts.length; i++) {
                        if (routeParts[i].startsWith(':')) {
                            // This is a parameter
                            const paramName = routeParts[i].substring(1);
                            params[paramName] = pathParts[i];
                        } else if (routeParts[i] !== pathParts[i]) {
                            isMatch = false;
                            break;
                        }
                    }
                    if (isMatch) {
                        matchedRoute = routes[routePath];
                        matchedParams = params;
                        break;
                    }
                }
            }
        }
    }

    // If route found, render it
    if (matchedRoute) {
        currentRoute = matchedRoute;
        params = matchedParams;
        renderRoute(matchedRoute, matchedParams);
    } else {
        // Not found - could render a 404 page
        console.error('Route not found:', path);
        // Redirect to home
        navigateTo('/');
    }
}

// Render the current route
function renderRoute(route, params) {
    // Update page title
    document.title = route.title;

    // Get the main content container
    const mainContent = document.getElementById('main-content');

    // Add fade out class for transition effect
    mainContent.classList.add('fade-out');

    // Delay content update for transition effect
    setTimeout(() => {
        // Get the template
        const template = document.getElementById(route.template);
        if (template && mainContent) {
            // Clone template content
            const content = template.content.cloneNode(true);

            // Clear and update main content
            mainContent.innerHTML = '';
            mainContent.appendChild(content);

            // Initialize the page with params
            if (typeof route.init === 'function') {
                route.init(params);
            }

            // Re-initialize Alpine.js on new DOM content
            if (window.Alpine) {
                window.Alpine.initTree(mainContent);
            }

            // Remove fade out class for transition in
            mainContent.classList.remove('fade-out');

            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            console.error('Template or main content container not found');
        }
    }, 200); // Match this timing with your CSS transition
}

// Navigate to a specific route
function navigateTo(path) {
    // Make sure path doesn't already have a hash
    const cleanPath = path.startsWith('#') ? path : '#' + path;
    window.location.hash = cleanPath;
}

// Page initialization functions
function initHomePage() {
    console.log('Home page initialized');
    // Initialize home page specific functionality
}

function initProductsPage(params) {
    console.log('Products page initialized');
    // Get the category from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        // Set the selected category in Alpine.js
        const mainContent = document.getElementById('main-content');
        if (mainContent && mainContent.__x) {
            mainContent.__x.$data.selectedCategory = category;
        }
    }
}

function initProductDetailPage(params) {
    console.log('Product detail page initialized for product ID:', params.id);
    // Load specific product data
    // This would fetch the product by ID and update the UI
}

function initCartPage() {
    console.log('Cart page initialized');
    // Initialize cart functionality
}

function initCheckoutPage() {
    console.log('Checkout page initialized');
    // Initialize checkout functionality
}

function initStaticPage() {
    console.log('Static page initialized');
    // For pages with minimal interactivity
}

function initContactPage() {
    console.log('Contact page initialized');
    // Initialize contact form validation, etc.
}

// Export router functions
window.PrimeBeefRouter = {
    init: initRouter,
    navigateTo: navigateTo,
    getCurrentRoute: () => currentRoute,
    getParams: () => params
};