import React from 'react'

import Routes from './components/routes';
import Client from './components/TopNav';

import Burger from './components/Burger'
import './styles.css'


export default function Menu() {
  return(
    <header>
        <div className="header">
            <div className="logo">
                <div className="logo-img"></div>
            </div>
            <nav className="menu">
                {
                    navigation.map(item=> (
                        <NavLink key={item.Name} exact={item.Exact} activeClassName="active" to={item.Route ?? "#"} title={item.Name}>{item.Caption}</NavLink>
                    ))
                }
            </nav>
            <div className="buttons">
                <button className="btn-default btn-primary">Área do Cliente</button>
            </div>
        </div>
        <Burger/>
    </header>
)
}