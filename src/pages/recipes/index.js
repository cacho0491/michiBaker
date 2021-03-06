import React from "react";

import Layout from "../../components/Layout";
import RecipeRoll from "../../components/recipes/recipeRoll";
import styles from "./index.module.css";

class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            My collection of Recipes
          </h1>
        </div> */}
        <h1 className={styles.h1}>Coleccion de Recetas</h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <RecipeRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default RecipeIndexPage;
