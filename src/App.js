import './App.css';

function App() {

  function adicionarNumero(num) {
    var div = document.getElementById('inputUser_tag');
    var texto = div.innerText;
    var quantidade = texto.length;
    if (quantidade < 8) {
      div.innerHTML += num;
    }
  }

  function apagarNumero() {
    var div = document.getElementById('inputUser_tag');
    var texto = div.innerText;
    var textoApagado = ''
    for (var i = 0; i < texto.length - 1; i++) {
      textoApagado += texto[i];
    }
    div.innerHTML = textoApagado;
  }

  function converter() {
    var div = document.getElementById('inputUser_tag');
    var bin = div.innerText.trim(); 
    var decimal = 0;

    for (var i = bin.length - 1; i >= 0; i--) {
      var digito = parseInt(bin[i]);
      decimal += digito * Math.pow(2, bin.length - 1 - i);
    }

    document.getElementById("outputUser_tag").innerHTML = decimal

  }


  function limparOutputUser() {
    var div = document.getElementById("outputUser_tag")
    div.innerHTML = ''
  }

  return (
    <div className='container'>
      <div className='presentation'>
        <h2 className='title'>Binario-Para-Decimal</h2>
        <p className='description'>Site para converter numeros binarios para numeros decimais</p>
      </div>

      <div className='inputUser'>
        <p>Binario:</p>
        <div className='inputUser_tag' id='inputUser_tag'></div>
        <div className='buttons'>
          <button id='button0' onClick={() => { adicionarNumero(0) }}>0</button>
          <button id='botton1' onClick={() => { adicionarNumero(1) }}>1</button>
          <button id='bottonBackSpace' onClick={() => { apagarNumero() }}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>

      <div className='outputUser'>
        <p>Decimal:</p>
        <div id='outputUser_tag'></div>
      </div>

      <div className='buttonsAction'>
        <button id='convert' onClick={() => { converter() }}>Converter</button>
        <button id='clear' onClick={() => { limparOutputUser() }}>Limpar</button>
      </div>
    </div>
  )
}

export default App;
