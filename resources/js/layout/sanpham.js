 const wtProducts = [{
         id: 1,
         name: 'Submariner Date',
         brand: 'rolex',
         brandDisplay: 'Rolex',
         price: 285,
         movement: 'automatic',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '41mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a1a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="120" fill="%23333" stroke="%23d4af37" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="90" fill="%231a1a1a" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="130" stroke="%23d4af37" stroke-width="4" stroke-linecap="round"/%3E%3Cline x1="200" y1="200" x2="250" y2="200" stroke="%23999" stroke-width="3" stroke-linecap="round"/%3E%3C/svg%3E',
         badge: 'Mới'
     },
     {
         id: 2,
         name: 'Speedmaster Professional',
         brand: 'omega',
         brandDisplay: 'Omega',
         price: 175,
         movement: 'manual',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '42mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%232a2a2a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="110" fill="%23404040" stroke="%23666" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="85" fill="%23000" stroke="%23888" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="140" stroke="%23ddd" stroke-width="3"/%3E%3Cline x1="200" y1="200" x2="240" y2="230" stroke="%23aaa" stroke-width="2"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 3,
         name: 'Nautilus 5711',
         brand: 'patek',
         brandDisplay: 'Patek Philippe',
         price: 850,
         movement: 'automatic',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '40mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23151515" width="400" height="400"/%3E%3Crect x="80" y="80" width="240" height="240" rx="20" fill="%23333" stroke="%23d4af37" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="80" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="150" stroke="%23d4af37" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="235" y2="200" stroke="%23999" stroke-width="3"/%3E%3C/svg%3E',
         badge: 'Hot'
     },
     {
         id: 4,
         name: 'Royal Oak Selfwinding',
         brand: 'audemars',
         brandDisplay: 'Audemars Piguet',
         price: 620,
         movement: 'automatic',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '41mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%230a0a0a" width="400" height="400"/%3E%3Cpolygon points="200,60 300,120 300,280 200,340 100,280 100,120" fill="%23404040" stroke="%23666" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="90" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="130" stroke="%23d4af37" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="250" y2="200" stroke="%23aaa" stroke-width="3"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 5,
         name: 'Santos de Cartier',
         brand: 'cartier',
         brandDisplay: 'Cartier',
         price: 195,
         movement: 'automatic',
         material: 'steel',
         size: 'large',
         sizeDisplay: '43mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a1a" width="400" height="400"/%3E%3Crect x="100" y="100" width="200" height="200" rx="10" fill="%23333" stroke="%23d4af37" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="70" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="155" stroke="%23d4af37" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="230" y2="200" stroke="%23999" stroke-width="3"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 6,
         name: 'Daytona Cosmograph',
         brand: 'rolex',
         brandDisplay: 'Rolex',
         price: 425,
         movement: 'automatic',
         material: 'gold',
         size: 'medium',
         sizeDisplay: '40mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a1a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="125" fill="%23444" stroke="%23d4af37" stroke-width="4"/%3E%3Ccircle cx="200" cy="200" r="95" fill="%23000"/%3E%3Ccircle cx="200" cy="140" r="20" fill="%23222" stroke="%23666" stroke-width="1"/%3E%3Ccircle cx="170" cy="230" r="20" fill="%23222" stroke="%23666" stroke-width="1"/%3E%3Ccircle cx="230" cy="230" r="20" fill="%23222" stroke="%23666" stroke-width="1"/%3E%3Cline x1="200" y1="200" x2="200" y2="145" stroke="%23d4af37" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="240" y2="200" stroke="%23999" stroke-width="3"/%3E%3C/svg%3E',
         badge: 'Mới'
     },
     {
         id: 7,
         name: 'Seamaster Diver 300M',
         brand: 'omega',
         brandDisplay: 'Omega',
         price: 155,
         movement: 'automatic',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '42mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%232a2a2a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="115" fill="%230a2a4a" stroke="%23555" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="85" fill="%23000" stroke="%23888" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="135" stroke="%23ddd" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="245" y2="200" stroke="%23d4af37" stroke-width="3"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 8,
         name: 'Calatrava 5196',
         brand: 'patek',
         brandDisplay: 'Patek Philippe',
         price: 380,
         movement: 'manual',
         material: 'gold',
         size: 'small',
         sizeDisplay: '37mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23151515" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="100" fill="%23333" stroke="%23d4af37" stroke-width="2"/%3E%3Ccircle cx="200" cy="200" r="95" fill="%23f8f8f0" stroke="%23d4af37" stroke-width="1"/%3E%3Cline x1="200" y1="200" x2="200" y2="145" stroke="%23000" stroke-width="3"/%3E%3Cline x1="200" y1="200" x2="235" y2="200" stroke="%23000" stroke-width="2"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 9,
         name: 'Royal Oak Offshore',
         brand: 'audemars',
         brandDisplay: 'Audemars Piguet',
         price: 780,
         movement: 'automatic',
         material: 'titanium',
         size: 'large',
         sizeDisplay: '44mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%230a0a0a" width="400" height="400"/%3E%3Cpolygon points="200,50 320,110 320,290 200,350 80,290 80,110" fill="%23404040" stroke="%23666" stroke-width="4"/%3E%3Ccircle cx="200" cy="200" r="95" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="125" stroke="%23d4af37" stroke-width="5"/%3E%3Cline x1="200" y1="200" x2="255" y2="200" stroke="%23aaa" stroke-width="4"/%3E%3C/svg%3E',
         badge: 'Hot'
     },
     {
         id: 10,
         name: 'Tank Must',
         brand: 'cartier',
         brandDisplay: 'Cartier',
         price: 135,
         movement: 'quartz',
         material: 'steel',
         size: 'small',
         sizeDisplay: '33mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a1a" width="400" height="400"/%3E%3Crect x="120" y="80" width="160" height="240" rx="5" fill="%23333" stroke="%23d4af37" stroke-width="3"/%3E%3Crect x="130" y="90" width="140" height="220" fill="%23f5f5f5" stroke="%23d4af37" stroke-width="1"/%3E%3Cline x1="200" y1="200" x2="200" y2="150" stroke="%23000" stroke-width="3"/%3E%3Cline x1="200" y1="200" x2="230" y2="200" stroke="%23000" stroke-width="2"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 11,
         name: 'GMT-Master II',
         brand: 'rolex',
         brandDisplay: 'Rolex',
         price: 320,
         movement: 'automatic',
         material: 'steel',
         size: 'medium',
         sizeDisplay: '40mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a1a1a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="120" fill="%23333" stroke="%23d4af37" stroke-width="3"/%3E%3Cpath d="M 200,80 A 120,120 0 0,1 320,200 L 200,200 Z" fill="%234a0a0a" opacity="0.7"/%3E%3Ccircle cx="200" cy="200" r="90" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="130" stroke="%23d4af37" stroke-width="4"/%3E%3Cline x1="200" y1="200" x2="250" y2="200" stroke="%23e74c3c" stroke-width="3"/%3E%3C/svg%3E',
         badge: null
     },
     {
         id: 12,
         name: 'Constellation Manhattan',
         brand: 'omega',
         brandDisplay: 'Omega',
         price: 210,
         movement: 'automatic',
         material: 'gold',
         size: 'medium',
         sizeDisplay: '39mm',
         image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%232a2a2a" width="400" height="400"/%3E%3Ccircle cx="200" cy="200" r="115" fill="%23404040" stroke="%23d4af37" stroke-width="3"/%3E%3Ccircle cx="200" cy="200" r="85" fill="%23000" stroke="%23d4af37" stroke-width="2"/%3E%3Cline x1="200" y1="200" x2="200" y2="140" stroke="%23d4af37" stroke-width="3"/%3E%3Cline x1="200" y1="200" x2="240" y2="200" stroke="%23d4af37" stroke-width="2"/%3E%3Ccircle cx="170" cy="170" r="3" fill="%23d4af37"/%3E%3Ccircle cx="230" cy="170" r="3" fill="%23d4af37"/%3E%3Ccircle cx="230" cy="230" r="3" fill="%23d4af37"/%3E%3Ccircle cx="170" cy="230" r="3" fill="%23d4af37"/%3E%3C/svg%3E',
         badge: 'Mới'
     }
 ];

 let wtActiveFilters = {
     brand: [],
     movement: [],
     material: [],
     size: [],
     minPrice: 0,
     maxPrice: 1000
 };

 let wtCurrentProducts = [...wtProducts];

 function renderProducts() {
     const grid = document.getElementById('wtProductsGrid');

     if (wtCurrentProducts.length === 0) {
         grid.innerHTML = '<div class="wt-no-results">Không tìm thấy sản phẩm phù hợp với bộ lọc của bạn</div>';
         document.getElementById('wtProductCount').textContent = 'Không có sản phẩm';
         return;
     }

     grid.innerHTML = wtCurrentProducts.map(product => `
                <div class="wt-product-card">
                    ${product.badge ? `<span class="wt-product-badge">${product.badge}</span>` : ''}
                    <div class="wt-product-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="wt-product-image">
                    </div>
                    <div class="wt-product-info">
                        <div class="wt-product-brand">${product.brandDisplay}</div>
                        <h3 class="wt-product-name">${product.name}</h3>
                        <div class="wt-product-specs">
                            <span class="wt-product-spec">⚙️ ${product.movement}</span>
                            <span class="wt-product-spec">📏 ${product.sizeDisplay}</span>
                            <span class="wt-product-spec">💎 ${product.material}</span>
                        </div>
                        <div class="wt-product-price-section">
                            <span class="wt-product-price">${product.price}M VNĐ</span>
                            <button class="wt-add-cart-button" onclick="addToCart(${product.id})">Thêm</button>
                        </div>
                    </div>
                </div>
            `).join('');

            document.getElementById('wtProductCount').textContent = `Hiển thị ${wtCurrentProducts.length} sản phẩm`;
        }

        function toggleFilter(filterType, value) {
            const checkbox = document.getElementById(`wt${filterType.charAt(0).toUpperCase() + filterType.slice(1)}${value.charAt(0).toUpperCase() + value.slice(1)}`);
            
            if (wtActiveFilters[filterType].includes(value)) {
                wtActiveFilters[filterType] = wtActiveFilters[filterType].filter(v => v !== value);
                checkbox.checked = false;
            } else {
                wtActiveFilters[filterType].push(value);
                checkbox.checked = true;
            }

            applyFilters();
        }

        function applyPriceFilter() {
            const minPrice = parseFloat(document.getElementById('wtMinPrice').value) || 0;
            const maxPrice = parseFloat(document.getElementById('wtMaxPrice').value) || 1000;
            wtActiveFilters.minPrice = minPrice;
            wtActiveFilters.maxPrice = maxPrice;
            applyFilters();
        }

        function applyFilters() {
            wtCurrentProducts = wtProducts.filter(product => {
                const brandMatch = wtActiveFilters.brand.length === 0 || wtActiveFilters.brand.includes(product.brand);
                const movementMatch = wtActiveFilters.movement.length === 0 || wtActiveFilters.movement.includes(product.movement);
                const materialMatch = wtActiveFilters.material.length === 0 || wtActiveFilters.material.includes(product.material);
                const sizeMatch = wtActiveFilters.size.length === 0 || wtActiveFilters.size.includes(product.size);
                const priceMatch = product.price >= wtActiveFilters.minPrice && product.price <= wtActiveFilters.maxPrice;

                return brandMatch && movementMatch && materialMatch && sizeMatch && priceMatch;
            });

            renderProducts();
        }

        function clearAllFilters() {
            wtActiveFilters = {
                brand: [],
                movement: [],
                material: [],
                size: [],
                minPrice: 0,
                maxPrice: 1000
            };

            document.querySelectorAll('.wt-checkbox-input').forEach(checkbox => {
                checkbox.checked = false;
            });

            document.getElementById('wtMinPrice').value = 0;
            document.getElementById('wtMaxPrice').value = 1000;
            document.getElementById('wtSortSelect').value = 'default';

            wtCurrentProducts = [...wtProducts];
            renderProducts();
        }

        function sortProducts() {
            const sortValue = document.getElementById('wtSortSelect').value;

            switch(sortValue) {
                case 'price-low':
                    wtCurrentProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    wtCurrentProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    wtCurrentProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    wtCurrentProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    wtCurrentProducts = [...wtProducts];
                    applyFilters();
                    return;
            }

            renderProducts();
        }

        function toggleMobileFilter() {
            const sidebar = document.getElementById('wtFilterSidebar');
            sidebar.classList.toggle('wt-active');
        }

        function addToCart(productId) {
            const product = wtProducts.find(p => p.id === productId);
            alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
        }

        // Initialize
        renderProducts();