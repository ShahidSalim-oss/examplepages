console.log('Hi from Pakistan and Germany. Shahid test');

if (window.location.href.indexOf("franky") > -1) {
} else if (window.location.href.indexOf("/product/") > -1) {
  console.log("product page");
  let listItems = document.querySelectorAll('[name="add-to-cart"]');
   console.log(listItems);
} else if (window.location.href.indexOf("/product-category/") > -1) {
  console.log("category page");
} else if (window.location.href.indexOf("/cart/") > -1) {
  console.log("cart page");
} else if (window.location.pathname.split('/').length <2) {
  console.log("home page");
} else {
  console.log("something else");
}



