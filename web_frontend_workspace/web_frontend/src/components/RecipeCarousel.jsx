import React, { useState, useRef } from "react";
import "./RecipeCarousel.css";

/**
 * PUBLIC_INTERFACE
 * RecipeCarousel component: a custom, minimalistic horizontal carousel for recipe cards.
 * 
 * Props:
 * - recipes: array of recipe objects (id, title, description, image, etc.)
 * - onSelect: function(recipe) called when a recipe card is clicked
 * 
 * Features:
 * - Responsive with swipe/tap and button navigation
 * - Minimal, modern styling, inspired by Material UI Carousels
 * - No external dependencies
 */
function RecipeCarousel({ recipes, onSelect }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Number of items visible according to container width (responsive)
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  };
  const visibleCount = getVisibleCount();

  // Clamp index on length/visibleCount
  const maxStart = Math.max(0, recipes.length - visibleCount);
  const currentIndex = Math.max(0, Math.min(index, maxStart));

  // Handler for prev/next
  const handlePrev = () => setIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
  const handleNext = () => setIndex(currentIndex + 1 > maxStart ? maxStart : currentIndex + 1);

  // Swipe support for mobile
  let touchStartX = null;
  function handleTouchStart(e) {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  }
  function handleTouchEnd(e) {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 36) handlePrev();
    else if (deltaX < -36) handleNext();
    touchStartX = null;
  }

  return (
    <section className="recipe-carousel-outer">
      <header className="recipe-carousel-head">
        <h2 className="recipe-carousel-title">Featured Recipes</h2>
        <div className="carousel-nav-btns">
          <button
            aria-label="Previous"
            className="carousel-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            tabIndex={0}
          >‹</button>
          <button
            aria-label="Next"
            className="carousel-btn"
            onClick={handleNext}
            disabled={currentIndex === maxStart}
            tabIndex={0}
          >›</button>
        </div>
      </header>
      <div
        className="recipe-carousel-track"
        ref={containerRef}
        style={{
          "--visible-count": visibleCount,
          transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {recipes.map((recipe) => (
          <div
            className="carousel-card-wrapper"
            key={recipe.id}
            style={{ flex: `0 0 ${100 / visibleCount}%` }}
            tabIndex={0}
            aria-label={recipe.title}
            role="button"
            onClick={() => onSelect(recipe)}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") onSelect(recipe); }}
          >
            {/* Inline use existing RecipeCard style for card */}
            <article className="recipe-card" style={{height: "100%"}}>
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
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {/* Progress dots */}
        {[...Array(maxStart + 1)].map((_, i) => (
          <button
            key={i}
            className={"carousel-dot" + (i === currentIndex ? " active" : "")}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
}

export default RecipeCarousel;
