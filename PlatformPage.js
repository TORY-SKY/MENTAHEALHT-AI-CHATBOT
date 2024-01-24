


/*ACCORDION FOR FREQENTLY ASKED QUESIONS */
const faqs = document.querySelectorAll(".faq");
        
faqs.forEach(faq => faq.addEventListener('click', ()=>{
    faq.classList.toggle("active");
    
}));
/*ACCORDION FOR FREQENTLY ASKED QUESIONS */


// dropdown menu javaScript
let headerr = document.querySelector('.DropdownContainer');


const menu = document.querySelector('.Menu');
menu.addEventListener('click', function(){
    if(headerr.style.display == "block"){
        headerr.style.display = "none";
    }else{
        headerr.style.display = "block";
    }
});

// Toggle button
const isToggle = true;
const toggler = document.querySelector('.toggleLabel');
const currentRight = window.getComputedStyle(toggler).right;
toggler.addEventListener('click', function(){
    if(currentRight == "1px" ){
        toggler.style.right = "48px";
    }
    isToggle = false;
    
})
setTimeout(3000, function(){
    toggler.style.top = "1000px";
})