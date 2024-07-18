const dotenv = require('dotenv').config();
const express = require("express");
const cors = require('cors');
const path =require('path');
const app = express();

require('./config/db').default;
const port = process.env.PORT || 8090;

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.status(200).json({message: 'Welcom to the API'});
});
app.listen(port, ()=>{
    console.log(`server listen in port ${port}`);
});


// Serve frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  
    app.get("*", (req, res) =>
      res.sendFile(
        path.resolve(__dirname, "../", "client", "build", "index.html")
      )
    );
  } else {
    app.get("/", (req, res) => res.send("Please set to production"));
  }
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });