let menuItem= document.getElementById("menu").getElementsByTagName("li");
let headLine= document.querySelector("#text");
let btn= document.querySelector("#button");
let myMenu= document.querySelector("#menu");
let counter= 1; 

// for ( i = 0; i < menuItem.length; i++){
//     menuItem[i].addEventListener("click", selectItem);
// }

myMenu.addEventListener("click", selectItem)

function selectItem(n){
     if (n.target.nodeName == "LI"){
         headLine.innerHTML = n.target.innerHTML;
        for (i = 0; i < menuItem.length; i++){
            menuItem[i].classList.remove("selected");
        }
         n.target.classList.add("selected");
        };
}
    // this.classList.add("selected");

// function selectItem(){
//     headLine.innerHTML = this.innerHTML;
   
//     for ( i = 0; i < menuItem.length; i++){
//         menuItem[i].classList.remove("selected");
//     }
//     this.classList.add("selected");
// }

btn.addEventListener("click", newItem);

// function newItem(){
//     myMenu.innerHTML += "<li> new line</li>"
// }

function newItem(){
    myMenu.innerHTML += "<li> New Line" + counter + "</li>"; counter++;
}
