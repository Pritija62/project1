function printhello(){
    document.getElementById("demo").innerHTML = "i saidd DO NOTT CLICKK!!!!!!"
    window.alert('Warning-Alert');
    console.log('hello');
    let a=5;
    let b=3;
    let c=(a+b);
    document.getElementById("demo1").innerHTML=c;
    let d=5000;
    let e=5000*0.15;
    document.getElementById("demo2").innerHTML=e;
}
function first() {
    const booking=['booking1','booking2','booking3'];
    booking.push("booking4")
    const bookingobject={
        booking1:'booking',
        booking2: 2,
        booking3:['booking3','booking4']

    }
    let bookingobjectvalue=bookingobject;

    document.getElementById("object").innerHTML= JSON.stringify (bookingobject);
    document.getElementById("objectelement").innerHTML= "objectelement:"
    document.getElementById("array").innerHTML=booking;

}
function second() {
    const booking=['booking1','booking2','booking3'];
    let bookingvalue=booking[1];
    document.getElementById("arrayelement").innerHTML=bookingvalue;
}