const menu= document.querySelector(".fa-bars");;
const navMobile= document.querySelector(".navMobile")

menu.addEventListener("click", ()=> {
console.log("clicked")
navMobile.style.display = "block";
navMobile.style.width='100%';
navMobile.style.height='97vh';
navMobile.style.top='0';
navMobile.style.left='0';
navMobile.style.backgroundColor='#3C3A39';

})