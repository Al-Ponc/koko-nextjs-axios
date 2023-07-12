import styles from "../nosotros.module.css";
import Image from "next/image";

export default function Nosotros1() {
  return(
        <>
        <h1 className={styles.h11}></h1>
        <section className={styles.s1}>
          <div
            className={`${styles.card} ${styles.foto1}`}
            style={{ transform: "rotate(-0.1832625685221707deg)" }}
          >
            <Image src='/nele.jpeg' width='1280' height='720' alt='nele loos' />
          </div>
          <div className={styles.centered}>
            <p className={styles.parrafo1}>
              Me llamo Nele Loos. Nací en Bélgica, llegue en el 2006 a Chile, o al
              Wallmapu mejor dicho. Acá fui adoptada por una comunidad Mapuche. Han
              pasado 17 años desde ese entonces, y sigo aquí. Con casa, marido,
              hijo, animales,…. y por supuesto la huerta!
            </p>
          </div>
        </section>
        {/* SECCION 2 COMIENZO */}
        {/* SECCION 2 COMIENZO */}
        {/* SECCION 2 COMIENZO */}
        {/* SECCION 2 COMIENZO */}
        {/* SECCION 2 COMIENZO */}
        <section className={styles.s2}>
          <p className={styles.parrafo2}>
            El amor fue instantáneo, pero no necesariamente muy exitoso. No sabía
            cuánto conocimiento y cuanta sabiduría se necesitaba. Me di cuenta que
            las huertas son el reflejo de una profunda conexión entre los que
            trabajan la tierra y la naturaleza.
          </p>
          <div
            className={`${styles.card} ${styles.foto2}`}
            style={{ transform: "rotate(0.7867473403499314deg)" }}
          >
            <Image src='/nele2.jpg' width='1080' height='655' alt='nele loos' />
          </div>
        </section>
        </>
    );
}

