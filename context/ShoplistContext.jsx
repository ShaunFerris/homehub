import { createContext, useState } from "react";

export const ShoplistContext = createContext({ hasUpdated: false });

export const ShoplistProvider = ({ children }) => {
    const [hasUpdated, setHasUpdated] = useState(false);

    return (
        <ShoplistContext.Provider
            value={{
                hasUpdated: hasUpdated,
                setHasUpdated: setHasUpdated
            }}
        >
            {children}
        </ShoplistContext.Provider>
    );
};