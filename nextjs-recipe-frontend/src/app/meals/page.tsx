import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

const Meals = async () => {
  const res = await fetch(`http://localhost:8000/meals`, {
    method: "GET",
  });

  const meals = await res.json();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is very easy</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* Suspense component - provided by React that allows you to handle loading states and show fallback content until some data or resource has been loaded */}
        <Suspense fallback={<div className={classes.loading}>Loading...</div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
