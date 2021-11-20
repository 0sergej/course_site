import React from 'react'

export default function RecipeIngredientEdit(props)
{
    const {
        ingredient,
        handleIngredientChange,
        handleIngredientDelete
    } = props

    function handleChange(changes)
    {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }

    return (
        <>
            <input
                className="recipeEdit_input"
                type="text"
                onInput={(e) =>handleChange({ name :e.target.value })}
                value={ingredient.name}
            />
            <input
                className="recipeEdit_input"
                type="text"
                onInput={(e) =>handleChange({ amount :e.target.value })}
                value={ingredient.amount}
            />
            <button
                className="btn btn-secondary"
            onClick={() => handleIngredientDelete(ingredient.id)}>
                &times;
            </button>
        </>
    )
}