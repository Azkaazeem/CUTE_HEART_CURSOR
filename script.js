var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener ("mousemove" , (dets) => {
    // console.log("Event Performed");
    gsap.to (cursor , {
        x: dets.x,
        y: dets.y,
        duration: 0.15,
    })
})

imageDiv.addEventListener ("mouseenter" , () => {
    gsap.to (cursor, {
        scale: 2,
    })
})

imageDiv.addEventListener ("mouseleave" , () => {
    gsap.to (cursor, {
        scale: 1,
    })
})