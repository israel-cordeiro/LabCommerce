import React from 'react';
import ItemCarrinho from './ItemCarrinho'
import styled from 'styled-components';


const ContainerCarrinho = styled.div`
    width: 290px;
    height: 500px;
    /* border: 1px solid black; */
    /* margin-top: 120px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    margin-right: 10px;
    margin-top: 10px;
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    border-radius: 5px;
    background-color: white;
`
const ContainerPreço = styled.div`
    display: flex;
    /* box-shadow: 2px 2px 5px 2px LightSteelBlue;
    margin: 5px 0;
    border-radius: 5px;
    padding: 5px; */
`

class Carrinho extends React.Component {

    render() {

        const listaCarrinho = this.props.carrinho.map(item => {
            return (
                <ItemCarrinho 
                key={item.id}
                nome={item.camiseta.nome}
                id={item.id}
                retiraDoCarrinho={this.props.retiraDoCarrinho}
                />
            )
        })
        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                {listaCarrinho}
                <ContainerPreço>
                    <p>Valor Total: R$ {this.props.total},00</p>
                </ContainerPreço>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho