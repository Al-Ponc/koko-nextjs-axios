import styles from "./productos.module.css";

const Productos = () => {
  return (
    <>
      <section className={styles.detalleProductos}>
        <div className={styles.contComprar}>
          <div className={styles.txtComprar}>
            <h3>¿TE INTERESA COMPRAR?</h3>
            <p> Contáctanos al Whatsapp y sigue los siguientes pasos:</p>
            <ol>
              <li>
                Revisa la lista de productos y pregunta por la disponibilidad.
              </li>
              <li>Método de pago: Transferencia y efectivo a contraentrega</li>
            </ol>
            <p>
              *Se hacen entregas a domicilio en Cunco y Temuco. Envío a regiones
              por Starken*
            </p>
          </div>
          <img src="productos_img/products.png" alt="products" />
        </div>
        <div className={`${styles.subSecciones} ${styles.seccPickles}`}>
          <div className={styles.categoriaDescripcion}>
            <h3>PICKLES</h3>
            <p>
              KoKoConservas prepara sus pickles con una mezcla de vinagre de
              manzana de la quinta, un poco de azucar, sal de mar y otras
              especias.
            </p>
          </div>
          <div className={styles.contTarjDetalle}>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/pickle_betarraga.jpeg"
                alt="pickle_betarraga"
              />
              <p>Pickle betarraga $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/pickle_rabano_negro.jpeg"
                alt="pickle_rabano_negro"
              />
              <p>Pickle rábano negro $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/picke_zapallo_italiano.jpeg"
                alt="picke_zapallo_italiano"
              />
              <p>Pickle zapallo italiano $0000</p>
            </label>
          </div>
        </div>
        <div className={`${styles.subSecciones} ${styles.seccChutneys}`}>
          <div className={styles.categoriaDescripcion}>
            <h3>CHUTNEYS</h3>
            <p>
              Originario de la India, el Chutney es una confitura agridulce
              elaborada con frutas o verduras cocidas a fuego lento con vinagre,
              especias aromaticas y azúcar. ¡Una verdadera bomba de sabor!.
            </p>
          </div>
          <div className={styles.contTarjDetalle}>
            <label className={styles.tarjDetalleProduct}>
              <img src="productos_img/chutney_aji.jpeg" alt="chutney_aji" />
              <p>Chutney de ají $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/chutney_berenjena.jpeg"
                alt="chutney_berenjena"
              />
              <p>Chutney de berenjena $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/chutney_betarraga.jpeg"
                alt="chutney_betarraga"
              />
              <p>Chutney de betarraga $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/chutney_cebolla_morada.jpeg"
                alt="chutney_cebolla"
              />
              <p>Chutney de cebolla $0000</p>
            </label>
          </div>
        </div>
        <div className={`${styles.subSecciones} ${styles.seccAji}`}>
          <div className={styles.categoriaDescripcion}>
            <h3>SALSAS DE AJÍ</h3>
            <p>
              Queremos dar un toque diferente a las tradicionales salsas de ají.
              A parte de la clásica, les presentamos una salsa a base de ají
              fermentado y una salsa de ají cacho cabra con miel.
            </p>
          </div>
          <div className={styles.contTarjDetalle}>
            <label className={styles.tarjDetalleproduct}>
              <img
                src="productos_img/salsa_aji_dulce.jpeg"
                alt="salsa_aji_dulce"
              />
              <p>Salsa de aji dulce $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/salsa_aji_fermentado.jpeg"
                alt="salsa_aji_fermentado"
              />
              <p>Salsa ají fermentado $0000</p>
            </label>
            <label className={styles.tarjDetalleProduct}>
              <img
                src="productos_img/salsa_aji_clasica.jpeg"
                alt="salsa_aji_clasica"
              />
              <p>Salsa de ají clásica $0000</p>
            </label>
          </div>
        </div>
        <div className={`${styles.subSecciones} ${styles.seccTemporada}`}>
          <div className={styles.categoriaDescripcion}>
            <h3>¡PRODUCTOS DE TEMPORADA!</h3>
            <p>
              Nos encanta trabajar con verduras y frutas de temporada. ¡Revisa
              nuestra página en Instagram para ver las delicias de temporada!
            </p>
          </div>
          <div className={styles.contTarjDetalle}>
            <label className={styles.tarjDetalleProduct}>
              <img src="productos_img/18228134.jpg" alt="temporada" />
              <p>Producto temporada</p>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};
export default Productos;
