import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from '../App'

export default function RecipeList( { recipes } )
{
    const {handleRecipeAdd} = useContext(RecipeContext)
    
    return (
        <div className="border-r-2 border-black border-solid min-h-screen w-1/2">
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
                <button
                    className="btn btn-primary"
                    onClick={handleRecipeAdd}
                >
                    Add aaaa
                </button>
            </div>
            </div>
    )
}