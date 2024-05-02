let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -250+"px"
    blur.style.top = dets.y-250+"px"
})


gsap.to("#nav",{
    backgroundColor:"black",
    height:"90px",
    duration:0.5,
     scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start: "top -10%",
        end:"top -11%",
        scrub:1
     }
 

})
gsap.to("#main",{

    backgroundColor:"black",
    scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            start:"top -25%",
            end:"top -70%",
            scrub:2
            
    }
})