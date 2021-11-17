import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ingredients}) {
    const ingredientElements = ingredients.map(ingredient =>
    {
        return (
        <Ingredient 
        key = { ingredient.id }
        {...ingredient} />
        )
    }) 
    return (
        <div className="grid grid-cols-2 justify-start gap-x-4 gap-y-1 ">
            {ingredientElements}
        </div>
    )
}
