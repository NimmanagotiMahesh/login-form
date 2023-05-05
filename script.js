function validate(){
    const myForm = document.getElementById("myForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const password = document.getElementById("password");
    const cpassword = document.getElementById("cpassword");

    myForm.addEventListener(`submit` , (e) =>{
        e.preventDefault();

        checkInputs();
    });
    function checkInputs(){

        const nameValue = name.value.trim();
        const emailValue= email.value.trim();
        const dobValue = dob.value.trim();
        const genderValue = gender.value.trim();
        const passwordValue = password.value.trim();
        const cpasswordValue = cpassword.value.trim();

        if(nameValue === ""){
            
            setErrorFor(name,"Name cannot be blank");
            
        }
        else{
            setSuccessFor(name);
            window.location.replace("Dashboard.html");
        }

    }
    function setErrorFor(input,message){
        const formGroup = input.parentElement;
        const small = formGroup.QuerySelector("small");

        small.innerText = message;

        formGroup.className = "form-group error";
    }
    function setSuccessFor(input){
        const formGroup = input.parentElement;
        formGroup.className = "form-group success";
    }
    // if(password.length !=0){
    //     if(password==cpassword){
    //         alert("Passwords are match");
    //         window.location.replace("Dashboard.html");
    //         return false;
    //     }
    //     else{
    //         alert("Passwords are not match");
    //     }
    // 
}