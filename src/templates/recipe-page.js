import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import styles from "./recipe.module.css";
import photo from "../../public/img/products-grid1.jpg";

export const RecipePageTemplate = ({
  title,
  description,
  ingredients,
  steps,
}) => {
  <section className={styles.recipe}>
    <div className={styles.recipeTop}>
      <img src={photo} />
      <div className={styles.recipeInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    <div className={styles.recipeContent}>
      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <div className={styles.recipeSteps}>
          <ul>
            {steps
              ? steps.map((step, index) => {
                  return (
                    <li>
                      <h5>Step {index + 1}</h5>
                      <p>{step}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
      <div className={styles.ingredients}>
        <h3>Ingredients</h3>
        <div>
          <ul>
            {ingredients
              ? ingredients.map((ingredient) => {
                  return (
                    <li>
                      <p>{ingredient}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  </section>;
};

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RecipePageTemplate
        title={post.title}
        description={post.description}
        ingredients={post.ingredients}
        steps={post.steps}
      />
    </Layout>
  );
};

export default RecipePost;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        ingredients
        steps
      }
    }
  }
`;
