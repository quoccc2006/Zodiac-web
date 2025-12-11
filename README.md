# Website Cung Hoàng Đạo (Zodiac)

Website cung hoàng đạo được xây dựng theo **Sơ đồ luồng dữ liệu (Data Flow Diagram - DFD)** để dễ dàng hiểu và bảo trì.

## 🌟 Tổng Quan

Website cung hoàng đạo cung cấp các tính năng:
- 📊 Xem thông tin 12 cung hoàng đạo
- 🎨 Xem màu may mắn trong ngày
- 💬 Quản lý thông điệp (CRUD)
- 💕 So sánh tương hợp 2 người
- 🎯 Xác định cung hoàng đạo từ ngày sinh

## 📁 Cấu Trúc Thư Mục (Theo DFD)

```
├── index.html                    # Giao diện chính
├── css/
│   └── style.css                 # Styles (Galaxy theme)
├── js/
│   ├── app.js                    # Module chính điều phối
│   ├── modules/                  # Các module xử lý theo DFD
│   │   ├── requestAnalyzer.js    # 1.0 Phân tích yêu cầu
│   │   ├── dateValidator.js      # Kiểm tra định dạng ngày tháng
│   │   ├── zodiacIdentifier.js   # 2.0 Xác định cung và ngày sinh
│   │   ├── messageHandler.js     # 3.0 Thực thi chức năng xem thông điệp
│   │   ├── displayManager.js     # 4.0 Hiển thị thông điệp/kết quả
│   │   └── compatibilityChecker.js # So sánh tương hợp
│   ├── data/                     # Lớp dữ liệu
│   │   ├── zodiacData.js         # Kho CHĐ (Cung Hoàng Đạo)
│   │   ├── messageStore.js       # Kho thông điệp (localStorage)
│   │   └── userStore.js          # Dữ liệu người dùng 1.0, 1.2
│   └── utils/
│       └── notifications.js      # Hiển thị thông báo (thành công/lỗi)
└── README.md                     # Tài liệu này
```

## 🔄 Sơ Đồ Luồng Dữ Liệu (DFD)

### Sơ đồ 1: Luồng nhập thông tin người dùng (Image 4)

**Mô tả:** Xử lý việc nhập và validate thông tin người dùng

```
Người dùng → [yêu cầu] → Phân tích yêu cầu → [Nhập thông tin] → Nhập ngày tháng năm sinh
                                                                        ↓
                                                            Kiểm tra định dạng ngày tháng
                                                            ↓                    ↓
                                                      [Thất bại]            [Thành công]
                                                            ↓                    ↓
                                                  Thông báo nhập lại    Hiển thị thông báo nhập thành công
                                                            ↓                    ↓
                                                      ← Người dùng ←      → Lưu vào "Dữ liệu người dùng 1.0"
```

**Mapping với Code:**
- `requestAnalyzer.js` → Phân tích yêu cầu (`SAVE_PERSON`)
- `dateValidator.js` → Kiểm tra định dạng ngày tháng (`validateDate()`)
- `notifications.js` → Thông báo nhập lại (`showError()`) / Thông báo thành công (`showSuccess()`)
- `userStore.js` → Lưu vào "Dữ liệu người dùng 1.0" (`savePerson1()`, `savePerson2()`)
- `app.js` → `handleSavePerson()` - Orchestrate toàn bộ flow

### Sơ đồ 2: Luồng xác định cung hoàng đạo (Image 3)

**Mô tả:** Xác định cung hoàng đạo từ thông tin người dùng

```
Người dùng → Phân tích yêu cầu → Thực thi và xác định cung ← Kho CHĐ (Cung Hoàng Đạo)
                                        ↓                  ← Dữ liệu người dùng 1.0
                                 Hiển thị kết quả
                                        ↓
                                   Người dùng
```

**Mapping với Code:**
- `requestAnalyzer.js` → Phân tích yêu cầu (`IDENTIFY_ZODIAC`)
- `zodiacIdentifier.js` → Thực thi và xác định cung (`identifyZodiac()`)
- `zodiacData.js` → Kho CHĐ (database 12 cung hoàng đạo)
- `userStore.js` → Dữ liệu người dùng 1.0 (`getPerson1()`, `getPerson2()`)
- `displayManager.js` → Hiển thị kết quả

### Sơ đồ 3: Luồng so sánh tương hợp 2 người (Image 2)

**Mô tả:** So sánh tương hợp giữa 2 người dựa trên cung hoàng đạo

```
Người dùng → [Yêu cầu] → Phân tích yêu cầu → [Nhập thông tin] → Nhập ngày tháng năm sinh
                                                                        ↓
                                                      [Không có ngày 1] ← Kiểm tra → [Đã có ngày 1]
                                                            ↓                              ↓
                                                  Báo lỗi: Hiển thị nhập ngày 1     Kho người dùng 1.2
                                                            ↓                              ↓
                                                      ← Người dùng ←              [Sau khi nhập ngày 1]
                                                                                          ↓
                                                                              Thông báo nhập thành công
                                                                                          ↓
                                                                                    Người dùng
```

**Mapping với Code:**
- `requestAnalyzer.js` → Phân tích yêu cầu (`CHECK_COMPATIBILITY`)
- `userStore.js` → Kiểm tra (`hasPerson1()`, `hasPerson2()`)
- `compatibilityChecker.js` → So sánh tương hợp (`checkCompatibility()`)
- `notifications.js` → Báo lỗi (`showError()`) / Thông báo thành công
- `displayManager.js` → Hiển thị kết quả tương hợp
- `app.js` → `handleCheckCompatibility()` - Orchestrate flow

### Sơ đồ 4: Luồng xem thông điệp (Image 1)

**Mô tả:** Xử lý việc xem, thêm, sửa, xóa thông điệp

```
Người dùng → [Yêu cầu chức năng xem thông điệp] → 1.0 Phân tích yêu cầu
                                                        ↓
                                            [Nhập ngày tháng năm sinh]
                                                        ↓
                                            2.0 Xác định cung và ngày sinh
                                                  ↓              ↓
                                        [Ngày sinh hợp lệ]  [Ngày sinh không hợp lệ]
                                                  ↓              ↓
                                                  ↓         Thông báo: "Ngày sinh không hợp lệ"
                                                  ↓              ↓
                                                  ↓         → Hiển thị → Người dùng
                                                  ↓
                                    3.0 Thực thi chức năng xem thông điệp
                                          ↑              ↑
                                    Kho thông điệp    Database
                                          ↓
                            [Xử lý dữ liệu và trả về thông điệp]
                                          ↓
                                4.0 Hiển thị thông điệp
                                          ↓
                            [Hiển thị thông điệp] → Người dùng
```

**Mapping với Code:**
- `requestAnalyzer.js` → 1.0 Phân tích yêu cầu (`VIEW_MESSAGES`, `ADD_MESSAGE`, `EDIT_MESSAGE`, `DELETE_MESSAGE`)
- `zodiacIdentifier.js` → 2.0 Xác định cung và ngày sinh
- `dateValidator.js` → Validate ngày sinh
- `messageHandler.js` → 3.0 Thực thi chức năng xem thông điệp (CRUD operations)
- `messageStore.js` → Kho thông điệp (localStorage database)
- `displayManager.js` → 4.0 Hiển thị thông điệp (`displayMessages()`)
- `app.js` → `handleAddMessage()`, `handleMessageAction()` - Orchestrate flow

## 🔧 Chi Tiết Các Module

### 1. `requestAnalyzer.js` - 1.0 Phân tích yêu cầu

**Chức năng:** Nhận và phân loại yêu cầu từ người dùng

**Các loại yêu cầu:**
- `VIEW_ZODIAC` - Xem danh sách cung hoàng đạo
- `VIEW_LUCKY_COLOR` - Xem màu may mắn
- `VIEW_MESSAGES` - Xem thông điệp
- `ADD_MESSAGE` - Thêm thông điệp
- `EDIT_MESSAGE` - Sửa thông điệp
- `DELETE_MESSAGE` - Xóa thông điệp
- `CHECK_COMPATIBILITY` - Kiểm tra tương hợp
- `IDENTIFY_ZODIAC` - Xác định cung hoàng đạo
- `SAVE_PERSON` - Lưu thông tin người dùng

**API chính:**
```javascript
analyzeRequest(requestType, data)     // Phân tích yêu cầu
validateRequest(analyzedRequest)      // Validate yêu cầu
routeRequest(analyzedRequest)         // Điều hướng yêu cầu
```

### 2. `dateValidator.js` - Kiểm tra định dạng ngày tháng

**Chức năng:** Validate ngày tháng năm sinh của người dùng

**API chính:**
```javascript
validateDate(day, month, year)        // Validate đầy đủ
  // Output: { valid: true/false, date: {...}, error: "..." }

validateDayMonth(day, month)          // Validate ngày/tháng
formatDate(day, month, year)          // Format hiển thị
```

**Quy tắc validation:**
- Kiểm tra tháng: 1-12
- Kiểm tra ngày theo tháng (xử lý năm nhuận)
- Kiểm tra năm: 1900-2100
- Không cho phép ngày tương lai

### 3. `zodiacIdentifier.js` - 2.0 Xác định cung và ngày sinh

**Chức năng:** Xác định cung hoàng đạo từ ngày tháng sinh

**API chính:**
```javascript
identifyZodiac(day, month)                    // Xác định cung
  // Output: { success, zodiac: {...}, birthDate: {...} }

getZodiacInfo(zodiacId)                       // Lấy thông tin cung
identifyZodiacWithValidation(day, month)      // Xác định + validate
```

**Dữ liệu sử dụng:** `zodiacData.js` (Kho CHĐ)

### 4. `messageHandler.js` - 3.0 Thực thi chức năng xem thông điệp

**Chức năng:** CRUD operations cho thông điệp

**API chính:**
```javascript
addMessage(zodiacSign, message)       // Thêm thông điệp
editMessage(id, newMessage)           // Sửa thông điệp
deleteMessage(id)                     // Xóa thông điệp
getMessages(zodiacSign)               // Lấy thông điệp theo cung
getMessageById(id)                    // Lấy thông điệp theo ID
handleViewMessageRequest(zodiacSign)  // Xử lý yêu cầu xem (DFD flow)
```

**Dữ liệu sử dụng:** `messageStore.js` (Kho thông điệp - localStorage)

### 5. `displayManager.js` - 4.0 Hiển thị thông điệp/kết quả

**Chức năng:** Render UI cho tất cả các kết quả

**API chính:**
```javascript
displayZodiacInfo()                   // Hiển thị 12 cung hoàng đạo
displayLuckyColor(luckyColorData)     // Hiển thị màu may mắn
displayMessages(messages)             // Hiển thị danh sách thông điệp
displayCompatibility(result)          // Hiển thị kết quả tương hợp
populateZodiacSelects()               // Populate dropdown
updateTabContent(tabId)               // Chuyển tab
```

### 6. `compatibilityChecker.js` - So sánh tương hợp

**Chức năng:** Tính toán độ tương hợp giữa 2 cung hoàng đạo

**API chính:**
```javascript
calculateCompatibility(zodiacSign1, zodiacSign2)
  // Output: { success, percentage, description, advice }

checkCompatibility(person1Data, person2Data)
  // Kiểm tra + tính toán (DFD flow)
```

**Dữ liệu:** Ma trận tương thích 12x12 (%)

### 7. `userStore.js` - Dữ liệu người dùng 1.0, 1.2

**Chức năng:** Quản lý thông tin người dùng (localStorage)

**API chính:**
```javascript
savePerson1(name, birthDate, zodiac)  // Lưu Người 1
savePerson2(name, birthDate, zodiac)  // Lưu Người 2
getPerson1()                          // Lấy thông tin Người 1
getPerson2()                          // Lấy thông tin Người 2
hasPerson1()                          // Kiểm tra đã có Người 1 chưa
hasPerson2()                          // Kiểm tra đã có Người 2 chưa
```

### 8. `notifications.js` - Hiển thị thông báo

**Chức năng:** Hiển thị thông báo cho người dùng

**API chính:**
```javascript
showSuccess(message)          // Thông báo thành công (xanh)
showError(message)            // Thông báo lỗi (đỏ)
showInfo(message)             // Thông báo thông tin (xanh dương)
showWarning(message)          // Thông báo cảnh báo (cam)
showRetryMessage(fieldName)   // Yêu cầu nhập lại
showInputSuccess(message)     // Nhập thành công
showValidationError(error)    // Lỗi validation
```

## 💾 Lớp Dữ Liệu (Data Layer)

### `zodiacData.js` - Kho CHĐ (Cung Hoàng Đạo)

**Chứa thông tin 12 cung hoàng đạo:**
- Tên tiếng Việt và tiếng Anh
- Biểu tượng (symbol)
- Khoảng ngày tháng
- Mô tả tính cách
- Màu may mắn
- Nguyên tố (Hỏa, Thủy, Thổ, Khí)
- Hành tinh cai quản

**API:**
```javascript
getAllZodiacs()               // Lấy tất cả 12 cung
getZodiacById(id)             // Lấy cung theo ID
getDailyLuckyColor(zodiacId)  // Lấy màu may mắn hôm nay
```

### `messageStore.js` - Kho thông điệp

**Quản lý thông điệp trong localStorage**

**Cấu trúc message:**
```javascript
{
  id: "1234567890",
  zodiacSign: "aries",
  message: "Nội dung thông điệp",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### `userStore.js` - Dữ liệu người dùng

**Quản lý thông tin 2 người trong localStorage**

**Cấu trúc person:**
```javascript
{
  name: "Nguyễn Văn A",
  birthDate: { day: 15, month: 3, year: 1990 },
  zodiac: { id: "pisces", nameVi: "Song Ngư", ... },
  savedAt: "2024-01-01T00:00:00.000Z"
}
```

## 🎨 Giao Diện

**Theme:** Galaxy với màu tím/xanh dương
- Primary: `#6a4c93` (Tím)
- Secondary: `#1e90ff` (Xanh dương)
- Accent: `#9d4edd` (Tím nhạt)
- Background: Gradient xanh đen galaxy

**Responsive:** Hỗ trợ mobile, tablet, desktop

## 🚀 Cách Sử Dụng

1. **Mở file `index.html`** trong trình duyệt web

2. **Xem 12 cung hoàng đạo:**
   - Tab mặc định hiển thị 12 cards với thông tin đầy đủ

3. **Xem màu may mắn:**
   - Chuyển sang tab "Màu May Mắn"
   - Chọn cung hoàng đạo từ dropdown
   - Xem màu may mắn thay đổi theo ngày

4. **Quản lý thông điệp:**
   - Chuyển sang tab "Thông Điệp"
   - Chọn cung hoàng đạo và nhập nội dung
   - Thêm/Sửa/Xóa thông điệp

5. **Kiểm tra tương hợp:**
   - Chuyển sang tab "Tương Hợp"
   - Nhập thông tin Người 1 (họ tên, ngày/tháng/năm)
   - Nhập thông tin Người 2
   - Click "Kiểm Tra Tương Hợp" để xem kết quả

## 🔍 Luồng Xử Lý Chính

### Luồng 1: Thêm Thông Điệp (DFD Image 1)

1. Người dùng nhập thông tin → `app.js::handleAddMessage()`
2. Phân tích yêu cầu → `requestAnalyzer.analyzeRequest('ADD_MESSAGE')`
3. Xác định cung → `zodiacIdentifier.identifyZodiac()`
4. Validate ngày → `dateValidator.validateDate()`
5. Thực thi thêm → `messageHandler.addMessage()`
6. Lưu vào store → `messageStore.addMessage()`
7. Hiển thị kết quả → `displayManager.displayMessages()`
8. Thông báo → `notifications.showSuccess()`

### Luồng 2: Kiểm Tra Tương Hợp (DFD Image 2)

1. Người dùng click kiểm tra → `app.js::handleCheckCompatibility()`
2. Phân tích yêu cầu → `requestAnalyzer.analyzeRequest('CHECK_COMPATIBILITY')`
3. Kiểm tra Người 1 → `userStore.hasPerson1()`
4. Nếu không có → `notifications.showError('Vui lòng nhập Người 1')`
5. Nếu có → Lấy dữ liệu → `userStore.getPerson1()`, `getPerson2()`
6. Tính toán → `compatibilityChecker.checkCompatibility()`
7. Hiển thị kết quả → `displayManager.displayCompatibility()`

### Luồng 3: Lưu Thông Tin Người Dùng (DFD Image 4)

1. Người dùng nhập và click lưu → `app.js::handleSavePerson()`
2. Validate ngày tháng → `dateValidator.validateDate()`
3. Nếu thất bại → `notifications.showValidationError()`
4. Nếu thành công → Xác định cung → `zodiacIdentifier.identifyZodiac()`
5. Lưu vào store → `userStore.savePerson1()` hoặc `savePerson2()`
6. Thông báo thành công → `notifications.showInputSuccess()`

## 📊 Quy Trình Phát Triển

Code được tổ chức theo DFD để:
- ✅ Dễ hiểu và giải thích cho nhóm
- ✅ Module hóa rõ ràng theo chức năng
- ✅ Dễ bảo trì và mở rộng
- ✅ Tuân thủ nguyên tắc separation of concerns
- ✅ Trace được luồng xử lý từ UI đến data

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc
- **CSS3** - Styling với Galaxy theme
- **JavaScript (ES6 Modules)** - Logic xử lý
- **LocalStorage** - Lưu trữ dữ liệu
- **Responsive Design** - Hỗ trợ đa thiết bị

## 📝 Ghi Chú

- Tất cả dữ liệu được lưu trong localStorage của trình duyệt
- Không cần server hay database
- Mã nguồn tuân theo DFD để dễ dàng giải thích và maintain
- Mỗi module có comment rõ ràng về vị trí trong DFD

---

**Tác giả:** Zodiac Team  
**Ngôn ngữ:** Tiếng Việt  
**License:** MIT