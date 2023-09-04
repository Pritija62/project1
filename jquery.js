$(document).ready(function(){
    console.log("ready document");

    //$("button").click(function(){
     //   console.log('button click');
       // $("#one").hide();//to hide id
    //});
    $("#btn1").dblclick(function(){
        $("#one").hide();
    });

    $("#btn2").dblclick(function(){
        $("#two").hide();
    });
    
});