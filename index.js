function validate() {
  var name = document.f1.name.value;
  var password = document.f1.password.value;
  var minNumberofChars = 6;
  var maxNumberofChars = 16;
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  var email = document.f1.email.value;
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  var age = document.f1.age.value;
  var numbers = /^[0-9]+$/;
  var status = false;

  if (name.length < 1) {
    document.getElementById("nameloc").innerHTML = " Please enter your name";
    status = false;
  } else {
    document.getElementById("nameloc").innerHTML = "";
    status = true;
  }
  if (password.length < 8) {
    document.getElementById("passwordloc").innerHTML =
      " Password must be at least 8 char long, at least 1 capital letter and one special character and one number";
    status = false;
  } else {
    document.getElementById("passwordloc").innerHTML = "";
  }
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    document.getElementById("emailloc").innerHTML = "please enter valid email";
    status = false;
  }
  if (age.match(numbers)) {
    document.getElementById("ageloc").innerHTML = "";
    status = true;
  } else {
    document.getElementById("ageloc").innerHTML =
      "Please enter age between 8 to 60";
    status = false;
  }
  return status;
}
