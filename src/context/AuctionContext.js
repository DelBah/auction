import { createContext, useState } from "react";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
    
    // Condition to be faöse when loading is done.
    const [isLoading, setIsLoading] = useState (true);
    const [bids, setBids] = useState ([]);
    const [auctions, setAuctions] = useState([]);

    // Deep copy / clone a json object, creates and returns an identical JSON object that was passed in.
    function createNew(object){
        let cloneObj = JSON.parse(JSON.stringify(object));
        return cloneObj;
    }

  
    // Getter / Setter auction object
    const [bid, setBid] = useState({
        bidId: 0,
        userId: 0,
        auctionId: 0,
        bidAmount: 0,
        timeStamp: 0
    });
    
    // Getter / Setter auction object
    const [auction, setAuction] = useState({
        auctionId: 0,
        userId: 0,
        bids: [],  // Change to bidId for relationship instead of aggregation
        startPrice: 0,
        endPrice: 0,
        productName: "",
        productInfo: "",
        productImgURL: ""
    });
   
    // Getter / Setter profile object
    const [profile, setProfile] = useState({
        userId: 0,
        firstName: "",
        lastName: "",
        address: "",
    }); 
    
    // Getter / Setter user object
    const [user, setUser] = useState({
        userId: 0,
        email: "",
        password: "",
        profile: {}, 
        auctions: []  
    });
    
    const addUser = async (aUser) => {
        const res = await fetch("/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(aUser),
        });

    }
    return ( <AuctionContext.Provider
        value={{
            bid,        // bid object
            auction,    // auction object
            profile,    // profile object
            user,       // user object
            createNew,  // Hardcopy json object
            addUser,    // AddUser function
            isLoading
        }}
        >
            {children}
        </AuctionContext.Provider> );
}
 
export default AuctionContext;