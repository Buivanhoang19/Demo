// scripts/products.js
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('You must be logged in to view products.');
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    }

    const productList = document.getElementById('productList');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${product.name}, Price: $${product.price}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editProduct(index));
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProduct(index));
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        productList.appendChild(listItem);
    });

    function editProduct(index) {
        const product = products[index];
        const newName = prompt('Enter new product name', product.name);
        const newPrice = prompt('Enter new product price', product.price);
        if (newName && newPrice) {
            products[index] = { name: newName, price: newPrice };
            localStorage.setItem('products', JSON.stringify(products));
            location.reload(); // Tải lại trang để cập nhật danh sách sản phẩm
        }
    }

    function deleteProduct(index) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        location.reload(); // Tải lại trang để cập nhật danh sách sản phẩm
    }
});