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
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username Validation
    if (username.length == 0){
        setError("username_error", "*username cannot be empty")
        document.getElementById("username").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("username").style.border = "1px solid black"
        removeError("username_error")
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
    
    return true;
}
