/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Recipe = ({ recipe,addRecipeToQueue }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="flex">
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure className="px-5 pt-5">
          <img
            className="md:h-52 w-full   rounded-2xl"
            src={recipe_image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">{recipe_name}</h2>
          <p>{short_description}</p>
          <h1 className="font-semibold text-xl ">
            Ingradients: {ingredients.length}
          </h1>
          <ul className="space-y-2 list-disc pl-10">
            {ingredients.map((ingr, ind) => (
              <li className="" key={ind}>
                {ingr}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between text-2xl mt-auto">
            <div className="flex items-center gap-3">
              <i className="fa-regular fa-clock"></i>
              <p>{preparing_time} minutes</p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-fire"></i>
              <p>{calories} calories</p>
            </div>
          </div>
            <div>
            <button onClick={()=>addRecipeToQueue(recipe)} className="btn btn-active btn-accent font-semibold text-xl rounded-full mt-5">Want To Cook</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
