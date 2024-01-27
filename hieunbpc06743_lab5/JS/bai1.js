/* 
    Trong JavaScript, từ khóa "this" thường được sử dụng để tham chiếu đến đối tượng
    mà nó đang được sử dụng trong ngữ cảnh hiện tại.
    Giá trị của "this" phụ thuộc vào cách mà một hàm được gọi.
 */

// Trong ví dụ này của em là dùng this trong trường hợp sử dụng hàm khởi tạo ( constructor )

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

var person1 = new Person("Híu", 20);
person1.sayHello();
