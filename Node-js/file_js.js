const { error } = require("console")
const fs = require("fs")
// console.log(fs)
// fs.writeFile("Ashish.txt","Ashish is good boy",()=>{
//     console.log("Writing Done")
//     fs.readFile("Ashish.txt",(error,data)=>{
//         console.log(data.toString())
//     })
// })

fs.appendFile("Ashish.txt"," Akash Also good boy",(e,d)=>{
    console.log("Data inserted...")
})
console.log("Done...")