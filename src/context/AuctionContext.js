import { createContext, useState } from "react";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState (true);
    const [user, setUser] = useState({
        email: "",
        password: "",
        profile: {},
        auctions: [{}]
    });
    let profile = {
        userId: 0,
        firstName: "",
        lastName: "",
        address: ""

    }; 
    
    

    const testContext = () => {
        setUser({email: "bjorn.milebjork@gmail.com", password: "123", profile: {profile}, auctions: ["auction1", "auction2"]});
    }

    return ( <AuctionContext.Provider
        value={{
            testContext,
            isLoading
        }}
        >
            {children}
        </AuctionContext.Provider> );
}
 
export default AuctionContext;