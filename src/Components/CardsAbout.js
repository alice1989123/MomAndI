import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import draw_1 from "../Images/family_1.jpeg";
import draw_2 from "../Images/family_2.jpeg";
import draw_3 from "../Images/family_3.jpeg";
import draw_4 from "../Images/family_4.jpeg";
import draw_5 from "../Images/family_5.jpeg";
import draw_6 from "../Images/family_6.jpeg";
import draw_7 from "../Images/family_7.jpeg";
import draw_8 from "../Images/family_8.jpeg";
import draw_9 from "../Images/family_9.jpeg";
import draw_10 from "../Images/family_10.jpeg";
import draw_11 from "../Images/family_11.jpeg";
import draw_12 from "../Images/little_luna.gif";

import { padding } from "@mui/system";

const PuzzlesName = [
  "Learning to write",
  " A day in the Beach",
  "Hollidays",
  "Flowers day",
];

export default function ImgMediaCard({ puzzle }) {
  const img = `draw_${puzzle}`;
  function imageSelector(i) {
    let selectedImage;
    if (i === 1) {
      selectedImage = draw_1;
    }
    if (i === 2) {
      selectedImage = draw_2;
    }
    if (i === 3) {
      selectedImage = draw_3;
    }
    if (i === 4) {
      selectedImage = [draw_4];
    }
    if (i === 5) {
      selectedImage = [draw_5];
    }
    if (i === 6) {
      selectedImage = [draw_6];
    }
    if (i === 7) {
      selectedImage = [draw_7];
    }
    if (i === 8) {
      selectedImage = [draw_8];
    }
    if (i === 9) {
      selectedImage = [draw_9];
    }
    if (i === 10) {
      selectedImage = [draw_10];
    }
    if (i === 11) {
      selectedImage = [draw_11];
    }
    if (i === 12) {
      selectedImage = [draw_12];
    }

    return selectedImage;
  }
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardActionArea sx={{ padding: "1rem" }}>
        <CardMedia
          component="img"
          alt={img}
          height="500"
          image={imageSelector(puzzle)} /* `../Images/${img}.jpg` */
        />
        <CardContent>
          {/*  <Typography gutterBottom variant="h5" component="div">
            {PuzzlesName[puzzle - 1]}
          </Typography> */}
          {/*  <Typography variant="body2" color="text.secondary">
            {puzzle} are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
      {/* <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={{
                transition: "500ms",
                "&:hover": {
                  color: "pink",
                },
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon
              sx={{
                transition: "500ms",
                "&:hover": {
                  color: "#0066ff",
                },
              }}
            />
          </IconButton>
        </Box> */}
      {/*       </CardActions>
       */}{" "}
    </Card>
  );
}
