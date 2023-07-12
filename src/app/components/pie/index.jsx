import Image from "next/image";
import styles from "./pie.module.css";
Image
export default function Pie() {
    return(
        <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footercontent}>
            <div className={'${styles.footersection} ${styles.about}'}>
              <h3>"De la huerta a tu mesa"</h3>
              <Image src="/img/organic.png" alt="organico" width={200} height={200}/>
            </div>
            <div className={'${styles.footersection} ${styles.links}'}>
              <h3>Enlaces útiles</h3>
              <ul>
                <li>
                  <a className={styles.aaa} href="#">Inicio</a>
                </li>
                <li>
                  <a className={styles.aaa} href="#">Acerca de</a>
                </li>
                <li>
                  <a className={styles.aaa}href="#">Productos</a>
                </li>
                <li>
                  <a className={styles.aaa} href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className={'${styles.footersection} ${styles.social}'}>
              <h3>¡Síguenos en Instagram!</h3>
              <h4>@kokoconservas</h4> <br />
              <br />
              <h3>Contacto</h3>
              <span>
                <i className="fas fa-phone" /> (56) 936560001
              </span>{" "}
              <br />
              <span>
                <i className="fas fa-envelope" /> kokoconservas@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerbottom}>
          © 2023 Koko Conservas. Todos los derechos reservados.
        </div>
      </footer>


    )
}