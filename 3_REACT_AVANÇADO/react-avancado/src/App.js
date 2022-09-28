
import './App.css';
import ImagemLogo from"./assets/ImagemLogo.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* IMAGEM EM PUBLIC acessa diretamente pela barra / */}
      <div>
        <img src="/3296.jpg" alt="img" />
      </div>
      {/* IMAGEM EM ASSETS */}
      <div>
        <img className='img' src={ImagemLogo} alt="universo" />
      </div>
      <ManageData/>
      <ListRender/>
      
    </div>
  );
}

export default App;
