$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#changeDevour").on("click", function(event) {
    var id = $(this).data("id");
    
    var newDevourState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("Burger Devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
});
