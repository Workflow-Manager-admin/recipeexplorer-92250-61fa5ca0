import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import RecipeCarousel from './components/RecipeCarousel';

/**
 * ThemeContext provides the current theme ("light" | "dark") and a toggle function to all components
 */
export const ThemeContext = createContext();

// Sample recipe data
const sampleRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A simple pizza with tomato, mozzarella, and basil.",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=400&h=250&fit=crop",
    time: "35 min",
    tags: ["Vegetarian", "Italian"]
  },
  {
    id: 2,
    title: "Thai Green Curry",
    description: "A spicy coconut curry with chicken and vegetables.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=250&fit=crop",
    time: "45 min",
    tags: ["Spicy", "Gluten-Free"]
  },
  {
    id: 3,
    title: "Vegan Buddha Bowl",
    description: "A nourishing bowl packed with veggies, grains, and chickpeas.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=250&fit=crop",
    time: "25 min",
    tags: ["Vegan", "Quick"]
  },
  {
    id: 4,
    title: "Crispy Chicken Schnitzel",
    description: "Golden-fried chicken cutlets with lemon and herbs.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=250&fit=crop",
    time: "30 min",
    tags: ["Meat", "German"]
  },
  {
    id: 5,
    title: "Chocolate Avocado Mousse",
    description: "A decadent, healthy dessert with ripe avocados.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=250&fit=crop",
    time: "15 min",
    tags: ["Dessert", "Vegan"]
  }
];

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState(sampleRecipes);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  // PUBLIC_INTERFACE
  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };
  // PUBLIC_INTERFACE
  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // For future: implement search/filter logic and call setRecipes(filtered)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-root">
        <Navbar
          openSidebar={() => setSidebarOpen(true)}
        />
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="main-content">
          {/* Show the new RecipeCarousel above the grid */}
          <RecipeCarousel
            recipes={recipes}
            onSelect={openRecipe}
          />
          <RecipeGrid
            recipes={recipes}
            onSelect={openRecipe}
          />
        </main>
        <RecipeModal
          recipe={selectedRecipe}
          onClose={closeRecipe}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
