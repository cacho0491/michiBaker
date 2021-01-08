import React from "react";

import { Link } from "gatsby";
import Recipe from "./RecipeRoll/recipe";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./recipeRoll.module.css";

import Img from "gatsby-image";
import photo from "../../../static/img/quimbolito.jpg";

const RecipeRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY MMM DD")
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.recipes}>
      {data.allMarkdownRemark.edges.map((edge) => {
        if (edge.node.fields.slug.includes("/recipes/")) {
          return (
            <Link to={edge.node.fields.slug}>
              <Recipe
                title={edge.node.frontmatter.title}
                dateCreated={edge.node.frontmatter.date}
                image={photo}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default RecipeRoll;
