import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { ReactComponent as Logo } from "../Images/Luna.svg";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import { IconButton, Typography, Divider } from "@material-ui/core";
import { fontSize } from "@material-ui/system";

export default function Footer() {
  const webpage = "www.littleluna.io";
  return (
    <footer>
      <AppBar
        style={{
          background: "linear-gradient(45deg, #99ADFF , #FFBCF2 , #F5D0E2)",
          marginTop: "20",
        }}
        position="static"
      >
        <Container sx={{ marginTop: "40px" }} maxWidth="lg">
          {/*     <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/Contact" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid> */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PinterestShareButton url={webpage} quote={"Little Luna"}>
              <IconButton
                aria-label="share"
                sx={{
                  margin: "1rem",
                  "&:hover": {
                    position: "relative",
                    bottom: "2px ",
                    color: "#E60023                   ",
                  },
                }}
              >
                <PinterestIcon sx={{ fontSize: "60px" }} />{" "}
              </IconButton>
            </PinterestShareButton>
            <FacebookShareButton url={webpage} quote={"Little Luna"}>
              <IconButton
                aria-label="share"
                sx={{
                  margin: "1rem",

                  "&:hover": {
                    position: "relative",
                    bottom: "2px ",
                    color: "#518CCB",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: "60px" }} />{" "}
              </IconButton>
            </FacebookShareButton>
            <TwitterShareButton url={webpage} quote={"Little Luna"}>
              <IconButton
                aria-label="share"
                sx={{
                  margin: "1rem",

                  "&:hover": {
                    position: "relative",
                    bottom: "2px ",
                    color: "#3b5998",
                  },
                }}
              >
                <TwitterIcon sx={{ fontSize: "60px" }} />{" "}
              </IconButton>
            </TwitterShareButton>
          </Box>{" "}
          <Divider light />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign="center"
            marginTop={2}
            mb={2}
            pt={{ xs: 2, sm: 1 }}
            pb={{ xs: 2, sm: 0 }}
          >
            <Link href="/Contact" color="inherit">
              <Box m={1} width={"150px"}>
                <Logo />
              </Box>{" "}
            </Link>

            <Box color={"black"}>&reg; {new Date().getFullYear()}</Box>
          </Box>
        </Container>
      </AppBar>
    </footer>
  );
}
