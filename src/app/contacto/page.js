'use client'

import { useEffect, useState } from 'react';
import { getRequest } from "../service/api";

function Contacto() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    getRequest('/lista_recetas')
      .then(response => {
        setRecetas(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div>
      {recetas.map(receta => (
        <div className={styles.contenedorec} key={receta.recetaId}>
          <img className={styles.imagenes} src={receta.imgReceta} alt={receta.nombreReceta} />
          <h2>{receta.nombreReceta}</h2>
          <p>{receta.desarrolloReceta}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Contacto;
