"use client";

import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

const Home = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextFood for Meals</h1>
            <p>Delicious meals, shared by a food-loving community.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextFood is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextFood is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextFood?</h2>
          <p>
            NextFood is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextFood is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
