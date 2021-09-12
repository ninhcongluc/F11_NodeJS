// This file summary about new featues in JS ES6
/*
    - 1. Strict Mode 
    - 2. Default Parameters
    - 3. Destructuring
    - 4. Spread Operator
    - 5. Template Literals/ Multiline String
    - 6. Arrow Functions 
    - 7. Scope, let, const
    - 8. Class
*/

// =========================================================


/**
 * 1. Strict mode (recommend kiểm tra từng đầu mục)
 * - Là  chế độ nghiêm ngặt của javascript. Nó giúp chương trình chạy của ta nghiêm ngặt hơn về mặt cú pháp
 * - Để sử dụng: Đặt ở đầu file hoặc đặt ở đầu 1 function
 * - Nó có 1 số hữu dụng nhứ : 
 * + Báo lỗi khi chưa khai báo biến đã gán giá trị (1)
 * + Báo lỗi khi sử dụng từ khóa delete để xóa biến hay hàm (2)
 * + Các tham số của hàm k dc đặt trùng nhau (3)
 * + Không được khai báo biến dưới dạng hệ nhị phân (4)
 * + Không được ghi đè lên thuộc tính chỉ được phép đọc (5)
 * + Không được khai báo biến bằng tên Keywords (6)
 */

// ============================================================

/**
 * 2. Default Parameter
 * - Nó dùng để khởi tạo giá trị mặc định cho params. 
 * - Cách dùng và khi nào dùng: Muốn params nhận giá trị khởi tạo đó khi nó không được truyền giá trị cho đối số 
 * - Vì sao sử dụng: Các thức dùng ngắn hơn, kiểu dùng trước là dùng toán tử 3 ngôi
 */


// ==============================================================

/**
 * 3. Destructuring: Là cú pháp giúp ta hủy cấu trúc của 1 array hay 1 object
 * - Cách dùng: Cho các biến muốn lấy kết quả vào 1 mảng hay object rỗng và gán bằng vs 1 mảng hay object mà mình muốn lấy giá trị.
 * Có thể dùng  rest params để lấy các thành phần còn lại
 * - Hoàn cảnh dùng : Khi muốn lấy giá trị  thuộc tính của 1 object hay giá trị phần tử của 1 mảng thành các biến riêng biệt
 * - Lý do dùng : Cách thức dùng ngắn gọn hơn 
 */

// =================================================================

/**
 * 4. Spread Operator: 
 * - Định nghĩa: Nó là toán tử giải
 * - Dùng để: giải nén hay unpack những phần tử của đối tượng ( array, set, map)
 * - Cách sử dụng: Bắt đầu bằng dầu ... 
 * - Dùng làm gì: 
 * + ) Dùng trong trường hợp coppy mảng
 * + ) Nối  mảng  ... 
 */


/**
 * Phân biệt sự khác nhau giữa toán tử spread, và rest params
 *  + Spread dùng để  giải nén hay unpack những phần tử của đối tượng có thể lặp( array, set, map)
 *  + Rest: dùng để gói các thành phần còn lại vào mảng 
 */


// =======================================================================

/**
 * 5. Template  Literals
 * - Định nghĩa: Nó là hình thức tạo chuỗi mới trong Javascript
 * - Sử dụng: Chuỗi sẽ dc chứa trong dấu ``(blackticks)
 * - Lý do sử dụng : 
 * + Nó giúp thể hiện multiline string dễ dàng
 * + Nó có tính năng nội suy: dễ dãng nhúng biến hoặc biểu thức vào chuỗi
 * + Ngoài ra còn có tính năng nâng cao hơn là : Tagged Template > 
 *   Cho phép parse template string với 1 function(Cảm thấy khó đọc nên ít dùng - ý kiến cá nhân)
 */


// =============================================================================

/**
 * 6. Arrow Function
 * - Là hàm mũi tên, nó cung cấp các cú pháp mới để viết hàm 
 * - Việc sử dụng arrow function nó có những ưu điểm cũng như nhược điểm
 * - Về mặt ưu điểm : 
 * + Cú pháp ngắn gọn, dễ nhìn, đẹp mắt 
 * + Sử dụng tốt trong 1 số trường hợp như dùng thao tác với mảng, hay callback function
 * - Về mặt nhược điểm: 
 * + Cẩn thận khi sử dụng trong Global Scope (vì k dc hoist)
 * + Không được sử dụng làm constructor  như function ( nếu sử dụng từ khóa new vs arrow function nó sẽ throw error)
 * + Không được dùng làm function trong 1 object (arrow function khong bind this - Nó không định nghĩa giá trị this của riêng nó như funtion)
 */

// ===============================================================================

/**
 * 7. Class (ở bản es6 cung câp thêm khái niệm class, trước đây thường sử dụng constructure function và kế thừa bằng prototype)
 *- Định nghĩa : Là 1 bản thiết kế để tạo các đối tượng. Trong class có 2 thành phần là properties(các thuộc tính) và method(các hành động)
 *- Sử dụng: Để tạo nhiều đối tượng có cùng khuôn mẫu
 *- Cách dùng: Trong class có 1 constructure nó giúp khởi tạo giá trị cho các thuộc tính của đối tượng, chúng ta có thể sử dụng function để
 * thể hiện hành vi của đối tượng đó.
 * - Lý do sử dụng: 
 * + Cú pháp chuẩn oop (get va set, constucture, inheritance(super))
 * 
 */

