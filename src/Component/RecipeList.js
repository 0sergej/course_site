import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes })
{
    return (
        <div className="border-r-2 border-black border-solid min-h-full w-1/2">
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
            <div className=" text-center py-8">
                <button className="btn btn-primary">Add Recipes</button>
            </div>
        </div>
    )
}