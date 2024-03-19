const requestBodyParser=require("./util/body-praser")
const fileWriter=require("./util/write-to-file")

module.exports=async (req,res)=>{
    console.log("dealing with post request...")
    if(req.url==="/api/movies"){
        try{
            const body=await requestBodyParser(req)
            body.id=parseInt(req.movies[req.movies.length-1].id)+1;
            req.movies.push(body);
            fileWriter(req.movies)
            
            res.writeHead(201,{'content-type': 'application/json'});
            res.end();
            //res.write(JSON.stringify({"message":"post request response"}));
            res.end()
        }catch(err){
            console.log(err)
            res.codeStatus=404
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({"title":"validation failed","message":"request body is invalid"}));
            res.end()
        }
    }else{
        res.codeStatus=404
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({"title":"Route not found","message":"invalid routing"}));
        res.end()
    }
}