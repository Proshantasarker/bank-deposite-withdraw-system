document.getElementById('btn-Login').addEventListener("click" , () =>{
   
    const emailInput = document.getElementById("email-input")
    const passwordInput = document.getElementById("password-input")
 if(emailInput.value == "proshanta@gmail.com" && passwordInput.value == "123456"){
    window.location.href="index.html"
 }
 else{
    alert("wrong email or password")
 }
})