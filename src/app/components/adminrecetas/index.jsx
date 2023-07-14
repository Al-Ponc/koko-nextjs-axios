'use client'
import { useState } from 'react';
import axios from 'axios';

export default function RecetasEditarBorrarCrear () {
    const [recetaId, setRecetaId] = useState('');
    const [nuevoTitulo, setNuevoTitulo] = useState('');
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [nuevaFoto, setNuevaFoto] = useState('');
  
    const handleEditarClick = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/recetario/editar_receta/${recetaId}`, {
            nombreReceta: nuevoTitulo, desarrolloReceta: nuevaDescripcion, imgReceta: nuevaFoto
        });
  
        alert('Receta Editada');
        
  
      } catch (error) {
        console.error('Error al editar la receta:', error);
        
      }
    };
  
    const handleEliminarClick = async () => {
      try {
        const response = await axios.delete(`http://localhost:8080/recetario/borrar_receta/${recetaId}`);
  
        alert('Receta Eliminada');
      
  
      } catch (error) {
        console.error('Error al eliminar la receta:', error);
        
      }
    };
    
    const handleCrearClick = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/recetario/nueva_receta`, {recetaId: recetaId,
            nombreReceta: nuevoTitulo, desarrolloReceta: nuevaDescripcion, imgReceta: nuevaFoto
            });
    
          alert('Receta Creada');
        
    
        } catch (error) {
          console.error('Error al crear la receta:', error);
          
        }
      };

    return (
      <div>
        <input
          type="text"
          placeholder="ID de la receta"
          value={recetaId}
          onChange={(e) => setRecetaId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nuevo título"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
         <input
          type="text"
          placeholder="Nueva Descripcion"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL De la Imagen"
          value={nuevaFoto}
          onChange={(e) => setNuevaFoto(e.target.value)}
        />

        <button onClick={handleCrearClick}>Crear receta</button>
        <button onClick={handleEditarClick}>Editar receta</button>
        <button onClick={handleEliminarClick}>Eliminar receta</button>
      </div>
    );
  };
  
  
  