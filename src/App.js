import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './Routes/Home/Home';
// import NuestrosProductos from './Routes/NuestrosProductos/NuestrosProductos';
import PopupDetalle from './Routes/PopupDetalle/PopupDetalle';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element= {<Home />} />
            <Route exact path='/Nuestros-Productos/:tipoProducto' element={<Home />} />
            <Route exact path='/Nuestros-Productos/:tipoProducto/:modelo' element={<PopupDetalle />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

