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
        <h1 className="cardapio-text">FLASH MENU</h1>
        <img className="logo" src="https://pps.whatsapp.net/v/t61.24694-24/321242348_226521809729075_2828230363467295346_n.jpg?ccb=11-4&oh=01_AdSTcMcB2tAKsfbG2Jgb8neaWCTUs4xoCQUiZ_F_hfBpRQ&oe=64D7B219" alt="Logo Pinguim" />
        <h1 className="title">BARBEARIA DZ6</h1>
        <div className="bar-separator"></div> {/* Adiciona a barra de separação */}
      </div>
      <div className="buttons-container">
        <button className="section-button" onClick={() => scrollToSection('cervejas')}>Serviços</button>
        <button className="section-button" onClick={() => scrollToSection('petiscos')}>Combos</button>
        <button className="section-button" onClick={() => scrollToSection('doses')}>Produtos</button>
      </div>
      <div className="menu-container" onclick="toggleZoom(this)">
        <div className="container" id="cervejas">
          <h2 className="section-title">Serviços</h2>
          <div className="subsections-container">
            <div className="subsection">
              <ul>
                <li>
                  <span className="item-name">Corte</span>
                  <span className="item-price">R$25,00</span>
                </li>
                <li>
                  <span className="item-name">Barba</span>
                  <span className="item-price">R$25,00</span>
                </li>
                <li>
                  <span className="item-name">Pezinho</span>
                  <span className="item-price">R$5,00</span>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <ul>
                <li>
                  <span className="item-name">Sobrancelha</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Pigmentação</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Graxa</span>
                  <span className="item-price">R$25,00</span>
                </li>
                <li>
                  <span className="item-name">Progressiva</span>
                  <span className="item-price">R$40,00</span>
                </li>
                <li>
                  <span className="item-name">Hidratação</span>
                  <span className="item-price">R$10,00</span>
                </li>
                <li>
                  <span className="item-name">Limpeza de Pele</span>
                  <span className="item-price">R$15,00</span>
                </li>
                <li>
                  <span className="item-name">platinado</span>
                  <span className="item-price">A partir de R$100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" id="petiscos">
          <h2 className="section-title">Combos</h2>
          <ul>
            <li>
              <span className="item-name">CORTE + SOBRANCELHA</span>
              <span className="item-price">R$30,00</span>
            </li>
            <li>
              <span className="item-name">CORTE + BARBA + SOBRANCELHA</span>
              <span className="item-price">R$45,00</span>
            </li>
            <li>
              <span className="item-name">CORTE + PROGRESSIVA</span>
              <span className="item-price">R$60,00</span>
            </li>
          </ul>
        </div>
        <div className="container" id="doses">
          <h2 className="section-title">Produtos</h2>
          <ul>
            <li>
              <span className="item-name">Pomada Hidratante</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Gel capilar</span>
              <span className="item-price">R$4,00</span>
            </li>
            <li>
              <span className="item-name">Minoxidil</span>
              <span className="item-price">R$4,00</span>
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
