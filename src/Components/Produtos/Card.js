import React from 'react'
import Styled from 'styled-components'

const ContainerCard = Styled.div`
    height: 350px;
    width: 200px;
    /* border: 1px solid black; */
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    text-align: center;
    will-change: transform;
    transition: transform 450ms;
    background-color: white;

    > img {
        width: 100%;
    }

    > button {
        &:hover {
            cursor: pointer;
        }
    }

    &:hover {
        transition: transform 125ms;
        transform: translateY(-10px);
    }
`

class Card extends React.Component {
    render() {
        return (
            <ContainerCard>
                {this.props.imagem}
                <p>{this.props.nome}</p>
                <p>R$ {this.props.preco}</p>
                <button onClick={() => this.props.adicionaAoCarrinho(this.props.camiseta)}>Adicionar ao Carrinho</button>

            </ContainerCard>

        )


    }
}

export default Card;