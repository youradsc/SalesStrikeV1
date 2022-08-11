// --- Material Ui Imports --- //

import { CardActionArea, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const FiCard = makeStyles({
  root: {
    position: "relative"
  }
})(Card);

export const FiCardActionArea = makeStyles({
  root: {
    position: "relative"
  }
})(CardActionArea);

export const FiCardActions = makeStyles({
  root: {
    position: "relative"
  }
})(CardActions);

export const FiCardContent = makeStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent"
  }
})(CardContent);

export const FiCardMedia = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

// --- Exports --- //
export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
};
