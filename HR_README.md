# 🏢 Hệ thống Quản lý Nhân sự (HR Management System)

Hệ thống quản lý nhân sự hiện đại và toàn diện dành cho doanh nghiệp vừa và nhỏ, được xây dựng với công nghệ React, TypeScript, Tailwind CSS và shadcn/ui.

## 🎯 Tổng quan

Ứng dụng cung cấp giải pháp hoàn chỉnh cho việc quản lý nhân sự, từ chấm công, tính lương, đến quản lý nghỉ phép và báo cáo phân tích.

## ✨ Tính năng đã hoàn thành

### 🔐 **Xác thực và Bảo mật**

- ✅ Đăng nhập/đăng xuất an toàn
- ✅ Bảo vệ route cho các trang yêu cầu xác thực
- ✅ Quản lý phiên đăng nhập với Context API
- ✅ Phân quyền truy cập

### 📊 **Dashboard (Bảng điều khiển)**

- ✅ Thống kê tổng quan về nhân sự
- ✅ Hiển thị hoạt động gần đây
- ✅ Các hành động nhanh
- ✅ Báo cáo KPI theo thời gian thực

### 👥 **Quản lý Nhân viên**

- ✅ Danh sách nhân viên với tìm kiếm và lọc
- ✅ Thông tin chi tiết nhân viên
- ✅ Thêm/sửa/xóa nhân viên
- ✅ Phân trang và sắp xếp dữ liệu

### ⏰ **Quản lý Chấm công**

- ✅ Theo dõi giờ làm việc hàng ngày
- ✅ Check-in/Check-out với timestamp
- ✅ Tính toán giờ làm thêm tự động
- ✅ Lịch sử chấm công chi tiết
- ✅ Báo cáo chấm công theo ngày/tuần/tháng

### 💰 **Quản lý Lương (Payroll)**

- ✅ Tính toán lương cơ bản và phụ cấp
- ✅ Quản lý overtime với hệ số tăng ca
- ✅ Báo cáo bảng lương chi tiết
- ✅ Lịch sử thanh toán
- ✅ Tính thuế và khấu trừ

### 🏖️ **Quản lý Nghỉ phép**

- ✅ Đăng ký nghỉ phép theo loại
- ✅ Workflow phê duyệt/từ chối đơn
- ✅ Theo dõi số ngày nghỉ còn lại
- ✅ Lịch sử nghỉ phép chi tiết
- ✅ Thống kê theo phòng ban

### 📅 **Lịch làm việc (Work Schedule)**

- ✅ Sắp xếp ca làm việc linh hoạt
- ✅ Quản lý lịch trình nhân viên
- ✅ Phân công công việc theo ca
- ✅ Theo dõi trạng thái ca làm
- ✅ Hiển thị theo tuần/tháng

### 🔔 **Thông báo nội bộ**

- ✅ Thông báo từ công ty
- ✅ Tin tức và thông tin nội bộ
- ✅ Phân loại ưu tiên thông báo
- ✅ Đánh dấu đã đọc/chưa đọc
- ✅ Thống kê tỷ lệ đọc

### 📈 **Báo cáo và Phân tích**

- ✅ Dashboard với metrics tổng quan
- ✅ Báo cáo tháng chi tiết
- ✅ Phân tích theo phòng ban
- ✅ Thống kê KPI và xu hướng
- ✅ Báo cáo chi phí nhân sự

### 👤 **Hồ sơ cá nhân**

- ✅ Quản lý thông tin cá nhân
- ✅ Lịch sử chấm công cá nhân
- ✅ Thông tin nghỉ phép
- ✅ Cập nhật avatar và thông tin

### ⚙️ **Cài đặt hệ thống**

- ✅ Cấu hình thông tin công ty
- ✅ Cài đặt giờ làm việc
- ✅ Cấu hình lương và phụ cấp
- ✅ Chính sách nghỉ phép
- ✅ Cài đặt thông báo

## � Công nghệ và Kiến trúc

### Frontend Stack

- **React 18**: Framework chính với hooks và functional components
- **TypeScript**: Type safety và developer experience tốt hơn
- **Tailwind CSS**: Utility-first CSS framework cho styling nhanh
- **shadcn/ui**: Component library chất lượng cao, customizable
- **Lucide React**: Icon library hiện đại và đẹp mắt

### Kiến trúc và Tools

- **React Router v6**: Client-side routing với protected routes
- **Context API**: State management cho authentication và user data
- **Vite**: Build tool nhanh với hot reload
- **Nx**: Monorepo và workspace management
- **pnpm**: Package manager hiệu quả

## � Hướng dẫn sử dụng

### 🔑 Đăng nhập hệ thống

1. Truy cập `http://localhost:4201`
2. Sử dụng tài khoản demo:
   - **Email**: `admin@company.com`
   - **Password**: `password123`
3. Nhấn "Đăng nhập" để vào hệ thống

### 🏠 Dashboard - Trang chủ

- Xem thống kê tổng quan: tổng nhân viên, chấm công hôm nay, đơn nghỉ phép
- Theo dõi hoạt động gần đây
- Truy cập nhanh các chức năng chính

### 👥 Quản lý Nhân viên

- **Xem danh sách**: Hiển thị tất cả nhân viên với thông tin cơ bản
- **Tìm kiếm**: Theo tên hoặc email
- **Lọc**: Theo phòng ban, chức vụ, trạng thái
- **Thao tác**: Xem chi tiết, chỉnh sửa, xóa nhân viên

### ⏰ Chấm công

- **Xem bảng chấm công**: Theo ngày, tuần, tháng
- **Check-in/Check-out**: Ghi nhận thời gian làm việc
- **Tính overtime**: Tự động tính giờ làm thêm
- **Xuất báo cáo**: Chấm công cá nhân hoặc toàn bộ

### 💰 Quản lý Lương

- **Bảng lương tháng**: Hiển thị lương của tất cả nhân viên
- **Chi tiết lương**: Lương cơ bản, phụ cấp, overtime, khấu trừ
- **Tính toán**: Tự động tính dựa trên chấm công và policy
- **Xuất payslip**: In phiếu lương cá nhân

### 🏖️ Nghỉ phép

- **Tạo đơn**: Nhân viên tạo đơn xin nghỉ phép
- **Phê duyệt**: HR/Manager phê duyệt hoặc từ chối
- **Theo dõi**: Số ngày nghỉ đã dùng và còn lại
- **Lịch sử**: Xem tất cả đơn nghỉ phép

### 📅 Lịch làm việc

- **Xem lịch**: Theo tuần hoặc tháng
- **Phân ca**: Gán nhân viên vào các ca làm việc
- **Quản lý ca**: Tạo, sửa, xóa ca làm việc
- **Thống kê**: Báo cáo ca làm việc

### 🔔 Thông báo

- **Đọc thông báo**: Xem các thông báo từ công ty
- **Phân loại**: Theo mức độ ưu tiên (info, warning, urgent)
- **Đánh dấu**: Đã đọc/chưa đọc
- **Tạo thông báo**: (Chỉ dành cho Admin/HR)

### 📊 Báo cáo và Phân tích

- **KPI Dashboard**: Các chỉ số quan trọng
- **Báo cáo tháng**: Tổng hợp dữ liệu tháng
- **Phân tích**: Theo phòng ban, xu hướng
- **Xuất file**: Excel, PDF cho báo cáo

### 👤 Hồ sơ cá nhân

- **Thông tin cá nhân**: Cập nhật thông tin, avatar
- **Lịch sử chấm công**: Xem chấm công cá nhân
- **Thông tin nghỉ phép**: Số ngày nghỉ, lịch sử đơn
- **Đổi mật khẩu**: Cập nhật bảo mật

### ⚙️ Cài đặt (Admin only)

- **Thông tin công ty**: Tên, địa chỉ, logo
- **Giờ làm việc**: Ca sáng, chiều, tối
- **Chính sách lương**: Lương cơ bản, phụ cấp, overtime
- **Nghỉ phép**: Số ngày nghỉ phép/năm, các loại nghỉ
- **Thông báo**: Cài đặt email, push notification

## 📁 Cấu trúc dự án

```
src/
├── app/                    # App configuration
│   ├── app.tsx            # Main app component
│   └── routes.tsx         # Route definitions
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── pages/            # Page components
│   │   ├── dashboard/    # Dashboard page
│   │   ├── employees/    # Employee management
│   │   ├── attendance/   # Attendance tracking
│   │   ├── payroll/      # Payroll management
│   │   ├── leave-request/ # Leave management
│   │   ├── work-schedule/ # Work scheduling
│   │   ├── notifications/ # Internal notifications
│   │   └── sign-in/      # Authentication
│   ├── molecules/        # Reusable component groups
│   └── ui/              # Base UI components
├── contexts/             # React contexts
├── hooks/               # Custom hooks
├── lib/                # Utilities
└── styles/             # Global styles
```

## � Cài đặt và Chạy ứng dụng

### 🔧 Yêu cầu hệ thống

- **Node.js** >= 18.0.0
- **pnpm** (khuyên dùng) hoặc npm/yarn
- **Git** để clone repository

### 🚀 Cài đặt

```bash
# 1. Clone dự án
git clone [repository-url]
cd hr-management

# 2. Cài đặt dependencies
pnpm install

# 3. Chạy development server
pnpm start
# hoặc
nx serve

# 4. Mở browser tại
http://localhost:4201
```

### 📱 Tài khoản Demo

Sử dụng tài khoản sau để đăng nhập:

- **Email**: `admin@company.com`
- **Password**: `password123`

### 🔨 Scripts khác

```bash
# Build production
pnpm build

# Chạy tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## 💡 Tính năng đặc biệt

### 🎨 **Responsive Design**

- Tối ưu cho desktop, tablet và mobile
- Dark/Light mode (sắp có)
- UI/UX hiện đại với Tailwind CSS

### 🔄 **Real-time Updates**

- Hot reload trong development
- Context-based state management
- Cập nhật dữ liệu tức thời

### 🛡️ **Bảo mật**

- Protected routes với authentication
- Role-based access control
- Session management an toàn

### 📊 **Analytics Dashboard**

- Biểu đồ và metrics trực quan
- KPI tracking theo thời gian thực
- Export báo cáo Excel/PDF

## � Customization

### Themes và Colors

Có thể tùy chỉnh theme trong `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      }
    }
  }
}
```

### Components

Tất cả UI components đều có thể customize trong thư mục `src/components/ui/`

## 🐛 Troubleshooting

### Port đã được sử dụng

Nếu port 4201 đã được sử dụng, ứng dụng sẽ tự động chuyển sang port khác.

### Dependencies conflicts

```bash
# Xóa node_modules và cài lại
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build lỗi

```bash
# Clear cache và build lại
pnpm clear-cache
pnpm build
```

## 🤝 Đóng góp

### Báo lỗi

Tạo issue mới trên GitHub với:

- Mô tả lỗi chi tiết
- Steps để reproduce
- Screenshots (nếu có)
- Environment info

### Feature Request

- Mô tả tính năng mong muốn
- Use case cụ thể
- Mockups hoặc wireframes (nếu có)

### Pull Request

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Tạo Pull Request

## 📞 Hỗ trợ

- **GitHub Issues**: [Link to issues]
- **Email**: support@hrmanagement.com
- **Documentation**: [Link to docs]

---

## 📊 Demo Data

Hệ thống sử dụng mock data để demo các tính năng:

- **150+ nhân viên** từ các phòng ban khác nhau
- **1000+ bản ghi chấm công** trong 3 tháng gần đây
- **200+ đơn nghỉ phép** với các trạng thái khác nhau
- **50+ thông báo** nội bộ
- **Báo cáo và analytics** chi tiết

## 🎯 Use Cases

### Doanh nghiệp nhỏ (< 50 nhân viên)

- Quản lý chấm công đơn giản
- Tính lương cơ bản
- Quản lý nghỉ phép

### Doanh nghiệp vừa (50-200 nhân viên)

- Phân phòng ban chi tiết
- Workflow phê duyệt nghỉ phép
- Báo cáo analytics nâng cao

### Công ty lớn (> 200 nhân viên)

- Multi-department management
- Complex reporting
- Integration với hệ thống khác

---

**🏢 HR Management System v1.0.0**  
_Được phát triển với ❤️ bởi Development Team_  
_Cập nhật cuối: $(new Date().toLocaleDateString('vi-VN'))_

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới license MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- Email: tinn1855@gmail.com
- GitHub: [Your GitHub Profile]

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!
