module.exports=async (request)=>{
    return new Promise((resolve,reject)=>{
        let body="";
        try{
            request.on("data",(chunk)=>{
                body+=chunk;
            });
            request.on("end",()=>{
                resolve(JSON.parse(body));
            });

        }catch(err){
            reject();
            console.log(err);
        }
    })
}