import "./App.css";
import ArtistasConfirmados from "./components/Artistas";
import SobreNos from "./components/SobreNos";
import Carrossel from "./components/Carrossel";
import FundoPagina from "./components/FundoPagina";

function App() {
  return (
    <>
      <FundoPagina />
      <ArtistasConfirmados />
      <SobreNos />
      <Carrossel />
    </>
  );
}

export default App;
