import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';


class Carro extends React.Component{
    render(){
        return(
            <div>
                <Button color="danger">
                <span class="material-icons">shopping_cart</span>
                    <Badge color="success">0</Badge>
                </Button>
                <Popover>
                    <PopoverHeader></PopoverHeader>
                    <PopoverBody>
                        <Table>
                            
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;