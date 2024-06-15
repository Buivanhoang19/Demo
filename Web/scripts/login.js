// // scripts/login.js
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Đây chỉ là kiểm tra ví dụ, bạn nên thay thế bằng kiểm tra thực tế
//     if (username === 'admin' && password === 'password') {
//         alert(`Login successful for user: ${username}`);
//         localStorage.setItem('currentUser', JSON.stringify({ username: username, role: 'admin' })); // Lưu thông tin người dùng hiện tại
//         window.location.href = 'admin.html'; // Chuyển hướng đến trang admin sau khi đăng nhập thành công
//     } else if (username === 'user' && password === 'password') {
//         alert(`Login successful for user: ${username}`);
//         localStorage.setItem('currentUser', JSON.stringify({ username: username, role: 'user' })); // Lưu thông tin người dùng hiện tại
//         window.location.href = 'index.html'; // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
//     } else {
//         document.getElementById('loginError').textContent = 'Incorrect username or password.';
//     }
// });