import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

import Category from "../../components/categories/category";
import styles from "./index.module.css";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className={styles.tagList}>
              {group.map((tag) => {
                const tags = [];
                const temKey = tag.nodes[0].frontmatter.templateKey;
                if (temKey === "recipe-page") {
                  return (
                    <li key={tag.fieldValue}>
                      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        <Category
                          title={`${tag.fieldValue} (${tag.totalCount})`}
                        />
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            templateKey
          }
        }
      }
    }
  }
`;

// import React from "react";
// import { kebabCase } from "lodash";
// import { Helmet } from "react-helmet";
// import { Link, graphql } from "gatsby";
// import Layout from "../../components/Layout";

// import Category from "../../components/categories/category";
// import styles from "./index.module.css";

// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Tags | ${title}`} />
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1"
//             style={{ marginBottom: "6rem" }}
//           >
//             <h1 className="title is-size-2 is-bold-light">Tags</h1>
//             <ul className="taglist">
//               {group.map((tag) => (
//                 <li key={tag.fieldValue} >
//                   <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//                     <Category title={`${tag.fieldValue} ${tag.totalCount}`} />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default TagsPage;

// export const tagPageQuery = graphql`
//   query TagsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `;
