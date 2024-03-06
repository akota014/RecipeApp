import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

    const [input, setinput] = useState("");
    const navigate = useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e)=> setinput(e.target.value)} type="text" value={input}/>
            
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div{
        width: 100%;
        position: relative;
    }
    
    input{
        border: none;
        width: 100%;
        border-radius: 2rem;
        color: white;
        background: linear-gradient(35deg, #494949, #313131);
        outline: none;
        font-size: 1rem;
        padding: 1rem 3rem;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        color: white;
        transform: translate(100%, -50%);
    }
`

export default Search