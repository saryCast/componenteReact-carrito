import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';
import {listaCarrito} from '../listaCarrito';

class Carro extends React.Component{
    //Metodo constructor, antes de renderizar
    constructor(){
        //metodo super que llama a toda las funciones de la clase que hereda
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
    
        };

        //bind hara que los argumentos recibidos por la clase puedan ser compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
       // console.log(this.props)
       this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
       }));
    }

    
    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito,i)=>{
                return(
                    <tr>
                        <td>{(i+=1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="danger">
                <span class="material-icons">shopping_cart</span>
                    <Badge color="success">{arregloCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Lista de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {arregloCarrito}
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;