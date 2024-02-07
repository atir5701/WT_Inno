function setError(id, error){
    var element = document.getElementById(id)
    element.innerHTML = error
    element.style.color = "red"
}

function removeError(id){
    var element = document.getElementById(id)
    element.innerHTML = ""
}

function validate(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    // VALIDATING NAME FIELDS
    if (name.length == 0){
        setError("name_error", "*First Name cannot be empty")
        document.getElementById("name").style.border = "1px solid red"
        return false
    }
    else{
        for(i in name){
            if (!((name[i]>='a' && name[i]<='z') || (name[i]>='A' && name[i]<='Z'))){
                setError('name_error', "*name field accepts only letters")
                document.getElementById("name").style.border = "1px solid red"
                return false
            }
        }
        document.getElementById("name").style.border = "1px solid black"
        removeError("name_error")
    }

    // Username Validation
    if (username.length == 0){
        setError("username_error", "*username cannot be empty")
        document.getElementById("username").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("usernaem").style.border = "1px solid black"
        removeError("username_error")
    }


    // Email Validation Using Regular Expression
    if (email.length == 0){
        setError("email_error", "*email field cannot be empty")
        document.getElementById("email").style.border = "1px solid red"
        return false
    }
    else{
        regex = /([0-9]{2})([a-zA-Z]{3})([0-9]{3})(@nirmauni.ac.in)/
        if (!regex.test(email)) {
            setError("email_error", "*email must be in this form : DDCCCDDD@nirmauni.ac.in")
            document.getElementById("email").style.border = "1px solid red"
            return false
        }
        document.getElementById("email").style.border = "1px solid black"
        removeError("email_error")
    }

    // VALIDATING PASSWORD FIELDS
    let upper = false
    let lower = false
    let digit = false
    if (password.length == 0){
        setError("password_error", "*Password cannot be empty")
        document.getElementById("password").style.border = "1px solid red"
        return false
    }
    else{
        // Validating Minimum Length of password should be 8
        if (password.length < 8){
            document.getElementById("password").style.border = "1px solid red"
            setError("password_error", "*min 8 characters required")
            return false
        }
        else{
            // Validating passwords should contain lowercase, uppercase and digits
            for(i in password){
                if(password[i] >= 'a' && password[i] <= 'z')
                    lower = true
                if (password[i] >= 'A' && password[i] <= 'Z')
                    upper = true
                if (password[i] >= '0' && password[i] <= '9')
                    digit = true
            }

            // IF password does not contains any of these characters then we return error(Uppercase Lowercase and digit)
            if (!(upper && lower && digit)){
                setError("password_error", "*Password Should Contain LowerCase, UpperCase and Digits")
                document.getElementById("password").style.border = "1px solid red"
                return false
            }
            document.getElementById("password").style.border = "1px solid black"
            removeError("password_error")
        }
    }
    if (cpassword.length == 0){
        setError("cpassword_error", "*Password cannot be empty")
        document.getElementById("cpassword").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("cpassword").style.border = "1px solid black"
        removeError("cpassword_error")
    }

    if (password != cpassword){
        setError("password_error", "*Passwords Do not Match")
        setError("cpassword_error", "*Passwords Do not Match")
        document.getElementById("password").style.border = "1px solid red"
        document.getElementById("cpassword").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("password").style.border = "1px solid black"
        removeError("password_error")
        document.getElementById("cpassword").style.border = "1px solid black"
        removeError("cpassword_error")
    }

    return true;
}
