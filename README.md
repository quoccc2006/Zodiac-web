# Website Cung Hoàng Đạo (Zodiac Web)

Website xác định cung hoàng đạo và xem thông điệp, được xây dựng theo đúng sơ đồ luồng dữ liệu (DFD).

## 🌟 Tính năng

### 1. Module Nhập thông tin người dùng 1 (DFD 1)
- Nhập họ tên, ngày sinh, tháng sinh, năm sinh
- Validate định dạng ngày tháng (ngày 1-31, tháng 1-12)
- Hiển thị thông báo lỗi nếu sai định dạng
- Hiển thị thông báo thành công nếu đúng
- Lưu dữ liệu vào localStorage (Dữ liệu người dùng 1.0)

### 2. Module Xác định cung hoàng đạo (DFD 2)
- Đọc dữ liệu từ localStorage
- Truy cập Kho Cung Hoàng Đạo (12 cung)
- Xác định cung dựa trên ngày tháng
- Hiển thị kết quả với biểu tượng, tên cung, mô tả

### 3. Module Nhập thông tin người dùng 2 (DFD 3)
- Kiểm tra xem đã có thông tin người 1 chưa
- Nếu chưa có → Báo lỗi yêu cầu nhập người 1 trước
- Nếu có rồi → Cho phép nhập thông tin người 2
- Lưu vào Kho người dùng 1.2 (localStorage)

### 4. Module Xem thông điệp (DFD 4)
- Nhập ngày tháng năm sinh
- Xác định cung từ ngày sinh
- Validate ngày sinh
- Truy cập Kho thông điệp (localStorage)
- Hiển thị thông điệp tương ứng với cung

### 5. Module Quản lý thông điệp (CRUD)
- Thêm thông điệp mới cho từng cung
- Sửa thông điệp đã có
- Xóa thông điệp
- Lưu trữ trong Kho thông điệp (localStorage)

### 6. Module So sánh tương hợp
- Đọc dữ liệu 2 người từ localStorage
- Tính toán độ tương hợp giữa 2 cung
- Hiển thị phần trăm và mô tả chi tiết

### 7. Module Màu sắc may mắn
- Hiển thị màu may mắn cho từng cung

## 📊 Dữ liệu 12 cung hoàng đạo

| Cung | Ký hiệu | Ngày bắt đầu | Ngày kết thúc |
|------|---------|--------------|---------------|
| Bạch Dương (Aries) | ♈ | 21/03 | 19/04 |
| Kim Ngưu (Taurus) | ♉ | 20/04 | 20/05 |
| Song Tử (Gemini) | ♊ | 21/05 | 20/06 |
| Cự Giải (Cancer) | ♋ | 21/06 | 22/07 |
| Sư Tử (Leo) | ♌ | 23/07 | 22/08 |
| Xử Nữ (Virgo) | ♍ | 23/08 | 22/09 |
| Thiên Bình (Libra) | ♎ | 23/09 | 22/10 |
| Bọ Cạp (Scorpio) | ♏ | 23/10 | 21/11 |
| Nhân Mã (Sagittarius) | ♐ | 22/11 | 21/12 |
| Ma Kết (Capricorn) | ♑ | 22/12 | 19/01 |
| Bảo Bình (Aquarius) | ♒ | 20/01 | 18/02 |
| Song Ngư (Pisces) | ♓ | 19/02 | 20/03 |

## 🏗️ Kiến trúc theo DFD

### Data Stores (Kho dữ liệu)
- **userData1**: Dữ liệu người dùng 1.0 (localStorage)
- **userData2**: Kho người dùng 1.2 (localStorage)
- **zodiacData**: Kho CHĐ (Cung Hoàng Đạo) - 12 cung
- **messageStore**: Kho thông điệp (localStorage)

### Processes (Tiến trình)
- **1.0 RequestAnalyzer**: Phân tích yêu cầu từ người dùng
- **DateValidator**: Kiểm tra định dạng ngày tháng
- **2.0 ZodiacIdentifier**: Xác định cung và ngày sinh
- **3.0 MessageProcessor**: Thực thi chức năng xem thông điệp
- **4.0 DisplayManager**: Hiển thị thông điệp và kết quả

## 📁 Cấu trúc thư mục

```
Zodiac-web/
├── index.html              # Trang chính
├── css/
│   └── style.css          # Stylesheet với galaxy theme
├── js/
│   ├── dataStore.js       # Quản lý kho dữ liệu
│   ├── dateValidator.js   # Validate ngày tháng
│   ├── requestAnalyzer.js # Process 1.0 - Phân tích yêu cầu
│   ├── zodiacIdentifier.js # Process 2.0 - Xác định cung
│   ├── messageProcessor.js # Process 3.0 - Xử lý thông điệp
│   ├── displayManager.js  # Process 4.0 - Hiển thị
│   └── app.js             # Main application
└── README.md
```

## 🚀 Cách sử dụng

### Chạy ứng dụng
1. Mở file `index.html` bằng trình duyệt web
2. Hoặc sử dụng Live Server trong VS Code

### Sử dụng các chức năng

#### 1. Nhập thông tin người dùng 1
- Click vào "Nhập người 1" trên thanh menu
- Điền họ tên, ngày, tháng, năm sinh
- Click "Lưu thông tin"
- Hệ thống sẽ validate và lưu vào localStorage

#### 2. Xem cung hoàng đạo
- Click vào "Xem cung" trên thanh menu
- Hệ thống tự động hiển thị cung của người dùng 1
- Hiển thị biểu tượng, tên cung, đặc điểm

#### 3. Nhập thông tin người dùng 2
- Click vào "Nhập người 2" trên thanh menu
- Phải nhập thông tin người 1 trước
- Điền thông tin tương tự người 1

#### 4. Xem thông điệp
- Click vào "Xem thông điệp"
- Nhập ngày và tháng sinh
- Click "Xem thông điệp"
- Hệ thống sẽ hiển thị thông điệp cho cung tương ứng

#### 5. Quản lý thông điệp
- Click vào "Quản lý thông điệp"
- Chọn cung hoàng đạo từ dropdown
- Thêm thông điệp mới
- Sửa hoặc xóa thông điệp hiện có

#### 6. So sánh tương hợp
- Click vào "Tương hợp"
- Phải có thông tin cả 2 người dùng
- Hệ thống tự động tính toán và hiển thị độ tương hợp

#### 7. Xem màu may mắn
- Click vào "Màu may mắn"
- Nhập ngày và tháng sinh
- Click "Xem màu may mắn"
- Hiển thị các màu may mắn của cung

## 🎨 Giao diện

- **Theme**: Galaxy (Purple/Blue)
- **Màu chính**: Tím (#9b59b6), Xanh dương (#3498db)
- **Responsive**: Hoạt động tốt trên mọi thiết bị
- **Animations**: Smooth transitions và effects
- **Ngôn ngữ**: Tiếng Việt

## 💾 Lưu trữ dữ liệu

- Sử dụng **localStorage** của trình duyệt
- Dữ liệu được lưu trữ cục bộ trên máy người dùng
- Không cần server hay database
- Dữ liệu tồn tại ngay cả khi đóng trình duyệt

## 🔧 Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với galaxy theme
- **JavaScript (Vanilla)**: Logic xử lý
- **localStorage API**: Lưu trữ dữ liệu

## 📝 Luồng xử lý theo DFD

### DFD 1: Nhập ngày tháng năm sinh (Người dùng 1)
1. Người dùng → Gửi yêu cầu → Phân tích yêu cầu
2. Phân tích yêu cầu → Nhập ngày tháng năm sinh
3. Kiểm tra định dạng:
   - Thành công → Hiển thị thông báo → Lưu vào Dữ liệu người dùng 1.0
   - Thất bại → Thông báo nhập lại

### DFD 2: Xác định cung hoàng đạo
1. Người dùng → Phân tích yêu cầu
2. Thực thi và xác định cung → Truy cập Kho CHĐ và Dữ liệu người dùng 1.0
3. Hiển thị kết quả → Trả về người dùng

### DFD 3: Nhập thông tin người dùng 2
1. Người dùng → Yêu cầu → Phân tích yêu cầu
2. Kiểm tra đã có ngày 1:
   - Có → Lưu vào Kho người dùng 1.2
   - Không → Báo lỗi

### DFD 4: Xem thông điệp
1. Người dùng → Yêu cầu xem thông điệp → Phân tích yêu cầu
2. Nhập ngày sinh → Xác định cung
3. Kiểm tra ngày sinh:
   - Hợp lệ → Thực thi xem thông điệp → Truy cập Kho thông điệp
   - Không hợp lệ → Thông báo lỗi
4. Hiển thị thông điệp

## 🛠️ Phát triển

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm dependencies

### Mở rộng
- Có thể thêm backend để lưu trữ dữ liệu trên server
- Thêm nhiều thông điệp mặc định cho các cung
- Tích hợp API để lấy thông điệp từ nguồn bên ngoài
- Thêm tính năng chia sẻ lên mạng xã hội

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

## 👨‍💻 Tác giả

Được xây dựng theo đúng sơ đồ DFD yêu cầu