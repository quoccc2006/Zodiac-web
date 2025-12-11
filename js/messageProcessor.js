/**
 * Message Processor - Process 3.0 Thực thi chức năng xem thông điệp
 * Theo DFD 4: Xử lý dữ liệu và trả về thông điệp
 */

class MessageProcessor {
    /**
     * Xử lý yêu cầu xem thông điệp
     * @param {Object} birthDate - {day, month, year}
     * @returns {Object} - {success: boolean, zodiac: Object, messages: Array, error: string}
     */
    static processViewMessage(birthDate) {
        // 2.0 Xác định cung và ngày sinh
        const validation = DateValidator.validateBirthDate(birthDate);
        
        // Kiểm tra ngày sinh hợp lệ
        if (!validation.valid) {
            return {
                success: false,
                error: 'Ngày sinh không hợp lệ'
            };
        }

        // Xác định cung
        const zodiac = ZodiacIdentifier.identify(birthDate.day, birthDate.month);
        
        if (!zodiac) {
            return {
                success: false,
                error: 'Không thể xác định cung hoàng đạo'
            };
        }

        // 3.0 Truy cập Kho thông điệp
        const messages = DataStore.getMessagesByZodiac(zodiac.key);

        return {
            success: true,
            zodiac: zodiac,
            messages: messages
        };
    }

    /**
     * Xử lý thêm thông điệp mới
     * @param {string} zodiacKey - Key của cung
     * @param {string} messageContent - Nội dung thông điệp
     * @returns {Object} - {success: boolean, message: string}
     */
    static processAddMessage(zodiacKey, messageContent) {
        if (!messageContent || messageContent.trim() === '') {
            return {
                success: false,
                message: 'Nội dung thông điệp không được rỗng'
            };
        }

        if (!DataStore.zodiacData[zodiacKey]) {
            return {
                success: false,
                message: 'Cung hoàng đạo không hợp lệ'
            };
        }

        const saved = DataStore.saveMessage(zodiacKey, messageContent.trim());

        if (saved) {
            return {
                success: true,
                message: 'Đã thêm thông điệp thành công'
            };
        }

        return {
            success: false,
            message: 'Lỗi khi lưu thông điệp'
        };
    }

    /**
     * Xử lý cập nhật thông điệp
     * @param {string} zodiacKey - Key của cung
     * @param {number} messageId - ID của thông điệp
     * @param {string} newContent - Nội dung mới
     * @returns {Object} - {success: boolean, message: string}
     */
    static processUpdateMessage(zodiacKey, messageId, newContent) {
        if (!newContent || newContent.trim() === '') {
            return {
                success: false,
                message: 'Nội dung thông điệp không được rỗng'
            };
        }

        const updated = DataStore.updateMessage(zodiacKey, messageId, newContent.trim());

        if (updated) {
            return {
                success: true,
                message: 'Đã cập nhật thông điệp thành công'
            };
        }

        return {
            success: false,
            message: 'Không thể cập nhật thông điệp'
        };
    }

    /**
     * Xử lý xóa thông điệp
     * @param {string} zodiacKey - Key của cung
     * @param {number} messageId - ID của thông điệp
     * @returns {Object} - {success: boolean, message: string}
     */
    static processDeleteMessage(zodiacKey, messageId) {
        const deleted = DataStore.deleteMessage(zodiacKey, messageId);

        if (deleted) {
            return {
                success: true,
                message: 'Đã xóa thông điệp thành công'
            };
        }

        return {
            success: false,
            message: 'Không thể xóa thông điệp'
        };
    }

    /**
     * Lấy tất cả thông điệp của một cung
     * @param {string} zodiacKey - Key của cung
     * @returns {Array} - Mảng thông điệp
     */
    static getMessagesForZodiac(zodiacKey) {
        return DataStore.getMessagesByZodiac(zodiacKey);
    }

    /**
     * Lấy tất cả thông điệp của tất cả các cung
     * @returns {Object} - Object chứa thông điệp của tất cả các cung
     */
    static getAllMessages() {
        return DataStore.getMessages();
    }

    /**
     * Tính số lượng thông điệp của mỗi cung
     * @returns {Object} - {zodiacKey: count, ...}
     */
    static getMessageCounts() {
        const messages = DataStore.getMessages();
        const counts = {};

        for (const [key] of Object.entries(DataStore.zodiacData)) {
            counts[key] = messages[key] ? messages[key].length : 0;
        }

        return counts;
    }

    /**
     * Lấy thông điệp ngẫu nhiên cho một cung
     * @param {string} zodiacKey - Key của cung
     * @returns {Object} - Thông điệp ngẫu nhiên hoặc null
     */
    static getRandomMessage(zodiacKey) {
        const messages = DataStore.getMessagesByZodiac(zodiacKey);
        
        if (messages.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }
}
