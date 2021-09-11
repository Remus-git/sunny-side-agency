let hamburgerMenu = document.querySelector("#hamburgerMenu")
let drawerMenu = document.querySelector(".drawerMenu")
let drawerMenus = document.querySelector(".drawerMenu ul")
hamburgerMenu.addEventListener("click",function(){
    drawerMenu.classList.toggle("active")
    drawerMenus.classList.toggle("block")
})
console.log(drawerMenus)