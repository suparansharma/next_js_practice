import * as fs from 'fs';

// export default function handler(req,res){
//     fs.readFile("blogData/how_to_learn_js.json",'utf-8',(err,data)=>{
//         console.log('');
//         res.status(200).json(JSON.parse(data))
//     })  
// }


export default function handler(req,res){
    fs.readdir("blogData",(err,data)=>{
        console.log(data);
        res.status(200).json(data)
    })  
}