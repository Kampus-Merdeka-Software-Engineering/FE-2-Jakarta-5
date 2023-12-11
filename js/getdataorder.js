const tbody = document.querySelector("tbody");

    const loadData = async () => {
      try {
        const url = await fetch(
          "https://be-2-jakarta-5-production.up.railway.app/order/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const userData = await url.json();
        loadOrderData(userData); // Panggil fungsi untuk menampilkan data
      } catch (err) {
        console.error(err);
      }
    };

    const loadOrderData = (orderData) => {
      const output = orderData.map((order) => {
        return ` 
        <tr> 
          <td>${order.destination_package_id}</td>
          <td>${order.nik}</td> 
          <td>${order.username}</td> 
          <td>${order.total_person}</td>
          <td>${order.total_price}</td> 
          <td>${order.useraddress}</td> 
          <td>${order.createdAt}</td> 
        </tr>`;
      });

      tbody.innerHTML = output.join(''); // Gabungkan string HTML dengan menggunakan join
    };

    loadData(); // Panggil fungsi untuk mengambil dan menampilkan data
