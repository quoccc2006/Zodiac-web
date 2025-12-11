/**
 * Kho CHĐ (Cung Hoàng Đạo) - Zodiac Data Store
 * Chứa thông tin 12 cung hoàng đạo
 */

export const zodiacData = [
    {
        id: 'aries',
        nameVi: 'Bạch Dương',
        nameEn: 'Aries',
        symbol: '♈',
        dateRange: '21/03 - 19/04',
        startMonth: 3,
        startDay: 21,
        endMonth: 4,
        endDay: 19,
        description: 'Người thuộc cung Bạch Dương năng động, nhiệt huyết, dũng cảm và luôn sẵn sàng đón nhận thử thách. Họ là những người tiên phong, thích khám phá và không ngại rủi ro.',
        luckyColors: ['#FF0000', '#FF6B6B', '#FF4444'],
        element: 'Hỏa',
        rulingPlanet: 'Sao Hỏa'
    },
    {
        id: 'taurus',
        nameVi: 'Kim Ngưu',
        nameEn: 'Taurus',
        symbol: '♉',
        dateRange: '20/04 - 20/05',
        startMonth: 4,
        startDay: 20,
        endMonth: 5,
        endDay: 20,
        description: 'Người cung Kim Ngưu kiên định, đáng tin cậy và thực tế. Họ yêu thích sự ổn định, thoải mái và có khiếu thẩm mỹ cao. Tính cách chăm chỉ và kiên nhẫn.',
        luckyColors: ['#4CAF50', '#8BC34A', '#66BB6A'],
        element: 'Thổ',
        rulingPlanet: 'Sao Kim'
    },
    {
        id: 'gemini',
        nameVi: 'Song Tử',
        nameEn: 'Gemini',
        symbol: '♊',
        dateRange: '21/05 - 20/06',
        startMonth: 5,
        startDay: 21,
        endMonth: 6,
        endDay: 20,
        description: 'Người cung Song Tử thông minh, nhanh nhẹn và linh hoạt. Họ có khả năng giao tiếp tuyệt vời, tò mò và thích học hỏi những điều mới. Đa tài và thích thay đổi.',
        luckyColors: ['#FFC107', '#FFD54F', '#FFEB3B'],
        element: 'Khí',
        rulingPlanet: 'Sao Thủy'
    },
    {
        id: 'cancer',
        nameVi: 'Cự Giải',
        nameEn: 'Cancer',
        symbol: '♋',
        dateRange: '21/06 - 22/07',
        startMonth: 6,
        startDay: 21,
        endMonth: 7,
        endDay: 22,
        description: 'Người cung Cự Giải nhạy cảm, giàu tình cảm và rất quan tâm đến gia đình. Họ có trực giác mạnh mẽ, biết chăm sóc và bảo vệ những người mình yêu thương.',
        luckyColors: ['#E0E0E0', '#BDBDBD', '#F5F5F5'],
        element: 'Thủy',
        rulingPlanet: 'Mặt Trăng'
    },
    {
        id: 'leo',
        nameVi: 'Sư Tử',
        nameEn: 'Leo',
        symbol: '♌',
        dateRange: '23/07 - 22/08',
        startMonth: 7,
        startDay: 23,
        endMonth: 8,
        endDay: 22,
        description: 'Người cung Sư Tử tự tin, hào phóng và có sức lãnh đạo mạnh mẽ. Họ yêu thích sự chú ý, sáng tạo và luôn tỏa sáng ở bất cứ đâu. Trung thành và bảo vệ người thân.',
        luckyColors: ['#FFD700', '#FFA500', '#FF8C00'],
        element: 'Hỏa',
        rulingPlanet: 'Mặt Trời'
    },
    {
        id: 'virgo',
        nameVi: 'Xử Nữ',
        nameEn: 'Virgo',
        symbol: '♍',
        dateRange: '23/08 - 22/09',
        startMonth: 8,
        startDay: 23,
        endMonth: 9,
        endDay: 22,
        description: 'Người cung Xử Nữ tỉ mỉ, cẩn thận và có óc phân tích cao. Họ làm việc chăm chỉ, có tính hoàn hảo và luôn muốn giúp đỡ người khác. Thực tế và đáng tin cậy.',
        luckyColors: ['#795548', '#A1887F', '#8D6E63'],
        element: 'Thổ',
        rulingPlanet: 'Sao Thủy'
    },
    {
        id: 'libra',
        nameVi: 'Thiên Bình',
        nameEn: 'Libra',
        symbol: '♎',
        dateRange: '23/09 - 22/10',
        startMonth: 9,
        startDay: 23,
        endMonth: 10,
        endDay: 22,
        description: 'Người cung Thiên Bình hài hòa, công bằng và có khiếu thẩm mỹ tuyệt vời. Họ yêu hòa bình, thích giao lưu và luôn tìm kiếm sự cân bằng trong mọi việc. Quyến rũ và duyên dáng.',
        luckyColors: ['#F48FB1', '#EC407A', '#E91E63'],
        element: 'Khí',
        rulingPlanet: 'Sao Kim'
    },
    {
        id: 'scorpio',
        nameVi: 'Bọ Cạp',
        nameEn: 'Scorpio',
        symbol: '♏',
        dateRange: '23/10 - 21/11',
        startMonth: 10,
        startDay: 23,
        endMonth: 11,
        endDay: 21,
        description: 'Người cung Bọ Cạp bí ẩn, quyết đoán và có ý chí mạnh mẽ. Họ đam mê, trung thành và có khả năng nhìn thấu bản chất sự việc. Dũng cảm đối mặt với khó khăn.',
        luckyColors: ['#9C27B0', '#7B1FA2', '#6A1B9A'],
        element: 'Thủy',
        rulingPlanet: 'Sao Diêm Vương'
    },
    {
        id: 'sagittarius',
        nameVi: 'Nhân Mã',
        nameEn: 'Sagittarius',
        symbol: '♐',
        dateRange: '22/11 - 21/12',
        startMonth: 11,
        startDay: 22,
        endMonth: 12,
        endDay: 21,
        description: 'Người cung Nhân Mã lạc quan, tự do và yêu thích phiêu lưu. Họ thẳng thắn, chân thật và luôn tìm kiếm ý nghĩa sâu sắc trong cuộc sống. Tinh thần phiêu lưu và triết học.',
        luckyColors: ['#3F51B5', '#5C6BC0', '#7986CB'],
        element: 'Hỏa',
        rulingPlanet: 'Sao Mộc'
    },
    {
        id: 'capricorn',
        nameVi: 'Ma Kết',
        nameEn: 'Capricorn',
        symbol: '♑',
        dateRange: '22/12 - 19/01',
        startMonth: 12,
        startDay: 22,
        endMonth: 1,
        endDay: 19,
        description: 'Người cung Ma Kết tham vọng, kỷ luật và có trách nhiệm cao. Họ kiên trì làm việc để đạt mục tiêu, thực tế và đáng tin cậy. Người lãnh đạo tài ba và khôn ngoan.',
        luckyColors: ['#424242', '#616161', '#757575'],
        element: 'Thổ',
        rulingPlanet: 'Sao Thổ'
    },
    {
        id: 'aquarius',
        nameVi: 'Bảo Bình',
        nameEn: 'Aquarius',
        symbol: '♒',
        dateRange: '20/01 - 18/02',
        startMonth: 1,
        startDay: 20,
        endMonth: 2,
        endDay: 18,
        description: 'Người cung Bảo Bình độc lập, sáng tạo và có tư duy tiến bộ. Họ nhân đạo, thích tự do và luôn hướng tới tương lai. Độc đáo và không theo khuôn mẫu.',
        luckyColors: ['#00BCD4', '#00ACC1', '#0097A7'],
        element: 'Khí',
        rulingPlanet: 'Sao Thiên Vương'
    },
    {
        id: 'pisces',
        nameVi: 'Song Ngư',
        nameEn: 'Pisces',
        symbol: '♓',
        dateRange: '19/02 - 20/03',
        startMonth: 2,
        startDay: 19,
        endMonth: 3,
        endDay: 20,
        description: 'Người cung Song Ngư nhạy cảm, giàu trí tưởng tượng và đồng cảm. Họ nghệ sĩ, lãng mạn và có khả năng thấu hiểu cảm xúc người khác. Đầy từ bi và hy sinh.',
        luckyColors: ['#9FA8DA', '#7E57C2', '#BA68C8'],
        element: 'Thủy',
        rulingPlanet: 'Sao Hải Vương'
    }
];

/**
 * Lấy cung hoàng đạo theo ID
 */
export function getZodiacById(id) {
    return zodiacData.find(zodiac => zodiac.id === id);
}

/**
 * Lấy tất cả cung hoàng đạo
 */
export function getAllZodiacs() {
    return zodiacData;
}

/**
 * Lấy màu may mắn trong ngày (thay đổi theo ngày)
 */
export function getDailyLuckyColor(zodiacId) {
    const zodiac = getZodiacById(zodiacId);
    if (!zodiac) return null;
    
    // Sử dụng ngày trong năm để chọn màu may mắn
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const colorIndex = dayOfYear % zodiac.luckyColors.length;
    
    return {
        zodiac: zodiac,
        color: zodiac.luckyColors[colorIndex],
        date: today.toLocaleDateString('vi-VN')
    };
}
