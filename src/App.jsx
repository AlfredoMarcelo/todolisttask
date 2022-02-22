import { useEffect, useState } from "react";

function App() {
  const [libros, setLibros] = useState([]);
  const [tareas, setTareas] = useState("");
  
  const url = "https://assets.breatheco.de/apis/fake/todos/user/alfredo";
  
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
<<<<<<< HEAD
    body: JSON.stringify([])
  };
  const inicioLibro = async () => {
    const data = await fetch(url, post);
    const user = await data.json();
    /* setLibros=user; */
  };


=======
    body: []
  };
  const inicioLibro = async (setLibros) => {
    const data = await fetch(url, post);
    const user = await data.json();
    setLibros=user;
  };

  useEffect(() => {
    ;
  }, []);
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c

  const get = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };
  const put = {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
  };
<<<<<<< HEAD



  useEffect(() => {
    inicioLibro();
=======
  const delet = {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
  };


  useEffect(() => {
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
    obtenerDatos();
  }, []);

 

  const obtenerDatos = async () => {
    const data = await fetch(url, get);
    const user = await data.json();
    setLibros(user);
  };

  
  const insertar = (e) => {
    e.preventDefault();
    setLibros((schdule) => [...schdule, {label:tareas,done:false}]);
    setTareas("");
<<<<<<< HEAD
    actualizar([...libros, {label:tareas,done:false}]);
    console.log(libros)
=======
    actualizar(libros);
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
  };

  const actualizar = (setter)=>{
    fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(setter),
  })
  .then((response) => {
    console.log(response);
<<<<<<< HEAD
    return response.json()
  })
  .then((resp) => {
    console.log(resp);
=======
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
  })
  .catch((err) => {
    console.error(err);
    });
  }

<<<<<<< HEAD
=======




>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
  const handleText = (e) => {
    setTareas((e.target.tareas = e.target.value));
  };

  const eliminar = (item, i) => {
    const nuevoLibro = libros.filter((user, index) => index !== i);
<<<<<<< HEAD
    setLibros(nuevoLibro)
    /* del(nuevoLibro); */
=======
    setLibros(nuevoLibro);
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
  };

  const vaciarAgenda = () => {
    setLibros([]);
  };

<<<<<<< HEAD
/* 
  const del = (setter) =>{
  fetch('https://assets.breatheco.de/apis/fake/todos/user/alfredo', {
    method: "DELETE",
    body: JSON.stringify(setter),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      console.log(resp.ok); // will be true if the response is successfull
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      console.log(resp.text()); // will try return the exact result as string
      return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //here is were your code should start after the fetch finishes
      console.log(data); //this will print on the console the exact object received from the server
  })
  .catch(error => {
      //error handling
      console.log(error);
  });
} */
















=======
>>>>>>> 63c2ec5507d777d6de967dc1abfbf7db35c8345c
  const agendaTotal = libros.length;
  console.log(libros)

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
                  {libros.map((item, i) => (
                    <tr className="py-3" key={i}>
                      <td className="text-light">{item.label}</td>
                      <th>
                        <i
                          type="button"
                          className="bi bi-x-circle text-warning"
                          onClick={() => eliminar(item.label, i)}
                        ></i>
                      </th>
                    </tr>
                  ))}
                  <tr>
                    <td className="text-dark bg-warning fw-bold ">
                      <i className="bi bi-list-stars h5"> {agendaTotal}</i>{" "}
                    </td>
                    <th className="text-dark bg-warning fw-bold">
                      <i
                        className="bi bi-trash-fill h5"
                        type="button"
                        onClick={() => vaciarAgenda()}
                      ></i>
                    </th>
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
