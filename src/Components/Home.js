//import MomAndBaby from "../Images/mooAndBaby.jpg";
import draw from "../Images/drow_5.png";
import styles from "./styles/Home.module.scss";
import Container from "@material-ui/core/Container";
import { Button, Grid, Box, Stack, Typography } from "@mui/material";
import Card from "./Card";
import { IconContext } from "react-icons";

import { FaPuzzlePiece } from "react-icons/fa";

const Home = () => {
  return (
    <Container className={styles.container}>
      <section>
        <Box className={styles.container1}>
          <Box className={styles.heroContainer}>
            <h1>Mom and I will make what is worth it last forever...</h1>
            <p>
              Using the Blockchain we are leaving a mark of love in our family
              .. one mark that will last forever, help us ...
            </p>

            <Stack
              className={styles.buttonContainer}
              spacing={2}
              direction="row"
            >
              <Button
                href={"./Mint"}
                className={styles.button}
                variant="contained"
              >
                Start Minting
              </Button>

              <Button variant="outlined">Learn about</Button>
            </Stack>
          </Box>
          <div className="imageContainer">
            <img
              alt="moonAndbaby"
              className={styles.momAndBaby}
              src={draw}
            ></img>
          </div>
        </Box>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>
            <IconContext.Provider
              value={{
                color: "rgb(88, 148, 226)",
                className: "global-class-name",
                size: "2rem",
              }}
            >
              <div>
                <FaPuzzlePiece></FaPuzzlePiece>
              </div>
            </IconContext.Provider>

            <h3> Puzzles </h3>

            <IconContext.Provider
              value={{
                color: "rgb(88, 148, 226)",
                className: "global-class-name",
                size: "2rem",
              }}
            >
              <div>
                <FaPuzzlePiece></FaPuzzlePiece>
              </div>
            </IconContext.Provider>
          </span>
        </div>

        <Typography marginBottom={"2rem"} variant="h6" color="text">
          Every week we solve one puzzle, you can help us by minting one piece.
        </Typography>

        <Container>
          <Grid container>
            {[1, 2, 3, 4].map((x) => (
              <Grid item md={6} xs={8} key={x}>
                <Box
                  marginBottom={2}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Card puzzle={x} key={x} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default Home;
