import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes })
{
    return (
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
    )
}