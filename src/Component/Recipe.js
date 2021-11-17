import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import {RecipeContext} from '../App'

export default function Recipe(props)
{
    const { handleRecipeDelete } = useContext(RecipeContext)
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients
    } = props
    
    return (
        <div className="p-5 pb-10 border border-solid font-bold border-colors-black last:border-0 last:pb-2">
            <div className="flex justify-between items-center mb-8">
                <h3 className="mt-0 text-3xl">{name}
                </h3>
                <div>
                    <button className="btn btn-primary">
                        Edit
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => { handleRecipeDelete(id) }}
                    >
                        Delete
                    </button>

                </div>
            </div>

            <div className="mt-2">
                <span className="mr-1">Cook Time: </span>
                <span className="font-light">{cookTime}</span>
            </div>
            <div className="mt-2">
                <span className="mr-1">Servings: </span>
                <span className="font-light">{servings}</span>
            </div>
            <div className="mt-2">
                <span className="mr-1">Instructions: </span>
                <div className="font-light mt-2 ml-5 whitespace-pre-wrap">{instructions}</div>
            </div>
            <div className="mt-2">
                <span className="mr-1">Ingredients: </span>
                <div className="font-light mt-2 ml-2 whitespace-pre-wrap">
                    <IngredientList ingredients={ingredients} /></div>
            </div>
            
        </div>
    )
}
