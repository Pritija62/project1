function one()
{
    let a="hello my name is pritija ,studing CSIT";
    let b=a.substring (0,25)
    document.getElementById('select').innerHTML=b;
}
function two()
{  
    let stringone='hello';
    let stringtwo="world";
    document.getElementById("check").innerHTML=stringone.concat(" " +stringtwo);
}
function three()
{  
    let stringvalue="hello this is me";
    let stringarrayvalue=stringvalue.split(" ");
    document.getElementById("check1").innerHTML=stringvalue;
    document.getElementById("check2").innerHTML=stringarrayvalue.length;

}
function four()
{

    let stringvalue="hello this is me";
    let stringarrayvalue=stringvalue.matchAll(/se/gi);
    document.getElementById("check3").innerHTML=stringvalue;
    document.getElementById("check4").innerHTML=stringarrayvalue.length;

}
function five()
{

    let stringvalue="hello this is me";
    let stringarrayvalue=stringvalue.includes("this");
    document.getElementById("check5").innerHTML=stringvalue;
    document.getElementById("check6").innerHTML=stringarrayvalue.length;

}


    
    

}