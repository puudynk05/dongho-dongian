// Hàm để lấy và hiển thị thời gian hiện tại
function updateClock() {
    // 1. Tạo đối tượng Date mới để lấy thời gian hiện tại
    const now = new Date();

    // 2. Lấy giờ, phút, giây
    // Dùng padStart để thêm số 0 ở đầu nếu giá trị < 10 (ví dụ: 05 thay vì 5)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // 3. Định dạng chuỗi thời gian
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 4. Tìm phần tử HTML và cập nhật nội dung
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// 5. Gọi hàm một lần ngay khi tải trang để hiển thị thời gian ban đầu
updateClock();

// 6. Thiết lập interval để gọi hàm updateClock mỗi 1000 miligiây (1 giây)
// Điều này tạo ra hiệu ứng đồng hồ đếm ngược
setInterval(updateClock, 1000);