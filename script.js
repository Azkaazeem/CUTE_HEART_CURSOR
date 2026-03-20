var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener ("mousemove" , (dets) => {
    console.log("Event Performed");
    gsap.to (cursor , {
        x: dets.x,
        y: dets.y,
    })
})