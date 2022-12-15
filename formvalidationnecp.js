function login() {
    var checkname = document.getElementById("name").value;
    var checkemail = document.getElementById("email").value;
    var checkcontact = document.getElementById("contact").value;
    var checkpassword = document.getElementById("password").value;
    var checkconfirmp = document.getElementById("cpassword").value;
    if (checkname == "" | checkemail == "" | checkcontact == "" | checkpassword == "" | checkconfirmp == "") {
        alert("all field are fill mandatory. please fill all field");
    } else {
        alert("all data submit sucssessful .Thank You!");
    }
}

function validname() {
    var checkname = document.getElementById("name").value;
    var namerejax = /[a-zA-Z ]+$/;
    if (!namerejax.test(checkname)) {
        document.getElementById("nerror").innerHTML = "Name should be character";
        document.getElementById("name").focus();
    } else {
        const set = document.getElementById("nerror").innerHTML = "Success";
        set.clearTimeout(1000);
    }
}

function validemail() {
    var checkemail = document.getElementById("email").value;
    var emailrejax = /^([a-zA-Z0-9.])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailrejax.test(checkemail)) {
        document.getElementById("eerror").innerHTML = "email id should be like as abc@gmail.com";
        document.getElementById("email").focus();
    } else {
        document.getElementById("eerror").innerHTML = "Success";
    }
}

function validcontact() {
    var checkcontact = document.getElementById("contact").value;
    var contactrejax = /(0|91)?([6-9][0-9]{9})+$/;
    if (!contactrejax.test(checkcontact)) {
        document.getElementById("cerror").innerHTML = "contact number should be number";
        document.getElementById("contact").focus();
    } else {
        document.getElementById("cerror").innerHTML = "Success";
    }
}

function validpassword() {
    var checkpassword = document.getElementById("password").value;
    var passrejax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*>.])(?=.{8,})/;
    if (!passrejax.test(checkpassword)) {
        document.getElementById("perror").innerHTML = "password should be like Adbc@2345";
        document.getElementById("password").focus();
    } else {
        document.getElementById("perror").innerHTML = "Success";
    }
}

function validcpassword() {
    var checkpassword = document.getElementById("password").value;
    var checkconfirmp = document.getElementById("cpassword").value;
    if (checkconfirmp != checkpassword) {
        document.getElementById("cperror").innerHTML = "Password not match.Please correct it!";
        document.getElementById("cpassword").focus();
    } else {
        document.getElementById("cperror").innerHTML = "Success";
    }

}
/**
 * 
 */