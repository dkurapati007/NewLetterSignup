let email=document.getElementById("email");

function mailValidation(){
    if(email.value.includes("@") && email.value.endsWith(".com"))
    {
        document.getElementById("signupForm").style.display="none";
        document.getElementById("successMessage").textContent=`A confirmation email has been sent to ${email.value}. 
        Please open it and click the button inside to confirm your subscription.`
        document.getElementById("message").style.display="block";
    }
    else{
       document.getElementById("error").textContent="Valid email required";
    }
}

function dissmissMessage(){
    email.value="";
    document.getElementById("signupForm").style.display="flex";
    document.getElementById("message").style.display="none";
}