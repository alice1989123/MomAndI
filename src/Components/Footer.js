import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
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
          </Grid>
          <Divider light />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InstapaperShareButton url={webpage} quote={"Little Luna"}>
              <IconButton
                aria-label="share"
                sx={{
                  margin: "1rem",
                  "&:hover": {
                    position: "relative",
                    bottom: "2px ",
                    color: "#833AB4",
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: "40px" }} />{" "}
              </IconButton>
            </InstapaperShareButton>
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
                <FacebookIcon sx={{ fontSize: "40px" }} />{" "}
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
                <TwitterIcon sx={{ fontSize: "40px" }} />{" "}
              </IconButton>
            </TwitterShareButton>
          </Box>{" "}
          <Box
            textAlign="center"
            mb={2}
            pt={{ xs: 2, sm: 1 }}
            pb={{ xs: 2, sm: 0 }}
          >
            Little Luna &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </AppBar>
    </footer>
  );
}

/*   return (
    <div className={styles.footer_container}>
      <section className={styles.footer_subscription}>
        <p>Join us to recibe our newsletter about family advice</p>
        <p> You can unsuscribe at any time</p>
        <div className={styles.input_area}>
          <form>
            <input name="email" type="email" placeholder="Your email" />
            <Button variant="contained" endIcon={<SendIcon />}>
              Suscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}; */
