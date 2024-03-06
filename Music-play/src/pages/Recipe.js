import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {

    const [recipes, setRecipes] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    const detailedRecipe = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setRecipes(data);
        console.log(data);
    }

    useEffect(() => {
        detailedRecipe(params.name);
    },[params.name])

    return (
        <DetailWrapper>
            <div>
                <h2>{recipes.title}</h2>
                <img src={recipes.image} alt={recipes.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions'? "active":"" } onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients'? "active":"" } onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                    <h3 dangerouslySetInnerHTML={{__html: recipes.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: recipes.instructions}}></h3>
                </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {recipes.extendedIngredients.map((items)=>{
                            return <li key={items.id}>
                                {items.original}
                            </li>
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    img{
        border-radius: 1rem;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`
const Info = styled.div`
    margin-left: 10rem;
`

export default Recipe