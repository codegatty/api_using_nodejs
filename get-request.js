module.exports=(req,res)=>{
    let baseURL=req.url.substring(0,req.url.lastIndexOf("/"))
    let id=req.url.split("/")[3]
    console.log(baseURL,id)
    if(req.url==="/api/movies" && id==undefined){
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    }else if(baseURL==="/api/movies" && parseInt(id)>req.movies.length+1){
        res.statusCode=400;
        res.setHeader('Content-Type', 'text/html');
        res.write(JSON.stringify({"title":"validation failed","message":"wrong uuid"}));
        res.end();
    }else if(baseURL==="/api/movies"){
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        let filteredData=req.movies.filter((ele)=>ele.id==id)
        res.write(JSON.stringify(filteredData));
        res.end();
    }
    else{
        res.statusCode=404;
        res.setHeader('Content-Type', 'text/html');
        res.write(JSON.stringify({"title":"uknown Method","message":"check"}));
        res.end();
    }
}