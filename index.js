const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan(`[:date[clf] "UserAgent=:user-agent" ":method :url" Status=:status TempsResponse= :response-time ms`))

/*const test = (req,resp,next)=>{
    console.log("test", req.url)
    next();
};
const test2 = (req,resp,next)=>{
    console.log("test2", req.url)
    next();
};*/
app.get("/",(req,resp,next)=>{
    resp.render("accueil.ejs");
}).get("/about",(req,resp,next)=> {
    next()
},(req,resp,next)=>{
   resp.render("apropos.ejs");
});
app.listen(8555);