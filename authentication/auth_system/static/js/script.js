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
dataPro.push(newPro);
localStorage.setItem("product", JSON.stringify(dataPro));
showData();
};