const exp = require("constants");
const express =require("express");

const path = require("path")

const app = express();
const PORT= 3000;

app.unsubscribe(express.static(path.join(__dirname, 'static')));
app.use(express.static("main"));

app.get("/", (req, res) =>{

    res.sendFile(__dirname + "/index.html");
   
   });




app.listen(PORT, function() {

    console.log("server-ku wuu shaqaynayaa");
});

