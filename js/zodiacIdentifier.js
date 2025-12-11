/**
 * Zodiac Identifier - Process 2.0 Xác định cung và ngày sinh
 * Theo DFD: Thực thi và xác định cung - truy cập Kho CHĐ và Dữ liệu người dùng 1.0
 */

class ZodiacIdentifier {
    /**
     * Xác định cung hoàng đạo dựa trên ngày và tháng sinh
     * @param {number} day - Ngày sinh
     * @param {number} month - Tháng sinh
     * @returns {Object} - Thông tin cung hoàng đạo hoặc null
     */
    static identify(day, month) {
        // Validate input
        const validation = DateValidator.validate(day, month);
        if (!validation.valid) {
            return null;
        }

        // Duyệt qua tất cả các cung trong Kho CHĐ
        for (const [key, zodiac] of Object.entries(DataStore.zodiacData)) {
            if (this.isDateInZodiacRange(day, month, zodiac)) {
                return {
                    key: key,
                    ...zodiac
                };
            }
        }

        return null;
    }

    /**
     * Kiểm tra ngày tháng có nằm trong khoảng của cung không
     * @param {number} day - Ngày
     * @param {number} month - Tháng
     * @param {Object} zodiac - Thông tin cung
     * @returns {boolean}
     */
    static isDateInZodiacRange(day, month, zodiac) {
        const { startDate, endDate } = zodiac;

        // Trường hợp cung không bắt đầu và kết thúc trong cùng một tháng
        if (startDate.month === endDate.month) {
            return month === startDate.month && 
                   day >= startDate.day && 
                   day <= endDate.day;
        }

        // Trường hợp cung qua 2 tháng (ví dụ: Ma Kết 22/12 - 19/01)
        if (startDate.month > endDate.month) {
            // Trường hợp đặc biệt: cung qua năm
            return (month === startDate.month && day >= startDate.day) ||
                   (month === endDate.month && day <= endDate.day);
        } else {
            // Trường hợp bình thường: cung qua 2 tháng liên tiếp
            return (month === startDate.month && day >= startDate.day) ||
                   (month === endDate.month && day <= endDate.day);
        }
    }

    /**
     * Lấy thông tin cung từ dữ liệu người dùng đã lưu
     * @param {Object} userData - Dữ liệu người dùng {name, day, month, year}
     * @returns {Object} - Thông tin cung hoặc null
     */
    static identifyFromUserData(userData) {
        if (!userData || !userData.day || !userData.month) {
            return null;
        }

        return this.identify(userData.day, userData.month);
    }

    /**
     * Xác định cung cho người dùng 1 từ localStorage
     * @returns {Object} - {user: Object, zodiac: Object} hoặc null
     */
    static identifyUser1Zodiac() {
        const userData = DataStore.getUserData1();
        if (!userData) {
            return null;
        }

        const zodiac = this.identify(userData.day, userData.month);
        return {
            user: userData,
            zodiac: zodiac
        };
    }

    /**
     * Xác định cung cho người dùng 2 từ localStorage
     * @returns {Object} - {user: Object, zodiac: Object} hoặc null
     */
    static identifyUser2Zodiac() {
        const userData = DataStore.getUserData2();
        if (!userData) {
            return null;
        }

        const zodiac = this.identify(userData.day, userData.month);
        return {
            user: userData,
            zodiac: zodiac
        };
    }

    /**
     * Lấy tất cả thông tin 2 người dùng và cung của họ
     * @returns {Object} - {user1: Object, user2: Object} hoặc null
     */
    static identifyBothUsersZodiac() {
        const user1Result = this.identifyUser1Zodiac();
        const user2Result = this.identifyUser2Zodiac();

        if (!user1Result || !user2Result) {
            return null;
        }

        return {
            user1: user1Result,
            user2: user2Result
        };
    }

    /**
     * Lấy tên cung hoàng đạo từ key
     * @param {string} zodiacKey - Key của cung (aries, taurus, ...)
     * @returns {string} - Tên cung bằng tiếng Việt
     */
    static getZodiacName(zodiacKey) {
        const zodiac = DataStore.zodiacData[zodiacKey];
        return zodiac ? zodiac.name : '';
    }

    /**
     * Lấy biểu tượng cung hoàng đạo từ key
     * @param {string} zodiacKey - Key của cung
     * @returns {string} - Biểu tượng cung
     */
    static getZodiacSymbol(zodiacKey) {
        const zodiac = DataStore.zodiacData[zodiacKey];
        return zodiac ? zodiac.symbol : '';
    }

    /**
     * Lấy tất cả các cung hoàng đạo
     * @returns {Array} - Mảng các cung hoàng đạo
     */
    static getAllZodiacs() {
        return Object.entries(DataStore.zodiacData).map(([key, zodiac]) => ({
            key: key,
            ...zodiac
        }));
    }

    /**
     * Lấy màu sắc may mắn của cung
     * @param {string} zodiacKey - Key của cung
     * @returns {Array} - Mảng màu sắc may mắn
     */
    static getLuckyColors(zodiacKey) {
        const zodiac = DataStore.zodiacData[zodiacKey];
        return zodiac ? zodiac.luckyColors : [];
    }
}
