

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#yourname").val();
    console.log(name);
    var beverage = $("#beverage").val();
    console.log(beverage);
    var food = $("#food").val();
    console.log(food);
    $("#output").text(name + " " + beverage + " " + food)
    return;
  });
});
