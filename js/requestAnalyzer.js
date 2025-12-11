/**
 * Request Analyzer - Process 1.0 Phân tích yêu cầu
 * Theo DFD: Người dùng → gửi yêu cầu → Phân tích yêu cầu
 */

class RequestAnalyzer {
    /**
     * Phân tích yêu cầu từ người dùng
     * @param {string} requestType - Loại yêu cầu (input1, input2, viewZodiac, viewMessage, compare, etc.)
     * @param {Object} data - Dữ liệu đi kèm
     * @returns {Object} - {action: string, data: Object, nextStep: string}
     */
    static analyze(requestType, data = {}) {
        switch (requestType) {
            case 'input_user1':
                // DFD 1: Nhập ngày tháng năm sinh người dùng 1
                return {
                    action: 'validate_and_save_user1',
                    data: data,
                    nextStep: 'date_validation'
                };

            case 'input_user2':
                // DFD 3: Nhập ngày tháng năm sinh người dùng 2
                return {
                    action: 'check_user1_then_save_user2',
                    data: data,
                    nextStep: 'check_user1_exists'
                };

            case 'view_zodiac':
                // DFD 2: Xem cung hoàng đạo
                return {
                    action: 'identify_and_display_zodiac',
                    data: data,
                    nextStep: 'zodiac_identification'
                };

            case 'view_message':
                // DFD 4: Xem thông điệp cung hoàng đạo
                return {
                    action: 'validate_and_display_message',
                    data: data,
                    nextStep: 'validate_birth_date'
                };

            case 'manage_messages':
                // Module 5: Quản lý thông điệp (CRUD)
                return {
                    action: 'crud_messages',
                    data: data,
                    nextStep: 'message_management'
                };

            case 'compare_compatibility':
                // Module 6: So sánh tương hợp
                return {
                    action: 'calculate_compatibility',
                    data: data,
                    nextStep: 'read_user_data'
                };

            case 'view_lucky_colors':
                // Module 7: Màu sắc may mắn
                return {
                    action: 'display_lucky_colors',
                    data: data,
                    nextStep: 'zodiac_identification'
                };

            default:
                return {
                    action: 'unknown',
                    data: {},
                    nextStep: 'error',
                    error: 'Yêu cầu không hợp lệ'
                };
        }
    }

    /**
     * Kiểm tra điều kiện trước khi thực hiện action
     * @param {string} action - Action cần thực hiện
     * @returns {Object} - {allowed: boolean, message: string}
     */
    static checkPreconditions(action) {
        switch (action) {
            case 'check_user1_then_save_user2':
                // Kiểm tra xem đã có dữ liệu người dùng 1 chưa
                const user1Data = DataStore.getUserData1();
                if (!user1Data) {
                    return {
                        allowed: false,
                        message: 'Vui lòng nhập thông tin người dùng 1 trước'
                    };
                }
                return {
                    allowed: true,
                    message: 'Điều kiện đã thỏa mãn'
                };

            case 'calculate_compatibility':
                // Kiểm tra đã có dữ liệu cả 2 người dùng
                const user1 = DataStore.getUserData1();
                const user2 = DataStore.getUserData2();
                if (!user1 || !user2) {
                    return {
                        allowed: false,
                        message: 'Vui lòng nhập đầy đủ thông tin 2 người dùng'
                    };
                }
                return {
                    allowed: true,
                    message: 'Điều kiện đã thỏa mãn'
                };

            default:
                return {
                    allowed: true,
                    message: 'Không có điều kiện tiên quyết'
                };
        }
    }

    /**
     * Route request đến module xử lý tương ứng
     * @param {string} requestType - Loại yêu cầu
     * @param {Object} data - Dữ liệu
     * @returns {Object} - Kết quả phân tích
     */
    static route(requestType, data = {}) {
        const analysis = this.analyze(requestType, data);
        const preconditions = this.checkPreconditions(analysis.action);

        if (!preconditions.allowed) {
            return {
                success: false,
                error: preconditions.message,
                analysis: analysis
            };
        }

        return {
            success: true,
            analysis: analysis
        };
    }
}
