/**
 * Display Manager - Process 4.0 Hiển thị thông điệp
 * Quản lý việc hiển thị các kết quả lên giao diện
 */

class DisplayManager {
    /**
     * Hiển thị thông báo
     * @param {string} message - Nội dung thông báo
     * @param {string} type - Loại thông báo (success, error, info, warning)
     * @param {string} containerId - ID của container chứa thông báo
     */
    static showNotification(message, type = 'info', containerId = null) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${this.getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;

        if (containerId) {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '';
                container.appendChild(notification);
            }
        } else {
            // Thêm vào body với animation
            document.body.appendChild(notification);
            notification.style.animation = 'slideInDown 0.3s ease-out';
            
            // Auto remove sau 5 giây
            setTimeout(() => {
                notification.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        }
    }

    /**
     * Lấy icon cho notification
     * @param {string} type - Loại notification
     * @returns {string} - Icon HTML
     */
    static getNotificationIcon(type) {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    /**
     * Hiển thị kết quả cung hoàng đạo
     * @param {Object} zodiac - Thông tin cung hoàng đạo
     * @param {Object} userData - Dữ liệu người dùng
     * @param {string} containerId - ID của container
     */
    static displayZodiacResult(zodiac, userData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="zodiac-result">
                <div class="zodiac-symbol">${zodiac.symbol}</div>
                <h2 class="zodiac-name">${zodiac.name} (${zodiac.nameEn})</h2>
                <div class="user-info">
                    <p><strong>Họ tên:</strong> ${userData.name}</p>
                    <p><strong>Ngày sinh:</strong> ${userData.day}/${userData.month}${userData.year ? '/' + userData.year : ''}</p>
                </div>
                <div class="zodiac-info">
                    <p><strong>Nguyên tố:</strong> ${zodiac.element}</p>
                    <p><strong>Màu sắc:</strong> ${zodiac.color}</p>
                    <p><strong>Đặc điểm:</strong> ${zodiac.description}</p>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Hiển thị thông điệp cung hoàng đạo
     * @param {Object} zodiac - Thông tin cung
     * @param {Array} messages - Danh sách thông điệp
     * @param {string} containerId - ID của container
     */
    static displayMessages(zodiac, messages, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let messagesHtml = '';
        if (messages.length === 0) {
            messagesHtml = '<p class="no-messages">Chưa có thông điệp nào cho cung này.</p>';
        } else {
            messagesHtml = messages.map(msg => `
                <div class="message-item">
                    <div class="message-content">${msg.content}</div>
                    <div class="message-date">${new Date(msg.createdAt).toLocaleDateString('vi-VN')}</div>
                </div>
            `).join('');
        }

        const html = `
            <div class="message-display">
                <div class="zodiac-header">
                    <span class="zodiac-symbol">${zodiac.symbol}</span>
                    <h3>${zodiac.name}</h3>
                </div>
                <div class="messages-list">
                    ${messagesHtml}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Hiển thị kết quả so sánh tương hợp
     * @param {Object} user1 - Dữ liệu người dùng 1
     * @param {Object} user2 - Dữ liệu người dùng 2
     * @param {number} compatibility - Độ tương hợp (%)
     * @param {string} containerId - ID của container
     */
    static displayCompatibility(user1, user2, compatibility, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let compatibilityText = '';
        if (compatibility >= 80) {
            compatibilityText = 'Rất tương hợp! Hai bạn có thể tạo nên một mối quan hệ tuyệt vời.';
        } else if (compatibility >= 60) {
            compatibilityText = 'Khá tương hợp. Hai bạn có nhiều điểm chung và hiểu nhau.';
        } else if (compatibility >= 40) {
            compatibilityText = 'Tương hợp ở mức trung bình. Cần có sự nỗ lực từ cả hai phía.';
        } else {
            compatibilityText = 'Ít tương hợp. Hai bạn có nhiều điểm khác biệt cần khắc phục.';
        }

        const html = `
            <div class="compatibility-result">
                <div class="users-info">
                    <div class="user-card">
                        <div class="zodiac-symbol">${user1.zodiac.symbol}</div>
                        <h4>${user1.user.name}</h4>
                        <p>${user1.zodiac.name}</p>
                    </div>
                    <div class="heart-icon">💕</div>
                    <div class="user-card">
                        <div class="zodiac-symbol">${user2.zodiac.symbol}</div>
                        <h4>${user2.user.name}</h4>
                        <p>${user2.zodiac.name}</p>
                    </div>
                </div>
                <div class="compatibility-score">
                    <div class="score-circle">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" stroke-width="8"/>
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#9b59b6" stroke-width="8"
                                    stroke-dasharray="${compatibility * 2.827}, 282.7"
                                    transform="rotate(-90 50 50)"/>
                        </svg>
                        <div class="score-text">${compatibility}%</div>
                    </div>
                </div>
                <div class="compatibility-description">
                    <p>${compatibilityText}</p>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Hiển thị màu sắc may mắn
     * @param {Object} zodiac - Thông tin cung
     * @param {string} containerId - ID của container
     */
    static displayLuckyColors(zodiac, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const colorsHtml = zodiac.luckyColors.map(color => {
            const colorCode = this.getColorCode(color);
            return `
                <div class="color-item">
                    <div class="color-box" style="background-color: ${colorCode}"></div>
                    <span class="color-name">${color}</span>
                </div>
            `;
        }).join('');

        const html = `
            <div class="lucky-colors">
                <div class="zodiac-header">
                    <span class="zodiac-symbol">${zodiac.symbol}</span>
                    <h3>${zodiac.name}</h3>
                </div>
                <h4>Màu sắc may mắn hôm nay</h4>
                <div class="colors-grid">
                    ${colorsHtml}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Chuyển đổi tên màu tiếng Việt sang mã màu
     * @param {string} colorName - Tên màu
     * @returns {string} - Mã màu hex
     */
    static getColorCode(colorName) {
        const colorMap = {
            'Đỏ': '#ff0000',
            'Cam': '#ff8c00',
            'Vàng': '#ffd700',
            'Vàng kim': '#ffd700',
            'Xanh lá': '#32cd32',
            'Xanh lá nhạt': '#90ee90',
            'Xanh lá đậm': '#228b22',
            'Xanh dương': '#1e90ff',
            'Xanh lam': '#4169e1',
            'Xanh đậm': '#00008b',
            'Xanh biển': '#008b8b',
            'Xanh dương nhạt': '#add8e6',
            'Xanh lục': '#00ff00',
            'Tím': '#9b59b6',
            'Tím nhạt': '#dda0dd',
            'Đỏ thẫm': '#8b0000',
            'Hồng': '#ff69b4',
            'Trắng': '#ffffff',
            'Đen': '#000000',
            'Bạc': '#c0c0c0',
            'Nâu': '#8b4513',
            'Kem': '#fffacd'
        };

        return colorMap[colorName] || '#999999';
    }

    /**
     * Hiển thị danh sách quản lý thông điệp
     * @param {string} zodiacKey - Key của cung
     * @param {Array} messages - Danh sách thông điệp
     * @param {string} containerId - ID của container
     */
    static displayMessageManagement(zodiacKey, messages, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const zodiac = DataStore.zodiacData[zodiacKey];
        
        let messagesHtml = '';
        if (messages.length === 0) {
            messagesHtml = '<p class="no-messages">Chưa có thông điệp nào.</p>';
        } else {
            messagesHtml = messages.map(msg => `
                <div class="message-manage-item" data-id="${msg.id}">
                    <div class="message-content">${msg.content}</div>
                    <div class="message-actions">
                        <button class="btn-edit" onclick="app.editMessage('${zodiacKey}', ${msg.id})">Sửa</button>
                        <button class="btn-delete" onclick="app.deleteMessage('${zodiacKey}', ${msg.id})">Xóa</button>
                    </div>
                </div>
            `).join('');
        }

        const html = `
            <div class="message-management">
                <div class="zodiac-header">
                    <span class="zodiac-symbol">${zodiac.symbol}</span>
                    <h3>${zodiac.name}</h3>
                </div>
                <div class="add-message-form">
                    <textarea id="new-message-content" placeholder="Nhập thông điệp mới..."></textarea>
                    <button onclick="app.addMessage('${zodiacKey}')">Thêm thông điệp</button>
                </div>
                <div class="messages-manage-list">
                    ${messagesHtml}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Clear container
     * @param {string} containerId - ID của container
     */
    static clearContainer(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
        }
    }
}
