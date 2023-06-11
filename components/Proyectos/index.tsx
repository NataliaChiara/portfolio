import s from "./Proyectos.module.css";
import { useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { dataset } from "../../lib/dataset";
import { HeroContext } from "../../context/HeroContext";
import { ProyectContext } from "../../context/ProyectContext";
import useIsMobile from "../../hooks/isMobile";

const Proyectos = () => {
  const proyectos = dataset.proyectos;

  const { heroValue, setheroValue } = useContext(HeroContext);
  const { ProyectValue, setProyectValue } = useContext(ProyectContext);

  const isMobile = useIsMobile();

  return (
    <AnimatePresence>
      {ProyectValue && (
        <motion.section
          className={s.proyectosContainer}
          transition={{ duration: 0.2 }}
          initial={{ transform: `translateY(100vh)` }}
          animate={{ transform: `translateY(0vh)` }}
          exit={{ transform: `translateY(100vh)` }}
        >
          <div className={s.proyectos}>
            <button
              className={s.proyectos__atras}
              onClick={() => setheroValue(true)}
            />
            <button
              className={s.proyectos__tira}
              onClick={() => setProyectValue(false)}
            >
              <Image
                src="/images/tira.png"
                alt="decoracion"
                width={163}
                height={374}
              />
            </button>
            <h2 className={s.proyectos__titulo}>proyectos</h2>
            <Swiper
              className={s.proyectos__swiper}
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              effect="fade"
              autoplay={{ disableOnInteraction: false }}
              loop
            >
              {proyectos.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className={s.proyectos__swiper__slide}
                >
                  <a href={item.href}>
                    {isMobile ? (
                      <Image
                        src={item.mobile}
                        alt="imagen"
                        width={item.widthMob}
                        height={item.heightMob}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt="imagen"
                        width={item.width}
                        height={item.height}
                      />
                    )}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Proyectos;
