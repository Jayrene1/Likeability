$("#to-survey").on("click", function(event) {
    event.preventDefault();
    var profileInfo = {
        name: $("#name").val().trim(),
        photo: $("#image").val().trim(),
    };
    console.log(profileInfo);
    localStorage.setItem("profileInfo", JSON.stringify(profileInfo));

    $("#name").val("");
    $("#image").val("");
    window.location.href = window.location.href + 'survey';
});