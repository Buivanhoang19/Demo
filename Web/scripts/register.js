// scripts/register.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra điều kiện hợp lệ và đăng ký người dùng
    if (username && password) {
        alert(`Registration successful for user: ${username}`);
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    } else {
        document.getElementById('registerError').textContent = 'Please fill out all fields.';
    }
});