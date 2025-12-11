/**
 * Kho thông điệp - Message Store (LocalStorage)
 * Quản lý thông điệp cho từng cung hoàng đạo
 */

const STORAGE_KEY = 'zodiac_messages';

/**
 * Lấy tất cả thông điệp từ localStorage
 */
function getAllMessagesFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

/**
 * Lưu tất cả thông điệp vào localStorage
 */
function saveAllMessagesToStorage(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

/**
 * Thêm thông điệp mới
 */
export function addMessage(zodiacSign, message) {
    const messages = getAllMessagesFromStorage();
    const newMessage = {
        id: Date.now().toString(),
        zodiacSign: zodiacSign,
        message: message,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    messages.push(newMessage);
    saveAllMessagesToStorage(messages);
    return newMessage;
}

/**
 * Sửa thông điệp
 */
export function editMessage(id, newMessage) {
    const messages = getAllMessagesFromStorage();
    const index = messages.findIndex(msg => msg.id === id);
    if (index !== -1) {
        messages[index].message = newMessage;
        messages[index].updatedAt = new Date().toISOString();
        saveAllMessagesToStorage(messages);
        return messages[index];
    }
    return null;
}

/**
 * Xóa thông điệp
 */
export function deleteMessage(id) {
    const messages = getAllMessagesFromStorage();
    const filteredMessages = messages.filter(msg => msg.id !== id);
    saveAllMessagesToStorage(filteredMessages);
    return true;
}

/**
 * Lấy thông điệp theo cung hoàng đạo
 */
export function getMessages(zodiacSign) {
    const messages = getAllMessagesFromStorage();
    if (zodiacSign) {
        return messages.filter(msg => msg.zodiacSign === zodiacSign);
    }
    return messages;
}

/**
 * Lấy thông điệp theo ID
 */
export function getMessageById(id) {
    const messages = getAllMessagesFromStorage();
    return messages.find(msg => msg.id === id);
}

/**
 * Xóa tất cả thông điệp
 */
export function clearAllMessages() {
    localStorage.removeItem(STORAGE_KEY);
    return true;
}
