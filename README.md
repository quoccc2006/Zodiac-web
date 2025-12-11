# ✨ Website Cung Hoàng Đạo (Zodiac)

Website chiêm tinh học với giao diện đẹp mắt theo chủ đề galaxy, cung cấp đầy đủ thông tin về 12 cung hoàng đạo và các tính năng tương tác.

## 🌟 Tính năng

### 1. Hiển thị 12 Cung Hoàng Đạo
- Hiển thị đầy đủ 12 cung hoàng đạo với biểu tượng Unicode đẹp mắt
- Thông tin chi tiết về mỗi cung: tên tiếng Việt, tên tiếng Anh, ngày tháng, tính cách
- Click vào card để xem mô tả chi tiết trong modal
- Giao diện cards với hiệu ứng hover sinh động

### 2. Màu Sắc May Mắn Trong Ngày
- Hiển thị màu may mắn cho từng cung hoàng đạo
- Màu sắc thay đổi theo ngày hiện tại (dựa trên thuật toán)
- Hiển thị trực quan với color box và tên màu

### 3. Quản Lý Thông Điệp (CRUD)
- **Thêm** thông điệp mới cho từng cung hoàng đạo
- **Sửa** thông điệp đã có
- **Xóa** thông điệp với xác nhận
- Lưu trữ vĩnh viễn trong localStorage (không mất khi refresh)

### 4. Tìm Cung Hoàng Đạo
- Form nhập: Họ tên, ngày sinh, tháng sinh
- Tự động xác định cung hoàng đạo dựa trên ngày tháng sinh
- Hiển thị kết quả với biểu tượng, mô tả chi tiết

### 5. So Sánh Tương Hợp
- Nhập thông tin 2 người (họ tên, ngày sinh, tháng sinh)
- Tính toán độ tương hợp dựa trên ma trận compatibility
- Hiển thị phần trăm tương hợp (%)
- Mô tả chi tiết về mối quan hệ
- Lời khuyên cụ thể cho từng cặp đôi

## 🎨 Thiết kế

- **Theme**: Galaxy purple/blue với hiệu ứng sao lấp lánh
- **Responsive**: Hoạt động tốt trên mọi thiết bị (mobile, tablet, desktop)
- **Animation**: Hiệu ứng mượt mà khi hover, click, và hiển thị nội dung
- **Typography**: Font chữ rõ ràng, dễ đọc
- **Icons**: Sử dụng Unicode symbols cho các cung hoàng đạo

## 🚀 Cách sử dụng

### Chạy trực tiếp
1. Clone repository này
2. Mở file `index.html` bằng trình duyệt web
3. Không cần cài đặt hoặc chạy server

### Cấu trúc thư mục
```
Zodiac-web/
├── index.html          # Trang chính
├── css/
│   └── style.css       # Styles với theme galaxy
├── js/
│   └── app.js          # Logic JavaScript
└── README.md           # Tài liệu này
```

## 📊 Dữ liệu 12 Cung Hoàng Đạo

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

## 💡 Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: 
  - Flexbox & Grid layout
  - Gradient backgrounds
  - Animations & Transitions
  - Media queries cho responsive
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - LocalStorage API
  - Date calculations
  - Event handling

## 🌈 Tính năng nổi bật

- ✅ Không cần internet sau khi tải trang
- ✅ Không cần server hoặc backend
- ✅ Dữ liệu được lưu trữ local (localStorage)
- ✅ Responsive 100% trên mọi thiết bị
- ✅ Hiệu ứng animation mượt mà
- ✅ Giao diện thân thiện, dễ sử dụng
- ✅ Mã nguồn clean và có comment

## 📱 Trình duyệt hỗ trợ

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Tác giả

Made with ❤️ for astrology lovers

## 📄 License

MIT License - Feel free to use and modify!