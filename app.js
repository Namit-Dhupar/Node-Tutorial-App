let express = require("express");

let app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    let campArray = [
        { name: "Forest Creek", images:"https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg" },
        { name: "Snowy Mountains", images:"https://cdn.pixabay.com/photo/2018/05/16/15/49/camper-3406137_960_720.jpg" },
        { name: "Waterfalls", images:"https://cdn.pixabay.com/photo/2017/07/17/16/16/nature-2512932_960_720.jpg" }
    ]

    res.render("campgrounds", {campgrounds: campArray})
})

app.listen("3000", function(){
    console.log("Server Listening in Port 3000")
})