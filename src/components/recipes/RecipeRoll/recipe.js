import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
}));

const Recipe = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} subheader={props.dateCreated} />
      <CardMedia />
      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  );
};

export default Recipe;
