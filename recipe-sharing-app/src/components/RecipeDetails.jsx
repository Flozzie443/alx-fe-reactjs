import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useState } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {!editing && (
        <button onClick={() => setEditing(true)} style={{ marginRight: "0.5rem" }}>
          Edit
        </button>
      )}

      {editing && (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      )}

      <DeleteRecipeButton recipeId={recipe.id} />
      <br />
      <button onClick={() => navigate("/")}>Back to Recipes</button>
    </div>
  );
};

export default RecipeDetails;
