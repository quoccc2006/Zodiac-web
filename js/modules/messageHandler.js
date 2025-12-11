/**
 * 3.0 Thực thi chức năng xem thông điệp - Message Handler
 * Chức năng CRUD thông điệp
 * Theo sơ đồ DFD: Thực thi chức năng xem thông điệp ← Kho thông điệp ← Database
 */

import * as messageStore from '../data/messageStore.js';

/**
 * Thêm thông điệp mới
 * Input: zodiacSign (ID cung hoàng đạo), message (nội dung)
 * Output: { success, message, data }
 */
export function addMessage(zodiacSign, message) {
    // Validate đầu vào
    if (!zodiacSign || zodiacSign.trim() === '') {
        return {
            success: false,
            error: 'Vui lòng chọn cung hoàng đạo'
        };
    }

    if (!message || message.trim() === '') {
        return {
            success: false,
            error: 'Vui lòng nhập nội dung thông điệp'
        };
    }

    try {
        const newMessage = messageStore.addMessage(zodiacSign, message.trim());
        return {
            success: true,
            message: 'Đã thêm thông điệp thành công',
            data: newMessage
        };
    } catch (error) {
        return {
            success: false,
            error: 'Lỗi khi thêm thông điệp: ' + error.message
        };
    }
}

/**
 * Sửa thông điệp
 * Input: id (ID thông điệp), newMessage (nội dung mới)
 * Output: { success, message, data }
 */
export function editMessage(id, newMessage) {
    // Validate đầu vào
    if (!id) {
        return {
            success: false,
            error: 'ID thông điệp không hợp lệ'
        };
    }

    if (!newMessage || newMessage.trim() === '') {
        return {
            success: false,
            error: 'Vui lòng nhập nội dung thông điệp'
        };
    }

    try {
        const updatedMessage = messageStore.editMessage(id, newMessage.trim());
        if (updatedMessage) {
            return {
                success: true,
                message: 'Đã cập nhật thông điệp thành công',
                data: updatedMessage
            };
        } else {
            return {
                success: false,
                error: 'Không tìm thấy thông điệp'
            };
        }
    } catch (error) {
        return {
            success: false,
            error: 'Lỗi khi cập nhật thông điệp: ' + error.message
        };
    }
}

/**
 * Xóa thông điệp
 * Input: id (ID thông điệp)
 * Output: { success, message }
 */
export function deleteMessage(id) {
    if (!id) {
        return {
            success: false,
            error: 'ID thông điệp không hợp lệ'
        };
    }

    try {
        messageStore.deleteMessage(id);
        return {
            success: true,
            message: 'Đã xóa thông điệp thành công'
        };
    } catch (error) {
        return {
            success: false,
            error: 'Lỗi khi xóa thông điệp: ' + error.message
        };
    }
}

/**
 * Lấy thông điệp theo cung hoàng đạo
 * Input: zodiacSign (ID cung hoàng đạo, optional)
 * Output: { success, data }
 */
export function getMessages(zodiacSign = null) {
    try {
        const messages = messageStore.getMessages(zodiacSign);
        return {
            success: true,
            data: messages,
            count: messages.length
        };
    } catch (error) {
        return {
            success: false,
            error: 'Lỗi khi lấy thông điệp: ' + error.message,
            data: []
        };
    }
}

/**
 * Lấy thông điệp theo ID
 * Input: id (ID thông điệp)
 * Output: { success, data }
 */
export function getMessageById(id) {
    if (!id) {
        return {
            success: false,
            error: 'ID thông điệp không hợp lệ'
        };
    }

    try {
        const message = messageStore.getMessageById(id);
        if (message) {
            return {
                success: true,
                data: message
            };
        } else {
            return {
                success: false,
                error: 'Không tìm thấy thông điệp'
            };
        }
    } catch (error) {
        return {
            success: false,
            error: 'Lỗi khi lấy thông điệp: ' + error.message
        };
    }
}

/**
 * Xử lý yêu cầu xem thông điệp
 * Theo sơ đồ DFD Image 1
 */
export function handleViewMessageRequest(zodiacSign) {
    // 3.0 Thực thi chức năng xem thông điệp
    const result = getMessages(zodiacSign);
    
    if (!result.success) {
        return {
            success: false,
            error: result.error
        };
    }

    // Xử lý dữ liệu và trả về thông điệp
    return {
        success: true,
        messages: result.data,
        zodiacSign: zodiacSign,
        totalMessages: result.count
    };
}
