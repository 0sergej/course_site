import React, { useState, useEffect } from 'react'
import RecipeList from './Component/RecipeList'
import RecipeEdit from './Component/RecipeEdit'
import './Css/App.css'
import { v4 as uuidv4 } from 'uuid'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'ReactCourse.recipes'

function App()
{
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipesId, setSelectedRecipesId] = useState()
  const selectedRecipes = recipes.find(recipe => recipe.id === selectedRecipesId)
  

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id)
  {
    setSelectedRecipesId(id)
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
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: '' }
      ]
    }
    
    setSelectedRecipesId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  
  function handleRecipeChange(id, recipe)
  {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id)
  {
    if (selectedRecipesId != null && selectedRecipesId === id)
    {
      setSelectedRecipesId(undefined)
      }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipes && 
      <RecipeEdit recipe={selectedRecipes}/>}
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