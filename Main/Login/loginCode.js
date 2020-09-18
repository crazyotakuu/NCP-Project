//validation for sign in
function loginvalidation(){
    var uname=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
  


    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var letterNumber = /^[0-9a-zA-Z]+$/;

    if (uname=="" || pass==""){
                      
        window.alert("All the fields are mandatory!");
        return false;
       }
    

       if ((uname.match(letterNumber))&&(uname.length<15)){
        
        if (pass.match(/[a-z]/g) && pass.match( 
            /[A-Z]/g) && pass.match( 
            /[0-9]/g) && pass.match( 
            /[^a-zA-Z\d]/g) && pass.length >= 8){
                return true;
        
        }
        else{
            window.alert("A password is correct if it contains: \n At least 1 uppercase character. \n At least 1 lowercase character. \n At least 1 digit. \n At least 1 special character. \n Minimum 8 characters.")
            return false
         }
       }
       else{
        window.alert("Username can contain only alphabets or numbers! and length should be less than 15")
        return false
     }

   /* var error="Successful!";
    if(uname==""||pass=="" )
    {
        error="All the fields are mandatory!";
        alert(error);
        
        return;
    }
   
    if(uname.match(/^[a-zA-Z0-9]+$/)==null)
    {
        error="Username can contain only alphabets and numbers!";
        alert(error);
        return;
    }
    if(pass.length<8)
    {
        error="New Password Must have minimum 8 characters!";
        alert(error);
        return;
    }
    if(pass.match(/[a-z]/g) && pass.match( 
        /[A-Z]/g) && pass.match( 
        /[0-9]/g) && pass.match( 
        /[^a-zA-Z\d]/g) && pass.length >= 8) 
    {
        alert(error);
        return;
    }
    else
    {
        alert("A password is correct if it contains: \n At least 1 uppercase character. \n At least 1 lowercase character. \n At least 1 digit. \n At least 1 special character. \n Minimum 8 characters.");
        return;
    }
    alert(error);*/
}




//Performs validation for New Account Creation
function newPasswordCheck()
{
    var uname=document.getElementById("user_new").value;
    var password=document.getElementById("pass_new").value;
    var password_r=document.getElementById("pass_new_r").value;
    var email=document.getElementById("email_new").value;
    var error="Successful!";
    //Checking for empty fields
    if(uname==""||password==""||password_r==""||email=="")
    {
        error="All the fields are mandatory!";
        alert(error);
        return;
    }
    //Checking for illegal characters in username
    if(uname.match(/^[a-zA-Z0-9]+$/)==null)
    {
        error="Username can contain only alphabets and numbers!";
        alert(error);
        return;
    }
    //Compare the password and repeat password
    if(password.localeCompare(password_r)!=0)
    {
        error="Password Mismatch";
        alert(error);
        return;
    }
    if(password.length<8)
    {
        error="New Password Must have minimum 8 characters!";
        alert(error);
        return;
    }
    //Validate the password according to the specified rules
    if(password.match(/[a-z]/g) && password.match( 
        /[A-Z]/g) && password.match( 
        /[0-9]/g) && password.match( 
        /[^a-zA-Z\d]/g) && password.length >= 8) 
    {
        alert(error);
        return;
    }
    else
    {
        alert("A password is correct if it contains: \n At least 1 uppercase character. \n At least 1 lowercase character. \n At least 1 digit. \n At least 1 special character. \n Minimum 8 characters.");
        return;
    }
    alert(error);
}
//Performs Validation for reset new password
function validateNewPassword()
{
    var error="Successful!";
    var email=document.getElementById("email_reset").value;
    var password=document.getElementById("password_reset").value;
    var password_r=document.getElementById("password_reset_r").value;

    //All the fields are mandatory
    if(email==""||password_r==""||password=="")
    {
        error="All the fields are mandatory!";
        alert(error);
        return;
    }
    
    //Check if both the passwords are the same
    if(password.localeCompare(password_r)!=0)
    {
        error="Password Mismatch";
        alert(error);
        return;
    }

    //Validate Password
    if(password.match(/[a-z]/g) && password.match( 
        /[A-Z]/g) && password.match( 
        /[0-9]/g) && password.match( 
        /[^a-zA-Z\d]/g) && password.length >= 8) 
    {
        alert(error);
        return;
    }
    else
    {
        alert("A password is correct if it contains: \n At least 1 uppercase character. \n At least 1 lowercase character. \n At least 1 digit. \n At least 1 special character. \n Minimum 8 characters.");
        return;
    }
}

