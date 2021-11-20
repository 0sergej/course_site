import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
    return (
        <div className="fixed right-0 top-0 w-1/2 max-h-full p-8 pt-2 overflow-y-auto">
            <div className="text-right">
                <button className="btn p-0 text-2xl">&times;</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-10">
                <label
                    className="recipeEdit_label"
                    htmlFor="name">
                    Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
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
                    className="recipeEdit_input"/>
                <label
                    htmlFor="servings"
                    className="recipeEdit_label">
                    Servings
                </label>
                <input
                    type="text"
                    name="servings"
                    id="servings"
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
                />
            </div>
            <br />
            <label className="recipeEdit_label">Ingredients</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5 ml-10">
                <div className="recipeEdit_label">Name</div>
                <div className="recipeEdit_label">Amount</div>
                <div></div>
                <RecipeIngredientEdit />
                <RecipeIngredientEdit />
            </div>
            <div className="mt-5 text-center">
                <button className="btn btn-primary">Add Ingredient</button>
            </div>
        </div>
    )
}
