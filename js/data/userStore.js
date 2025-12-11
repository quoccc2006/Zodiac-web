/**
 * Dữ liệu người dùng 1.0, 1.2 - User Data Store
 * Quản lý thông tin người dùng (Người 1 và Người 2)
 */

const PERSON1_KEY = 'zodiac_person1';
const PERSON2_KEY = 'zodiac_person2';

/**
 * Lưu thông tin Người 1
 */
export function savePerson1(name, birthDate, zodiac) {
    const person1 = {
        name: name,
        birthDate: birthDate,
        zodiac: zodiac,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(PERSON1_KEY, JSON.stringify(person1));
    return person1;
}

/**
 * Lưu thông tin Người 2
 */
export function savePerson2(name, birthDate, zodiac) {
    const person2 = {
        name: name,
        birthDate: birthDate,
        zodiac: zodiac,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(PERSON2_KEY, JSON.stringify(person2));
    return person2;
}

/**
 * Lấy thông tin Người 1
 */
export function getPerson1() {
    const data = localStorage.getItem(PERSON1_KEY);
    return data ? JSON.parse(data) : null;
}

/**
 * Lấy thông tin Người 2
 */
export function getPerson2() {
    const data = localStorage.getItem(PERSON2_KEY);
    return data ? JSON.parse(data) : null;
}

/**
 * Kiểm tra đã có Người 1 chưa
 */
export function hasPerson1() {
    return localStorage.getItem(PERSON1_KEY) !== null;
}

/**
 * Kiểm tra đã có Người 2 chưa
 */
export function hasPerson2() {
    return localStorage.getItem(PERSON2_KEY) !== null;
}

/**
 * Xóa thông tin Người 1
 */
export function clearPerson1() {
    localStorage.removeItem(PERSON1_KEY);
}

/**
 * Xóa thông tin Người 2
 */
export function clearPerson2() {
    localStorage.removeItem(PERSON2_KEY);
}

/**
 * Xóa tất cả thông tin người dùng
 */
export function clearAllPersons() {
    clearPerson1();
    clearPerson2();
}
