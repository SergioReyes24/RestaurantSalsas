import {NavLink as NavLinkReactRouter} from 'react-router-dom'

export function Menu(){
  const NavLink = ({to, children, ...props}) => {
    return (
      <NavLinkReactRouter
        {...props}
        className={({isActive}) => isActive ? 'LinkActivo' : 'LinkInactivo'}
        to={to}
        >{children}
      </NavLinkReactRouter>
    )
  }
    return (
        <nav className='Menu'>
          <NavLink to={"/Inicio"}>Inicio</NavLink>
          <NavLink to={"/Platillos"}>Menú</NavLink>
          <NavLink to={"/Productos"}>Productos</NavLink>
          <NavLink to={"/ServicioDomicilio"}>ServicioDomicilio</NavLink>
          <NavLink to={"/Sucursales"}>Sucursales</NavLink>
          <NavLink to={"/Reserva"}>Reserva</NavLink>
        </nav>
    );
}