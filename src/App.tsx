  //useEffect
  // comunicarnos con un endpoint - es una entidad externa al componente
  // operaciones async
  // parametros de entrada
  //

  //un hock siempre empieza con un use 
  //los use son los que pertenecen a react
  //useEffect maneja el ciclo de vida de un componente

  // useEffect(() => {
  //   //1 - cuando se monta el componente
  //   //2 - cada ves que se modifique uno de los valores de state de arreglo de dependencias

  //   return () => {
  //     // manejar el estado de la memoria
  //   }
  // }, [])

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/dtto");
      
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    
    } catch (error) {
      setError(error as string);
      console.error(error);
    
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if(error){
    return <div>AH ocurrido un error: {error}</div>
  }
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;
