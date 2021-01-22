import React from "react";

import { Link } from "gatsby";
import Recipe from "./RecipeRoll/recipe";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./recipeRoll.module.css";

import Img from "gatsby-image";
import photo from "../../../static/img/quimbolito.jpg";
import { checkPropTypes } from "prop-types";

const RecipeRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMM YYYY")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tags
              templateKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const glossary = data.allMarkdownRemark.edges
    .map((edge) => {
      if (edge.node.frontmatter.templateKey.includes("recipe-page")) {
        return edge.node.frontmatter.tags;
      }
    })
    .map((tag) => tag);
  const glo = ["Latino"];

  glossary.forEach((element) => {
    if (element) {
      element.forEach((e) => {
        if (glo.includes(e)) {
          return;
        }
        glo.push(e);
      });
    }
  });
  return (
    <div className={styles.recipeRoll}>
      <h1>Recetas</h1>

      <div className={styles.glossary}>
        <ul>
          {glo.map((item) => {
            return (
              <Link key={item} to={`/tags/${item}`}>
                <li className={styles.glossaryItem}>{item}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.recipes}>
        {data.allMarkdownRemark.edges.map((edge) => {
          if (edge.node.fields.slug.includes("/recipes/")) {
            return (
              <Link key={edge.node.fields.slug} to={edge.node.fields.slug}>
                <Recipe
                  title={edge.node.frontmatter.title}
                  dateCreated={edge.node.frontmatter.date}
                  image={edge.node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecipeRoll;
