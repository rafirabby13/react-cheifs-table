import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking.jsx";

/* eslint-disable react/prop-types */
const Sidebar = ({ recipeQueue, handlePreparing,totalTime,totalCalories,crntlyCooking }) => {
    



  
  return (
    <div>
        <div className="col-span-1 border-2 rounded-2xl p-4">
      <h1 className="text-center text-4xl pb-8 font-bold border-b-2">
        Want to cook: {recipeQueue.length}
      </h1>
      <div className="overflow-x-auto pt-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="py-10">
            {/* row 1 */}
            {recipeQueue.map((recipe, index) => (
              <tr key={recipe.index} className="py-10">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <button
                  onClick={() => handlePreparing(recipe)}
                  className="btn btn-active btn-accent font-semibold text-sm rounded-full flex justify-center items-center"
                >
                  Preparing
                </button>
              </tr>
            ))}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>

    <CurrentlyCooking crntlyCooking={crntlyCooking} totalTime={totalTime} totalCalories={totalCalories}></CurrentlyCooking>
   

    </div>
  );
};

export default Sidebar;
