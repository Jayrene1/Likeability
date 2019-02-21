$(document).ready(function() {
    $("#confirm").on("click", function(event) {
        event.preventDefault();
    
        var newFriend = {
            name: $("#name").val().trim(),
            image: $("#image").val().trim(),
        };
    
        $.post("/api/friends", newFriend).then(function(data) {
            console.log(data);
        });
    
        $("#name").val("");
        $("#image").val("");
    });
}); 
  