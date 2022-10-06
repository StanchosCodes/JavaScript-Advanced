function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];

   let totalPrice = 0;
   let productsList = [];

   shoppingCart.addEventListener('click', addProduct);

   let isCheckedout = false;

   function addProduct(event) {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }

      if (isCheckedout) {
         return;
      }

      if (Array.from(event.target.classList).indexOf('add-product') >= 0) {

         let productElement = event.target.parentElement.parentElement;

         let productName = productElement.querySelectorAll('.product-title')[0].textContent;
         let productPrice = productElement.querySelectorAll('.product-line-price')[0].textContent;

         result.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;

         if (productsList.indexOf(productName) < 0) {
            productsList.push(productName);
         }

         totalPrice += Number(productPrice);
      }
      else { // we admit that the checkout button is clicked
         result.textContent += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
         // event.target.setAttribute('disabled', true);
         isCheckedout = true;
      }
   }
}