
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
console.log("Items that cost between $14.00 USD and $18.00 USD: ");  console.log(items.filter(itemsBetween));

// 3. find the item with "GBP" currency code.

//* I used .filter to creat a new string with only the item that had "GBP"


var GBPproducts = items.filter(function(product){
  if(product.currency_code == "GBP"){
    return true;
  }
});
console.log(GBPproducts);
console.log(GBPproducts[0].title + " £" + GBPproducts[0].price);

// 4. Find the Items that are made of wood.

// I filtered out everything that did not have materials made of wood using .filter and indexOf.
// Then I used forEach to print the titles of each.

var woodObjects = items.filter(function(objects){
if(objects.materials.indexOf("wood") != -1){
    return true;
  }

});

woodObjects.forEach(function(logTitles){
  console.log(logTitles.title);
  return logTitles.title;
});


// 5. Find which items are made of eight or more materials.

// I filtered out all of the items that did not have 8 or more materials and then used a forEach to print to the console.

var eightOrMore = items.filter(function(objects){
  if(objects.materials.length >= 8){
    return true
  }
});

eightOrMore.forEach(function(listing){
  console.log(listing.title + ' has ' + listing.materials.length + " materials: " + listing.materials);
});

// 6. Show how many Items were made by their seller.

// I filtered out all of the items that were not made by their sellers.

var madeBySeller = items.filter(function(objects){
  if(objects.who_made == 'i_did'){
    return true;
  }
});

console.log(madeBySeller.length + ' were made by their sellers');
