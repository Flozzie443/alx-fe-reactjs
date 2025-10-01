import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ ensures navigation after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", marginTop: "0.5rem" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
