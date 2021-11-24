let items = document.querySelectorAll(".circle")
let zone = document.querySelector(".zone")
let btn = document.querySelector("button[type=button]")
let rgb;

btn.onclick=function(){
    
    let red = document.getElementById("red")
    let green = document.getElementById("green")
    let blue = document.getElementById("blue")
    rgb = `rgb(${red.value},${green.value},${blue.value})`
    let specialCircle = document.getElementById("special")
    specialCircle.setAttribute("data-id",`background-color:${rgb};`)
    specialCircle.style.backgroundColor = rgb
    // console.log(rgb);

}



items.forEach((circle)=>{
    circle.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("color",e.target.id)
        console.log("drag started");
    })
    circle.addEventListener("dragend",()=>{
        console.log("drag ended");
    })
})

zone.addEventListener("dragenter",()=>{
    console.log("you entered zone");
    zone.style.boxShadow = "0px 0px 7px 1px #000000"
})

zone.addEventListener("dragleave",()=>{
    console.log("you leaved zone");
    zone.style.boxShadow = "initial"
})

zone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    // console.log("you are surfing in zone , enjoy it bruhhh");
})

zone.addEventListener("drop",(e)=>{
    let id = e.dataTransfer.getData("color")
    let item = document.getElementById(id)
    let colour = item.getAttribute("data-id")
    zone.setAttribute("style",colour)
    console.log(colour);
})

