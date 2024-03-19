const fileWriter=require("./util/write-to-file")
module.exports=(req,res)=>{
let baseUrl=req.url.substring(0,req.url.lastIndexOf('/'));
let id=req.url.split('/')[3]
console.log(baseUrl+"/"+id)
 if(baseUrl==="/api/movies" && id<=req.movies.length){
    let data=req.movies.filter((ele)=>ele.id!=id)
    
    fileWriter(data)
    res.writeHead(204,{'content-type':'application/json'});
    res.end()   
 }else{
    res.writeHead(404,{'content-type':'application/json'});
    res.end(JSON.stringify({title:"unknown route",message:"operation not allowed"}),"utf-8")
 }
}