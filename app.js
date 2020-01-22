const express = require ("express")
const bodyParser = require ("body-parser")
const request = require ("request")
const app = new express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get ("/", function(req,res){
  res.sendFile(__dirname + "/signup.html")
})

app.post ("/", function (req,res) {
var firstname = req.body.fname
var lastname = req.body.lname
var email = req.body.email
console.log (firstname + lastname + email)
})

app.listen (3000, function () {
  console.log ("NewsLetter server started on port 3000")
})

//95789433cb7afcf4b042b38ead9653e2-us4
