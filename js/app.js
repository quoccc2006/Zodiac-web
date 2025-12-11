/**
 * Module chính điều phối - Main Application
 * Orchestrates all modules according to DFD flows
 */

import * as requestAnalyzer from './modules/requestAnalyzer.js';
import * as dateValidator from './modules/dateValidator.js';
import * as zodiacIdentifier from './modules/zodiacIdentifier.js';
import * as messageHandler from './modules/messageHandler.js';
import * as displayManager from './modules/displayManager.js';
import * as compatibilityChecker from './modules/compatibilityChecker.js';
import * as notifications from './utils/notifications.js';
import * as userStore from './data/userStore.js';
import { getDailyLuckyColor } from './data/zodiacData.js';

/**
 * Khởi tạo ứng dụng
 */
function initApp() {
    console.log('🌟 Khởi tạo ứng dụng Cung Hoàng Đạo');
    
    // Hiển thị danh sách 12 cung hoàng đạo
    displayManager.displayZodiacInfo();
    
    // Populate các dropdown
    displayManager.populateZodiacSelects();
    
    // Đăng ký sự kiện
    registerEventListeners();
    
    // Load messages nếu có
    loadMessages();
    
    // Load thông tin người dùng đã lưu
    loadSavedPersons();
    
    notifications.showSuccess('Chào mừng đến với Cung Hoàng Đạo! 🌟');
}

/**
 * Đăng ký các sự kiện
 */
function registerEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabClick);
    });

    // Lucky color select
    const luckyColorSelect = document.getElementById('lucky-color-select');
    if (luckyColorSelect) {
        luckyColorSelect.addEventListener('change', handleLuckyColorSelect);
    }

    // Message controls
    const addMessageBtn = document.getElementById('add-message-btn');
    if (addMessageBtn) {
        addMessageBtn.addEventListener('click', handleAddMessage);
    }

    const clearMessageBtn = document.getElementById('clear-message-btn');
    if (clearMessageBtn) {
        clearMessageBtn.addEventListener('click', handleClearMessageForm);
    }

    // Person 1 save
    const savePerson1Btn = document.getElementById('save-person1-btn');
    if (savePerson1Btn) {
        savePerson1Btn.addEventListener('click', () => handleSavePerson(1));
    }

    // Person 2 save
    const savePerson2Btn = document.getElementById('save-person2-btn');
    if (savePerson2Btn) {
        savePerson2Btn.addEventListener('click', () => handleSavePerson(2));
    }

    // Check compatibility
    const checkCompatibilityBtn = document.getElementById('check-compatibility-btn');
    if (checkCompatibilityBtn) {
        checkCompatibilityBtn.addEventListener('click', handleCheckCompatibility);
    }

    // Message list event delegation
    const messagesList = document.getElementById('messages-list');
    if (messagesList) {
        messagesList.addEventListener('click', handleMessageAction);
    }
}

/**
 * Xử lý chuyển tab
 */
function handleTabClick(event) {
    const tabId = event.target.dataset.tab;
    if (!tabId) return;

    // Phân tích yêu cầu theo DFD
    const request = requestAnalyzer.analyzeRequest('VIEW_ZODIAC', { tabId });
    console.log('📋 Request analyzed:', request);

    displayManager.updateTabContent(tabId);

    // Load data khi chuyển tab
    if (tabId === 'messages') {
        loadMessages();
    }
}

/**
 * Xử lý chọn màu may mắn
 * DFD Flow: Người dùng → Yêu cầu → Phân tích → Xác định cung → Hiển thị
 */
function handleLuckyColorSelect(event) {
    const zodiacId = event.target.value;
    
    if (!zodiacId) {
        displayManager.clearContainer('lucky-color-result');
        return;
    }

    // 1.0 Phân tích yêu cầu
    const request = requestAnalyzer.analyzeRequest('VIEW_LUCKY_COLOR', { zodiacId });
    console.log('📋 Request analyzed:', request);

    // 2.0 Xác định cung và lấy màu may mắn
    const luckyColorData = getDailyLuckyColor(zodiacId);

    // 4.0 Hiển thị kết quả
    displayManager.displayLuckyColor(luckyColorData);
}

/**
 * Xử lý thêm thông điệp
 * DFD Flow Image 1: Yêu cầu → Phân tích → Thực thi → Hiển thị
 */
function handleAddMessage() {
    const zodiacSelect = document.getElementById('message-zodiac-select');
    const messageInput = document.getElementById('message-input');

    const zodiacId = zodiacSelect.value;
    const messageText = messageInput.value;

    // 1.0 Phân tích yêu cầu
    const request = requestAnalyzer.analyzeRequest('ADD_MESSAGE', {
        zodiacId,
        message: messageText
    });
    console.log('📋 Request analyzed:', request);

    // 3.0 Thực thi chức năng thêm thông điệp
    const result = messageHandler.addMessage(zodiacId, messageText);

    if (result.success) {
        // Hiển thị thông báo thành công
        notifications.showSuccess(result.message);
        
        // Clear form
        messageInput.value = '';
        
        // Reload messages
        loadMessages();
    } else {
        // Hiển thị thông báo lỗi
        notifications.showError(result.error);
    }
}

/**
 * Xóa form thông điệp
 */
function handleClearMessageForm() {
    document.getElementById('message-input').value = '';
    document.getElementById('message-zodiac-select').value = '';
}

/**
 * Load và hiển thị thông điệp
 */
function loadMessages() {
    // 3.0 Lấy thông điệp từ kho
    const result = messageHandler.getMessages();
    
    // 4.0 Hiển thị thông điệp
    displayManager.displayMessages(result.data);
}

/**
 * Xử lý các hành động trên message (Edit/Delete)
 */
function handleMessageAction(event) {
    const target = event.target;

    // Delete message
    if (target.classList.contains('btn-delete-msg')) {
        const messageId = target.dataset.id;
        if (confirm('Bạn có chắc muốn xóa thông điệp này?')) {
            const result = messageHandler.deleteMessage(messageId);
            if (result.success) {
                notifications.showSuccess(result.message);
                loadMessages();
            } else {
                notifications.showError(result.error);
            }
        }
    }

    // Edit message - show form
    if (target.classList.contains('btn-edit-msg')) {
        const messageId = target.dataset.id;
        const messageItem = target.closest('.message-item');
        const editForm = messageItem.querySelector('.message-edit-form');
        const content = messageItem.querySelector('.message-content');
        
        editForm.style.display = 'block';
        content.style.display = 'none';
    }

    // Save edited message
    if (target.classList.contains('btn-save-edit')) {
        const messageId = target.dataset.id;
        const messageItem = target.closest('.message-item');
        const textarea = messageItem.querySelector('.edit-textarea');
        const newMessage = textarea.value;

        const result = messageHandler.editMessage(messageId, newMessage);
        if (result.success) {
            notifications.showSuccess(result.message);
            loadMessages();
        } else {
            notifications.showError(result.error);
        }
    }

    // Cancel edit
    if (target.classList.contains('btn-cancel-edit')) {
        const messageItem = target.closest('.message-item');
        const editForm = messageItem.querySelector('.message-edit-form');
        const content = messageItem.querySelector('.message-content');
        
        editForm.style.display = 'none';
        content.style.display = 'block';
    }
}

/**
 * Xử lý lưu thông tin người dùng
 * DFD Flow Image 4: Nhập thông tin → Kiểm tra → [Thành công/Thất bại]
 */
function handleSavePerson(personNumber) {
    const prefix = `person${personNumber}`;
    
    const name = document.getElementById(`${prefix}-name`).value;
    const day = document.getElementById(`${prefix}-day`).value;
    const month = document.getElementById(`${prefix}-month`).value;
    const year = document.getElementById(`${prefix}-year`).value;

    // Kiểm tra định dạng ngày tháng
    const validation = dateValidator.validateDate(day, month, year);

    if (!validation.valid) {
        // [Thất bại] → Thông báo nhập lại
        notifications.showValidationError(validation.error);
        return;
    }

    // Kiểm tra tên
    if (!name || name.trim() === '') {
        notifications.showError('Vui lòng nhập họ tên');
        return;
    }

    // 2.0 Xác định cung hoàng đạo
    const zodiacResult = zodiacIdentifier.identifyZodiac(day, month);

    if (!zodiacResult.success) {
        notifications.showError('Không thể xác định cung hoàng đạo');
        return;
    }

    // Lưu vào Dữ liệu người dùng 1.0
    const personData = {
        name: name.trim(),
        birthDate: validation.date,
        zodiac: zodiacResult.zodiac
    };

    if (personNumber === 1) {
        userStore.savePerson1(name.trim(), validation.date, zodiacResult.zodiac);
    } else {
        userStore.savePerson2(name.trim(), validation.date, zodiacResult.zodiac);
    }

    // [Thành công] → Hiển thị thông báo nhập thành công
    notifications.showInputSuccess(
        `Đã lưu thông tin ${name} - ${zodiacResult.zodiac.nameVi} ${zodiacResult.zodiac.symbol}`
    );
}

/**
 * Load thông tin người dùng đã lưu
 */
function loadSavedPersons() {
    const person1 = userStore.getPerson1();
    const person2 = userStore.getPerson2();

    if (person1) {
        document.getElementById('person1-name').value = person1.name;
        document.getElementById('person1-day').value = person1.birthDate.day;
        document.getElementById('person1-month').value = person1.birthDate.month;
        document.getElementById('person1-year').value = person1.birthDate.year || person1.birthDate.dateObject?.getFullYear() || '';
    }

    if (person2) {
        document.getElementById('person2-name').value = person2.name;
        document.getElementById('person2-day').value = person2.birthDate.day;
        document.getElementById('person2-month').value = person2.birthDate.month;
        document.getElementById('person2-year').value = person2.birthDate.year || person2.birthDate.dateObject?.getFullYear() || '';
    }
}

/**
 * Xử lý kiểm tra tương hợp
 * DFD Flow Image 2: Kiểm tra → [Không có ngày 1] / [Đã có ngày 1] → So sánh
 */
function handleCheckCompatibility() {
    // 1.0 Phân tích yêu cầu
    const request = requestAnalyzer.analyzeRequest('CHECK_COMPATIBILITY', {});
    console.log('📋 Request analyzed:', request);

    // Lấy thông tin người dùng
    const person1 = userStore.getPerson1();
    const person2 = userStore.getPerson2();

    // Kiểm tra → [Không có ngày 1]
    if (!person1 || !userStore.hasPerson1()) {
        // Báo lỗi: Hiển thị nhập ngày 1
        notifications.showError('Vui lòng nhập thông tin Người thứ nhất trước!');
        return;
    }

    // [Đã có ngày 1] → Kiểm tra người 2
    if (!person2 || !userStore.hasPerson2()) {
        notifications.showError('Vui lòng nhập thông tin Người thứ hai!');
        return;
    }

    // Thực hiện so sánh tương hợp
    const result = compatibilityChecker.checkCompatibility(person1, person2);

    if (result.success) {
        // Hiển thị kết quả
        displayManager.displayCompatibility(result);
        notifications.showSuccess('Đã tính toán độ tương hợp!');
    } else {
        notifications.showError(result.error);
    }
}

// Khởi động ứng dụng khi DOM đã load
document.addEventListener('DOMContentLoaded', initApp);
