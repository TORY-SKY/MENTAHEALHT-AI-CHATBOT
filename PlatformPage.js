// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => faq.addEventListener('click', ()=>{
//     faq.classList.toggle('active');
// }));
// alert("hello world");
let header = document.querySelector('.Header');
let menu = document.querySelector('.Menu');

let clickCount  = 0;

const TheDropDownMenuContent = document.querySelector('.TheDropDownMenuContent');

menu.addEventListener('click', function(){
    TheDropDownMenuContent.classList.toggle("menuAnime");
})
alert("menu");