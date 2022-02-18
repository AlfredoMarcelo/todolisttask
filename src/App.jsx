import { useEffect, useState } from "react";

function App() {

  const [libros,setLibros] = useState([])
  const [tareas,setTareas] = useState("")


  
  const url = "https://assets.breatheco.de/apis/fake/todos/user/alesanchezr"
  const opcion = {
    method: "GET",
    headers:{
      
    }
  };
  
  useEffect(()=>{
    obtenerDatos()
  },[])


  const obtenerDatos = async ()=>{
    const data = await fetch (url)
    const user = await data.json()
    console.log(user)
      /* .then(respuesta => {
        if(respuesta.status >=200 && respuesta.status <300){
          console.log("La solicitud se ha realizado con exito jejej");
          return respuesta.json();
        }
      })*/
      setLibros(user) 
      
  }





  const insertar = (e) => {
    e.preventDefault();
    setLibros(schdule=>[...schdule, tareas]);
    setTareas("");
  };

  const handleText=(e)=>{
    setTareas(e.target.tareas
    =e.target.value)
  }

  const eliminar =(item,i)=>{
    const nuevoLibro = libros.filter((user,index)=>index !== i)
    setLibros(nuevoLibro)
  }

  const vaciarAgenda = ()=>{
    setLibros([])
  }

  const agendaTotal = libros.length;

  return (
    <>
      <main className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto text-light text-center py-5">
              <form id="formulario" onSubmit={insertar}>
              <h1>
                Todos Task <i className="bi bi-list-check text-warning"></i>
              </h1>
              <input
                className="form-control mb-5 rounded w-100 py-2 bg-light"
                type="text"
                name="newtareas"
                id="newtareas"
                value={tareas}
                onChange={handleText}
              />
              </form>
              <table className="table bg-dark">
                <thead></thead>
                <tbody>
                { libros.map((item,i)=>
                  <tr className="py-3" key={item.id}>
                    <td  className="text-light">{item.label}</td>
                    <th><i type="button" className="bi bi-x-circle text-warning" onClick={()=>eliminar(item.label,i)}></i></th>
                  </tr>
                )}
                  <tr>
                  <td className="text-dark bg-warning fw-bold "><i className="bi bi-list-stars h5"> {agendaTotal}</i> </td>
                  <th className="text-dark bg-warning fw-bold"><i className="bi bi-trash-fill h5" type="button" onClick={()=>vaciarAgenda()}></i></th>
                  
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
