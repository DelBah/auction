import { cloneElement, createContext, useState } from "react";
const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
    
    // Conditioen to be faöse when loading is done.
    const [isLoading, setIsLoading] = useState (true);
    
    // Getter / Setter user object
    const [user, setUser] = useState({
        userId: 0,
        email: "",
        password: "",
        profile: {},
        auctions: [{}]
    });
    
    // Getter / Setter profile object
    const [profile, setProfile] = useState({
        userId: 0,
        firstName: "",
        lastName: "",
        address: "",
    }); 
    
    // Getter / Setter auction object
    const [bid, setBid] = useState({
        bidId: 0,
        userId: 0,
        auctionId: 0,
        bidAmount: 0,
        timeStamp: 0
    })
    let bid2 = cloneElement(bid);
    bid2.auctionId = 1;
    console.log(bid, bid2);

    // Getter / Setter auction object
    const [auction, setAuction] = useState({
        auctionId: 0,
        userId: 0,
        bids: [{bid}],
        startPrice: 0,
        endPrice: 0,
        productName: "Dummy Product",
        productInfo: "Dummy Info",
        productImgURL: "Dummy URL"
    });

    const test = () => {
        setUser({email: "bjorn.milebjork@gmail.com", password: "123", profile: {profile}, auctions: [auction]});
    }

    return ( <AuctionContext.Provider
        value={{
            user,
            isLoading
        }}
        >
            {children}
        </AuctionContext.Provider> );
}
 
export default AuctionContext;