import React, { useState, useEffect } from 'react'
import RecipeList from './Component/RecipeList'
import RecipeEdit from './Component/RecipeEdit'
import './Css/App.css'
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'ReactCourse.recipes'

function App()
{
  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }


  useEffect(() =>
  {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if  (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() =>
  {
    console.log('object')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])
  
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: ' Chicken',
        amount: ' 2 pounds'
      },
      {
        id: 2,
        name: ' Salt',
        amount: ' 1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put salt on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: ' Pork',
        amount: ' 3 pounds'
      },
      {
        id: 2,
        name: ' Paprika',
        amount: ' 2 Tbs'
      }
    ]
  }
]

export default App;