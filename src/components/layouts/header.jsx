import React from 'react'
import Menu from "../layouts/menu"
import '../../assets/css/style.css'


const Header = () =>{
  return(
    <header className="app-header">
      <span className="app-header__logo"/>
      <Menu />
      
    </header>
  )
}

export default Header