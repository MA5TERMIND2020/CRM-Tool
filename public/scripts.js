const showOrders = document.getElementById('showOrders');
const priceArray = [];

const addOrder = (name, price) => {
this.name = name;
this.price = price;
addToList(this.name, this.price);
}

const addToList = (name, price) => {
// console.log(priceArray);
let amount = 1;
const orderEl = document.createElement('div');
orderEl.classList.add('order-row');
orderEl.innerHTML = `
    <div class="product-title">
    <i class="fa fa-times-circle"></i>
    <span>${this.name}</span>
    </div>
    <div class="cost">$${this.price},00</div>
    <div class="quantity">
      <i class="fa fa-chevron-circle-left"></i>
      <span>${amount}</span>
      <i class="fa fa-chevron-circle-right"></i>
    </div>
    <div class="total">
      $${price * amount},00
    </div>
    `;

showOrders.appendChild(orderEl);

priceArray.push(price);
totalAmount();
}

// const totalPrice = (arr) => {
//   let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//     console.log(sum);
// }

const totalAmount = () => {
  const totalPrice = document.getElementById('totalprice');
  totalPrice.innerText = priceArray.length;
  // priceArray.reduce((total, price) => total + price);
  console.log(priceArray)
}
