import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="email" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;
