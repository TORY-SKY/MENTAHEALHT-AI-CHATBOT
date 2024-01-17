


/*ACCORDION FOR FREQENTLY ASKED QUESIONS */
const faqs = document.querySelectorAll(".faq");
        
faqs.forEach(faq => faq.addEventListener('click', ()=>{
    faq.classList.toggle("active");
    
}));
/*ACCORDION FOR FREQENTLY ASKED QUESIONS */



let headerr = document.querySelector('.DropdownContainer');


const menu = document.querySelector('.Menu');
menu.addEventListener('click', function(){
    if(headerr.style.display == "none"){
        headerr.style.display = "block";
    }else{
        headerr.style.display = "none";
    }
});
