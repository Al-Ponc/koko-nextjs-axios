'use client'
import styles from "./anuncios.module.css"
import axios from 'axios';

import React, { useEffect, useState } from 'react';
;

export default function Anuncio() {
  const [aviso, setAviso] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/aviso/1');
        setAviso(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {aviso ? (
        <div className={styles.aviso}>{aviso.textoAviso}</div>
      ) : (
        <div className={styles.aviso}> Cargando aviso...</div>
      )}
    </div>
  );
}
