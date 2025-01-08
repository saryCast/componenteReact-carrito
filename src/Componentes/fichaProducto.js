import React from 'react'
import {Modal, Container, Button, ModalHeader, ModalBody, ModalFooter, CardImg} from 'reactstrap';
import './fichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';


class FichaProducto extends React.Component{
   //Metodo constructor, antes de renderizar
    constructor(props){
        //metodo super que llama a toda las funciones de la clase que hereda
        super();
        this.state={
            modal:false,
            listaCarrito
        };

        //bind hara que los argumentos recibidos por la clase puedan ser compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    toggle(){
       // console.log(this.props)
       this.setState(prevState =>({
            modal: !prevState.modal
       }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio":this.props.props.precio
        })

    }

    //boton de reacstrap
    render(){
        return(
            //metodo toggle o accionador del boton. Modal de bootstrap son capas ocultas de DIV que se muestran cuando se preciona en un enlace o boton. isOpen retorna un verdadero o falso que indica si la ventana emergente se muestra o no
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                
                <Modal isOpen={this.state.modal}>
                   <ModalHeader>{this.props.props.titulo}</ModalHeader>
                   <ModalBody>
                    <CardImg src={this.props.props.imagen}/>
                    <p>El detalle del producto seleccionado es el siguiente: </p>
                    {this.props.props.descripcion}
                    <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                    <p>Hay <b>{this.props.props.stock}</b> unidades disponibles.</p>
                   </ModalBody>
                   <ModalFooter className='modalFooter'>
                    <Button color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                    <Button color='secondary' onClick={this.toggle}>Volver atrás</Button>
                   </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;