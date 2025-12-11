/**
 * Date Validator - Kiểm tra định dạng ngày tháng
 * Theo DFD: Kiểm tra định dạng ngày tháng
 * - Thành công → Hiển thị thông báo nhập thành công
 * - Thất bại → Thông báo nhập lại
 */

class DateValidator {
    /**
     * Kiểm tra tính hợp lệ của ngày tháng
     * @param {number} day - Ngày (1-31)
     * @param {number} month - Tháng (1-12)
     * @param {number} year - Năm (optional)
     * @returns {Object} - {valid: boolean, message: string}
     */
    static validate(day, month, year = null) {
        // Kiểm tra kiểu dữ liệu
        if (typeof day !== 'number' || typeof month !== 'number') {
            return {
                valid: false,
                message: 'Ngày và tháng phải là số'
            };
        }

        // Kiểm tra tháng hợp lệ (1-12)
        if (month < 1 || month > 12) {
            return {
                valid: false,
                message: 'Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.'
            };
        }

        // Kiểm tra ngày hợp lệ (1-31)
        if (day < 1 || day > 31) {
            return {
                valid: false,
                message: 'Ngày không hợp lệ. Vui lòng nhập ngày từ 1 đến 31.'
            };
        }

        // Kiểm tra số ngày trong tháng
        const daysInMonth = this.getDaysInMonth(month, year);
        if (day > daysInMonth) {
            return {
                valid: false,
                message: `Tháng ${month} chỉ có ${daysInMonth} ngày.`
            };
        }

        // Nếu có năm, kiểm tra năm hợp lệ
        if (year !== null) {
            if (typeof year !== 'number' || year < 1900 || year > 2100) {
                return {
                    valid: false,
                    message: 'Năm không hợp lệ. Vui lòng nhập năm từ 1900 đến 2100.'
                };
            }
        }

        return {
            valid: true,
            message: 'Ngày tháng hợp lệ'
        };
    }

    /**
     * Lấy số ngày trong tháng
     * @param {number} month - Tháng (1-12)
     * @param {number} year - Năm (để tính năm nhuận)
     * @returns {number} - Số ngày trong tháng
     */
    static getDaysInMonth(month, year = 2024) {
        const daysMap = {
            1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
            7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
        };

        // Kiểm tra năm nhuận cho tháng 2
        if (month === 2 && this.isLeapYear(year)) {
            return 29;
        }

        return daysMap[month];
    }

    /**
     * Kiểm tra năm nhuận
     * @param {number} year - Năm
     * @returns {boolean} - true nếu là năm nhuận
     */
    static isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    /**
     * Validate form input và hiển thị lỗi
     * @param {string} dayValue - Giá trị ngày từ input
     * @param {string} monthValue - Giá trị tháng từ input
     * @param {string} yearValue - Giá trị năm từ input (optional)
     * @returns {Object} - {valid: boolean, data: {day, month, year}, message: string}
     */
    static validateFormInput(dayValue, monthValue, yearValue = null) {
        // Kiểm tra rỗng
        if (!dayValue || !monthValue) {
            return {
                valid: false,
                message: 'Vui lòng nhập đầy đủ ngày và tháng.'
            };
        }

        // Chuyển đổi sang số
        const day = parseInt(dayValue, 10);
        const month = parseInt(monthValue, 10);
        const year = yearValue ? parseInt(yearValue, 10) : null;

        // Kiểm tra chuyển đổi thành công
        if (isNaN(day) || isNaN(month)) {
            return {
                valid: false,
                message: 'Ngày và tháng phải là số hợp lệ.'
            };
        }

        if (yearValue && isNaN(year)) {
            return {
                valid: false,
                message: 'Năm phải là số hợp lệ.'
            };
        }

        // Validate
        const result = this.validate(day, month, year);

        if (result.valid) {
            return {
                valid: true,
                data: { day, month, year },
                message: result.message
            };
        }

        return result;
    }

    /**
     * Kiểm tra ngày sinh có hợp lệ không (theo DFD 4)
     * @param {Object} birthDate - {day, month, year}
     * @returns {Object} - {valid: boolean, message: string}
     */
    static validateBirthDate(birthDate) {
        if (!birthDate || !birthDate.day || !birthDate.month) {
            return {
                valid: false,
                message: 'Ngày sinh không hợp lệ'
            };
        }

        return this.validate(birthDate.day, birthDate.month, birthDate.year);
    }
}
