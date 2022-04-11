import Teufzer from "./compontes/Teufzer.jsx";
import Denesis from "./compontes/Denesis";
import Main from "./compontes/Main";
import Temple from "./compontes/Temple";
import Void from "./compontes/Void";
import MainCard from "./compontes/MainCard";
import Show from "./compontes/Show";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter>
      <Main />
    <Routes>
      <Route exact path='/' element={ <Denesis />} />
      <Route exact path='/teufzer' element={<Teufzer />} />
      <Route exact path='/popular' element={<MainCard />} />
      <Route exact path='/denesis' element={<Show />} />
      <Route exact path='/temple' element={<Temple />} />
      <Route exact path='/void' element={<Void />} />
    </Routes>
  </BrowserRouter>   
    </>
  );
}

export default App;
