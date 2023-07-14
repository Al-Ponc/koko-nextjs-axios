import styles from "./page.module.css";
import Image from "next/image";
import Slider from "./components/carrusel/Slider";

export default function Inicio() {
  return (
    <>
      <Slider/>
      <div>
      <br />
      <section className={styles.sectarjetas3s}>
        <div className={styles.tarjetas3sC}>
          <div className={styles.tarjetas3s}>
            <Image
              src="/img/Sustentable2.png"
              alt="Sustentable"
              className={styles.imagen3sprincipal}
              width={400}
              height={400}
            />
            <h1 className={styles.h113S}>Sustentable</h1>
            <p>
              Elaboramos conservas y fermentados con verduras que cultivamos en nuestro huerto familiar con métodos amigables para el medioambiente.
            </p>
          </div>
          <div className={styles.tarjetas3s}>
            <img
              src="/img/Saludable3.png"
              alt="Saludable"
              className={styles.imagen3sprincipal}
              width={400}
              height={400}
            />
            <h1 className={styles.h113S}>Saludable</h1>
            <p>
              Utilizamos diferentes técnicas de conservación, fomentando una alimentación sana y natural sin conservantes, colorantes ni aditivos.
            </p>
          </div>
          <div className={styles.tarjetas3s}>
            <Image
              src="/img/Sabroso3.png"
              alt="Sabroso"
              className={styles.imagen3sprincipal}
              width={400}
              height={400}
            />
            <h1 className={styles.h113S}>Sabroso</h1>
            <p>
              Combinamos diferentes culturas, sabores y saberes entregando un toque único a nuestros productos.
            </p>
          </div>
        </div>
        <div className={styles.buttoncontainerrecetas}></div>
      </section>

      {/* CATEGORIA PRODUCTOS */}
      <center></center>
      <br />
      <section className={styles.secproductos}>
        <div className={styles.contsecproductos}>
          <div className={styles.intro}>
            <h1 className={styles.h11}>¡SABORES DE LA HUERTA!</h1>
            <h3 className={styles.h33}>100% orgánico, local y fresco.</h3>
            <button>PRODUCTOS</button>
          </div>
          <div className={styles.categorias}>
            <label className={styles.tarjetaproducto}>
              <Image
                src="/img/chutneyCategoria.jpeg"
                alt="cat-chutneys"
                width={400}
                height={400}
              />
              <span className={styles.labeltext}>Chutneys</span>
            </label>
            <label className={styles.tarjetaproducto}>
              <Image
                src="/img/picklesCategoria.jpeg"
                alt="cat-pickles"
                width={400}
                height={400}
              />
              <span className={styles.labeltext}>Pickles</span>
            </label>
            <label className={styles.tarjetaproducto}>
              <Image
                src="/img/ajiCategoria.jpeg"
                alt="cat-aji"
                width={400}
                height={400}
              />
              <span className={styles.labeltext}>Salsas de ají</span>
            </label>
            <label className={styles.tarjetaproducto}>
              <Image
                src="/img/varios.jpg"
                alt="cat-fermentos"
                width={400}
                height={400}
              />
              <span className={styles.labeltext}>Fermentos</span>
            </label>
          </div>
        </div>
      </section>
      <br />
      <center></center>

      {/* CONOCENOS */}
      <div className={styles.contenedorconocenos}>
        <Image src="/img/giphy.gif" width={400} height={400} />
        <div className={styles.txtconocenos}>
          <h1 className={styles.somos}>QUIENES SOMOS</h1>
          <p>
            La huertera, la cocinera, la vendedora, la del marketing y de las redes sociales…. soy yo!
          </p>
          <div>
            A orillas del rio Kurako, en la comuna de Cunco, en el centro de la hermosa región de la Araucanía Andina.
          </div>
          <p />
          <a className={styles.hiperlinkconocenos} href="#" target="_blank">
            más info
          </a>
        </div>
      </div>
      <br />
      <center></center>

      {/* RECETAS */}
      <section className={styles.secrecetas}>
        <div className={styles.recetas}>
          <div className={styles.tarjetasrecetas}>
            <Image
              src="/receta9.jpg"
              width={400}
              height={400}
              alt="hamburguesa porotos negros"
              className={styles.imagenrecetaprincipal}
            />
            <p>Hamburguesa de Porotos Negros con Pickles de Zapallo Italiano </p>
          </div>
          <div className={styles.tarjetasrecetas}>
            <img
              src="/receta6.jpg"
              width={400}
              height={400}
              alt="ensalada de quinoa"
              className={styles.imagenrecetaprincipal}
            />
            <p>Ensalada de Quinoa con Pickles de Betarraga</p>
          </div>
          <div className={styles.tarjetasrecetas}>
            <Image
              src="/receta7.jpg"
              width={400}
              height={400}
              alt="sandwich de pickles de berenjena"
              className={styles.imagenrecetaprincipal}
            />
            <p>
              Sandwich de pickles de betarraga con queso de cabra
            </p>
          </div>
        </div>
        <div className={styles.buttoncontainerrecetas}>
          <button>VER MÁS RECETAS</button>
        </div>
      </section>
    </div>     
    </>
  );
}
