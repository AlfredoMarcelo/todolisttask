import { useState } from "react";

function App() {

  const [libros,setLibros] = useState([])
  const [task,setTask] = useState("")

  const insertar = (e) => {
    e.preventDefault();
    setLibros(schdule=>[...schdule, task]); 
    //console.log("alfredo");
    setTask("");
  };

  const alfredo = libros.length


  const handleText=(e)=>{
    setTask(e.target.task
    =e.target.value)
  }

  const eliminar =(item)=>{
    console.log("eliminaste")
    item.pop()
  }

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
                name="newTask"
                id="newTask"
                value={task}
                onChange={handleText}
              />
              </form>
              <table className="table bg-dark">
                <thead></thead>
                <tbody>
                { libros.map((item)=>
                  <tr>
                    <td className="text-light">{item}</td>
                    <th><i type="button" className="bi bi-x-circle text-warning" onClick={()=>eliminar(item)}></i></th>
                  </tr>
                )}
                  <tr>
                  <td className="text-dark bg-warning fw-bold">{alfredo}</td>
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
