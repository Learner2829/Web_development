// alert("Thanks for visit...")
// console.log(document.querySelector(".box").innerHTML)
// console.log(document.querySelector(".box").innerText)
// console.log(document.querySelector(".box"))
// console.log(document.querySelector(".container").innerText)
// document.querySelector(".box").innerHTML="Ashish"
// console.log(document.querySelector(".box").hasAttribute('style'))
// console.log(document.querySelector(".box").setAttribute('style','display:inline'))
// console.log(document.querySelector('.box').attributes)
// document.designMode ="on"
// console.log(document.querySelector(".box").dataset)

// div = document.createElement("div");
// div.innerHTML = "This is for test";
// div.setAttribute("class","created");
// document.querySelector(".container").append(div)
function Randome_color(){
    num_col = {
        1:"red",
        2:"blue", 
        3:"green", 
        4:"", 
        5:"white", 
        6:"gray", 
        7:"yellow", 
        8:"purple", 
        9:"aqua",
        0:"brown"
    }
    
    Randome_num = Math.floor((Math.random())*10)
    return num_col[Randome_num]
}
const parentElement = document.getElementById("parrent"); 
const child = parentElement.children;

setInterval(() => {
    for (let i = 0; i < child.length; i++) {
        const element = child[i];
        element.style.background = Randome_color()
    }
}, 3000);


// child = document.getElementsByClassName("container")[0]
// console.log(child)
// console.log(Randome_color())
// const parrent = document.querySelector("container");
// console.log(parent)
// const child = parrent.querySelectorAll('*');
// console.log(child)

// child.forEach(onechild => 
// {
//     console.log(onechild);
// }
// );




