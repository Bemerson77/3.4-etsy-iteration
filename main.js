
// 1. Calculate the average price of all items.
function averagePrice(){
var priceItem = 0;
  items.forEach(function(num) {
    priceItem += num.price;
  });
  console.log("the average price is: ", (priceItem/(items.length)));
}
averagePrice();

// 2. Get an array of items that cost between 14.00 and 18.00 USD


function itemsBetween(value){

  return (value.price >= 14 && value.price <= 18);

}
console.log(items.filter(itemsBetween));
