import React from 'react';
import {Container, Row} from 'reactstrap';
import './App.css';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import {listaProductos} from './listaProductos.json';

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
console.log(listaProductos);
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }

/* ELIMINAMOS PARA PASAR LOS DATOS POR JSON
    render(){
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
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
  } */


    render(){
      const arregloComponentes = this.state.listaProductos.map(
        (listaProductos,i)=>{
          return(
            <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
            />
          )
        }
      );
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          {arregloComponentes}
        
        </Row>
      </Container>
    );
  } 

}
export default App;