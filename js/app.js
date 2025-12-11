/**
 * Main Application - Ứng dụng Cung Hoàng Đạo
 * Quản lý các module theo DFD
 */

const app = {
    currentView: 'home',

    /**
     * Khởi tạo ứng dụng
     */
    init() {
        this.setupEventListeners();
        this.showView('home');
        this.updateUserInfo();
    },

    /**
     * Thiết lập các event listeners
     */
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('[data-view]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const view = btn.getAttribute('data-view');
                this.showView(view);
            });
        });
    },

    /**
     * Hiển thị view
     * @param {string} viewName - Tên view
     */
    showView(viewName) {
        // Ẩn tất cả các view
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Hiển thị view được chọn
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
        }

        // Active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNav = document.querySelector(`[data-view="${viewName}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }

        // Load data cho view
        this.loadViewData(viewName);
    },

    /**
     * Load dữ liệu cho view
     * @param {string} viewName - Tên view
     */
    loadViewData(viewName) {
        switch (viewName) {
            case 'zodiac':
                this.loadZodiacView();
                break;
            case 'compatibility':
                this.loadCompatibilityView();
                break;
            case 'messages':
                this.loadMessagesView();
                break;
            case 'manage':
                this.loadManageView();
                break;
            case 'lucky':
                this.loadLuckyColorsView();
                break;
        }
    },

    /**
     * Module 1: Nhập thông tin người dùng 1
     */
    submitUser1() {
        // Phân tích yêu cầu (Process 1.0)
        const name = document.getElementById('user1-name').value;
        const day = document.getElementById('user1-day').value;
        const month = document.getElementById('user1-month').value;
        const year = document.getElementById('user1-year').value;

        // Validate
        if (!name.trim()) {
            DisplayManager.showNotification('Vui lòng nhập họ tên', 'error', 'user1-notification');
            return;
        }

        // Kiểm tra định dạng ngày tháng
        const validation = DateValidator.validateFormInput(day, month, year);

        if (!validation.valid) {
            // Thất bại → Thông báo nhập lại
            DisplayManager.showNotification(validation.message, 'error', 'user1-notification');
            return;
        }

        // Thành công → Lưu vào Dữ liệu người dùng 1.0
        const userData = {
            name: name.trim(),
            day: validation.data.day,
            month: validation.data.month,
            year: validation.data.year
        };

        const saved = DataStore.saveUserData1(userData);

        if (saved) {
            // Hiển thị thông báo nhập thành công
            DisplayManager.showNotification('Đã lưu thông tin thành công!', 'success', 'user1-notification');
            this.updateUserInfo();
            
            // Reset form
            document.getElementById('user1-form').reset();
        } else {
            DisplayManager.showNotification('Lỗi khi lưu dữ liệu', 'error', 'user1-notification');
        }
    },

    /**
     * Module 2: Xác định cung hoàng đạo
     */
    loadZodiacView() {
        const result = ZodiacIdentifier.identifyUser1Zodiac();

        if (!result) {
            DisplayManager.showNotification('Vui lòng nhập thông tin người dùng 1 trước', 'warning', 'zodiac-result');
            return;
        }

        // Hiển thị kết quả
        DisplayManager.displayZodiacResult(result.zodiac, result.user, 'zodiac-result');
    },

    /**
     * Module 3: Nhập thông tin người dùng 2
     */
    submitUser2() {
        // Phân tích yêu cầu (Process 1.0)
        const routeResult = RequestAnalyzer.route('input_user2', {});

        // Kiểm tra xem đã có ngày 1 chưa
        if (!routeResult.success) {
            DisplayManager.showNotification(routeResult.error, 'error', 'user2-notification');
            return;
        }

        const name = document.getElementById('user2-name').value;
        const day = document.getElementById('user2-day').value;
        const month = document.getElementById('user2-month').value;
        const year = document.getElementById('user2-year').value;

        // Validate
        if (!name.trim()) {
            DisplayManager.showNotification('Vui lòng nhập họ tên', 'error', 'user2-notification');
            return;
        }

        // Kiểm tra định dạng ngày tháng
        const validation = DateValidator.validateFormInput(day, month, year);

        if (!validation.valid) {
            DisplayManager.showNotification(validation.message, 'error', 'user2-notification');
            return;
        }

        // Lưu vào Kho người dùng 1.2
        const userData = {
            name: name.trim(),
            day: validation.data.day,
            month: validation.data.month,
            year: validation.data.year
        };

        const saved = DataStore.saveUserData2(userData);

        if (saved) {
            // Thông báo nhập thành công
            DisplayManager.showNotification('Đã lưu thông tin người dùng 2 thành công!', 'success', 'user2-notification');
            this.updateUserInfo();
            
            // Reset form
            document.getElementById('user2-form').reset();
        } else {
            DisplayManager.showNotification('Lỗi khi lưu dữ liệu', 'error', 'user2-notification');
        }
    },

    /**
     * Module 4: Xem thông điệp
     */
    loadMessagesView() {
        // Tạo dropdown chọn cung
        this.renderZodiacSelector('message-zodiac-selector');
    },

    viewMessagesByZodiac() {
        const day = document.getElementById('message-day').value;
        const month = document.getElementById('message-month').value;

        // Validate ngày sinh
        const birthDate = { 
            day: parseInt(day, 10), 
            month: parseInt(month, 10) 
        };

        // Process 3.0: Xử lý xem thông điệp
        const result = MessageProcessor.processViewMessage(birthDate);

        if (!result.success) {
            // Ngày sinh không hợp lệ
            DisplayManager.showNotification(result.error, 'error', 'message-result');
            return;
        }

        // 4.0 Hiển thị thông điệp
        DisplayManager.displayMessages(result.zodiac, result.messages, 'message-result');
    },

    /**
     * Module 5: Quản lý thông điệp (CRUD)
     */
    loadManageView() {
        this.renderZodiacSelector('manage-zodiac-selector');
    },

    viewManageMessages() {
        const zodiacKey = document.getElementById('manage-zodiac-select').value;
        
        if (!zodiacKey) {
            DisplayManager.showNotification('Vui lòng chọn cung hoàng đạo', 'warning', 'manage-result');
            return;
        }

        const messages = MessageProcessor.getMessagesForZodiac(zodiacKey);
        DisplayManager.displayMessageManagement(zodiacKey, messages, 'manage-result');
    },

    addMessage(zodiacKey) {
        const content = document.getElementById('new-message-content').value;
        
        const result = MessageProcessor.processAddMessage(zodiacKey, content);
        
        if (result.success) {
            DisplayManager.showNotification(result.message, 'success');
            this.viewManageMessages();
        } else {
            DisplayManager.showNotification(result.message, 'error');
        }
    },

    editMessage(zodiacKey, messageId) {
        const messageItem = document.querySelector(`[data-id="${messageId}"]`);
        const currentContent = messageItem.querySelector('.message-content').textContent;
        
        const newContent = prompt('Nhập nội dung mới:', currentContent);
        
        if (newContent !== null && newContent.trim() !== '') {
            const result = MessageProcessor.processUpdateMessage(zodiacKey, messageId, newContent);
            
            if (result.success) {
                DisplayManager.showNotification(result.message, 'success');
                this.viewManageMessages();
            } else {
                DisplayManager.showNotification(result.message, 'error');
            }
        }
    },

    deleteMessage(zodiacKey, messageId) {
        if (confirm('Bạn có chắc chắn muốn xóa thông điệp này?')) {
            const result = MessageProcessor.processDeleteMessage(zodiacKey, messageId);
            
            if (result.success) {
                DisplayManager.showNotification(result.message, 'success');
                this.viewManageMessages();
            } else {
                DisplayManager.showNotification(result.message, 'error');
            }
        }
    },

    /**
     * Module 6: So sánh tương hợp
     */
    loadCompatibilityView() {
        const routeResult = RequestAnalyzer.route('compare_compatibility', {});

        if (!routeResult.success) {
            DisplayManager.showNotification(routeResult.error, 'warning', 'compatibility-result');
            return;
        }

        // Lấy thông tin cả 2 người
        const bothUsers = ZodiacIdentifier.identifyBothUsersZodiac();

        if (!bothUsers) {
            DisplayManager.showNotification('Không thể xác định cung hoàng đạo', 'error', 'compatibility-result');
            return;
        }

        // Tính toán độ tương hợp
        const compatibility = DataStore.compatibilityData[bothUsers.user1.zodiac.key][bothUsers.user2.zodiac.key];

        // Hiển thị kết quả
        DisplayManager.displayCompatibility(bothUsers.user1, bothUsers.user2, compatibility, 'compatibility-result');
    },

    /**
     * Module 7: Màu sắc may mắn
     */
    loadLuckyColorsView() {
        this.renderZodiacSelector('lucky-zodiac-selector');
    },

    viewLuckyColors() {
        const day = document.getElementById('lucky-day').value;
        const month = document.getElementById('lucky-month').value;

        const validation = DateValidator.validateFormInput(day, month);

        if (!validation.valid) {
            DisplayManager.showNotification(validation.message, 'error', 'lucky-result');
            return;
        }

        const zodiac = ZodiacIdentifier.identify(validation.data.day, validation.data.month);

        if (!zodiac) {
            DisplayManager.showNotification('Không thể xác định cung hoàng đạo', 'error', 'lucky-result');
            return;
        }

        DisplayManager.displayLuckyColors(zodiac, 'lucky-result');
    },

    /**
     * Render dropdown chọn cung
     * @param {string} containerId - ID của container
     */
    renderZodiacSelector(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const zodiacs = ZodiacIdentifier.getAllZodiacs();
        
        let html = '<select id="manage-zodiac-select" class="form-select">';
        html += '<option value="">-- Chọn cung hoàng đạo --</option>';
        
        zodiacs.forEach(zodiac => {
            html += `<option value="${zodiac.key}">${zodiac.symbol} ${zodiac.name}</option>`;
        });
        
        html += '</select>';
        html += '<button onclick="app.viewManageMessages()" class="btn-primary">Xem</button>';
        
        container.innerHTML = html;
    },

    /**
     * Cập nhật thông tin người dùng trên header
     */
    updateUserInfo() {
        const user1 = DataStore.getUserData1();
        const user2 = DataStore.getUserData2();

        const user1Info = document.getElementById('user1-info');
        const user2Info = document.getElementById('user2-info');

        if (user1Info) {
            if (user1) {
                const zodiac = ZodiacIdentifier.identify(user1.day, user1.month);
                user1Info.innerHTML = `${zodiac ? zodiac.symbol : ''} ${user1.name} (${user1.day}/${user1.month})`;
            } else {
                user1Info.innerHTML = 'Chưa nhập';
            }
        }

        if (user2Info) {
            if (user2) {
                const zodiac = ZodiacIdentifier.identify(user2.day, user2.month);
                user2Info.innerHTML = `${zodiac ? zodiac.symbol : ''} ${user2.name} (${user2.day}/${user2.month})`;
            } else {
                user2Info.innerHTML = 'Chưa nhập';
            }
        }
    },

    /**
     * Xóa tất cả dữ liệu
     */
    clearAllData() {
        if (confirm('Bạn có chắc chắn muốn xóa tất cả dữ liệu?')) {
            DataStore.clearAll();
            DisplayManager.showNotification('Đã xóa tất cả dữ liệu', 'success');
            this.updateUserInfo();
            this.showView('home');
        }
    }
};

// Khởi động ứng dụng khi DOM đã load
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
