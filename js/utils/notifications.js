/**
 * Hiển thị thông báo - Notifications
 * Chức năng: Hiển thị thông báo cho người dùng
 * Theo sơ đồ DFD: Thông báo nhập thành công / Thông báo lỗi / Báo lỗi
 */

let notificationTimeout = null;

/**
 * Hiển thị thông báo thành công
 */
export function showSuccess(message) {
    showNotification(message, 'success');
}

/**
 * Hiển thị thông báo lỗi
 */
export function showError(message) {
    showNotification(message, 'error');
}

/**
 * Hiển thị thông báo thông tin
 */
export function showInfo(message) {
    showNotification(message, 'info');
}

/**
 * Hiển thị thông báo cảnh báo
 */
export function showWarning(message) {
    showNotification(message, 'warning');
}

/**
 * Hiển thị thông báo chung
 */
function showNotification(message, type = 'info') {
    // Lấy element notification
    const notification = document.getElementById('notification');
    if (!notification) {
        console.error('Notification element not found');
        return;
    }

    // Xóa timeout cũ nếu có
    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }

    // Xóa các class cũ
    notification.className = 'notification';
    
    // Thêm class mới
    notification.classList.add(type);
    notification.textContent = message;
    
    // Hiển thị
    notification.classList.add('show');

    // Tự động ẩn sau 3 giây
    notificationTimeout = setTimeout(() => {
        hideNotification();
    }, 3000);
}

/**
 * Ẩn thông báo
 */
export function hideNotification() {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.remove('show');
    }
}

/**
 * Hiển thị thông báo yêu cầu nhập lại
 * Theo sơ đồ DFD: Thông báo nhập lại
 */
export function showRetryMessage(fieldName) {
    showError(`${fieldName} không hợp lệ. Vui lòng nhập lại!`);
}

/**
 * Hiển thị thông báo nhập thành công
 * Theo sơ đồ DFD: Hiển thị thông báo nhập thành công
 */
export function showInputSuccess(message = 'Đã lưu thông tin thành công!') {
    showSuccess(message);
}

/**
 * Hiển thị thông báo validation lỗi
 * Theo sơ đồ DFD: Báo lỗi
 */
export function showValidationError(errorMessage) {
    showError(errorMessage);
}
