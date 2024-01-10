let Handburgermenu = document.querySelector('.handBugerMenu');
let DropdownMeu = document.querySelector('.MenuDrop');

  
//HANDBURGER MENU
Handburgermenu.addEventListener('click', (e)=>{
if(DropdownMeu.style.display == "none"){
  DropdownMeu.style.display = "block";
  DropdownMeu.style.top = "0";
}else{
  DropdownMeu.style.display = 'none';
  DropdownMeu.style.top = "-100%";

  console.log(e.target.key)
}
});
//HANDBUGER MENU JS

//SOCIALS SCROLL

const SOCIALSDIV =  document.querySelector('.SOCIALS');
document.addEventListener("DomContentLoaded", function(){
  console.log(SOCIALSDIV.scrollLeft);
});

