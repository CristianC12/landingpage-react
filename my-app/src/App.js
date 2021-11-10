import "./App.css";
import FundoPagina from "./components/FundoPagina";
import Topo from "./components/Topo/Topo";
import Meio from "./components/Meio/Meio";
import Bottom from "./components/Bottom/Bottom";
import MobileNavbar from "./components/JavaScript/navbar";


function App() {
  return (
    <>
      <script src={MobileNavbar}></script>
      <FundoPagina />
      <Topo />
      <Meio />
      <Bottom />

    </>
  );
}

export default App;
