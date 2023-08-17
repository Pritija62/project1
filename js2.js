function operatorexamples(){
    let x=5;
    document.getElementById("operator").innerHTML=(x=="5");
    let age=40;
    let isold=(age<18)?"too young":"old enough";
    document.getElementById("operator").innerHTML=isold;
    let age1=null;
    let isoldone=age1??"too young";
    document.getElementById("operator").innerHTML=isoldone;

}