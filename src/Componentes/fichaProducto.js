import React from 'react'
import {Modal, Container, Button} from 'reactstrap';


class FichaProducto extends React.Component{
   //Metodo constructor, antes de renderizar
    constructor(props){
        //metodo super que llama a toda las funciones de la clase que hereda
        super();
        this.state={
            modal:false
        };

        //bind hara que los argumentos recibidos por la clase puedan ser compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
       // console.log(this.props)
       this.setState(prevState =>({
            modal: !prevState.modal
       }));
    }

    //boton de reacstrap
    render(){
        return(
            //metodo toggle o accionador del boton. Modal de bootstrap son capas ocultas de DIV que se muestran cuando se preciona en un enlace o boton
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
            
                <Modal isOpen={this.state.modal}>
                    Se preciono sobre el boton. y se Abrio el Modal. La variable isOpen accede al estado del elemento del Modal, abriendoce el poput
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;