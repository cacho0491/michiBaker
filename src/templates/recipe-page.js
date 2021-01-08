import React from "react";

import { graphql } from "gatsby";
import { WiTime12 } from "@react-icons/all-files/wi/WiTime12";
import { WiTime3 } from "@react-icons/all-files/wi/WiTime3";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";

import Layout from "../components/Layout";
import styles from "./recipe-page.module.css";
import photo from "../../public/img/products-grid1.jpg";
import Img from "gatsby-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// export const RecipePageTemplate = ({
//   title,
//   description,
//   ingredients,
//   steps,
// }) => {
//   <section className={styles.recipe}>
//     <div className={styles.recipeTop}>
//       <img src={photo} />
//       <div className={styles.recipeInfo}>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </div>
//     </div>
//     <div className={styles.recipeContent}>
//       <div className={styles.instructions}>
//         <h3>Instructions</h3>
//         <div className={styles.recipeSteps}>
//           <ul>
//             {steps
//               ? steps.map((step, index) => {
//                   return (
//                     <li>
//                       <h5>Step {index + 1}</h5>
//                       <p>{step}</p>
//                     </li>
//                   );
//                 })
//               : null}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.ingredients}>
//         <h3>Ingredients</h3>
//         <div>
//           <ul>
//             {ingredients
//               ? ingredients.map((ingredient) => {
//                   return (
//                     <li>
//                       <p>{ingredient}</p>
//                     </li>
//                   );
//                 })
//               : null}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </section>;
// };

const RecipePost = (props) => {
  //const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className={styles.recipe}>
        <div className={styles.recipeTop}>
          <div className={styles.recipeTopImg}>
            <PreviewCompatibleImage
              imageInfo={props.data.markdownRemark.frontmatter.image}
            />
            {/* <Img
              fluid={
                props.data.markdownRemark.frontmatter.image.childImageSharp
                  .fluid
              }
              alt="quim"
            /> */}
          </div>

          <div className={styles.recipeInfo}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.description}</p>
            <div className={styles.cookingInfo}>
              <div>
                <WiTime12 />
                <h5>Prep Time</h5>
                <h6>10 min</h6>
              </div>
              <div>
                <WiTime3 />
                <h5>Cook Time</h5>
                <h6>1 Hour</h6>
              </div>
              <div>
                <BsPeople />
                <h5>Servings</h5>
                <h6>4</h6>
              </div>
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
                          <li>
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
                          <li>
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
        ingredients {
          name
          quantity
        }
        steps {
          description
        }
      }
    }
  }
`;
