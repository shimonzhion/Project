const dotenv = require('dotenv').config();
const express = require("express");
const cors = require('cors');
const path =require('path');
const app = express();
const cookieParser = require('cookie-parser');
const corsOptions = {
  origin:'http://localhost:5173',
  credentials: true, 
}

require('./config/db').default;
const port = process.env.PORT || 8090;

const userRouter = require("./routes/user-route");


app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(cookieParser())



app.get('/', (req,res)=>{
    res.status(200).json({message: 'Welcom to the API'});
});

app.use('/api/user',userRouter)
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