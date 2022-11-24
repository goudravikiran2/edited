var uname = document.forms['form']['uname']; var email = document.forms['form']['email'];
var passwordd = document.forms['form']['passwordd']; var password2 = document.forms['form']['password2']; var mobile = document.forms['form']['mobile'];
var addres = document.forms['form']['addres'];

var uname_error = document.getElementById('uname_error'); var email_error = document.getElementById('email_error'); var pass_error = document.getElementById('pass_error');
var pass2_error = document.getElementById('pass2_error'); var mobile_error = document.getElementById('mobile_error'); var addres_error = document.getElementById('addres_error');

uname.addEventListener('textInput', uname_Verify); email.addEventListener('textInput', email_Verify); passwordd.addEventListener('textInput', pass_Verify); password2.addEventListener('textInput', pass2_Verify); mobile.addEventListener('textInput', mobile_Verify); addres.addEventListener('textInput', addres_Verify);

function validated(){ if(uname.value.length < 3){
uname.style.border = "1px solid red"; uname_error.style.display ="block"; uname.focus();
return false;

}
 
if(email.value.length < 9){ email.style.border = "1px solid red"; email_error.style.display ="block"; email.focus();
return false;

}
if(passwordd.value.length < 6){ passwordd.style.border = "1px solid red"; pass_error.style.display ="block"; passwordd.focus();
return false;

}
if(password2.value != passwordd.value){ password2.style.border = "1px solid red"; pass2_error.style.display ="block"; password2.focus();
return false;

}
if(mobile.value.length != 10){ mobile.style.border = "1px solid red"; mobile_error.style.display ="block"; mobile.focus();
return false;

}
if(addres.value.length < 8){ addres.style.border = "1px solid red"; addres_error.style.display ="block"; addres.focus();
return false;

}
}



function uname_Verify(){ if(uname.value.length >= 3){
uname.style.border ="0"; uname_error.style.display ="none"; return true;
}
}
function email_Verify(){ if(email.value.length >= 8){
email.style.border ="0"; email_error.style.display ="none"; return true;
}
}
function pass_Verify(){
 
if(passwordd.value.length >= 5 ){ pass_error.style.display ="none"; return true;
}
}
function pass2_Verify(){ if(password2.value == passwordd.value){
password2.style.border = "0"; pass2_error.style.display ="none"; return true;
}
}
function mobile_Verify(){ if(mobile.value.length == 10){
mobile.style.border = "0"; mobile_error.style.display ="none"; return true;
}
}
function addres_Verify(){ if(addres.value.length > 8 ){
addres.style.border = "0"; addres_error.style.display ="none"; return true;
}
}
