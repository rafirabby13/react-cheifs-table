/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const CurrentlyCooking = ({ crntlyCooking, totalTime, totalCalories }) => {
  return (
    <div>
      <h1 className="text-center text-4xl pb-8 font-bold border-b-2 pt-7">
        Currently Cooking : {crntlyCooking.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {crntlyCooking.map((recipe, index) => (
              <tr key={recipe.index} className="py-10">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}

            <tr className="text-xl font-semibold">
              <td></td>
              <td></td>
              <td>TotalTime = {totalTime} minutes</td>
              <td>TotalCalories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentlyCooking;
