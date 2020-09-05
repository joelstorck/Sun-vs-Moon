let sun = "sun.jpg";
let moon = "moon.jpg";
let setPic;
let pic = document.createElement("img");
    pic.src = (sun);
    setPic = "sunny";
    document.body.appendChild(pic);
    
pic.addEventListener("click", function(){
    
    switch(setPic) {
        case "sunny":
            setPic = "moony";
            pic.src = (moon);
            break;
        case "moony":
            setPic = "sunny";
            pic.src = (sun);
            break;
    }

    
    
})


