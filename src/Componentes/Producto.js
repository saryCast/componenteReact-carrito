import React from 'react';
import {Button, CardText, Col,CardSubtitle, CardImg,CardTitle,CardBody, Card } from 'reactstrap';
import './Producto.css'


function Producto(props){
    return(
        <Col sm="4">
            <Card className="Card" body outline color='primary'>
                <CardImg src={props.imagen}/>
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle><b>Valor : </b>{props.precio}</CardSubtitle>
                    <CardText>{props.descripcion}
                    </CardText>
                    <Button className='Button'>Comprar</Button>
                    <Button className='Button'>Ver Ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
}
export default Producto;