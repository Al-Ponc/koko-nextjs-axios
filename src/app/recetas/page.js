'use client'
import styles from "./recetas.module.css";
import Image from "next/image";

import { useEffect, useState } from 'react';
import axios from 'axios';

function Recetas() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/recetario/lista_recetas')
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

export default Recetas;
