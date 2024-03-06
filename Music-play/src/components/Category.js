import {FaPizzaSlice,FaHamburger,FaHome} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import React from 'react'
import { Center } from './Style';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category() {
  return (
    <Center>
        <SLink to={"/"}>
            <FaHome />
            <h4>Home</h4>
        </SLink>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/German"}>
            <FaHamburger />
            <h4>German</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </Center>
  )
}

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    
    h4{
        color: white;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        h4{
            color: white;
        }
        svg{
            color: white;
        }
    }
    
`;

export default Category