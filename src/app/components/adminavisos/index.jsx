'use client'
import { useState } from 'react';
import axios from 'axios';
import styles from "./adminavisos.module.css"

export default function AvisoEditar () {
  const [nuevoTitulo, setNuevoTitulo] = useState('');

  const handleEditarClick = async () => {
    try {
      const response = await axios.put('http://localhost:8080/api/editar_aviso/1', {
        textoAviso: nuevoTitulo,
        
      });

      alert('Aviso Editado');
      

    } catch (error) {
      alert('No se pudo editar el aviso');
      console.error('No se pudo editar el aviso:', error);
    }
  };

  return (<>
  <h2 className={styles.h22}>AVISOS</h2>
    <div className={styles.contenedor}>
    <textarea
      className={styles.input1}
      rows="5"
      placeholder="Nuevo Aviso"
      value={nuevoTitulo}
      onChange={(e) => setNuevoTitulo(e.target.value)}
    />
    <button className={styles.btn} onClick={handleEditarClick}>Confirmar</button>
  </div>
  </>
  );
};