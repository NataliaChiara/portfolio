import { useContext } from "react";
import s from "./Hero.module.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Titulo } from "../index";
import { HeroContext } from "../../context/HeroContext";

const Hero = () => {
  const { heroValue, setheroValue } = useContext(HeroContext);

  return (
    <AnimatePresence>
      {heroValue && (
        <motion.section
          className={s.heroContainer}
          transition={{ duration: 0.2 }}
          initial={{ transform: `translateY(100vh)` }}
          animate={{ transform: `translateY(0vh)` }}
          exit={{ transform: `translateY(100vh)` }}
        >
          <div className={s.hero}>
            {/* <div className={s.hero__idioma}>
              <button>español</button>
              <button>ingles</button>
            </div> */}
            <button
              className={s.hero__tira}
              onClick={() => setheroValue(false)}
            >
              <Image
                src="/images/tira.png"
                alt="decoracion"
                width={163}
                height={374}
              />
            </button>
            <div className={s.hero__titulo}>
              <Titulo>
                {" "}
                HOLA,
                <br />
                MI NOMBRE ES
                <br />
                <span style={{ color: "var(--blue)" }}>NATALIA CHIARA</span>
              </Titulo>
              <h2></h2>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Hero;
