// Cho người dùng nhập vào bằng prompt 
let a = parseFloat(prompt("Nhập số thứ nhất:"));
let b = parseFloat(prompt("Nhập số thứ hai:"));
let c = parseFloat(prompt("Nhập số thứ ba:"));

let soLonNhat, soNhoNhat;

if (a >= b && a >= c) {
  soLonNhat = a;
} else if (b >= a && b >= c) {
  soLonNhat = b;
} else {
  soLonNhat = c;
}

if (a <= b && a <= c) {
  soNhoNhat = a;
} else if (b <= a && b <= c) {
  soNhoNhat = b;
} else {
  soNhoNhat = c;
}

console.log("Số lớn nhất là: " + soLonNhat);
console.log("Số nhỏ nhất là: " + soNhoNhat);