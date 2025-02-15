import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return ( <div className="login-form">
    <h2>Login to your account</h2>
        <form>
            <label htmlFor="user-name">Username: </label>
            <input 
                type="text"
                id="user-name"
                name="user-name" 
                required 
                value={users.userName}
                onChange={handleOnChange}
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id="password"
                name="password" 
                required 
                value={users.password}
                onChange={handleOnChange}
            />
            

            <button type="submit" onClick={handleSubmit}>
                Log in
            </button>
        </form> 
    </div>);
}
 
export default Login;