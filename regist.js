function validateinput(){
    let uname=document.getElementById("unametxt").value;
    let fullname=document.getElementById("fullnametxt").value;
    let passw=document.getElementById("passtxt").value;
    let confpw=document.getElementById("confirmpass").value;
    let male=document.getElementById("malegen");
    let female=document.getElementById("femalegen");
    let email=document.getElementById("emailtxt").value;
    let age=document.getElementById("agenum").value;
    let checktc=document.getElementById("checkagree").checked;

    


    var emailval=/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(uname.length == 0 && fullname.length == 0 && passw.length == 0 && confpw.length==0 && male.checked==false && female.checked==false
        && email.length == 0 && age.length == 0 && checktc == false){
        alert('Please fill in the necessary space and do not leave it empty');
    }else if(uname.length == 0){
        alert('Please fill your username');
    }else if(uname.length >25 || uname.length < 5){
        alert('Username must contain 5 to 25 characters');
    }else if(fullname.length == 0){
        alert('Please fill your fullname');
    }else if(passw.length < 8){
        alert('Minimum password must be 8 characters');
    }else if(confpw.length == 0){
        alert('Wrong Confirm Password. Try Again');
    }else if(confpw.value != passw.value){
        alert('Wrong Confirm Password. Try Again');
    }else if(male.checked == false && female.checked==false){
        alert('Please choose your gender');
    }else if (email.length == 0){
        alert('Please fill in your email');
    }else if(age == 0){
        alert('Please fill in your appropriate age');
    }else if(age < 16){
        alert('You must be at least 16 years old to register this');
    }else if(checktc == false){
        alert('Please agree with the terms and conditions');
    }else{
        alert('You are registered! Thank you for registering.');
    }
              
};