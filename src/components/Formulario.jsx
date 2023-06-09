import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import ItemTarea from "./ItemTarea";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [lista, setLista] = useState(tareasLocalStorage);

  useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(lista))
  }, [lista])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLista([...lista, tarea]);
    setTarea("");
  }

  const borrarTarea = (nombreTarea) =>{
    let arregloFiltrado = lista.filter((itemTarea)=> itemTarea !== nombreTarea);
    setLista(arregloFiltrado); 
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" 
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas lista={lista} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default Formulario;
