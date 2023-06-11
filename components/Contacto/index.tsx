import s from "./Contacto.module.css";
import { useContext } from "react";
import { Titulo } from "../../components";
import { ProyectContext } from "../../context/ProyectContext";

const Contacto = () => {
  const { ProyectValue, setProyectValue } = useContext(ProyectContext);
  return (
    <section className={s.contactoContainer}>
      <div className={s.contacto}>
        <button
          className={s.contacto__atras}
          onClick={() => setProyectValue(true)}
        />
        <h2 className={s.contacto__tituloMobile}>contacto</h2>
        <div className={s.contacto__redes}>
          <div className={s.contacto__redes__row}>
            <a href="https://www.linkedin.com/in/natalia-chiara-792a84199/">
              <button className={s.contacto__redes__row__linkedin} />
              linkedin.com
            </a>
          </div>
          <div className={s.contacto__redes__row}>
            <a href="https://github.com/NataliaChiara?tab=repositories">
              <button className={s.contacto__redes__row__github} />
              github.com
            </a>
          </div>
        </div>
        <div className={s.contacto__titulo}>
          <Titulo derecha>
            {" "}
            MEDIO
            <br />
            DE
            <br />
            <span style={{ color: "var(--blue)" }}>CONTACTO</span>
          </Titulo>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
