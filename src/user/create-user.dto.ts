//DTO sẽ là lớp chứa dữ liệu mà bạn nhận từ client trong request body. Nó giúp xác định và kiểm tra kiểu dữ liệu khi gửi tới API.

export class CreateUserDto {
  name: string;

  email: string;
  age?: number; // age is optional
}
