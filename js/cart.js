/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.querySelector('tbody');
  tableBody.textContent = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tableBody = document.querySelector('tbody');
 
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    let deleteLink = document.createElement('td');
    deleteLink.classList.add('deleteX');
    deleteLink.id = i;
    let cartQuantity = document.createElement('td');
    let cartItemName = document.createElement('td');
    deleteLink.textContent = 'X';
    cartQuantity.textContent = cart.items[i].quantity;
    cartItemName.textContent = cart.items[i].product;

    tr.appendChild(deleteLink);
    tr.appendChild(cartQuantity);
    tr.appendChild(cartItemName);
    tableBody.appendChild(tr);
  }
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  let target = parseInt(event.target.id);

  if(event.target.classList.contains('deleteX')) {
    cart.removeItem(target);
    cart.saveToLocalStorage();
    renderCart();
  }
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
