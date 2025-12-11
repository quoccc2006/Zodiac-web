/**
 * 4.0 Hiển thị thông điệp/kết quả - Display Manager
 * Chức năng: Render UI cho các kết quả
 * Theo sơ đồ DFD: 4.0 Hiển thị thông điệp → [Hiển thị thông điệp] → Người dùng
 */

import { getAllZodiacs } from '../data/zodiacData.js';

/**
 * Hiển thị danh sách 12 cung hoàng đạo
 */
export function displayZodiacInfo(containerId = 'zodiac-cards') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const zodiacs = getAllZodiacs();
    container.innerHTML = '';

    zodiacs.forEach(zodiac => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="symbol">${zodiac.symbol}</div>
            <div class="name">${zodiac.nameVi}</div>
            <div class="name-en">${zodiac.nameEn}</div>
            <div class="date-range">${zodiac.dateRange}</div>
            <div class="description">${zodiac.description}</div>
        `;
        container.appendChild(card);
    });
}

/**
 * Hiển thị màu may mắn
 */
export function displayLuckyColor(luckyColorData, containerId = 'lucky-color-result') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!luckyColorData) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">Vui lòng chọn cung hoàng đạo</p>';
        return;
    }

    container.innerHTML = `
        <div class="lucky-color-display">
            <h3>${luckyColorData.zodiac.nameVi} (${luckyColorData.zodiac.nameEn})</h3>
            <div class="color-box" style="background-color: ${luckyColorData.color};"></div>
            <p><strong>Màu may mắn hôm nay:</strong> ${luckyColorData.color}</p>
            <p><strong>Ngày:</strong> ${luckyColorData.date}</p>
            <p style="margin-top: 15px;">${luckyColorData.zodiac.description}</p>
        </div>
    `;
}

/**
 * Hiển thị danh sách thông điệp
 */
export function displayMessages(messages, containerId = 'messages-list') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!messages || messages.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 20px;">Chưa có thông điệp nào.</p>';
        return;
    }

    container.innerHTML = '';
    messages.forEach(message => {
        const messageElement = createMessageElement(message);
        container.appendChild(messageElement);
    });
}

/**
 * Tạo phần tử thông điệp
 */
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-item';
    messageDiv.dataset.messageId = message.id;

    const date = new Date(message.createdAt);
    const dateStr = date.toLocaleString('vi-VN');

    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="message-zodiac">${getZodiacName(message.zodiacSign)}</span>
            <div class="message-actions">
                <button class="btn btn-edit btn-edit-msg" data-id="${message.id}">Sửa</button>
                <button class="btn btn-danger btn-delete-msg" data-id="${message.id}">Xóa</button>
            </div>
        </div>
        <div class="message-content" data-id="${message.id}">${message.message}</div>
        <div class="message-date">Ngày tạo: ${dateStr}</div>
        <div class="message-edit-form" style="display: none;">
            <textarea class="edit-textarea" rows="4">${message.message}</textarea>
            <div class="button-group">
                <button class="btn btn-primary btn-save-edit" data-id="${message.id}">Lưu</button>
                <button class="btn btn-secondary btn-cancel-edit" data-id="${message.id}">Hủy</button>
            </div>
        </div>
    `;

    return messageDiv;
}

/**
 * Lấy tên cung hoàng đạo từ ID
 */
function getZodiacName(zodiacId) {
    const zodiacs = getAllZodiacs();
    const zodiac = zodiacs.find(z => z.id === zodiacId);
    return zodiac ? `${zodiac.symbol} ${zodiac.nameVi}` : zodiacId;
}

/**
 * Hiển thị kết quả tương hợp
 */
export function displayCompatibility(compatibilityResult, containerId = 'compatibility-result') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!compatibilityResult || !compatibilityResult.success) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">Vui lòng nhập thông tin cả 2 người để kiểm tra tương hợp</p>';
        return;
    }

    const { percentage, description, advice, person1, person2 } = compatibilityResult;

    // Xác định màu sắc dựa trên %
    let percentageColor = '#f44336'; // Đỏ
    if (percentage >= 80) {
        percentageColor = '#4caf50'; // Xanh lá
    } else if (percentage >= 60) {
        percentageColor = '#ff9800'; // Cam
    }

    container.innerHTML = `
        <div class="compatibility-result">
            <h3>Kết Quả Tương Hợp</h3>
            <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                <div style="text-align: center;">
                    <div style="font-size: 2em;">${person1.zodiac.symbol}</div>
                    <div style="color: var(--secondary-color);">${person1.name}</div>
                    <div style="color: var(--text-light);">${person1.zodiac.nameVi}</div>
                </div>
                <div style="font-size: 3em; color: var(--accent-color); display: flex; align-items: center;">💕</div>
                <div style="text-align: center;">
                    <div style="font-size: 2em;">${person2.zodiac.symbol}</div>
                    <div style="color: var(--secondary-color);">${person2.name}</div>
                    <div style="color: var(--text-light);">${person2.zodiac.nameVi}</div>
                </div>
            </div>
            <div class="compatibility-percentage" style="color: ${percentageColor};">${percentage}%</div>
            <div class="compatibility-description">${description}</div>
            <div class="compatibility-advice">
                <strong>💡 Lời khuyên:</strong><br>${advice}
            </div>
        </div>
    `;
}

/**
 * Cập nhật dropdown cung hoàng đạo
 */
export function populateZodiacSelects() {
    const zodiacs = getAllZodiacs();
    const selects = document.querySelectorAll('#lucky-color-select, #message-zodiac-select');

    selects.forEach(select => {
        // Giữ lại option đầu tiên (placeholder)
        const firstOption = select.querySelector('option');
        select.innerHTML = '';
        select.appendChild(firstOption);

        // Thêm các cung hoàng đạo
        zodiacs.forEach(zodiac => {
            const option = document.createElement('option');
            option.value = zodiac.id;
            option.textContent = `${zodiac.symbol} ${zodiac.nameVi} (${zodiac.nameEn})`;
            select.appendChild(option);
        });
    });
}

/**
 * Hiển thị trạng thái loading
 */
export function showLoading(containerId, message = 'Đang xử lý...') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-light);">
            <div style="font-size: 2em; margin-bottom: 10px;">⏳</div>
            <p>${message}</p>
        </div>
    `;
}

/**
 * Xóa nội dung container
 */
export function clearContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
}

/**
 * Cập nhật nội dung khi chuyển tab
 */
export function updateTabContent(tabId) {
    // Ẩn tất cả các tab
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Hiển thị tab được chọn
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Cập nhật trạng thái nút tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}
