import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({lista, borrarTarea}) => {
  return (
    <ListGroup>
      {
        lista.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
