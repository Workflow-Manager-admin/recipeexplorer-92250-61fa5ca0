import React from "react";
import RecipeCard from "./RecipeCard";

/**
 * PUBLIC_INTERFACE
 * Renders a grid of RecipeCards for all recipes provided.
 */
function RecipeGrid({ recipes, onSelect }) {
  return (
    <section className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onSelect(recipe)}
        />
      ))}
    </section>
  );
}

export default RecipeGrid;
