'use client'
import { useState } from 'react';
import axios from 'axios';

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
      
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nuevo Anuncio"
        value={nuevoTitulo}
        onChange={(e) => setNuevoTitulo(e.target.value)}
      />
      <button onClick={handleEditarClick}>Editar aviso</button>
    </div>
  );
};