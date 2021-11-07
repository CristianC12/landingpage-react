import logo from "./logo.svg";
import "./App.css";
import ArtistasConfirmados from "./components/Artistas";
import SobreNos from "./components/SobreNos";
import Carrossel from "./components/Carrossel";

function App() {
  return (
    <>
      <div  className="fundo">      
        <ArtistasConfirmados />
        <SobreNos />
        <Carrossel />
      </div>
    </>
  );
}

export default App;
