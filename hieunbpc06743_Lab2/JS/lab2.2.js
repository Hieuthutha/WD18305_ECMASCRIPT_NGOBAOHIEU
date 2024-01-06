const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list; // Sử dụng destructuring để bỏ qua 2 phần tử đầu tiên và lấy các phần tử còn lại vào arr
  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
