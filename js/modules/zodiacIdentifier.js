/**
 * 2.0 Xác định cung và ngày sinh - Zodiac Identifier
 * Chức năng: Xác định cung hoàng đạo từ ngày tháng sinh
 * Theo sơ đồ DFD: Thực thi và xác định cung ← Kho CHĐ ← Dữ liệu người dùng
 */

import { zodiacData, getZodiacById } from '../data/zodiacData.js';

/**
 * Xác định cung hoàng đạo từ ngày và tháng sinh
 * Input: ngày, tháng
 * Output: { zodiacSign, symbol, description, luckyColor }
 */
export function identifyZodiac(day, month) {
    // Chuyển đổi sang số nếu cần
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    // Duyệt qua tất cả các cung hoàng đạo
    for (const zodiac of zodiacData) {
        if (isDateInZodiacRange(dayNum, monthNum, zodiac)) {
            return {
                success: true,
                zodiac: {
                    id: zodiac.id,
                    nameVi: zodiac.nameVi,
                    nameEn: zodiac.nameEn,
                    symbol: zodiac.symbol,
                    dateRange: zodiac.dateRange,
                    description: zodiac.description,
                    luckyColors: zodiac.luckyColors,
                    element: zodiac.element,
                    rulingPlanet: zodiac.rulingPlanet
                },
                birthDate: {
                    day: dayNum,
                    month: monthNum
                }
            };
        }
    }

    // Không tìm thấy cung hoàng đạo phù hợp
    return {
        success: false,
        error: 'Không thể xác định cung hoàng đạo'
    };
}

/**
 * Kiểm tra ngày có nằm trong khoảng của cung hoàng đạo không
 */
function isDateInZodiacRange(day, month, zodiac) {
    // Xử lý trường hợp cung nằm trong cùng một tháng
    if (zodiac.startMonth === zodiac.endMonth) {
        return month === zodiac.startMonth && 
               day >= zodiac.startDay && 
               day <= zodiac.endDay;
    }
    
    // Xử lý trường hợp cung bắt đầu từ tháng này và kết thúc ở tháng sau
    if (zodiac.startMonth < zodiac.endMonth) {
        // Nếu trong tháng bắt đầu
        if (month === zodiac.startMonth && day >= zodiac.startDay) {
            return true;
        }
        // Nếu trong tháng kết thúc
        if (month === zodiac.endMonth && day <= zodiac.endDay) {
            return true;
        }
        // Nếu trong các tháng ở giữa
        if (month > zodiac.startMonth && month < zodiac.endMonth) {
            return true;
        }
    }
    
    // Xử lý trường hợp đặc biệt: Ma Kết (tháng 12 sang tháng 1)
    if (zodiac.startMonth > zodiac.endMonth) {
        // Nếu trong tháng bắt đầu (tháng 12)
        if (month === zodiac.startMonth && day >= zodiac.startDay) {
            return true;
        }
        // Nếu trong tháng kết thúc (tháng 1)
        if (month === zodiac.endMonth && day <= zodiac.endDay) {
            return true;
        }
    }
    
    return false;
}

/**
 * Lấy thông tin chi tiết cung hoàng đạo theo ID
 */
export function getZodiacInfo(zodiacId) {
    const zodiac = getZodiacById(zodiacId);
    
    if (!zodiac) {
        return {
            success: false,
            error: 'Cung hoàng đạo không tồn tại'
        };
    }
    
    return {
        success: true,
        zodiac: zodiac
    };
}

/**
 * Xác định cung hoàng đạo và trả về thông tin đầy đủ
 * Kết hợp validate và identify
 */
export function identifyZodiacWithValidation(day, month) {
    // Kiểm tra đầu vào
    if (!day || !month) {
        return {
            success: false,
            error: 'Vui lòng nhập đầy đủ ngày và tháng sinh'
        };
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    // Kiểm tra hợp lệ
    if (isNaN(dayNum) || isNaN(monthNum)) {
        return {
            success: false,
            error: 'Ngày và tháng phải là số'
        };
    }

    if (monthNum < 1 || monthNum > 12) {
        return {
            success: false,
            error: 'Tháng phải từ 1 đến 12'
        };
    }

    if (dayNum < 1 || dayNum > 31) {
        return {
            success: false,
            error: 'Ngày phải từ 1 đến 31'
        };
    }

    // Xác định cung hoàng đạo
    return identifyZodiac(dayNum, monthNum);
}
