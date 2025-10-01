import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ color: "red", marginTop: "0.5rem" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
