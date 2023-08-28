function onsubmit(event)
{
    event.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var acceptLicenseYes=document.getElementById('acceptLicenseYes');
    var acceptLicenseNo=document.getElementById('acceptLicenseNo');
    var acceptLicense;
    if(acceptLicenseYes.checked== true&&acceptLicenseNo.checked==true){
        acceptLicense="cannot select both";
    }else if(acceptLicenseYes.checked== true){
        acceptLicense=document.getElementById(' acceptLicensYes').value;
    }else if(acceptLicenseNo.checked== true){
        acceptLicense=document.getElementById(' acceptLicensNo').value;
    }



    document.getElementById('formData').innerHTML="Name:"+ name+"<br>Email:"+email +"<br>Gender:"+gender;
}    
    window.onload=function()
    {

       document.getElementById('contactForm').addEventListener('submit',onsubmit);
    }