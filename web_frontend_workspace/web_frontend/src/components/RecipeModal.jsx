import React from "react";

/**
 * PUBLIC_INTERFACE
 * Modal for displaying detailed recipe info.
 */
function RecipeModal({ recipe, onClose }) {
  if (!recipe) return <div className="recipe-modal-overlay" />;

  return (
    <div className="recipe-modal-visible">
      <div className="recipe-modal-overlay" onClick={onClose} tabIndex={-1} aria-label="Close modal background"/>
      <section className="recipe-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header className="recipe-modal-header">
          <div className="recipe-modal-title" id="modal-title">
            {recipe.title}
          </div>
          <button className="recipe-modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>
        <img className="recipe-modal-img" src={recipe.image} alt={recipe.title + " photo"} />
        <div className="recipe-modal-content">
          {recipe.description}
          <div style={{ marginTop: "1rem", color: "var(--secondary)" }}>
            <b>Time:</b> {recipe.time}
          </div>
          <div style={{ marginTop: "0.6rem" }}>
            {(recipe.tags || []).map(tag => (
              <span className="recipe-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecipeModal;
