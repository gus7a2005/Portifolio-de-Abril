import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Components/Menu";
import Rodape from "Components/Rodape";
import PaginaPadrao from "Components/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import ScrollToTop from "Components/ScrollToTop";



function AppRoutes() {
  return(
    <BrowserRouter>
    
    <ScrollToTop/>

      <Menu/>

      <Routes>

        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
      </Route>

      <Route path="posts/:id/*" element={<Post/>}/>

      {/* 
      
      Na rota "/", a estrutura a ser renderizada é: 
      <PaginaPadrao>
        <Inicio/>
      </PaginaPadrao>

      Na rota "/sobremim", a estrutura a ser renderizada é: 
      <PaginaPadrao>
        <SobreMim/>
      </PaginaPadrao> 

      */}




        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
