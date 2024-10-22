/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import OurRecipes from "./components/Recipes/OurRecipes.jsx";
import Recipes from "./components/Recipeees/Recipes.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [crntlyCooking, setCrntlyCooking]=useState([])
    const [totalTime, setTotalTime]=useState(0)
    const [totalCalories, setTotalCaloriese]=useState(0)

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find((recip) => recip === recipe);
    if (!isExist) {
      const newQueue = [...recipeQueue, recipe];
      setRecipeQueue(newQueue);
    }
    else{
      alert('Already exist')
    }
  };
  const handlePreparing = (recipe) => {
    setCrntlyCooking([...crntlyCooking, recipe])
    // console.log(recipe.recipe_id);
    const newTotalTime = totalTime+recipe.preparing_time;
    const newTotalCalories = totalCalories+recipe.calories;
    setTotalTime(newTotalTime)
    setTotalCaloriese(newTotalCalories)
    const remainingQueue = recipeQueue.filter(rece=> rece.recipe_id !== recipe.recipe_id)
    setRecipeQueue(remainingQueue)

  };

  const handleRemove=(id)=>{
// find which recipe to remove
const deletedRecipe =recipeQueue.find(recip=> recip.id === id)
console.log(deletedRecipe);
  }

  return (
    <div className="lg:max-w-[85%] mx-auto">
      {/* Header */}
      <Header></Header>
      {/*Banner Section  */}
      {/* Our Recipies section */}
      <OurRecipes></OurRecipes>
      <section className="grid md:grid-cols-3 gap-5">
        {/* cards */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}
        handlePreparing={handlePreparing}
        totalTime={totalTime}
        totalCalories={totalCalories}
        crntlyCooking={crntlyCooking}
        ></Sidebar>
      </section>
    </div>
  );
}

export default App;
