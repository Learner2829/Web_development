import fs from "fs/promises"
import path from "path"

// let a = await fs.readFile("Ashish.txt")
// console.log(a.toString())


// console.log(path)
let my_path = "C:\\Users\\ASHISH\\Desktop\\Web_development\\Node-js\\Ashish.txt"


console.log(path.extname(my_path)) //fetch file name
console.log(path.dirname(my_path)) //director name with file name
console.log(path.join(my_path,"//Kenu.txt")) //director name with file name
