import RecipeHeader from "./RecipeHeader";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function RecipeCard({ recipeObject }) {
  return (
    <div className="recipe-card">
      <RecipeHeader
        title={recipeObject.title}
        image={recipeObject.image}
      />

      <h3>Ingredients</h3>
      <IngredientsList ingredients={recipeObject.ingredients} />

      <h3>Instructions</h3>
      <Instructions instructions={recipeObject.instructions} />
    </div>
  );
}

export default RecipeCard;
