// scripts/add-product.js
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('You must be logged in to add a product.');
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    }

    document.getElementById('addProductForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;

        // Thêm sản phẩm vào danh sách (ví dụ đơn giản sử dụng localStorage)
        if (productName && productPrice) {
            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.push({ name: productName, price: productPrice });
            localStorage.setItem('products', JSON.stringify(products));
            alert(`Product added: ${productName}`);
            window.location.href = 'products.html'; // Chuyển hướng đến trang quản lý sản phẩm sau khi thêm sản phẩm
        } else {
            alert('Please fill out all fields.');
        }
    });
});