
import { Wrapper, Card, Gradient } from './Style';
import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Veggie() {
  const [veggie, setVeggie] =useState([]);

  useEffect(() => {
    getVeggie();
  },[])

  const getVeggie = async () =>{

    const check = localStorage.getItem('veggie');
    
    if(check){
      setVeggie(JSON.parse(check));
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=10`);
      const data= await api.json();
      localStorage.setItem('Vegg',JSON.stringify(data.results));
      console.log(data);
      setVeggie(data.results);
    }  
   
  };

  return (
    <div>
    <Wrapper>
      <h3>Veggie Picks</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "5rem"
      }}>
      
      {veggie.map(recipe => {
        return(
          <SplideSlide key={recipe.id}>
          <Card key={recipe.id} className='card' >    
            <Link to={"/recipe/"+recipe.id}>         
              <img variant="top" src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
              <Gradient/>
            </Link>
          </Card>
          </SplideSlide>
        );
      })}
      
      </Splide>
    </Wrapper>
  </div>
)
}


export default Veggie;

