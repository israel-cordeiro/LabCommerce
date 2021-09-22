import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    width: 200px;
    height: 490px;
    margin-left: 10px;
    padding: 5px;
    align-items: center;
    margin-top: 10px;
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    border-radius: 5px;
    font-size: 0.8rem;
    background-color: white;
    
    > div > input {
        border-radius: 5px;
        height: 25px;
        box-shadow: 2px 2px 5px 2px LightSteelBlue;
        border-width: 1px;
    }
`


class Filtros extends React.Component {
   
    render() {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                <div>
                    <p> Valor míninmo: </p>
                    <input 
                    name={"valorMinimo"}
                    type="number"
                    onChange={this.props.onChangeValorMin}
                    value={this.props.estadoValorMin}
                    
                    />
                </div>
                <div>
                    <p>Valor máximo:</p>
                    <input 
                    name={"valorMaximo"}
                    type="number"
                    onChange={this.props.onChangeValorMax}
                    value={this.props.estadoValorMax}

                    />
                </div>
                <div>
                    <p>Busca por nome:</p>
                    <input 
                    name={"nome"}
                    type="text"
                    onChange={this.props.onChangeBuscaNome}
                    value={this.props.estadoBuscaNome}
                    

                    />
                </div>
            </ FilterContainer>
        )
    }
}

export default Filtros