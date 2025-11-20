<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bộ Sưu Tập Đồng Hồ Cao Cấp</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    @vite(['resources/css/layout/sanpham.css', 'resources/js/layout/sanpham.js'])
</head>

<body>
    @extends('layouts.navbar.header')
    <div class="wt-main-container">


        <button class="wt-mobile-filter-toggle" onclick="toggleMobileFilter()">
            ☰ Bộ Lọc Sản Phẩm
        </button>

        <div class="wt-content-wrapper">
            <aside class="wt-filter-sidebar" id="wtFilterSidebar">
                <div class="wt-filter-header">
                    <h3 class="wt-filter-title">Bộ Lọc</h3>
                    <button class="wt-clear-button" onclick="clearAllFilters()">Xóa Tất Cả</button>
                </div>

                <div class="wt-filter-group">
                    <h4 class="wt-filter-group-title">Thương Hiệu</h4>
                    <div class="wt-filter-option" onclick="toggleFilter('brand', 'rolex')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtBrandRolex" value="rolex">
                        <label class="wt-checkbox-custom" for="wtBrandRolex"></label>
                        <span class="wt-filter-label">Rolex</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('brand', 'omega')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtBrandOmega" value="omega">
                        <label class="wt-checkbox-custom" for="wtBrandOmega"></label>
                        <span class="wt-filter-label">Omega</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('brand', 'patek')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtBrandPatek" value="patek">
                        <label class="wt-checkbox-custom" for="wtBrandPatek"></label>
                        <span class="wt-filter-label">Patek Philippe</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('brand', 'audemars')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtBrandAudemars" value="audemars">
                        <label class="wt-checkbox-custom" for="wtBrandAudemars"></label>
                        <span class="wt-filter-label">Audemars Piguet</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('brand', 'cartier')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtBrandCartier" value="cartier">
                        <label class="wt-checkbox-custom" for="wtBrandCartier"></label>
                        <span class="wt-filter-label">Cartier</span>
                    </div>
                </div>

                <div class="wt-filter-group">
                    <h4 class="wt-filter-group-title">Loại Máy</h4>
                    <div class="wt-filter-option" onclick="toggleFilter('movement', 'automatic')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMovementAuto" value="automatic">
                        <label class="wt-checkbox-custom" for="wtMovementAuto"></label>
                        <span class="wt-filter-label">Automatic</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('movement', 'quartz')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMovementQuartz" value="quartz">
                        <label class="wt-checkbox-custom" for="wtMovementQuartz"></label>
                        <span class="wt-filter-label">Quartz</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('movement', 'manual')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMovementManual" value="manual">
                        <label class="wt-checkbox-custom" for="wtMovementManual"></label>
                        <span class="wt-filter-label">Manual</span>
                    </div>
                </div>

                <div class="wt-filter-group">
                    <h4 class="wt-filter-group-title">Chất Liệu Vỏ</h4>
                    <div class="wt-filter-option" onclick="toggleFilter('material', 'steel')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMaterialSteel" value="steel">
                        <label class="wt-checkbox-custom" for="wtMaterialSteel"></label>
                        <span class="wt-filter-label">Thép Không Gỉ</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('material', 'gold')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMaterialGold" value="gold">
                        <label class="wt-checkbox-custom" for="wtMaterialGold"></label>
                        <span class="wt-filter-label">Vàng</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('material', 'platinum')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMaterialPlatinum" value="platinum">
                        <label class="wt-checkbox-custom" for="wtMaterialPlatinum"></label>
                        <span class="wt-filter-label">Bạch Kim</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('material', 'titanium')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtMaterialTitanium" value="titanium">
                        <label class="wt-checkbox-custom" for="wtMaterialTitanium"></label>
                        <span class="wt-filter-label">Titanium</span>
                    </div>
                </div>

                <div class="wt-filter-group">
                    <h4 class="wt-filter-group-title">Kích Thước</h4>
                    <div class="wt-filter-option" onclick="toggleFilter('size', 'small')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtSizeSmall" value="small">
                        <label class="wt-checkbox-custom" for="wtSizeSmall"></label>
                        <span class="wt-filter-label">
                            < 38mm</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('size', 'medium')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtSizeMedium" value="medium">
                        <label class="wt-checkbox-custom" for="wtSizeMedium"></label>
                        <span class="wt-filter-label">38-42mm</span>
                    </div>
                    <div class="wt-filter-option" onclick="toggleFilter('size', 'large')">
                        <input type="checkbox" class="wt-checkbox-input" id="wtSizeLarge" value="large">
                        <label class="wt-checkbox-custom" for="wtSizeLarge"></label>
                        <span class="wt-filter-label">> 42mm</span>
                    </div>
                </div>

                <div class="wt-filter-group">
                    <h4 class="wt-filter-group-title">Giá (Triệu VNĐ)</h4>
                    <div class="wt-price-range-slider">
                        <div class="wt-price-inputs">
                            <input type="number" class="wt-price-input" id="wtMinPrice" placeholder="Từ" value="0" onchange="applyPriceFilter()">
                            <input type="number" class="wt-price-input" id="wtMaxPrice" placeholder="Đến" value="1000" onchange="applyPriceFilter()">
                        </div>
                    </div>
                </div>
            </aside>

            <main class="wt-products-section">
                <div class="wt-products-controls">
                    <span class="wt-products-count" id="wtProductCount">Hiển thị 12 sản phẩm</span>
                    <select class="wt-sort-select" id="wtSortSelect" onchange="sortProducts()">
                        <option value="default">Sắp Xếp Mặc Định</option>
                        <option value="price-low">Giá: Thấp đến Cao</option>
                        <option value="price-high">Giá: Cao đến Thấp</option>
                        <option value="name-asc">Tên: A-Z</option>
                        <option value="name-desc">Tên: Z-A</option>
                    </select>
                </div>

                <div class="wt-products-grid" id="wtProductsGrid">
                    <!-- Products will be generated by JavaScript -->
                </div>
            </main>
        </div>
    </div>


</body>

</html>