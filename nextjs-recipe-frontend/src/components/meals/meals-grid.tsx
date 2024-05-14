import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

interface IProps {
  meals: IMeal[];
}

const MealsGrid = (props: IProps) => {
  const { meals } = props;
  return (
    <ul className={classes.meals}>
      {meals.map((meal: IMeal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
