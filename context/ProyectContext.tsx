"use client";
import React, { ReactNode, createContext, useState } from "react";

interface ProyectContextType {
  ProyectValue: boolean;
  setProyectValue: (newProyectValue: boolean) => void;
}

interface ProyectProviderType {
  children: ReactNode;
}

export const ProyectContext = createContext<ProyectContextType>({
  ProyectValue: true,
  setProyectValue: () => {},
});

export const ProyectContextProvider: React.FC<ProyectProviderType> = ({
  children,
}) => {
  const [ProyectValue, setProyectValue] = useState(true);

  return (
    <ProyectContext.Provider value={{ ProyectValue, setProyectValue }}>
      {children}
    </ProyectContext.Provider>
  );
};
