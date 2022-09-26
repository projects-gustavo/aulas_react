import './App.css';

import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Fulano"
  return (
    <div className="App">
      <Frase />
      <Frase />
      <DigaMeuNome nome="Gustavo" />
      <DigaMeuNome nome="Rodrigues" />
      <DigaMeuNome nome={nome} />
      <Pessoa
        nome="Gustavo"
        idade="16"
        profissao="Desenvolvedor Front-end"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;