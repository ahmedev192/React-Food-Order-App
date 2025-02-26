import MealItem from "./MealItem";
import React, { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";

export default function Meals() {
  const { isLoading, error, data, sendRequest, clearError } = useHttp();
  const [loadedMeals, setLoadedMeals] = useState([]); // Declare and initialize loadedMeals

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responseData = await sendRequest({
          url: "http://localhost:31000/meals",
        });
        setLoadedMeals(responseData); // Use setLoadedMeals to update the state
      } catch (err) {
        console.error("Error fetching items:", err); // Corrected: Use err, not error
      }
    };

    fetchItems();
  }, [sendRequest]);

  return (
    <>
      {isLoading && <p className="center">Loading...</p>}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error} <button onClick={clearError}>Clear</button>
        </p>
      )}

      <ul id="meals">
        {loadedMeals &&
          loadedMeals.map(
            (
              meal // Now use loadedMeals here
            ) => <MealItem key={meal.id} meal={meal} />
          )}
      </ul>
    </>
  );
}
