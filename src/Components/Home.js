//import MomAndBaby from "../Images/mooAndBaby.jpg";
import draw from "../Images/family_11.jpeg";
import styles from "./styles/Home.module.scss";
import Container from "@material-ui/core/Container";
import { Button, Grid, Box, Stack, Typography } from "@mui/material";
import Card from "./Card";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FaPuzzlePiece } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container className={styles.container}>
      <section>
        <Box className={styles.container1}>
          <Box className={styles.heroContainer}>
            <Typography
              mb={"2rem"}
              m={"1rem"}
              variant={"h2"}
              color={"text.primary"}
            >
              Every child born into this world is a gift.
            </Typography>
            <Typography m={"1rem"} variant={"h5"} color={"text.primary"}>
              One baby, shined with bright light within her family from the
              moment she was born. It was almost as if she used the moonlit rays
              as a slide to come into this world. It was clear, destiny had
              intended her light to shine on the world around her.
            </Typography>

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

              <Button href={"./Little_Luna"} variant="outlined">
                Meet Little Luna
              </Button>
            </Stack>
          </Box>
          <Box
            display={"flex"}
            data-aos="fade-up"
            data-aos-duration="3000"
            mt={"2rem"}
          >
            <img
              alt="moonAndbaby"
              className={styles.momAndBaby}
              src={draw}
            ></img>
          </Box>
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

            <Typography variant={"h4"}>
              {" "}
              Someone has stollen Little Luna drawings... and is sending them
              back as puzzles!
            </Typography>

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

        <Typography
          marginBottom={"2rem"}
          variant="h6"
          color="text"
        ></Typography>

        <Container>
          <Grid container>
            {[1, 2, 3, 4].map((x) => (
              <Grid item md={6} xs={12} key={x}>
                <Box
                  data-aos="fade-up"
                  data-aos-duration="3000"
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
