  // Fetch dữ liệu từ API population
  fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => response.json())
    .then(data => {
      const populationList = document.getElementById('populationList');
      let index = 1;

      // Duyệt qua dữ liệu từ API và thêm vào danh sách
      data.data.forEach(item => {
        const listItem = `
          <div class="row">
            <div class="col">${index}</div>
            <div class="col">${item.Nation}</div>
            <div class="col">${item.Year}</div>
            <div class="col">${item.Population}</div>
          </div>
        `;
        populationList.innerHTML += listItem;
        index++;
      });
    })
    .catch(error => {
      console.log('There was an error fetching the data: ', error);
    });

// Fetch dữ liệu từ API students
fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then(response => response.json())
    .then(data => {
      const studentList = document.getElementById('studentList');
      let index = 1;

      // Duyệt qua dữ liệu từ API và thêm vào danh sách
      data.forEach(student => {
        const listItem = `
          <div class="row align-items-center border-bottom py-2">
            <div class="col">${index}</div>
            <div class="col"><img src="${student.avatar}" alt="Avatar" class="img-fluid" style="max-width: 50px;"></div>
            <div class="col">${student.name}</div>
            <div class="col">${(student.createdAt)}</div>
          </div>
        `;
        studentList.innerHTML += listItem;
        index++;
      });
    })
    .catch(error => {
      console.log('There was an error fetching the data: ', error);
    });