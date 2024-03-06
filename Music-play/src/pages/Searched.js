import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`);
        const data = await api.json();
        setSearchedRecipes(data.results);
        console.log(data.results)
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                    <Link to={"/recipe/"+item.id}> 
                    <img variant="top" src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        border-radius: 2rem;
        width: 100%;
        height: 70%;
    }
    a {
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 0rem;
    }
`;


export default Searched