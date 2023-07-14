'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './adminrecetas.module.css'; 

const baseUrl = 'http://localhost:8080/recetario';

export default function RecetasEditarBorrarCrear() {
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaFoto, setNuevaFoto] = useState('');
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    fetchRecetas();
  }, []);

  const fetchRecetas = async () => {
    try {
      const response = await axios.get(`${baseUrl}/lista_recetas`);
      setRecetas(response.data);
    } catch (error) {
      console.error('Error al obtener las recetas:', error);
    }
  };

  const handleEditarClick = async (receta) => {
    try {
      const response = await axios.put(`${baseUrl}/editar_receta/${receta.id}`, {
        nombreReceta: receta.nombreReceta,
        desarrolloReceta: receta.desarrolloReceta,
        imgReceta: receta.imgReceta
      });

      alert('Receta Editada');
      fetchRecetas();
    } catch (error) {
      console.error('Error al editar la receta:', error);
    }
  };

  const handleEliminarClick = async (recetaId) => {
    try {
      const response = await axios.delete(`${baseUrl}/borrar_receta/${recetaId}`);

      alert('Receta Eliminada');
      fetchRecetas();
    } catch (error) {
      console.error('Error al eliminar la receta:', error);
    }
  };

  const handleCrearClick = async () => {
    try {
      const response = await axios.post(`${baseUrl}/nueva_receta`, {
        nombreReceta: nuevoTitulo,
        desarrolloReceta: nuevaDescripcion,
        imgReceta: nuevaFoto
      });

      alert('Receta Creada');
      fetchRecetas();
      resetForm();
    } catch (error) {
      console.error('Error al crear la receta:', error);
    }
  };

  const resetForm = () => {
    setNuevoTitulo('');
    setNuevaDescripcion('');
    setNuevaFoto('');
  };

  return (
    <div>
      <h2 className={styles.h22}>RECETAS</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((receta) => (
              <tr key={receta.id}>
                <td>
                  <img src={receta.imgReceta} alt="Foto de la receta" className={styles.recipeImage} />
                </td>
                <td>{receta.nombreReceta}</td>
                <td>{receta.desarrolloReceta}</td>
                <td>
                  <button onClick={() => handleEditarClick(receta)}>Editar</button>
                  <button onClick={() => handleEliminarClick(receta.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
