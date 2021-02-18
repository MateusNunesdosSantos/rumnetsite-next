import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {navigation} from '../../../routes/navigation'

const Nav = styled.nav<{open: boolean}>`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  position:absolute;
  z-index: 1;
  align-items:center;
  text-align:center;


  @media (max-width: 768px) {
    display:flex;
    flex-flow: column nowrap;
    background-color: var(--color-dark);
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    margin-top:20rem
    right: 0;
    height: 30rem;
    width: 105vw;
    padding-top: 6.5rem;
    transition: transform 0.3s ease-in-out;
    
    a {
        color: var(--color-light);
        text-transform: uppercase;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        flex-direction: row;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        height: 4rem;
        text-align: center;
        
    }
  }

  @media (min-width: 769px) and (max-width:1199px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--color-dark);
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    margin-top:20rem
    right: 0;
    height: 30rem;
    width: 105vw;
    padding-top: 6.5rem;
    transition: transform 0.3s ease-in-out;
    
    a {
        color: var(--color-light);
        text-transform: uppercase;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        flex-direction: row;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        height: 3rem;
        text-align: center;
  }
`;

interface Props {
    open:boolean
}

const TopNav:React.FC<Props> = ({ open }) => {
  return (
    <Nav open={open}>
        <nav >
        {
            navigation.map(item=> (
                <NavLink key={item.Name} exact={item.Exact} activeClassName="active" to={item.Route ?? "#"} title={item.Name}>{item.Caption}</NavLink>
            ))
        }
        </nav>
        <div className="buttons">
                    <button className="btn-default btn-primary">Área do Cliente</button>
                </div>
      </Nav>
  )
}

export default TopNav
