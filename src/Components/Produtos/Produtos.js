import React from 'react'
import Styled from 'styled-components'
import Camiseta1 from '../Img/Camiseta-1.jpg'
import Camiseta2 from '../Img/camiseta2.jpg'
import Camiseta3 from '../Img/camiseta3.jpg'
import Camiseta4 from '../Img/camiseta7.jpg'
import Camiseta5 from '../Img/camiseta5.jpg'
import Camiseta6 from '../Img/camiseta6.jpg'
import Card from './Card'

const ContainerProdutos = Styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    /* height: 500px; */
    padding: 15px;
    margin:0 auto;
    /* flex-wrap: wrap; */
`
const Header = Styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    > div {
        margin-right: 60px;
    }
`

const ContainerCards = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    > div{
        margin: 10px;
    }
`

class Produtos extends React.Component {

    state = {
        ordenacao: 'crescente'

    }

    onChangeInput = (event) => {
        this.setState({ ordenacao: event.target.value })

    }

    render() {
        const Produtos = [
            {
                id: 1,
                nome: 'Camiseta Astronauta Perdido',
                preco: 50,
                imagem: <img src={Camiseta1} alt="Foto Produto"/>
            },
            {
                id: 2,
                nome: 'Camiseta Planetas',
                preco: 45,
                imagem: <img src={Camiseta2} alt="Foto Produto"/>
            },
            {
                id: 3,
                nome: 'Camiseta Astronauta Voador',
                preco: 60,
                imagem: <img src={Camiseta3} alt="Foto Produto"/>
            },
            {
                id: 4,
                nome: 'Camiseta Nebulosa',
                preco: 30,
                imagem: <img src={Camiseta4} alt="Foto Produto"/>
            },
            {
                id: 5,
                nome: 'Camiseta Pisando na Lua',
                preco: 100,
                imagem: <img src={Camiseta5} alt="Foto Produto"/>
            },
            {
                id: 6,
                nome: 'Camiseta Gatinho Astronauta',
                preco: 80,
                imagem: <img src={Camiseta6} alt="Foto Produto"/>
            }


        ];

        const listaOrdenada = Produtos.sort((a, b) => {
            if (this.state.ordenacao === 'crescente') {
                return a.nome.localeCompare(b.nome)
            } else {
                return b.nome.localeCompare(a.nome)
            }
        })

        const listaProdutos = listaOrdenada.map(item => {
            return (
                <Card
                    key={item.id}
                    nome={item.nome}
                    preco={item.preco}
                    imagem={item.imagem}
                    camiseta={item}
                    adicionaAoCarrinho={this.props.adicionaAoCarrinho}
                />
            )


        })

        const listaFiltrada = listaProdutos.filter(produto => {
            console.log(produto)
            if(produto.props.preco >= this.props.estadoValorMin) {
                return true
            } else {
                return false
            }
        }).filter(produto => {
            if(produto.props.preco <= this.props.estadoValorMax) {
                return true
            } else {
                return false
            }
        }).filter(produto => {
            if (this.props.estadoBuscaNome) {
                if (produto.props.nome.toLowerCase().includes(this.props.estadoBuscaNome.toLowerCase())) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        })
    
        return (
            <ContainerProdutos>
                <Header>
                    <h2>Quantidade de Produtos: {Produtos.length}</h2>
                    <div>
                        <p>Ordenação</p>
                        <select onChange={this.onChangeInput}>
                            <option value='crescente'>Crescente</option>
                            <option value='decrescente'>Decrescente</option>
                        </select>
                    </div>
                </Header>
                <ContainerCards>
                    {listaFiltrada}
                </ContainerCards>
            </ContainerProdutos>

        )
    }
}

export default Produtos;