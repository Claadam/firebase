//addListItem("product-list", {name: "cool product"})

onNewListItem("product-list", function(product) {
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image' height='200'>").attr("src", "http://geekplanet.ca/portal/wp-content/uploads/2012/04/strawberrymonster.jpg")  
  console.log(product.picture)

  $(".product-list-container").append(nameHeader, image)
})