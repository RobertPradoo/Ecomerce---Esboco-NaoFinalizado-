import React from 'react';
import Slider from 'react-slick';
import './App.scss';
import logo from './logo.svg';
import BannerPrincipal from './BannerPrincipal';
import produto from './produto-1.png';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">      
        <div className="esquerda-icones">
          <div className="icone1">
            <img src= "" alt="menu" />
          </div>
          <div className="icone2">
          <img src= "" alt="lupa" />
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="direita-icones">
          <div className="icone3">
          <img src= "" alt="perfil" />
          </div>
          <div className="icone4">
            <img src ="" alt="carrinho"/>
          </div>
        </div>
      </header>
      <BannerPrincipal />

      <div className="categorias">
        <h2>Categorias</h2>
        <div className="categorias-lista">
          <div className="categoria">Botas</div>
          <div className="categoria">Scarpins</div>
          <div className="categoria">Sandalia</div>
          <div className="categoria">Tênis</div>
          </div>
          <img src ="url_imagem" className ="Banner-navegacao"></img>
          <img src="url_imagem" className="Banner-navegacao2"></img>
      
      </div>
      <div className="lancamentos">
  <h2>Lançamentos</h2>
  <div className="lancamento-lista">
    <div className="lançamento">
      <img src="url_da_imagem_do_produto_1" alt="teste" />
      <div className="detalhes-produto">
        <button className="botao-favorito">Favorito</button>
        <button className="botao-adicionar">Adicionar ao Carrinho</button>
        <h3>Tênis</h3>
        <p>R$ 300,00</p>
      </div>
    </div>
    <div className="lancamento2">
      <img src="url_da_imagem_do_produto_2" alt="Produto 2" />
      <div className="detalhes-produto">     
        <button className="botao-favorito">Favorito</button>
        <button className="botao-adicionar">Adicionar ao Carrinho</button>
        <p>R$ 120,00</p>
        <h3>Camiseta</h3> 
      </div>
    </div>
    <div className="lancamento3">
      <img src="url_da_imagem_do_produto_2" alt="Produto 3" />
      <div className="detalhes-produto">
        <button className="botao-favorito">Favorito</button>
        <button className="botao-adicionar">Adicionar ao Carrinho</button>
        <h3>Calça</h3>
        <p>R$ 160,00</p>
      </div>
    </div>
    <div className="lancamento4">
      <img src="url_da_imagem_do_produto_2" alt="Produto 4" />
      <div className="detalhes-produto">
        <button className="botao-favorito">Favorito</button>
        <button className="botao-adicionar">Adicionar ao Carrinho</button>
        <h3>Bermuda</h3>
        <p>R$ 110,00</p>
      </div>
    </div>
  </div>
</div>

<div className="noticias">
        <h2>Notícias</h2>
        <div className="noticias-lista">
          <div className="noticia">
            <img src="url_da_imagem_noticia_1" alt="Notícia 1" />
            <p>Legenda da Notícia 1</p>
          </div>
          <div className="noticia">
            <img src="url_da_imagem_noticia_2" alt="Notícia 2" />
            <p>Legenda da Notícia 2</p>
          </div>
          <div className="noticia">
            <img src="url_da_imagem_noticia_3" alt="Notícia 3" />
            <p>Legenda da Notícia 3</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;
