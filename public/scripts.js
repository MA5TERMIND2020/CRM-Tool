const showOrders = document.getElementById('showOrders');

const addOrder = (name, price) => {
this.name = name;
this.price = price;
addToList(this.name, this.price);
}

const addToList = (name, price) => {
let amount = 1;
const orderEl = document.createElement('div');
orderEl.classList.add('product-header');
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
}
