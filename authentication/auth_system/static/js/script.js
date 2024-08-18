// Initialize DOM elements
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// Initialize variables
let mood = "create";
let tmp;

// Calculating total
function getTotal() {
    if (price.value != 0) {
      let result = +price.value + +taxes.value + +ads.value - +discount.value;
      total.innerHTML = result;
      total.style.backgroundColor = "green";
    } else {
      total.innerHTML = "";
      total.style.backgroundColor = "#db1d0f";
    }
  }

  // Load data from localStorage
  let dataPro;
  if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
  } else {
    dataPro = [];
  }


// Submit button click event handler
// This function create a new object (collect data and store it in 'dataPro' array)
submit.onclick = function () {
    let newPro = {
      title: title.value.toLowerCase(),
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.innerHTML,
      count: count.value,
      category: category.value.toLowerCase(),
    }
    // Create any number of products at once
    if (mood === "create") {
        if (newPro.count > 1) {
          for (let i = 0; i < newPro.count; i++) {
            dataPro.push(newPro);
          }
        } else {
          dataPro.push(newPro);
        }
      } else {
        dataPro[tmp] = newPro;
        mood = "create";
        submit.innerHTML = "Create";
        count.style.display = "block";
      }
      // Save local storage
      localStorage.setItem("product", JSON.stringify(dataPro));
      clearData();
      showData();
    };


// Function to clear input fields when we clicking create button
function clearData() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
  };



// Function to display data on HTML table
function showData() {
    let table = "";
    for (let i = 0; i < dataPro.length; i++) {
      table += `
              <tr>
                     <td>${i+1}</td>
                     <td>${dataPro[i].title}</td>
                     <td>${dataPro[i].price}</td>
                     <td>${dataPro[i].taxes}</td>
                     <td>${dataPro[i].ads}</td>
                     <td>${dataPro[i].discount}</td>
                     <td>${dataPro[i].total}</td>
                     <td>${dataPro[i].category}</td>
                     <td><button onclick="updateData(${i})" id="update">update</button></td>
                     <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
              </tr>
              `
    }
    document.getElementById("tbody").innerHTML = table;
    let btnDelete = document.getElementById("deleteAll");
    if (dataPro.length > 0) {
      btnDelete.innerHTML = `
          <button onclick="deleteAll()">Delete All (${dataPro.length})</button>
          `;
    } else {
      btnDelete.innerHTML = "";
    }
  }
  
// Keep this function global to make sure the data on table always visible
showData();  


// Function to delete a single item
function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro); // Get and update the data from dataPro
    showData();
  }


  // function to delete all items 
  function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();
  }



// Function to update data
function updateData(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display = "none";
    category.value = dataPro[i].category;
    submit.innerHTML = "Update";
    mood = "update";

    // Add the variable 'tmp' to make the index variable (i) global
    tmp = i;

    // Scroll to the top smoothly when updating data
    scroll({
        top: 0,
        behavior: "smooth",
      });
}