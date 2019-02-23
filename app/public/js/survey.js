$(document).ready(function() {
    $(function () { // initializes bootstrap tooltips
        $('[data-toggle="tooltip"]').tooltip()
      });
    
    var profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

    var questions = [
        "😸 Cats 😿",
        "🤘 Metal Music 🤘",
        "👸 Monarchies 🤴",
        "Social Media 🤳🏽", 
        "Partying 🥂 🍷 🥃 🍸 🍹",
        "Fitness 🏋🏼‍ 🏋🏽‍ 🏋🏾‍",
        "Monogamy 💞",
        "🥖 French People 🥐",
        "Will Smith as the Genie 🧞‍",
        "👩🏽‍⚕️ Western Medicine 👨🏽‍⚕️"
    ];
    var currentQuestion = 0;
    var scores = [];

    function iterateQuestion() {
        if (currentQuestion <= 9) {
            $("#question-text").text(questions[currentQuestion]);
        }
        else {
            $("#submit").show();
            $("#question-text").hide();
            $(".question-response").hide();
        }
    }
    iterateQuestion();

    $(".question-response").on("click", function(event) {
        event.preventDefault();
        scores.push($(this).data("value"));
        console.log(scores);
        currentQuestion++;
        iterateQuestion();
    });


    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log(scores);
        var newFriend = {
            name: profileInfo.name,
            photo: profileInfo.photo,
            scores: scores
        };
        console.log(newFriend);
    
        $.post("/api/friends", newFriend)
            .then(function(data) {
                console.log("survey.html", data);
                $("#modal-name").text(data.name);
                $("#modal-image").attr("src", data.photo);
                $("#modal").modal('show');
            });
    });
}); 
  