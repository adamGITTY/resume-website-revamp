const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
process.stdin.setEncoding("utf8");
let portNumber = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/pages'));


app.get("/", (request, response) => {
    response.render("index", {});
})

app.get("/education", (request, response) => {
    response.render("education", {});
})

app.get("/skills", (request, response) => {
    response.render("skills", {});
})

app.get("/experience", (request, response) => {
    response.render("experience", {});
})

app.get("/contact", (request, response) => {
    response.render("contact", {});
})



app.get("/p-mig", (request, response) => {
    response.render("pmig", {});
})

app.get("/p-af", (request, response) => {
    response.render("paf", {});
})

app.get("/p-res", (request, response) => {
    response.render("pres", {});
})

app.get("/p-rei", (request, response) => {
    response.render("prei", {});
})

app.get("/p-our", (request, response) => {
    response.render("pour", {});
})

app.get("/p-nfa", (request, response) => {
    response.render("pnfa", {});
})

app.get("/p-bus", (request, response) => {
    response.render("pbus", {});
})

app.get("/p-soc", (request, response) => {
    response.render("psoc", {});
})

app.get("/p-ta", (request, response) => {
    response.render("pta", {});
})

app.get("/p", (request, response) => {
    response.render("p", {});
})

app.get("/p-gam", (request, response) => {
    response.render("pgam", {});
})

app.get("/p-app", (request, response) => {
    response.render("papp", {});
})

app.get("/p-don", (request, response) => {
    response.render("pdon", {});
})

app.get("/p-tea", (request, response) => {
    response.render("ptea", {});
})

app.listen(portNumber);
console.log(`Web server started and running at http://localhost:${portNumber}`);