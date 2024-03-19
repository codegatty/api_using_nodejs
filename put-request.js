const bodyparser=require('./util/body-praser')
const fileWriter=require('./util/write-to-file')

module.exports=async (req,res)=>{
    let baseUrl=req.url.substring(0,req.url.lastIndexOf('/'));
    const id=req.url.split('/')[3]
   
    console.log("dealing with put method "+baseUrl)

    if(baseUrl==="/api/movies") {
       
        try{
            const body=await bodyparser(req)
            const index=req.movies.findIndex((ele)=>ele.id==id)
            
            
            if(index==-1){
                res.writeHead(404,{'content-type':'application/json'});
                res.end(JSON.stringify({title:"Not found",message:"movie not found with that id"}),"utf-8")
            }
            req.movies[index]={id,...body}
            fileWriter(req.movies)
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify(req.movies[index]))

        }catch(err){
            console.log(err)
            res.writeHead(404,{'content-type':'application/json'});
            res.end(JSON.stringify({title:"unknown route",message:"operation not allowed"}),"utf-8")
        }

    }else{
        res.writeHead(404,{'content-type':'application/json'});
        res.end(JSON.stringify({title:"unknown route",message:"operation not allowed---"}),"utf-8")
    }
};