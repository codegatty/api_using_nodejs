const fs=require("fs");
const path=require("path");



module.exports=(data)=>{
    try{
        const filePath=path.join(__dirname,"..","data","dummy-data.json");
        fs.writeFileSync(filePath, JSON.stringify(data),"utf-8");

    }catch(e){console.error(e)}

    
}