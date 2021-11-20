import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from '../App'
import { v4 as uuidv4 } from 'uuid'

export default function RecipeEdit({ recipe }) {

    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)
    
    function handleChange(changes)
    {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    function handleIngredientChange(id, ingredient)
    {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
    }

    function handleIngredientAdd()
    {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id)
    {
        handleChange({
            ingredients: recipe.ingredients.filter(i => i.id !== id
            )})
    }
    
    return (
        <div className="fixed right-0 top-0 w-1/2 max-h-full p-8 pt-2 overflow-y-auto">
            <div className="text-right">
                <button
                    className="btn p-0 text-2xl"
                    onClick={() => handleRecipeSelect(undefined)}>
                    &times;
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-10">
                <label
                    className="recipeEdit_label"
                    htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={recipe.name}
                    onChange={e => handleChange({name: e.target.value})}
                    className="recipeEdit_input"/>
                <label
                    htmlFor="cookTime"
                    className="recipeEdit_label">
                    Cook Time
                </label>
                <input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    value={recipe.cookTime}
                    onChange={e => handleChange({cookTime: e.target.value})}
                    className="recipeEdit_input"/>
                <label
                    htmlFor="servings"
                    className="recipeEdit_label">
                    Servings
                </label>
                <input
                    type="number"
                    min="1"
                    name="servings"
                    id="servings"
                    value={recipe.servings}
                    onChange={e => handleChange({servings: parseInt(e.target.value) || 0})}
                className="recipeEdit_input"/>
                <label
                    htmlFor="instructions"
                className="recipeEdit_label">
                    Instructions
                </label>
                <textarea
                    name="instructions"
                    id="instructions"
                    className="recipeEdit_input resize-none h-48"
                    onChange={e => handleChange({ instructions: e.target.value })}
                    value={recipe.instructions} />
            </div>
            <br />
            <label className="recipeEdit_label">Ingredients</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5 ml-10">
                <div className="recipeEdit_label">Name</div>
                <div className="recipeEdit_label">Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit
                        key={ingredient.id}
                        handleIngredientChange={handleIngredientChange}
                        handleIngredientDelete=
                        {handleIngredientDelete}
                        ingredient={ingredient}
                    />
                ))}
            </div>
            <div className="mt-5 text-center">
                <button
                    className="btn btn-primary"
                onClick={() => handleIngredientAdd()}>
                    Add Ingredient
                </button>
            </div>
        </div>
    )
}
