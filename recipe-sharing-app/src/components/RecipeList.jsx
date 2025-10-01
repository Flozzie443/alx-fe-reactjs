import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) =>
    searchTerm ? state.filteredRecipes : state.recipes
  );

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      <SearchBar />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
