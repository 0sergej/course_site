import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes })
{
    return (
        <div className="recipe-list">
        <div>
            {
                recipes.map(recipes =>
                {
                    return (
                        <Recipe
                            key={recipes.id} 
                            {...recipes} />
                    )
                })}
            </div>
            <div className="">
                <button className="">Add Recipes</button>
            </div>
        </div>
    )
}