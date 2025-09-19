import React from "react"
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);

    const [recipeShown, setRecipeShown] = React.useState(false);
    
    function toggleRecipeShown(){
        setRecipeShown(prev => !prev);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />}
            { recipeShown && <ClaudeRecipe /> }
        </main>
    )
}