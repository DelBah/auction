import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
        
        <div className="nav_container">
                
                <div className="nav_left">
                <div className="nav_text">Welcome to our auction site, here you can awesome watches!</div>
                        <Link to="/Auction"><h2>Auctions</h2></Link>
                        <Link to="/Search"><h2>Search</h2></Link>
                </div>
                <div className="nav_right">
                        <Link to="/Login"><h2>Login</h2></Link>
                        <Link to="/Profile"><h2>Profile</h2></Link>
                        <Link to="/SignUp"><h2>Sign Up!</h2></Link>
                        <Link to="/CreateAuction"><h2>Create auction!</h2></Link>
                </div>

        </div>
    </div>
  )
}

export default NavBar;
