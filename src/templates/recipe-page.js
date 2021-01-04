import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import styles from "./recipe.module.css";
import photo from "../../public/img/products-grid1.jpg";

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

const RecipePost = (props) => {
  return (
    <Layout>
      <section className={styles.recipe}>
        <div className={styles.recipeTop}>
          <img src={photo} />
          <div className={styles.recipeInfo}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.description}</p>
          </div>
        </div>
        <div className={styles.recipeContent}>
          <div className={styles.instructions}>
            <h3>Instructions</h3>
            <div className={styles.recipeSteps}>
              <ul>
                {props.data.markdownRemark.frontmatter.steps.map(
                  (step, index) => {
                    return (
                      <li>
                        <h5>Step {index + 1}</h5>
                        <p>{step}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          <div className={styles.ingredients}>
            <h3>Ingredients</h3>
            <div>
              <ul>
                {props.data.markdownRemark.frontmatter.ingredients.map(
                  (ingredient) => {
                    return (
                      <li>
                        <p>{ingredient}</p>
                      </li>
                    );
                  }
                )}

                <hr />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipePost;
