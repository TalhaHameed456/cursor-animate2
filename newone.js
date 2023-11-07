var icons1 = document.querySelector("#icon-left");
var icons2 = document.querySelector("#icon-right");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");


setTimeout(function(){
    page1.style.transform = "translateX(-100vw)"
    page2.style.transform = "translateX(0vw)"
    

},3000)

icons2.addEventListener("click",function(){
    
    page1.style.transform = "translateX(-100vw)"
    page2.style.transform = "translateX(0vw)"
    
})
icons1.addEventListener("click",function(){
    page1.style.transform = "translateX(0vw)"
    page2.style.transform = "translateX(100vw)"
})
setTimeout(function(){
    page1.style.transform = "translateX(0vw)"
    page2.style.transform = "translateX(100vw)"
    

},6000)

