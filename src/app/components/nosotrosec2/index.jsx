import styles from "../nosotros.module.css"
import Image from "next/image";
export default function Nosotros2() {
  return(

        <>
        <section className={styles.s3}>
        <div className={styles.tablero}>
          <div
            className={styles.card}
            style={{ transform: "rotate(-2.6720201708191915deg)" }}
          >
            <Image src='/t1.jpg' width='4608' height='3456' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(-0.4170340737983942deg)" }}
          >
            <Image src='/t2.jpeg' width='864' height='1152' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(-0.7300282223172427deg)" }}
          >
            <Image src='/t3.jpeg' width='1080' height='1149' alt='koko conservas' />
            
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(-2.642351971649417deg)" }}
          >
            <Image src='/t4.jpeg' width='864' height='1152' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(2.2441614055875414deg)" }}
          >
            <Image src='/t5.jpeg' width='816' height='1088' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(0.33995512911433323deg)" }}
          >
            <Image src='/t6.jpeg' width='783' height='1044' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(3.1814530692912015deg)" }}
          >
            <Image src='/t7.jpeg' width='864' height='1152' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(1.5740775415626658deg)" }}
          >
            <Image src='/t8.jpeg' width='864' height='1152' alt='koko conservas' />
          </div>
          <div
            className={styles.card}
            style={{ transform: "rotate(-3.071558313281453deg)" }}
          >
            <Image src='/t9.jpg' width='4393' height='3456' alt='koko conservas' />
          </div>
        </div>
      </section>
      </>
    );
}
