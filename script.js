var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

// track the mouse event 
document.addEventListener("mousemove", function (dets) {

    /*Where the mouse move in x direction */
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.top = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"

})

var buttonall = document.querySelectorAll("#nav button")
console.log(buttonall)
buttonall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(199, 166, 166)"
        crsr.style.backgroundColor = "rgb(199, 166, 166)"
    })
})

gsap.from("#about-us img ,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,

    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 58%",
    scrub: 3,



})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
   /* scrollTrigger: {*/
        scroller: "body",
        /*markers: true,*/
        start: "top 60%",
        end: "top 58%",
        scrub: 2,
   /* }*/




})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    
        trigger: "#colon1",
        scroller: "body",
        markers:true,
        start:"top 50%",
        end: "top 47%",
        scrub: 5,
    
})

gsap.from("#colon2",{
    y: -70,
    x: -70,
    
        trigger: "#colon1",
        scroller: "body",
        markers:true,
        start:"top 50%",
        end: "top 47%",
        scrub: 5,
    
})







gsap.to("#nav", {

    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        /*markers: true,*/
        start: "top -25%",
        end: "top -75% ",
        scrub: 1
    }



})

const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Leader";
    }, 8000);


}

textLoad();
setInterval(textLoad, 12000);



