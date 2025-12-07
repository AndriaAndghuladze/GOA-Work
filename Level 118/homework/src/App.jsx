import recipeData from "./recipeData";
import RecipeCard from "./RecipeCard";

function App() {
  return (
    <div>
      {recipeData.map((recipe, index) => (
        <RecipeCard key={index} recipeObject={recipe} />
      ))}
    </div>
  );
}

export default App;