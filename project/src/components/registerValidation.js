const validation = (firstName, secondName, password, confirmedPassword, email) => {
    let errors = {};

    if(!firstName){
        errors.firstName="First name is required."
    }
    if(!secondName){
        errors.secondName="Last name is required."
    }
    if(!email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email = "Email is invalid."
    }
    if(!password){
        errors.password = "Password is required."
    }else if(password.length < 5){
        errors.password = "Password must be more than 5 characters."
    }
    if(!confirmedPassword){
        errors.confirmedPassword = "Please confirm your password."
    }else if(confirmedPassword.length < 5){
        errors.confirmedPassword = "Password must be more than 5 characters."
    }
    return errors;
}

export default validation;