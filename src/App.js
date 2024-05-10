import './App.css';
import React, { useEffect } from 'react';

function App() {

  function adicionarNumero(num) {
    var span = document.getElementById('inputContent');
    var texto = span.innerText;
    var quantidade = texto.length;
    if (quantidade < 8) {
      span.innerHTML += num;
    }
  }

  function apagarNumero() {
    var span = document.getElementById('inputContent');
    var texto = span.innerText;
    var textoApagado = ''
    for (var i = 0; i < texto.length - 1; i++) {
      textoApagado += texto[i];
    }
    span.innerHTML = textoApagado;
  }

  function converter() {
    var div = document.getElementById('inputUser_tag');
    var bin = div.innerText.trim();
    var decimal = 0;

    for (var i = bin.length - 1; i >= 0; i--) {
      var digito = parseInt(bin[i]);
      decimal += digito * Math.pow(2, bin.length - 1 - i);
    }

    document.getElementById("outputUser_tag_content").innerHTML = decimal

  }

  function limparOutputUser() {
    var div = document.getElementById("outputUser_tag_content")
    div.innerHTML = ''
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const titleFor425 = document.getElementById('title_for_425');
      const titleForMoreThan425 = document.getElementById('title_for_more_than_425');

      if (width <= 425) {
        titleFor425.classList.remove('hidden');
        titleForMoreThan425.classList.add('hidden');
      } else {
        titleFor425.classList.add('hidden');
        titleForMoreThan425.classList.remove('hidden');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container'>
      <div className='presentation'>
        <h2 className='title' id="title_for_more_than_425">Binario-Para-Decimal</h2>
        <h2 className='title hidden' id="title_for_425">Binario <br />Para <br />Decimal</h2>
        <p className='description'>Site para converter numeros binarios para numeros decimais</p>
      </div>

      <div className='inputUser'>
        <p className='inputUser__title'>Binario:</p>
        <div className='inputUser_tag' id='inputUser_tag'>
          <span id='inputContent' className='inputContent'></span>
        </div>
        <div className='buttons'>
          <button id='button0' onClick={() => { adicionarNumero(0) }}>0</button>
          <button id='botton1' onClick={() => { adicionarNumero(1) }}>1</button>
          <button id='bottonBackSpace' onClick={() => { apagarNumero() }}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>

      <div className='outputUser'>
        <p className='outputUser__title'>Decimal:</p>
        <div id='outputUser_tag' className='outputUser_tag'>
          <span className='outputUser_tag_content' id='outputUser_tag_content'></span>
        </div>
      </div>

      <div className='buttonsAction'>
        <button id='convert' onClick={() => { converter() }}>Converter</button>
        <button id='clear' onClick={() => { limparOutputUser() }}>Limpar</button>
      </div>
    </div>
  )
}

export default App;
