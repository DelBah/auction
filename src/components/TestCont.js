import { useContext } from "react";
import AuctionContext from "../context/AuctionContext";

const TestCont = () => {

    const {user} = useContext(AuctionContext);  // hämta user ifrån AuctionContext

    // user.email = ""
    // update user.email
    user.email = "bjpes@hotmail.com"
    
    // user.email = "bjpes@hotmail.com"
    console.log(user);

    return ( <div>
        {user.email}
    </div> );
}
 
export default TestCont;