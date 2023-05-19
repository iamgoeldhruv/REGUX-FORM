function validation(){
    let phone=document.getElementById("phoneno").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    let cpass=document.getElementById("cpass").value;
    let city=document.getElementById("city").value;
    let phonecheck=/^((\+?91 ?)?||(0[ ,-]))?[9,8,7,6][0-9]{9}$/
    let agecheck=/^(1[89]|2[01234])$/
    let emailcheck1=/^([a-z-_$\+&0-9]){5,30}@\w+\.\w+$/
    let emailcheck2=/^[a-z]{2,15}_\w\d?@\w+\.iitr\.ac\.in$/
    let passcheck=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm
    if(phonecheck.test(phone))
    {
        document.getElementById("phoneerror").innerHTML=" ";
    }
    else{
        document.getElementById("phoneerror").innerHTML="**INVALID PHONE NUMBER**";
       
        return false;

    }
    if(agecheck.test(age))
    {
        document.getElementById("ageerror").innerHTML=" ";
    }
    else{
        document.getElementById("ageerror").innerHTML="**AGE NOT ALLOWED**";
       
        return false;

    }
    if(emailcheck1.test(email)|| emailcheck2.test(email))
    {
        document.getElementById("emailerror").innerHTML=" ";
    }
    else{
        document.getElementById("emailerror").innerHTML="**EMAIL NOT ALLOWED**";
       
        return false;

    }
    if(passcheck.test(pass))
    {
        document.getElementById("passerror").innerHTML=" ";
    }
    else{
        document.getElementById("passerror").innerHTML="** CREATE A VALID PASSWORD**";
       
        return false;

    }
    if(cpass.match(pass))
    {
        document.getElementById("cpasserror").innerHTML=" ";
    }
    else{
        document.getElementById("cpasserror").innerHTML="** PASSWORD ARE NOT MATCHING**";
       
        return false;

    }
   
}