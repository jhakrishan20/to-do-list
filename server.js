const express = require("express");
const { connectMongoose , User } = require("./conn.js");
const expressSession = require("express-session");
const app = express();

connectMongoose();
app.use(express.static("public"));
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(expressSession({ secret: "secret", resave:false, saveUninitialized:false}
));

let newItem = [];
app.get("/",(req,res)=>{
    // res.send("this is home page");
    res.render("index",{items:newItem});
});

app.post("/",(req,res)=>{
  let save = req.body.save;
  let dlt = req.body.delete;
  let newItems = req.body.newItem;
  
  if(save){
  newItem.push(newItems);
  }
  else if(dlt){
    newItem.pop(newItems);
  }
  res.redirect("/");
})

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:5500`);
});
