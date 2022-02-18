import { useState } from "react";

function App() {

  const [libros,setLibros] = useState([])
  const [tareas,setTareas] = useState("")

  const insertar = (e) => {
    e.preventDefault();
    setLibros(schdule=>[...schdule, tareas]);
    setTareas("");
  };

  const handleText=(e)=>{
    setTareas(e.target.tareas
    =e.target.value)
  }

  const eliminar =(item)=>{
    const nuevoLibro = libros.filter((user)=>user !== item)
    setLibros(nuevoLibro)
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
                  <tr key={i}>
                    <td  className="text-light">{item}</td>
                    <th><i type="button" className="bi bi-x-circle text-warning" onClick={()=>eliminar(item)}></i></th>
                  </tr>
                )}
                  <tr>
                  <td className="text-dark bg-warning fw-bold"><i className="bi bi-list-stars"></i>  {agendaTotal}</td>
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
