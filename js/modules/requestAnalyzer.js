/**
 * 1.0 Phân tích yêu cầu - Request Analyzer
 * Chức năng: Nhận yêu cầu từ người dùng và điều hướng đến module phù hợp
 * Theo sơ đồ DFD: Người dùng → [yêu cầu] → Phân tích yêu cầu
 */

/**
 * Phân tích và xác định loại yêu cầu từ người dùng
 */
export function analyzeRequest(requestType, data) {
    const request = {
        type: requestType,
        data: data,
        timestamp: new Date().toISOString()
    };

    // Xác định loại yêu cầu và trả về kết quả phân tích
    switch (requestType) {
        case 'VIEW_ZODIAC':
            return {
                ...request,
                action: 'display_zodiac_list',
                description: 'Yêu cầu xem danh sách 12 cung hoàng đạo'
            };

        case 'VIEW_LUCKY_COLOR':
            return {
                ...request,
                action: 'display_lucky_color',
                description: 'Yêu cầu xem màu may mắn trong ngày'
            };

        case 'VIEW_MESSAGES':
            return {
                ...request,
                action: 'display_messages',
                description: 'Yêu cầu xem thông điệp'
            };

        case 'ADD_MESSAGE':
            return {
                ...request,
                action: 'add_message',
                description: 'Yêu cầu thêm thông điệp mới'
            };

        case 'EDIT_MESSAGE':
            return {
                ...request,
                action: 'edit_message',
                description: 'Yêu cầu sửa thông điệp'
            };

        case 'DELETE_MESSAGE':
            return {
                ...request,
                action: 'delete_message',
                description: 'Yêu cầu xóa thông điệp'
            };

        case 'CHECK_COMPATIBILITY':
            return {
                ...request,
                action: 'check_compatibility',
                description: 'Yêu cầu kiểm tra tương hợp 2 người'
            };

        case 'IDENTIFY_ZODIAC':
            return {
                ...request,
                action: 'identify_zodiac',
                description: 'Yêu cầu xác định cung hoàng đạo từ ngày sinh'
            };

        case 'SAVE_PERSON':
            return {
                ...request,
                action: 'save_person_data',
                description: 'Yêu cầu lưu thông tin người dùng'
            };

        default:
            return {
                ...request,
                action: 'unknown',
                description: 'Yêu cầu không xác định',
                error: true
            };
    }
}

/**
 * Kiểm tra tính hợp lệ của yêu cầu
 */
export function validateRequest(analyzedRequest) {
    if (!analyzedRequest || !analyzedRequest.type) {
        return {
            valid: false,
            error: 'Yêu cầu không hợp lệ'
        };
    }

    if (analyzedRequest.error) {
        return {
            valid: false,
            error: 'Loại yêu cầu không được hỗ trợ'
        };
    }

    return {
        valid: true,
        message: 'Yêu cầu hợp lệ'
    };
}

/**
 * Điều hướng yêu cầu đến handler phù hợp
 */
export function routeRequest(analyzedRequest) {
    const validation = validateRequest(analyzedRequest);
    
    if (!validation.valid) {
        return {
            success: false,
            error: validation.error
        };
    }

    return {
        success: true,
        action: analyzedRequest.action,
        data: analyzedRequest.data
    };
}
