"use client";
import React, { ReactNode, createContext, useState } from "react";

interface HeroContextType {
  heroValue: boolean;
  setheroValue: (newheroValue: boolean) => void;
}

interface HeroProviderType {
  children: ReactNode;
}

export const HeroContext = createContext<HeroContextType>({
  heroValue: true,
  setheroValue: () => {},
});

export const HeroContextProvider: React.FC<HeroProviderType> = ({
  children,
}) => {
  const [heroValue, setheroValue] = useState(true);

  return (
    <HeroContext.Provider value={{ heroValue, setheroValue }}>
      {children}
    </HeroContext.Provider>
  );
};
