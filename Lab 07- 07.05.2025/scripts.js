let dom = document.getElementById("DOM");
console.log(dom);
let dom2 = document.getElementsByName("gender");
console.log(dom2);
let headerClass = document.getElementsByClassName("headersss");
console.log(headerClass);
headerClass.className = "header2";
console.log(headerClass);
let header = document.getElementsByTagName("h2");
console.log(header);

let para = document.querySelectorAll(".para");
console.log(para);

let secondChild = document.querySelector(".secondC");
console.log(secondChild);
console.log(secondChild.previousElementSibling);
console.log(secondChild.previousSibling);
console.log(secondChild.nextElementSibling);

let div = document.createElement("div");
console.log(div);
div.innerHTML = "<h1>The heading inside div</h1>";
div.className = "divHead";
div.id = "divId";

let item = document.createElement("li");
item.innerHTML = "Water";

let list = document.querySelector("ul");
list.appendChild(item);
console.log(list);

console.log(list.textContent); //shows all the text inside the list including the hidden text
console.log(list.innerText); //shows only the visible text inside the list

//after() method
list.after("This is the list after method");
let kichuekta = 'This is a list of beverages!';
list.insertAdjacentHTML("beforebegin", kichuekta);
list.insertAdjacentHTML("beforeend", '<li>Pizza</li>');

//remove() method
//list.remove(document.querySelector(".kire"));

let paraStyling = document.getElementById("styling");
console.log(paraStyling.style);
console.log(paraStyling.style.backgroundcolor);

paraStyling.style.cssText = "font-size: 20px";
paraStyling.style.color = "Red";
paraStyling.style.padding = "20px";


document.getElementById("runButton").onclick = function() {
    let arr = [];
    alert(arr);
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
    alert(arr); 

    arr.push(10);
    alert(arr);

    arr.pop();
    alert(arr);

    arr.unshift(1530);
    alert(arr);

    arr.shift();
    alert(arr);

    let anotherArr = ['hola', 'tu', 'como', 'estas'];

    let arr3 = arr.concat(anotherArr);
    alert(arr3);
}