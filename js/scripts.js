//business logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.pizzaCost = function (number) {
  if (this.size === "Small") {
    return 8 + (number * 0.75);
  } else if (this.size === "Medium") {
    return 10 + (number * 0.75);
  } else {
    return 12 + (number * 0.75);
  }
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    $("#order-details").show();

    var pizzaSize = $("#new-size").val();
    var newPizza = new Pizza(pizzaSize);
    $(".size").text(newPizza.size);

    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      var pizzaTopping=$(this).val();
      newPizza.toppings.push(pizzaTopping);
    });

    newPizza.toppings.forEach(function(topping) {
      $("ul#toppings").append("<li>" + topping + "</li>");
    });

    var toppingsNumber = newPizza.toppings.length;
    $(".cost").text(newPizza.pizzaCost(toppingsNumber));
    
    $('#new-order').hide();
  });
});
