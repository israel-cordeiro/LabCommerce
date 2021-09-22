import React from 'react'
import styled from 'styled-components'

const ContainerItem = styled.div`
    width: 89%;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    margin: 5px 0;
    border-radius: 5px;

    > button {
        padding: 1px;
        &:hover {
            cursor: pointer;
        }
    }
`

const ContainerNome = styled.span`
    /* margin-left: -70px; */
`

class ItemCarrinho extends React.Component {
    render() {
        return (
            <ContainerItem>
                <span>1x</span>
                <ContainerNome>{this.props.nome}</ContainerNome>
                <button onClick={() => this.props.retiraDoCarrinho(this.props.id)}>Remover</button>
            </ContainerItem>
        )
    }
}

export default ItemCarrinho