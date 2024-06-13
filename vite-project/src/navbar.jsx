import { NavLink } from "react-router-dom"
export const NavBar = () => {
  return (
    <div className="w3-bar w3-black">
        <NavLink to='/' className="w3-bar-item w3-button">Home</NavLink>
        <NavLink to='/AltasClientes' className="w3-bar-item w3-button">AltasClientes</NavLink>
        <NavLink to='/AltasEmpleados' className="w3-bar-item w3-button">AltasEmpleados</NavLink>
        <NavLink to='/AltasProductos' className="w3-bar-item w3-button">AltasProductos</NavLink>
        <NavLink to='/TablaClientes' className="w3-bar-item w3-button">TablaClientes</NavLink>
        <NavLink to='/TablaEmpleados' className="w3-bar-item w3-button">TablaEmpleados</NavLink>
        <NavLink to='/TablaProductos' className="w3-bar-item w3-button">TablaProductos</NavLink>
        <NavLink to='/ActualizaClientes' className="w3-bar-item w3-button">ActualizaClientes</NavLink>
        <NavLink to='/ActualizaEmpleados' className="w3-bar-item w3-button">ActualizaEmpleados</NavLink>
        <NavLink to='/ActualizaProductos' className="w3-bar-item w3-button">ActualizaProductos</NavLink>
        <NavLink to='/EliminaProductos' className="w3-bar-item w3-button">EliminaProductos</NavLink>
        <NavLink to='/EliminaClientes' className="w3-bar-item w3-button">EliminaClientes</NavLink>
        <NavLink to='/EliminaEmpleados' className="w3-bar-item w3-button">EliminaEmpleados</NavLink>
        
    </div>
  )
}