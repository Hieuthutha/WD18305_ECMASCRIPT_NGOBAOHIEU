const fs = require('fs').promises;
const axios = require('axios');

async function fetchData() {
  try {
    // Đọc dữ liệu từ file
    const fileData = await fs.readFile('./data.json', { encoding: 'utf8' });
    console.log('Data loaded from disk', fileData);

    // Tải dữ liệu từ URL
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Data downloaded from URL', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Gọi hàm fetchData
fetchData();
