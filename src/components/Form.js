import React, { useState } from 'react';
import SignUp from './Signup';
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {
  
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <SignUp submitForm={submitForm} /> : <SignupFormSuccess />}
    </div>
  )
}

export default Form