// Fetch dữ liệu của population
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  .then(response => response.json())
  .then(({ data }) => {
    const populationList = document.getElementById('populationList');

    // Sử dụng map để tạo mảng HTML từ dữ liệu API
    const listItems = data.map((item, index) => `
      <div class="row">
        <div class="col">${index + 1}</div>
        <div class="col">${item.Nation}</div>
        <div class="col">${item.Year}</div>
        <div class="col">${item.Population}</div>
      </div>
    `);

    // Sử dụng spread operator để nối các phần tử của mảng thành một chuỗi HTML
    populationList.innerHTML = listItems.join('');
  })
  .catch(error => {
    console.log('There was an error fetching the data: ', error);
  });


// Fetch dữ liệu của students
  fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
  .then(response => response.json())
  .then(data => {
    const studentList = document.getElementById('studentList');

    // Sử dụng map để tạo mảng HTML từ dữ liệu API
    const listItems = data.map((student, index) => `
      <div class="row align-items-center border-bottom py-2">
        <div class="col">${index + 1}</div>
        <div class="col"><img src="${student.avatar}" alt="Avatar" class="img-fluid" style="max-width: 50px;"></div>
        <div class="col">${student.name}</div>
        <div class="col">${student.createdAt}</div>
      </div>
    `);

    // Sử dụng spread operator để nối các phần tử của mảng thành một chuỗi HTML
    studentList.innerHTML = listItems.join('');
  })
  .catch(error => {
    console.log('There was an error fetching the data: ', error);
  });
