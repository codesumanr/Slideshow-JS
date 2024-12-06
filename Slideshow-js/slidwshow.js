var current = 0;
var total = 4;

function nextimage(){

    current ++;
    if (current>=total){
        current = 0;
    }


    var slides = document.getElementsByClassName("slide")
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }


    slides[current].style.display = "block";

    console.log("next");
    console.log(current);
}


function preimage(){

    current --;
    
    if(current < 0){
        current = total - 1;
    }

  
    var slides = document.getElementsByClassName("slide")
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }


    slides[current].style.display = "block";

    console.log("previous image");
    console.log(current);


}