app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


// Handle incoming survey results & compatibility logic
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);
  res.json(newFriend);
});
