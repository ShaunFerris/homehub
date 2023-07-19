import { createContext, useState } from "react";

export const ShoplistContext = createContext({ hasUpdated: true });

export const ShoplistProvider = ({ children }) => {
  const [hasUpdated, setHasUpdated] = useState(true);

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
