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
/* import draw_1 from "../Images/draw_1.jpg";
import draw_2 from "../Images/draw_2.jpg";
import draw_3 from "../Images/draw_3.jpg";
import draw_4 from "../Images/draw_4.jpg"; */

import draw_1 from "../Images/family_1.jpeg";
import draw_2 from "../Images/family_10.jpeg";
import draw_3 from "../Images/family_7.jpeg";
import draw_4 from "../Images/family_9.jpeg";

import FacebookIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/WhatsApp";
import { ReactComponent as Logo } from "../Images/Luna.svg";

import { TelegramShareButton, WhatsappShareButton } from "react-share";

const webpage = "www.littleluna.io";

const PuzzlesName = [
  "She is a little girl full of life...",
  "The little painter was so proud of this achievement...",
  "Some one stolled Little Luna drawings!",
  "Luna looked at her mother and screamed:” My drawing!”",
];

const Contents = [
  "Who loves running fast, twirling around and dancing ballet. While believing she is one, Luna loves dressing up as a princess, wearing fairy wings and also getting her hair done into braids and pony tails. She likes going to the park and to the supermarket. When food is the subject, French fries, strawberries and surprisingly broccoli are the winners and there is nothing quite refreshing like mango juice!",
  "she enjoyed showing her drawings to friends and relatives. Hence, whenever they had visitors or wanted to visit someone, Luna was excited to display her work and talk about it in her own toddler’s cute describing words.",
  " Later in the evening, Luna’s mom wanted to put back the drawings in Luna’s painting folder, when she found out that they were missing from her backpack! What a frustrating situation! And what a catastrophe to the little painter to unexpectedly lose her treasure!",
  "Someone eventually has the drawings, exactly as they doubted before. But what is their purpose in playing this kind of game?! What is going to happen next?! Are they going to ask for money in return for giving them back? Or will they keep sending them as puzzle pieces in MMS? ",
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
