// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => faq.addEventListener('click', ()=>{
//     faq.classList.toggle('active');
// }));
// alert("hello world");
let header = document.querySelector('.Header');
let menu = document.querySelector('.Menu');
let dropDownContent = document.querySelector('.DroppDownMenuu');
let clickCount  = 0;
menu.addEventListener('click', ()=>{
    if(dropDownContent.style.display === "flex"){
        dropDownContent.style.display = "none";
    }else{
        dropDownContent.style.display = 'block';
    }
});