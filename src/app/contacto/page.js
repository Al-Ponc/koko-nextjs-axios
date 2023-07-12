"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contacto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/recetas/?populate=deep,10');
      const responseData = response.data.data;
      setData(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div></div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.attributes.Titulo}</h3>
            <p>{item.attributes.Descripcion}</p>

    </li>
        
        ))}
      </ul>
    </>
  );
};

export default Contacto;
