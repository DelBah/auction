import React, { useEffect, useState } from "react";
import validation from "./Validation";

const SignUp = ({submitForm}) => {

  //useState for values, using object data types
  const [values, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  // setting values for all instans fields, updates values, learn more!
  const handleChange = (event) => {
        setValue({
          ...values,
          [event.target.name]: event.target.value,

      })
  }

  // event handler to prevent update site when click on Sign up!
  // setErrors -->
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values)); 
    setDataIsCorrect(true);
  };

  // if errors is empty and data is correted change propsvalue to true 
  useEffect(() =>{
    if (Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    };
  });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.name}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
