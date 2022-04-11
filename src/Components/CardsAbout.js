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
import draw_1 from "../Images/family_1.jpg";
import draw_2 from "../Images/family_2.jpg";
import draw_3 from "../Images/family_3.jpg";
import draw_4 from "../Images/family_4.jpg";

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
      selectedImage = draw_4;
    }
    return selectedImage;
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={img}
          height="300"
          image={imageSelector(puzzle)} /* `../Images/${img}.jpg` */
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {PuzzlesName[puzzle - 1]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {puzzle} are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box m={1}>
          <Button size="small"> About</Button>
        </Box>
        <Box>
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
        </Box>
      </CardActions>
    </Card>
  );
}
