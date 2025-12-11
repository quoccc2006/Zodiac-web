/**
 * Kiểm tra định dạng ngày tháng - Date Validator
 * Chức năng: Validate ngày tháng năm sinh
 * Theo sơ đồ DFD: Nhập ngày tháng năm sinh → Kiểm tra định dạng → [Thành công/Thất bại]
 */

/**
 * Kiểm tra năm nhuận
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Lấy số ngày trong tháng
 */
function getDaysInMonth(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    
    return daysInMonth[month - 1];
}

/**
 * Kiểm tra tính hợp lệ của ngày tháng năm
 * Input: ngày, tháng, năm
 * Output: { valid: true/false, date: {...}, error: "..." }
 */
export function validateDate(day, month, year) {
    // Kiểm tra đầu vào có tồn tại
    if (day === undefined || day === null || day === '') {
        return {
            valid: false,
            error: 'Vui lòng nhập ngày sinh'
        };
    }

    if (month === undefined || month === null || month === '') {
        return {
            valid: false,
            error: 'Vui lòng nhập tháng sinh'
        };
    }

    if (year === undefined || year === null || year === '') {
        return {
            valid: false,
            error: 'Vui lòng nhập năm sinh'
        };
    }

    // Chuyển đổi sang số
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    // Kiểm tra kiểu dữ liệu
    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
        return {
            valid: false,
            error: 'Ngày tháng năm phải là số'
        };
    }

    // Kiểm tra phạm vi tháng
    if (monthNum < 1 || monthNum > 12) {
        return {
            valid: false,
            error: 'Tháng phải từ 1 đến 12'
        };
    }

    // Kiểm tra phạm vi năm
    if (yearNum < 1900 || yearNum > 2100) {
        return {
            valid: false,
            error: 'Năm phải từ 1900 đến 2100'
        };
    }

    // Kiểm tra phạm vi ngày
    const maxDay = getDaysInMonth(monthNum, yearNum);
    if (dayNum < 1 || dayNum > maxDay) {
        return {
            valid: false,
            error: `Ngày không hợp lệ. Tháng ${monthNum} có tối đa ${maxDay} ngày`
        };
    }

    // Kiểm tra ngày trong tương lai
    const inputDate = new Date(yearNum, monthNum - 1, dayNum);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (inputDate > today) {
        return {
            valid: false,
            error: 'Ngày sinh không thể ở tương lai'
        };
    }

    // Tất cả hợp lệ
    return {
        valid: true,
        date: {
            day: dayNum,
            month: monthNum,
            year: yearNum,
            dateString: `${dayNum}/${monthNum}/${yearNum}`,
            dateObject: inputDate
        },
        message: 'Ngày sinh hợp lệ'
    };
}

/**
 * Kiểm tra định dạng ngày tháng đơn giản (chỉ cần ngày và tháng)
 */
export function validateDayMonth(day, month) {
    // Kiểm tra đầu vào
    if (day === undefined || day === null || day === '') {
        return {
            valid: false,
            error: 'Vui lòng nhập ngày'
        };
    }

    if (month === undefined || month === null || month === '') {
        return {
            valid: false,
            error: 'Vui lòng nhập tháng'
        };
    }

    // Chuyển đổi sang số
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    // Kiểm tra kiểu dữ liệu
    if (isNaN(dayNum) || isNaN(monthNum)) {
        return {
            valid: false,
            error: 'Ngày và tháng phải là số'
        };
    }

    // Kiểm tra phạm vi tháng
    if (monthNum < 1 || monthNum > 12) {
        return {
            valid: false,
            error: 'Tháng phải từ 1 đến 12'
        };
    }

    // Kiểm tra phạm vi ngày (giả sử năm không nhuận)
    const maxDay = getDaysInMonth(monthNum, 2023);
    if (dayNum < 1 || dayNum > maxDay) {
        return {
            valid: false,
            error: `Ngày không hợp lệ. Tháng ${monthNum} có tối đa ${maxDay} ngày`
        };
    }

    return {
        valid: true,
        date: {
            day: dayNum,
            month: monthNum
        },
        message: 'Ngày và tháng hợp lệ'
    };
}

/**
 * Format ngày tháng để hiển thị
 */
export function formatDate(day, month, year) {
    if (year) {
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;
}
