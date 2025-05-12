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
import "./App.css";
import { useFetch } from "./hooks";
const url = "https://api.example.com/data";
//const url = "https://pokeapi.co/api/v2/pokemon/ditto";

interface Data{
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const {data, error, loading} = useFetch<Data>(url)
  
  if (loading) {
    return <div>Cargando...</div>
  }

  if(error){
    return <div>Ah ocurrido un error: {error.message}</div>
  }
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;
