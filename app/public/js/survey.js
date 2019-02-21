$(document).ready(function() {
    var scores = [];
    $(".question-response").on("click", function(event) {
        event.preventDefault();
        // string ---> console.log(typeof $(this).attr("data-value"));
        // number ---> console.log(typeof $(this).data("value"));
        scores.push($(this).data("value"));
        console.log(scores);
    });


    $("#submit").on("click", function(event) {
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
  