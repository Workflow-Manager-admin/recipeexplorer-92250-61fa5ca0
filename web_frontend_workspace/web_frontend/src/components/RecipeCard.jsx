import React from "react";

/**
 * PUBLIC_INTERFACE
 * Single recipe card component for grid display.
 */
function RecipeCard({ recipe, onClick }) {
  return (
    <article className="recipe-card" tabIndex={0} onClick={onClick} role="button">
      <img
        className="recipe-card-img"
        src={recipe.image}
        alt={recipe.title}
        loading="lazy"
      />
      <div className="recipe-card-content">
        <div className="recipe-card-title truncate-2">{recipe.title}</div>
        <div className="recipe-card-desc truncate-2">{recipe.description}</div>
        <div className="recipe-card-footer">
          <span className="recipe-time">⏱ {recipe.time}</span>
          <span className="recipe-tags">
            {(recipe.tags || []).map(tag => (
              <span className="recipe-tag" key={tag}>{tag}</span>
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
