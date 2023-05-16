function validate(){
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let dob = document.forms["myForm"]["dob"].value;
    let gender = document.forms["myForm"]["gender"].value;
    let password = document.forms["myForm"]["password"].value;
    let cpassword = document.forms["myForm"]["cpassword"].value;
    
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (dob == "") {
       alert("Date of Birth must be filled out");
        return false;
      }
    if (gender == "") {
        alert("Gender must be filled out");
        return false;
      }
    if (password == "") {
        alert("Password must be filled out");
        if(password.length < 6 || password.length >=16){
          alert("Enter Valid Password");
          }
        return false;
      }
      if(cpassword == ""){
        alert("Enter Confirm Password");
        return false;
      } 
      if (cpassword != password) {
        alert("Password and Confirm Password must be same");
       return false;
      }
}
