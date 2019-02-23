var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newScores = req.body.scores;
    var chosen = 41; // arbitrary number higher than max difference possible;
    var chosenIndex = 0; // updated as scores are compared... defaults to first friend in data

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;

      for (var j = 0; j < friends[i].scores.length; j++) {
        diff += Math.abs(newScores[j] - friends[i].scores[j]); // adds absolute value of difference in scores to a total sum
      }

      if (diff < chosen) {
        chosen = diff;
        chosenIndex = i;
      }
    }
    //var compatibility = "Compatibility: " + (((40 - chosen) * 100)/40).toString() + "%";

    friends.push(req.body);
    res.send(friends[chosenIndex]);
  });
};
