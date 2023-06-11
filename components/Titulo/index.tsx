import { FC, ReactNode } from "react";
import s from "./Titulo.module.css";

type TituloType = {
  derecha?: boolean;
  children: ReactNode;
};

const Titulo: FC<TituloType> = ({ derecha, children }) => {
  return (
    <h1
      className={s.titulo}
      style={{
        textAlign: derecha ? "end" : "initial",
        margin: derecha ? "0 10vw 0 0" : "0 0 0 10vw",
      }}
    >
      {children}
    </h1>
  );
};

export default Titulo;
