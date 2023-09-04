import { createContext, useState } from "react";
import { IUpdateContext } from "@/types";

export const ShoplistContext = createContext<IUpdateContext | null>(null);

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
