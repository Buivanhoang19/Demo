// scripts/admin.js
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser || currentUser.role !== 'admin') {
        alert('Access denied. Admins only.');
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập nếu không phải là admin
    } else {
        const adminContent = document.getElementById('adminContent');
        adminContent.innerHTML = '<p>Admin controls go here.</p>';
        // Thêm các chức năng quản trị khác tại đây
    }
});