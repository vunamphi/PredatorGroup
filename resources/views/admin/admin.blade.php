<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Quản Lý Đồng Hồ</title>
    @vite(['resources/css/admin/admindasboard.css', 'resources/js/admin/dasboard.js'])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>

<body>
    <div class="dashboard-container">
        <div class="sidebar" id="sidebar">
            <div class="logo-container">
                <div class="logo">
                    <i class="fas fa-clock"></i>
                    <span>PREDATOR</span>
                </div>
            </div>

            <nav>
                <div class="nav-item active">
                    <i class="fas fa-home"></i>
                    <span>Trang Chủ</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-shopping-bag"></i>
                    <span onclick="toggleBanner()">Giỏ hàng </span>
                    <div id="banner-content" style="display: none;">
                        @include('admin.banner');
                    </div>
                </div>

                <div class="nav-item" onclick="toggleSubMenu(this)">
                    <i class="fas fa-clock"></i>
                    <span>Quản lý</span>
                    <i class="fas fa-chevron-down nav-arrow"></i>
                </div>
                <div class="sub-nav-container" style="display: none;">
                    <a href="#" class="nav-item sub-nav-item">
                        <i class="fas fa-tags"></i>
                        <span> Danh mục</span>
                    </a>
                    <a href="#" class="nav-item sub-nav-item">
                        <i class="fas fa-box-open"></i>
                        <span> Sản phẩm</span>
                    </a>
                    <a href="#" class="nav-item sub-nav-item">
                        <i class="fas fa-box-open"></i>
                        <span> Thương hiệu</span>
                    </a>
                    <a href="#" class="nav-item sub-nav-item">
                        <i class="fas fa-box-open"></i>
                        <span> Người dùng</span>
                    </a>
                    <a href="{{ route('admin.quan_ly.banner')}}" class="nav-item sub-nav-item">
                        <i class="fas fa-box-open"></i>
                        <span>Banner</span>
                    </a>
                </div>
                <div class="nav-item">
                    <i class="fas fa-users"></i>
                    <span>Khách Hàng</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-chart-line"></i>
                    <span>Thống Kê</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-warehouse"></i>
                    <span>Kho Hàng</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-tags"></i>
                    <span>Khuyến Mãi</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-star"></i>
                    <span>Đánh Giá</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-cog"></i>
                    <span>Cài Đặt</span>
                </div>
            </nav>
        </div>

        <div class="main-content">
            <div class="top-bar">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                    <input type="text" class="search-bar" placeholder="Tìm kiếm đơn hàng, sản phẩm, khách hàng...">
                </div>


            </div>
        </div>


        <script>
            function toggleSubMenu(navItem) {
                // Lấy phần tử menu con ngay sau mục vừa nhấp
                const subMenu = navItem.nextElementSibling;
                // Lấy mũi tên bên trong mục vừa nhấp
                const arrow = navItem.querySelector('.nav-arrow');

                // Kiểm tra xem có phải là menu con hợp lệ không
                if (subMenu && subMenu.classList.contains('sub-nav-container')) {
                    // Nếu đang ẩn thì hiện ra
                    if (subMenu.style.display === "none" || subMenu.style.display === "") {
                        subMenu.style.display = "block";
                        navItem.classList.add('active'); // Thêm class 'active' để làm nổi bật
                        if (arrow) {
                            arrow.style.transform = "rotate(180deg)"; // Xoay mũi tên
                        }
                    } else {
                        // Nếu đang hiện thì ẩn đi
                        subMenu.style.display = "none";
                        navItem.classList.remove('active'); // Bỏ class 'active'
                        if (arrow) {
                            arrow.style.transform = "rotate(0deg)"; // Quay lại mũi tên
                        }
                    }
                }
            }

            // Giữ lại hàm gốc cho banner
            function toggleBanner() {
                var bannerContent = document.getElementById('banner-content');
                if (bannerContent.style.display === 'none') {
                    bannerContent.style.display = 'block';
                } else {
                    bannerContent.style.display = 'none';
                }
            }
        </script>
</body>


</html>