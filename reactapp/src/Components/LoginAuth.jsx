function LoginAuth(values){
    
    let error = {}
    const pin_pattern = /^[a-zA-Z0-9]{2,}$/
    //const pwd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email="Email should not be empty"
    }
     else {
        error.email=""
    }
    //email authentication
    if(values.pwd === ""){
        error.pin = "Pin should not be empty"
    }
    else if(!pin_pattern.test(values.pin)) {
        error.pin = "Pin should be 2 letters long."
    } else {
        error.pin=""
    }
    //password authentication

    return error;
}

export default LoginAuth