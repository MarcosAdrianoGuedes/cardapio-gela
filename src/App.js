import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 500); // Show the "scroll to top" button when scrolling down 500px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="bar-background">
        <h1 className="cardapio-text">GELA GUELA</h1>
        <img className="logo" src="https://th.bing.com/th/id/R.db69d9364338a1982d5a5277c3903d60?rik=07yLedYhRLcdIQ&pid=ImgRaw&r=0" alt="Logo Pinguim" />
        <h1 className="title">CARDÁPIO ONLINE</h1>
        <div className="bar-separator"></div> {/* Adiciona a barra de separação */}
      </div>
      <div className="buttons-container">
        <button className="section-button" onClick={() => scrollToSection('cervejas')}>Cervejas</button>
        <button className="section-button" onClick={() => scrollToSection('petiscos')}>Porções</button>
        <button className="section-button" onClick={() => scrollToSection('doses')}>Doses</button>
        <button className="section-button" onClick={() => scrollToSection('drinks')}>Drinks</button>
        <button className="section-button" onClick={() => scrollToSection('tabacos')}>Latas Bebidas/Águas</button>
      </div>
      <div className="menu-container" onclick="toggleZoom(this)">
        <div className="container" id="cervejas">
          <h2 className="section-title">CERVEJAS</h2>
          <div className="subsections-container">
            <div className="subsection">
              <h3 className="subsection-title">LITRÕES</h3>
              <ul>
                <li>
                  <span className="item-name">Antarctica</span>
                  <span className="item-price">R$12,00</span>
                </li>
                <li>
                  <span className="item-name">Brahma</span>
                  <span className="item-price">R$12,00</span>
                </li>
                <li>
                  <span className="item-name">Budweiser</span>
                  <span className="item-price">R$12,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">LATAS</h3>
              <ul>
                <li>
                  <span className="item-name">Antactica</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Devassa</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Skol</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Amstel</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Brahma</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Imperio</span>
                  <span className="item-price">R$3,00</span>
                </li>
                <li>
                  <span className="item-name">Bohemia</span>
                  <span className="item-price">R$5,00</span>
                </li>
                <li>
                  <span className="item-name">Duplo Malte</span>
                  <span className="item-price">R$5,00</span>
                </li>
                <li>
                  <span className="item-name">Eisenbahn</span>
                  <span className="item-price">R$5,00</span>
                </li>
                <li>
                  <span className="item-name">Original</span>
                  <span className="item-price">R$4,00</span>
                </li>
                <li>
                  <span className="item-name">Spaten</span>
                  <span className="item-price">R$5,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">LONGNECK</h3>
              <ul>
                <li>
                  <span className="item-name">Heineken</span>
                  <span className="item-price">R$8,00</span>
                </li>
                <li>
                  <span className="item-name">Heineken 0 Álcool</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Brahma 0 Álcool</span>
                  <span className="item-price">R$6,00</span>
                </li>
                <li>
                  <span className="item-name">Bohemia</span>
                  <span className="item-price">R$5,00</span>
                </li>
                <li>
                  <span className="item-name">Spaten</span>
                  <span className="item-price">R$8,00</span>
                </li>
                <li>
                  <span className="item-name">Stella Artois</span>
                  <span className="item-price">R$8,00</span>
                </li>
                <li>
                  <span className="item-name">Sol</span>
                  <span className="item-price">R$7,00</span>
                </li>
                <li>
                  <span className="item-name">Malzebier</span>
                  <span className="item-price">R$7,00</span>
                </li>
                <li>
                  <span className="item-name">Caruru</span>
                  <span className="item-price">R$7,00</span>
                </li>
                <li>
                  <span className="item-name">Budweiser</span>
                  <span className="item-price">R$8,00</span>
                </li>
                <li>
                  <span className="item-name">Corona</span>
                  <span className="item-price">R$6,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">CERVEJAS 600ML</h3>
              <ul>
                <li>
                  <span className="item-name">Antarctica</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Devassa</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Skol</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Amstel</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Brahma</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Bohemia</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Duplo Malte</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Eisenbahn</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Original</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Heineken</span>
                  <span className="item-price">R$14,00</span>
                </li>
                <li>
                  <span className="item-name">Spaten</span>
                  <span className="item-price">R$12,00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" id="petiscos">
          <h2 className="section-title">PORÇÕES</h2>
          <ul>
            <li>
              <span className="item-name">Anel de Cebola</span>
              <span className="item-price">R$25,00</span>
            </li>
            <li>
              <span className="item-name">Calabresa</span>
              <span className="item-price">R$30,00</span>
            </li>
            <li>
              <span className="item-name">Coxinha</span>
              <span className="item-price">R$30,00</span>
            </li>
            <li>
              <span className="item-name">Coxinha</span>
              <span className="item-price">R$30,00</span>
            </li>
            <li>
              <span className="item-name">Isca de Peixe</span>
              <span className="item-price">R$45,00</span>
            </li>
            <li>
              <span className="item-name">Batata Frita com Calabresa(Cheddar)</span>
              <span className="item-price">R$30,00</span>
            </li>
            <li>
              <span className="item-name">Batata Frita Comum</span>
              <span className="item-price">R$25,00</span>
            </li>
            <li>
              <span className="item-name">Carne de Sol</span>
              <span className="item-price">R$45,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="doses">
          <h2 className="section-title">DOSES</h2>
          <ul>
            <li>
              <span className="item-name">Chivas</span>
              <span className="item-price">R$20,00</span>
            </li>
            <li>
              <span className="item-name">Tequila</span>
              <span className="item-price">R$13,00</span>
            </li>
            <li>
              <span className="item-name">Old Par</span>
              <span className="item-price">R$25,00</span>
            </li>
            <li>
              <span className="item-name">Amarula</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Vodka</span>
              <span className="item-price">R$5,00</span>
            </li>
            <li>
              <span className="item-name">Gin</span>
              <span className="item-price">R$5,00</span>
            </li>
            <li>
              <span className="item-name">São Francisco</span>
              <span className="item-price">R$5,00</span>
            </li>
            <li>
              <span className="item-name">Cachaça Temperada</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Paratudo</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Demais Doses</span>
              <span className="item-price">R$4,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="drinks">
          <h2 className="section-title">DRINKS</h2>
          <ul>
            <li>
              <span className="item-name">Caipirinha (51)</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Caipivodka (Sminoff)</span>
              <span className="item-price">R$15,00</span>
            </li>
            <li>
              <span className="item-name">Cozumel Taça</span>
              <span className="item-price">R$15,00</span>
            </li>
            <li>
              <span className="item-name">Preparo Cozumel Copo</span>
              <span className="item-price">R$3,00</span>
            </li>
            <li>
              <span className="item-name">Preparo Cozumel Taça</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Tônica Tanqueray 600ML</span>
              <span className="item-price">R$25,00</span>
            </li>
            <li>
              <span className="item-name">Tõnica Gin Rock 600ML</span>
              <span className="item-price">R$25,00</span>
            </li>
            <li>
              <span className="item-name">Gin Red Bull Sabores</span>
              <span className="item-price">R$20,00</span>
            </li>
            <li>
              <span className="item-name">Cuba Libre</span>
              <span className="item-price">R$12,00</span>
            </li>
            <li>
              <span className="item-name">Drink Tentação</span>
              <span className="item-price">R$20,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="tabacos">
          <h2 className="section-title">LATAS BEBIDAS/ÁGUAS</h2>
          <ul>
            <li>
              <span className="item-name">Refrigerante Lata 290ML</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Refrigerante Lata 310ML</span>
              <span className="item-price">R$5,00</span>
            </li>
            <li>
              <span className="item-name">Coca KS</span>
              <span className="item-price">R$4,50</span>
            </li>
            <li>
              <span className="item-name">Monster Sabores</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Suco Del Valle Sabores</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">51 ICE</span>
              <span className="item-price">R$8,00</span>
            </li>
            <li>
              <span className="item-name">Smirnoff ICE</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Keep Cooler</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Skol Beats</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Schweppers Drink</span>
              <span className="item-price">R$8,00</span>
            </li>
            <li>
              <span className="item-name">Red Bull</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Red Bull Sabores</span>
              <span className="item-price">R$10,00</span>
            </li>
          </ul>
          <div className="subsection">
            <h3 className="subsection-title">ÁGUAS</h3>
            <ul>
              <li>
                <span className="item-name">Água Sem Gás</span>
                <span className="item-price">R$2,00</span>
              </li>
              <li>
                <span className="item-name">Água com Gás</span>
                <span className="item-price">R$3,50</span>
              </li>
              <li>
                <span className="item-name">Água de Coco</span>
                <span className="item-price">R$3,00</span>
              </li>
              <li>
                <span className="item-name">Água de Coco Congelada</span>
                <span className="item-price">R$3,50</span>
              </li>
              <li>
                <span className="item-name">Água de Coco de Sabor</span>
                <span className="item-price">R$4,00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Voltar ao topo
        </button>
      )}
    </div>
  );
}

export default App;
