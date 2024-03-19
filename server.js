const getReq=require('./get-request');
const postReq=require('./post-request');
const deleteReq=require('./delete-request');
const putReq=require('./put-request');

let movies=require('./data/dummy-data');

require("dotenv").config()
console.log("sever building...")

const http = require("http")

const PORT = process.env.PORT
const sever = http.createServer((req, res) => {
    req.movies=movies
    switch (req.method) {
        case "GET":
            getReq(req, res)
            break;
        case "POST":
            postReq(req, res)
            break;
        case "DELETE":
            deleteReq(req, res)
            break;
        case "PUT":
            putReq(req, res)
            break;
        default:
            res.statusCode=404
            res.setHeader("Content-Type", "text/html")
            res.write(JSON.stringify({title:"UNKOWN METHOD",message:"not available"}))
            res.end()

    }
})

sever.listen(PORT, () => {
    console.log("sever started on port nunber" + PORT)
})