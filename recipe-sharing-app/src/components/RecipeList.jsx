import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />
      <ul>
        {displayRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
