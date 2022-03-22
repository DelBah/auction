/*
A function that returns error if some values statement are true when user are signing up. 
*/
const validation = (values) => {

    let errors={};
 

    // if name is empty...
    if(!values.fullname){
        errors.fullname="Name is required."
    }

    // if email is empty.... else if email don't contain . signs or @ sign 
    if (!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }

    // vi kan lägga till password får inte innehålla ex: $£$£$[{[£]}]
    if(!values.password){
        errors.password="Password is required."
    } else if(values.password.length < 5){
        errors.password="Password must be more than five characters"
    }
    
  
    return errors;
}

export default validation;
