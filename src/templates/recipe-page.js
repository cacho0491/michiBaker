import React from "react";

import { graphql, Link } from "gatsby";
import { WiTime12 } from "@react-icons/all-files/wi/WiTime12";
import { WiTime3 } from "@react-icons/all-files/wi/WiTime3";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";

import Layout from "../components/Layout";
import styles from "./recipe-page.module.css";
import photo from "../../public/img/products-grid1.jpg";
import Img from "gatsby-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const RecipePost = (props) => {
  return (
    <Layout>
      <section className={styles.recipe}>
        <div className={styles.recipeTop}>
          <div className={styles.recipeTopImg}>
            <PreviewCompatibleImage
              imageInfo={props.data.markdownRemark.frontmatter.image}
            />
          </div>

          <div className={styles.recipeInfo}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.description}</p>

            {props.data.markdownRemark.frontmatter.cookingInfo.map(
              (item, index) => {
                return (
                  <div key={index + 1} className={styles.cookingInfo}>
                    <div>
                      <WiTime12 />
                      <h5>Prep Time</h5>
                      <h6>{item.prepTime}</h6>
                    </div>
                    <div>
                      <WiTime3 />
                      <h5>Cook Time</h5>
                      <h6>{item.cookTime}</h6>
                    </div>
                    <div>
                      <BsPeople />
                      <h5>Servings</h5>
                      <h6>{item.servings}</h6>
                    </div>
                  </div>
                );
              }
            )}
            <div className={styles.tags}>
              <h4>Tags: </h4>
              <ul>
                {props.data.markdownRemark.frontmatter.tags.map((tag) => {
                  return (
                    <Link key={tag} to={`/tags/${tag}`}>
                      <li>{tag}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.recipeContent}>
          <div className={styles.ingredients}>
            <h3>Ingredients</h3>
            <div>
              <ul>
                {props.data.markdownRemark.frontmatter.ingredients
                  ? props.data.markdownRemark.frontmatter.ingredients.map(
                      (ingredient) => {
                        return (
                          <li key={ingredient.name}>
                            <p>
                              <span>{ingredient.quantity}</span>{" "}
                              {ingredient.name}
                            </p>
                          </li>
                        );
                      }
                    )
                  : null}
              </ul>
            </div>
          </div>
          <div className={styles.instructions}>
            <h3>Instructions</h3>
            <div className={styles.recipeSteps}>
              <ul>
                {props.data.markdownRemark.frontmatter.steps
                  ? props.data.markdownRemark.frontmatter.steps.map(
                      (step, index) => {
                        return (
                          <li key={index + 1}>
                            <h5>Step {index + 1}</h5>
                            <p>{step.description}</p>
                          </li>
                        );
                      }
                    )
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
      ;
      {/* <RecipePageTemplate
        title={post.title}
        description={post.description}
        ingredients={post.ingredients}
        steps={post.steps}
      /> */}
    </Layout>
  );
};

export default RecipePost;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        cookingInfo {
          cookTime
          prepTime
          servings
        }
        ingredients {
          name
          quantity
        }
        steps {
          description
        }
        tags
      }
    }
  }
`;
