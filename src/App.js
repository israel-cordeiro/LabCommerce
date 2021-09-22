import React from 'react';
import './App.css';
import Filtros from './Components/Filtros'
import Produtos from './Components/Produtos/Produtos'
import Carrinho from './Components/Carrinho/Carrinho'
import iconFacebook from './Components/Img/logo-do-facebook.png'
import iconGithub from './Components/Img/github.png'
import iconTwitter from './Components/Img/twitter2.png'
import iconInstagram from './Components/Img/instagram.png'
import { parse, stringify } from 'flatted';
import styled from 'styled-components';

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerGeral = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 80px;
  min-height: 100vh;
  background-color: whitesmoke;
`

const Header = styled.header`
  background-color: skyblue;
  font-family: 'Qahiri', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  > h1 {
    padding-bottom: 20px;
  }
`

const Footer = styled.footer`
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = {
    // Valores Carrinho
    carrinho: [],
    total: 0,
    // Valores Filtro
    valorMin: 0,
    valorMax: 500,
    buscaNome: "",
  }

  componentDidMount() {
    localStorage.getItem('carrinho') && this.setState({
      carrinho: parse(localStorage.getItem('carrinho'))
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carrinho !== this.state.carrinho) {
      this.atualizaTotal()
      localStorage.setItem('carrinho', stringify(this.state.carrinho))
    }
  }

  adicionaAoCarrinho = (camiseta) => {
    const novoItem = { camiseta, id: Date.now() }
    const novoCarrinho = [...this.state.carrinho, novoItem]
    this.setState({ carrinho: novoCarrinho })
  }

  retiraDoCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter(item => {
      return id !== item.id
    })
    this.setState({ carrinho: novoCarrinho })
  }

  atualizaTotal = () => {
    let totalCarrinho = 0
    for (let item of this.state.carrinho) {
      totalCarrinho = totalCarrinho + item.camiseta.preco
    }
    this.setState({ total: totalCarrinho })
  }

  // métodos filtro
  onChangeValorMin = (event) => {
    this.setState({ valorMin: event.target.value })
  }

  onChangeValorMax = (event) => {
    this.setState({ valorMax: event.target.value })
  }

  onChangeBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value })
  }


  render() {
    return (
      <ContainerGeral>
        <Header>
          <h1>SpaceWear</h1>
        </Header>

        <ContainerMain>
          <Filtros
            onChangeValorMin={this.onChangeValorMin}
            onChangeValorMax={this.onChangeValorMax}
            onChangeBuscaNome={this.onChangeBuscaNome}
            estadoValorMin={this.state.valorMin}
            estadoValorMax={this.state.valorMax}
            estadoBuscaNome={this.state.buscaNome}
          />
          <Produtos
            adicionaAoCarrinho={this.adicionaAoCarrinho}
            estadoValorMin={this.state.valorMin}
            estadoValorMax={this.state.valorMax}
            estadoBuscaNome={this.state.buscaNome}
          />
          <Carrinho
            total={this.state.total}
            retiraDoCarrinho={this.retiraDoCarrinho}
            carrinho={this.state.carrinho} />
        </ContainerMain>

        <Footer>
          <div class="wrapper">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
              <div class="icon facebook">
                <img src={iconFacebook} alt="" />
                <div class="tooltip">Facebook</div>
                <span><i class="fab fa-facebook-f"></i></span>
              </div>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com">
              <div class="icon twitter">
                <img src={iconTwitter} alt="" />
                <div class="tooltip">Twitter</div>
                <span><i class="fab fa-twitter"></i></span>
              </div>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
              <div class="icon instagram">
                <img src={iconInstagram} alt="" />
                <div class="tooltip">Instagram</div>
                <span><i class="fab fa-instagram"></i></span>
              </div>
            </a>
            
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/future4code/lovelace-labe-commerce3">
              <div class="icon github">
                <img src={iconGithub} alt="" />
                <div class="tooltip">Github</div>
                <span><i class="fab fa-github"></i></span>
              </div>
            </a>
  
          </div>
        </Footer>
      </ContainerGeral>
    );
  }
}

export default App;