/**
 * Data Store Management - Quản lý các kho dữ liệu theo DFD
 * - Dữ liệu người dùng 1.0
 * - Kho người dùng 1.2
 * - Kho CHĐ (Cung Hoàng Đạo)
 * - Kho thông điệp
 */

const DataStore = {
    // Kho Cung Hoàng Đạo - 12 cung với thông tin chi tiết
    zodiacData: {
        aries: {
            name: "Bạch Dương",
            nameEn: "Aries",
            symbol: "♈",
            startDate: { day: 21, month: 3 },
            endDate: { day: 19, month: 4 },
            element: "Hỏa",
            color: "Đỏ",
            description: "Năng động, dũng cảm, nhiệt huyết",
            luckyColors: ["Đỏ", "Cam", "Vàng"]
        },
        taurus: {
            name: "Kim Ngưu",
            nameEn: "Taurus",
            symbol: "♉",
            startDate: { day: 20, month: 4 },
            endDate: { day: 20, month: 5 },
            element: "Thổ",
            color: "Xanh lá",
            description: "Kiên định, trung thành, thực tế",
            luckyColors: ["Xanh lá", "Hồng", "Trắng"]
        },
        gemini: {
            name: "Song Tử",
            nameEn: "Gemini",
            symbol: "♊",
            startDate: { day: 21, month: 5 },
            endDate: { day: 20, month: 6 },
            element: "Khí",
            color: "Vàng",
            description: "Thông minh, linh hoạt, giao tiếp tốt",
            luckyColors: ["Vàng", "Xanh lá nhạt", "Cam"]
        },
        cancer: {
            name: "Cự Giải",
            nameEn: "Cancer",
            symbol: "♋",
            startDate: { day: 21, month: 6 },
            endDate: { day: 22, month: 7 },
            element: "Thủy",
            color: "Bạc",
            description: "Nhạy cảm, tình cảm, giàu trí tưởng tượng",
            luckyColors: ["Bạc", "Trắng", "Xanh dương nhạt"]
        },
        leo: {
            name: "Sư Tử",
            nameEn: "Leo",
            symbol: "♌",
            startDate: { day: 23, month: 7 },
            endDate: { day: 22, month: 8 },
            element: "Hỏa",
            color: "Vàng kim",
            description: "Tự tin, lãnh đạo, hào phóng",
            luckyColors: ["Vàng", "Cam", "Đỏ"]
        },
        virgo: {
            name: "Xử Nữ",
            nameEn: "Virgo",
            symbol: "♍",
            startDate: { day: 23, month: 8 },
            endDate: { day: 22, month: 9 },
            element: "Thổ",
            color: "Xanh lá đậm",
            description: "Tỉ mỉ, hoàn hảo, thực tế",
            luckyColors: ["Xanh lá đậm", "Nâu", "Kem"]
        },
        libra: {
            name: "Thiên Bình",
            nameEn: "Libra",
            symbol: "♎",
            startDate: { day: 23, month: 9 },
            endDate: { day: 22, month: 10 },
            element: "Khí",
            color: "Xanh dương",
            description: "Cân bằng, hài hòa, công bằng",
            luckyColors: ["Xanh dương", "Hồng", "Xanh lục"]
        },
        scorpio: {
            name: "Bọ Cạp",
            nameEn: "Scorpio",
            symbol: "♏",
            startDate: { day: 23, month: 10 },
            endDate: { day: 21, month: 11 },
            element: "Thủy",
            color: "Đen",
            description: "Mạnh mẽ, bí ẩn, quyết đoán",
            luckyColors: ["Đỏ thẫm", "Đen", "Tím"]
        },
        sagittarius: {
            name: "Nhân Mã",
            nameEn: "Sagittarius",
            symbol: "♐",
            startDate: { day: 22, month: 11 },
            endDate: { day: 21, month: 12 },
            element: "Hỏa",
            color: "Tím",
            description: "Lạc quan, tự do, phiêu lưu",
            luckyColors: ["Tím", "Xanh dương", "Đỏ"]
        },
        capricorn: {
            name: "Ma Kết",
            nameEn: "Capricorn",
            symbol: "♑",
            startDate: { day: 22, month: 12 },
            endDate: { day: 19, month: 1 },
            element: "Thổ",
            color: "Nâu",
            description: "Kỷ luật, tham vọng, trách nhiệm",
            luckyColors: ["Nâu", "Đen", "Xanh đậm"]
        },
        aquarius: {
            name: "Bảo Bình",
            nameEn: "Aquarius",
            symbol: "♒",
            startDate: { day: 20, month: 1 },
            endDate: { day: 18, month: 2 },
            element: "Khí",
            color: "Xanh lam",
            description: "Độc lập, sáng tạo, nhân văn",
            luckyColors: ["Xanh lam", "Bạc", "Xanh dương"]
        },
        pisces: {
            name: "Song Ngư",
            nameEn: "Pisces",
            symbol: "♓",
            startDate: { day: 19, month: 2 },
            endDate: { day: 20, month: 3 },
            element: "Thủy",
            color: "Xanh biển",
            description: "Trực giác, đồng cảm, nghệ sĩ",
            luckyColors: ["Xanh biển", "Tím nhạt", "Bạc"]
        }
    },

    // Dữ liệu tương hợp giữa các cung
    compatibilityData: {
        aries: { aries: 70, taurus: 60, gemini: 85, cancer: 50, leo: 90, virgo: 55, libra: 75, scorpio: 60, sagittarius: 95, capricorn: 50, aquarius: 85, pisces: 65 },
        taurus: { aries: 60, taurus: 75, gemini: 55, cancer: 85, leo: 60, virgo: 90, libra: 70, scorpio: 80, sagittarius: 50, capricorn: 85, aquarius: 55, pisces: 80 },
        gemini: { aries: 85, taurus: 55, gemini: 70, cancer: 60, leo: 80, virgo: 65, libra: 90, scorpio: 55, sagittarius: 85, capricorn: 50, aquarius: 95, pisces: 70 },
        cancer: { aries: 50, taurus: 85, gemini: 60, cancer: 75, leo: 55, virgo: 80, libra: 65, scorpio: 90, sagittarius: 50, capricorn: 75, aquarius: 55, pisces: 95 },
        leo: { aries: 90, taurus: 60, gemini: 80, cancer: 55, leo: 75, virgo: 60, libra: 85, scorpio: 65, sagittarius: 90, capricorn: 55, aquarius: 80, pisces: 60 },
        virgo: { aries: 55, taurus: 90, gemini: 65, cancer: 80, leo: 60, virgo: 75, libra: 70, scorpio: 75, sagittarius: 55, capricorn: 90, aquarius: 60, pisces: 75 },
        libra: { aries: 75, taurus: 70, gemini: 90, cancer: 65, leo: 85, virgo: 70, libra: 75, scorpio: 60, sagittarius: 80, capricorn: 60, aquarius: 90, pisces: 70 },
        scorpio: { aries: 60, taurus: 80, gemini: 55, cancer: 90, leo: 65, virgo: 75, libra: 60, scorpio: 75, sagittarius: 55, capricorn: 80, aquarius: 60, pisces: 90 },
        sagittarius: { aries: 95, taurus: 50, gemini: 85, cancer: 50, leo: 90, virgo: 55, libra: 80, scorpio: 55, sagittarius: 75, capricorn: 50, aquarius: 85, pisces: 65 },
        capricorn: { aries: 50, taurus: 85, gemini: 50, cancer: 75, leo: 55, virgo: 90, libra: 60, scorpio: 80, sagittarius: 50, capricorn: 75, aquarius: 55, pisces: 75 },
        aquarius: { aries: 85, taurus: 55, gemini: 95, cancer: 55, leo: 80, virgo: 60, libra: 90, scorpio: 60, sagittarius: 85, capricorn: 55, aquarius: 75, pisces: 70 },
        pisces: { aries: 65, taurus: 80, gemini: 70, cancer: 95, leo: 60, virgo: 75, libra: 70, scorpio: 90, sagittarius: 65, capricorn: 75, aquarius: 70, pisces: 75 }
    },

    // Lưu dữ liệu người dùng 1.0
    saveUserData1(data) {
        try {
            localStorage.setItem('userData1', JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Lỗi khi lưu dữ liệu người dùng 1:', e);
            return false;
        }
    },

    // Đọc dữ liệu người dùng 1.0
    getUserData1() {
        try {
            const data = localStorage.getItem('userData1');
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Lỗi khi đọc dữ liệu người dùng 1:', e);
            return null;
        }
    },

    // Lưu dữ liệu người dùng 1.2
    saveUserData2(data) {
        try {
            localStorage.setItem('userData2', JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Lỗi khi lưu dữ liệu người dùng 2:', e);
            return false;
        }
    },

    // Đọc dữ liệu người dùng 1.2
    getUserData2() {
        try {
            const data = localStorage.getItem('userData2');
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Lỗi khi đọc dữ liệu người dùng 2:', e);
            return null;
        }
    },

    // Lưu thông điệp vào Kho thông điệp
    saveMessage(zodiacKey, message) {
        try {
            const messages = this.getMessages();
            if (!messages[zodiacKey]) {
                messages[zodiacKey] = [];
            }
            messages[zodiacKey].push({
                id: Date.now(),
                content: message,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('messageStore', JSON.stringify(messages));
            return true;
        } catch (e) {
            console.error('Lỗi khi lưu thông điệp:', e);
            return false;
        }
    },

    // Đọc tất cả thông điệp từ Kho thông điệp
    getMessages() {
        try {
            const data = localStorage.getItem('messageStore');
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('Lỗi khi đọc thông điệp:', e);
            return {};
        }
    },

    // Lấy thông điệp cho một cung cụ thể
    getMessagesByZodiac(zodiacKey) {
        const messages = this.getMessages();
        return messages[zodiacKey] || [];
    },

    // Cập nhật thông điệp
    updateMessage(zodiacKey, messageId, newContent) {
        try {
            const messages = this.getMessages();
            if (messages[zodiacKey]) {
                const messageIndex = messages[zodiacKey].findIndex(m => m.id === messageId);
                if (messageIndex !== -1) {
                    messages[zodiacKey][messageIndex].content = newContent;
                    messages[zodiacKey][messageIndex].updatedAt = new Date().toISOString();
                    localStorage.setItem('messageStore', JSON.stringify(messages));
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.error('Lỗi khi cập nhật thông điệp:', e);
            return false;
        }
    },

    // Xóa thông điệp
    deleteMessage(zodiacKey, messageId) {
        try {
            const messages = this.getMessages();
            if (messages[zodiacKey]) {
                messages[zodiacKey] = messages[zodiacKey].filter(m => m.id !== messageId);
                localStorage.setItem('messageStore', JSON.stringify(messages));
                return true;
            }
            return false;
        } catch (e) {
            console.error('Lỗi khi xóa thông điệp:', e);
            return false;
        }
    },

    // Xóa tất cả dữ liệu
    clearAll() {
        try {
            localStorage.removeItem('userData1');
            localStorage.removeItem('userData2');
            localStorage.removeItem('messageStore');
            return true;
        } catch (e) {
            console.error('Lỗi khi xóa dữ liệu:', e);
            return false;
        }
    }
};
