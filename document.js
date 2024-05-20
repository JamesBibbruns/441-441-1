/'James Renhuaiyuan 223190623'/
const addButton = document.querySelectorAll('.add');
  const cartTable = document.getElementById('cart-table');
  const cartTotal = document.getElementById('cart-total');
  let totalPrice = 0;

  addButton.forEach(button => {
    button.addEventListener('click', function() {
      const course = this.parentNode.querySelector('h2').textContent;
      const price = parseInt(this.parentNode.querySelector('p').textContent);
      const quantity = parseInt(this.parentNode.querySelector('.quantity-input').value);
      const total = price * quantity;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course}</td>
        <td>${quantity}</td>
        <td>$${total.toFixed(2)}</td>
      `;
      cartTable.appendChild(row);

      totalPrice += total;
      cartTotal.textContent = totalPrice.toFixed(2);
    });
  });

  function checkout() {
    alert(`Total amount to pay: $${totalPrice.toFixed(2)}`);
    // Additional checkout logic can be added here
  }

  function clearCart() {
    cartTable.innerHTML = '';
    totalPrice = 0;
    cartTotal.textContent = totalPrice.toFixed(2);
  }
