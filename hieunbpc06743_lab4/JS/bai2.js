const axios = require('axios');


// 1.
async function fetchUrls(urls) {
const results = [];
for (const url of urls) {
const res = await axios.get(url);
results.push(res);
}
return results;
}

/*
Vòng Lặp for...of: Sử dụng một vòng lặp for...of để lặp qua từng URL trong mảng urls.
Sử dụng await trong vòng lặp để đợi cho mỗi yêu cầu HTTP hoàn thành trước khi chuyển sang URL tiếp theo.
Điều này đảm bảo rằng các yêu cầu được thực hiện theo thứ tự trong mảng urls.
*/




// 2.
async function fetchUrlsParallel (urls) {
const results = await Promise.all( urls.map(function(url) {
return axios.get(url);
})
);
return results;
}

/*
Sử dụng Promise.all cùng với map để thực hiện các yêu cầu HTTP đồng thời.
Mỗi yêu cầu được thực hiện trong một promise riêng,
và Promise.all đảm bảo rằng tất cả các promise đều được giải quyết (hoặc một promise bị từ chối) trước khi hàm tiếp tục.
Không Chờ Đợi Theo Thứ Tự: Các yêu cầu HTTP không chờ đợi lẫn nhau,
mà thay vào đó chúng được gửi đồng thời. Điều này có thể làm tăng hiệu suất nếu việc thực hiện
các yêu cầu mạng không phụ thuộc vào thứ tự.
*/