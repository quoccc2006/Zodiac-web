/**
 * So sánh tương hợp - Compatibility Checker
 * Chức năng: Tính toán và so sánh tương hợp 2 người
 * Theo sơ đồ DFD Image 2: Luồng so sánh tương hợp 2 người
 */

/**
 * Ma trận tương thích giữa các cung hoàng đạo
 * Giá trị từ 0-100 (%)
 */
const compatibilityMatrix = {
    'aries': {
        'aries': 75, 'taurus': 50, 'gemini': 85, 'cancer': 55,
        'leo': 95, 'virgo': 60, 'libra': 70, 'scorpio': 65,
        'sagittarius': 90, 'capricorn': 45, 'aquarius': 80, 'pisces': 55
    },
    'taurus': {
        'aries': 50, 'taurus': 70, 'gemini': 55, 'cancer': 85,
        'leo': 60, 'virgo': 90, 'libra': 75, 'scorpio': 80,
        'sagittarius': 50, 'capricorn': 95, 'aquarius': 55, 'pisces': 85
    },
    'gemini': {
        'aries': 85, 'taurus': 55, 'gemini': 70, 'cancer': 60,
        'leo': 85, 'virgo': 65, 'libra': 95, 'scorpio': 55,
        'sagittarius': 80, 'capricorn': 50, 'aquarius': 90, 'pisces': 60
    },
    'cancer': {
        'aries': 55, 'taurus': 85, 'gemini': 60, 'cancer': 75,
        'leo': 65, 'virgo': 80, 'libra': 70, 'scorpio': 95,
        'sagittarius': 55, 'capricorn': 85, 'aquarius': 60, 'pisces': 90
    },
    'leo': {
        'aries': 95, 'taurus': 60, 'gemini': 85, 'cancer': 65,
        'leo': 80, 'virgo': 55, 'libra': 90, 'scorpio': 70,
        'sagittarius': 95, 'capricorn': 55, 'aquarius': 85, 'pisces': 65
    },
    'virgo': {
        'aries': 60, 'taurus': 90, 'gemini': 65, 'cancer': 80,
        'leo': 55, 'virgo': 75, 'libra': 70, 'scorpio': 85,
        'sagittarius': 60, 'capricorn': 95, 'aquarius': 65, 'pisces': 80
    },
    'libra': {
        'aries': 70, 'taurus': 75, 'gemini': 95, 'cancer': 70,
        'leo': 90, 'virgo': 70, 'libra': 75, 'scorpio': 65,
        'sagittarius': 85, 'capricorn': 60, 'aquarius': 95, 'pisces': 70
    },
    'scorpio': {
        'aries': 65, 'taurus': 80, 'gemini': 55, 'cancer': 95,
        'leo': 70, 'virgo': 85, 'libra': 65, 'scorpio': 80,
        'sagittarius': 60, 'capricorn': 90, 'aquarius': 55, 'pisces': 95
    },
    'sagittarius': {
        'aries': 90, 'taurus': 50, 'gemini': 80, 'cancer': 55,
        'leo': 95, 'virgo': 60, 'libra': 85, 'scorpio': 60,
        'sagittarius': 75, 'capricorn': 55, 'aquarius': 90, 'pisces': 65
    },
    'capricorn': {
        'aries': 45, 'taurus': 95, 'gemini': 50, 'cancer': 85,
        'leo': 55, 'virgo': 95, 'libra': 60, 'scorpio': 90,
        'sagittarius': 55, 'capricorn': 70, 'aquarius': 60, 'pisces': 85
    },
    'aquarius': {
        'aries': 80, 'taurus': 55, 'gemini': 90, 'cancer': 60,
        'leo': 85, 'virgo': 65, 'libra': 95, 'scorpio': 55,
        'sagittarius': 90, 'capricorn': 60, 'aquarius': 75, 'pisces': 65
    },
    'pisces': {
        'aries': 55, 'taurus': 85, 'gemini': 60, 'cancer': 90,
        'leo': 65, 'virgo': 80, 'libra': 70, 'scorpio': 95,
        'sagittarius': 65, 'capricorn': 85, 'aquarius': 65, 'pisces': 80
    }
};

/**
 * Tính toán độ tương hợp giữa 2 cung hoàng đạo
 * Input: zodiacSign1, zodiacSign2 (ID cung hoàng đạo)
 * Output: { percentage, description, advice }
 */
export function calculateCompatibility(zodiacSign1, zodiacSign2) {
    if (!zodiacSign1 || !zodiacSign2) {
        return {
            success: false,
            error: 'Vui lòng cung cấp đầy đủ thông tin cung hoàng đạo'
        };
    }

    // Lấy % tương thích từ ma trận
    const percentage = compatibilityMatrix[zodiacSign1]?.[zodiacSign2];

    if (percentage === undefined) {
        return {
            success: false,
            error: 'Không thể tính toán độ tương hợp cho các cung này'
        };
    }

    // Tạo mô tả và lời khuyên dựa trên %
    const { description, advice } = getCompatibilityDetails(percentage);

    return {
        success: true,
        percentage: percentage,
        description: description,
        advice: advice,
        zodiacSign1: zodiacSign1,
        zodiacSign2: zodiacSign2
    };
}

/**
 * Lấy mô tả và lời khuyên dựa trên % tương hợp
 */
function getCompatibilityDetails(percentage) {
    if (percentage >= 90) {
        return {
            description: 'Cặp đôi hoàn hảo! Hai bạn có sự kết hợp tuyệt vời về tính cách và sở thích.',
            advice: 'Hãy duy trì sự thấu hiểu và hỗ trợ lẫn nhau. Mối quan hệ này có tiềm năng phát triển lâu dài.'
        };
    } else if (percentage >= 80) {
        return {
            description: 'Độ tương hợp rất cao! Hai bạn hiểu nhau và có nhiều điểm chung.',
            advice: 'Tiếp tục giao tiếp cởi mở và tôn trọng sự khác biệt của nhau để quan hệ ngày càng bền chặt.'
        };
    } else if (percentage >= 70) {
        return {
            description: 'Tương hợp tốt. Hai bạn có thể xây dựng một mối quan hệ ổn định.',
            advice: 'Hãy kiên nhẫn và học cách thích nghi với nhau. Sự khác biệt có thể tạo nên sự cân bằng.'
        };
    } else if (percentage >= 60) {
        return {
            description: 'Độ tương hợp khá ổn. Có một số thách thức nhưng có thể vượt qua.',
            advice: 'Cần nỗ lực để hiểu nhau hơn. Sự thông cảm và nhượng bộ là chìa khóa thành công.'
        };
    } else if (percentage >= 50) {
        return {
            description: 'Độ tương hợp trung bình. Cần nhiều nỗ lực từ cả hai phía.',
            advice: 'Hãy tập trung vào những điểm mạnh của nhau và tránh xung đột không cần thiết. Giao tiếp là rất quan trọng.'
        };
    } else {
        return {
            description: 'Độ tương hợp thấp. Hai bạn có nhiều khác biệt cần khắc phục.',
            advice: 'Nếu quyết tâm, hãy học cách tôn trọng và chấp nhận sự khác biệt. Tình yêu cần sự nỗ lực và kiên nhẫn.'
        };
    }
}

/**
 * Kiểm tra tương hợp với validation đầy đủ
 * Theo sơ đồ DFD: Kiểm tra → [Không có ngày 1] hoặc [Đã có ngày 1]
 */
export function checkCompatibility(person1Data, person2Data) {
    // Kiểm tra đã có người 1 chưa
    if (!person1Data || !person1Data.zodiac) {
        return {
            success: false,
            error: 'Vui lòng nhập thông tin Người thứ nhất trước',
            requirePerson1: true
        };
    }

    // Kiểm tra có người 2 chưa
    if (!person2Data || !person2Data.zodiac) {
        return {
            success: false,
            error: 'Vui lòng nhập thông tin Người thứ hai'
        };
    }

    // Tính toán độ tương hợp
    const result = calculateCompatibility(
        person1Data.zodiac.id,
        person2Data.zodiac.id
    );

    if (!result.success) {
        return result;
    }

    // Thêm thông tin người dùng vào kết quả
    return {
        ...result,
        person1: person1Data,
        person2: person2Data
    };
}
