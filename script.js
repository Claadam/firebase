//addListItem("product-list", {name: "cool product"})

onNewListItem("product-list", function(product) {
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image' height='200'>").attr("src", product.picture)  
  console.log(product.picture)

  $(".product-list-container").append(nameHeader, image)
})