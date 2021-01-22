import React from "react";

import { useStaticQuery, graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import Category from "./category";
import styles from "./categories.module.css";

const Categories = (props) => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             tags
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const categories = [];
  // const tags = data.allMarkdownRemark.edges.map(
  //   (edge) => edge.node.frontmatter.tags
  // );
  // tags.forEach((tagArray) => {
  //   tagArray.forEach((tag) => {
  //     if (!categories.includes(tag) && tag) {
  //       categories.push(tag);
  //     }
  //   });
  // });

  const data = useStaticQuery(graphql`
    query TagQuery {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.group);

  return (
    <div className={styles.categories}>
      {data.allMarkdownRemark.group.map((tag) => {
        return (
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <Category title={tag.fieldValue} />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
