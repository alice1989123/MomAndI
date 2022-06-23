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
import draw_2 from "../Images/family_10.jpeg";
import draw_3 from "../Images/family_8.jpeg";
import draw_4 from "../Images/family_9.jpeg";

import FacebookIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/WhatsApp";

import { TelegramShareButton, WhatsappShareButton } from "react-share";

const webpage = "www.littleluna.io";

const PuzzlesName = [
  "She is a little girl full of life...",
  "The little painter was so proud of her achievement...",
  "Some one stole Little Luna drawings!",
  "Luna looked at her mother and screamed:” My drawing!”",
];

const Contents = [
  `She is a little girl full of life. She loves running fast, twirling around and dancing ballet. Luna loves dressing up as a princess, wearing fairy wings and getting her hair done into braids and ponytails.
  She likes going to the park and to the supermarket.
  When it comes to food, French fries, strawberries and surprisingly broccoli are the winners and there is nothing quite as refreshing like mango juice!
  Her favorite character is Minnie Mouse, and she is fond of cats.`,
  `Overall, Luna has a portfolio of nine beautiful paintings reflecting the innocence of a two-year-old and the creativity of a rising talent.
The little painter loved showcasing her work to everyone she met, her eyes gleaming with excitement and pride every time.`,
  `In the evening, Luna’s mom wanted to put the paintings back in their folder. She found out that they were missing from the bag they were in! This was a catastrophe for the little painter to lose her treasures! Where could they have gone?! After checking every corner of the house, and the car, Luna’s mom realized that the only place the backpack had been out of her hands was at the playground. `,
  `Someone had the drawings. But why were they playing this game? Were they after money? Or would they keep sending puzzle pieces in text messages? Can they put the pieces together to make the full paintings? What if these pieces don’t complete the puzzle? `,
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
            {Contents[puzzle - 1]}
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
          <Button href={"./Mint"} size="small">
            Mint
          </Button>
          <Button href={"./Little_Luna"} size="small">
            {" "}
            Little Luna
          </Button>
        </Box>
        <Box>
          <TelegramShareButton url={webpage} quote={"Little Luna"}>
            <IconButton
              aria-label="share"
              sx={{
                "&:hover": {
                  position: "relative",
                  bottom: "2px ",
                  color: "#518CCB",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: "30px" }} />{" "}
            </IconButton>
          </TelegramShareButton>
          <WhatsappShareButton url={webpage} quote={"Little Luna"}>
            <IconButton
              aria-label="share"
              sx={{
                "&:hover": {
                  position: "relative",
                  bottom: "2px ",
                  color: "green",
                },
              }}
            >
              <TwitterIcon sx={{ fontSize: "30px" }} />{" "}
            </IconButton>
          </WhatsappShareButton>
          {/*  <IconButton aria-label="add to favorites">
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
          </IconButton> */}
        </Box>
      </CardActions>
    </Card>
  );
}
