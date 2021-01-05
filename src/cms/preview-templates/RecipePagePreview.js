import React from "react";
import PropTypes from "prop-types";
import { RecipePageTemplate } from "../../templates/recipe-page";

const RecipePagePreview = ({ entry, widgetFor }) => (
  <RecipePageTemplate
    title={entry.getIn(["data", "title"])}
    description={entry.getIn(["data", "description"])}
    ingredients={entry.getIn(["data", "ingredients"])}
    steps={entry.getIn(["data", "steps"])}
  />
);

// RecipePagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default RecipePagePreview;
