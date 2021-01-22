import React from "react";

import PreviewCompatibleImage from "../../PreviewCompatibleImage";
import Img from "gatsby-image";

import styles from "./recipe.module.css";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   CardHeader,
//   CardMedia,
//   Typography,
//   Button,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 300,
//   },
// }));

const Recipe = (props) => {
  //const classes = useStyles();
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeImg}>
        {/* <PreviewCompatibleImage imageInfo={props.image} /> */}
        <Img fluid={props.image} />
        {/* <img src={props.image} /> */}
      </div>
      <div className={styles.recipeInfo}>
        <h1>{props.title}</h1>
        <h4>{props.dateCreated}</h4>
      </div>
    </div>
    // <Card className={classes.root}>
    //   <CardHeader title={props.title} subheader={props.dateCreated} />
    //   <CardMedia />
    //   <CardContent>
    //     <Typography>{props.description}</Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button>Read More</Button>
    //   </CardActions>
    // </Card>
  );
};

export default Recipe;
