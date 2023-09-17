$(document).ready(function(){
    var slides=$(".slide");
    var dots=$(".dot");
    var index=0;
    $("#left-arrow").click(function(){
        index +=(-1);
        changeslide();
     });
     $("#right-arrow").click(function(){
        index +=1;
        changeslide();
     });
     changeslide();
     function changeslide(){ 
        if(index > slides.length-1)
        index=0;
    if (index <0)
    index=slide.length-1;

    for(let i=0; i<slides.length;i++){
        slide[i].style.display="none";
        dots[i].classList.remove("active");
    }
    slide[index].style.display="block";
    dots[index].classList.add("active");

     }

})