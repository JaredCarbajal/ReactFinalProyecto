import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './navbar'
import { TablaClientes } from './TablaClientes'
import { TablaEmpleados } from './TablaEmpleados'
import { TablaProductos } from './TablaProductos'
import { AltasClientes } from './AltasClientes'
import { AltasEmpleados } from './AltasEmpleados'
import { AltasProductos } from './AltasProductos'
import { ActualizaClientes } from './ActualizaClientes'
import { ActualizaEmpleados } from './ActualizaEmpleados'
import { ActualizaProductos } from './ActualizaProductos'
import { EliminaProductos } from './EliminaProductos'
import { EliminaClientes } from './EliminaClientes'
import { EliminaEmpleados } from './EliminaEmpleados'
import './App.css'

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};
function App() {
  return (
    <>
      <div className='w3-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/TablaClientes" element={<TablaClientes/>}></Route>
          <Route path="/TablaEmpleados" element={<TablaEmpleados/>}></Route>
          <Route path="/TablaProductos" element={<TablaProductos/>}></Route>
          <Route path="/AltasClientes" element={<AltasClientes/>}></Route>
          <Route path="/AltasEmpleados" element={<AltasEmpleados/>}></Route>
          <Route path="/AltasProductos" element={<AltasProductos/>}></Route>
          <Route path="/ActualizaClientes" element={<ActualizaClientes/>}></Route>
          <Route path="/ActualizaEmpleados" element={<ActualizaEmpleados/>}></Route>
          <Route path="/ActualizaProductos" element={<ActualizaProductos/>}></Route>
          <Route path="/EliminaProductos" element={<EliminaProductos/>}></Route>
          <Route path="/EliminaClientes" element={<EliminaClientes/>}></Route>
          <Route path="/EliminaEmpleados" element={<EliminaEmpleados/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App