const slides = document.querySelectorAll(".slide")
console.log(slides);
var counter=0;

slides.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
    
});
const gonext = () => {
    if (counter < 3 - 1) {  // Limit counter to 3
        counter++;
        slideimage();
    }
};
const goprev=()=>{
    counter--;
    slideimage();
}

const slideimage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}
const autoScroll = () => {
    gonext();
};
setInterval(autoScroll, 3000);
