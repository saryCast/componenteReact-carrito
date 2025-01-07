import React from 'react';
import {Container, Row} from 'reactstrap';
import './App.css';
import Producto from './Componentes/Producto';

/*
function App() {
  return (
    <Container>
      <Row>
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      </Row>
    </Container>
  );
}

export default App;
*/
//Cambiamos a POO
class App extends React.Component{
    render(){
    return (
      <Container>
        <Row>
        <Producto
          titulo="Headphone Purple"
          imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
          descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
          precio="24.390"
        />
        <Producto
          titulo="Headphone Purple"
          imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
          descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
          precio="24.390"
        />
        <Producto
          titulo="Headphone Purple"
          imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
          descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
          precio="24.390"
        />
        <Producto
          titulo="Headphone Purple"
          imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
          descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
          precio="24.390"
        />
        </Row>
      </Container>
    );
  }
}
export default App;