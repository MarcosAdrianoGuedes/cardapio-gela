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
        <button className="section-button" onClick={() => scrollToSection('petiscos')}>Petiscos</button>
        <button className="section-button" onClick={() => scrollToSection('doses')}>Doses</button>
        <button className="section-button" onClick={() => scrollToSection('drinks')}>Drinks</button>
        <button className="section-button" onClick={() => scrollToSection('tabacos')}>Tabacos/Cigarros</button>
      </div>
      <div className="menu-container" onclick="toggleZoom(this)">
        <div className="container" id="cervejas">
          <h2 className="section-title">CERVEJAS</h2>
          <div className="subsections-container">
            <div className="subsection">
              <h3 className="subsection-title">LITRÕES</h3>
              <ul>
                <li>
                  <span className="item-name">Brahma</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Original</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Heineken</span>
                  <span className="item-price">R$13,00</span>
                </li>
                <li>
                  <span className="item-name">Skol</span>
                  <span className="item-price">R$8,00</span>
                </li>
                <li>
                  <span className="item-name">Antártica</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Itaipava</span>
                  <span className="item-price">R$7,00</span>
                </li>
                <li>
                  <span className="item-name">Budwaiser</span>
                  <span className="item-price">R$11,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">LATINHAS</h3>
              <ul>
                <li>
                  <span className="item-name">Cerveja 1</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Cerveja 2</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Cerveja 3</span>
                  <span className="item-price">R$13,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">LONGNECK</h3>
              <ul>
                <li>
                  <span className="item-name">Cerveja 4</span>
                  <span className="item-price">R$9,00</span>
                </li>
                <li>
                  <span className="item-name">Cerveja 5</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Cerveja 6</span>
                  <span className="item-price">R$13,00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" id="petiscos">
          <h2 className="section-title">PETISCOS</h2>
          <ul>
            <li>
              <span className="item-name">Batata Frita</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Churrasquinho</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Frango Frito</span>
              <span className="item-price">R$10,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="doses">
          <h2 className="section-title">DOSES</h2>
          <ul>
            <li>
              <span className="item-name">Dose 1</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Dose 2</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Dose 3</span>
              <span className="item-price">R$10,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="drinks">
          <h2 className="section-title">DRINKS</h2>
          <ul>
            <li>
              <span className="item-name">Drink 1</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Drink 2</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Drink 3</span>
              <span className="item-price">R$10,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="tabacos">
          <h2 className="section-title">TABACOS/CIGARROS</h2>
          <ul>
            <li>
              <span className="item-name">Tabaco 1</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Tabaco 2</span>
              <span className="item-price">R$10,00</span>
            </li>
            <li>
              <span className="item-name">Tabaco 3</span>
              <span className="item-price">R$10,00</span>
            </li>
          </ul>
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
