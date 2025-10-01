import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add recipe
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Set search term
  setSearchTerm: (term) =>
    set({ searchTerm: term }, false, "setSearchTerm"),

  // Filter recipes based on search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },
}));

export default useRecipeStore;
