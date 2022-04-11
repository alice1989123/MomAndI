import { Container, Box } from "@mui/material";
import styles from "./styles/MomAndI.module.scss";
import draw from "../Images/mooAndBaby.jpg";
import { Typography, Button, Grid } from "@mui/material";
import Card from "./CardsAbout";
import { IconContext } from "react-icons";

import { FaPuzzlePiece } from "react-icons/fa";

const MomAndI = () => {
  return (
    <Container className={styles.background}>
      <Box className={styles.intro}>
        <Box className={styles.hero}>
          <Typography variant={"h4"} color={"text.secondary"}>
            {" "}
            Mom and I ...
          </Typography>
          <Typography mt={"1rem"} variant={"h6"} color={"text.secondary"}>
            We belive in family and love as the main forces that drives our
            lives. We have created this space for leting the world know, that
            even in the bad times the love will guide us trown.
          </Typography>
        </Box>
        <Box className={styles.imageWrapper}>
          <img alt="heart" className={styles.heartDraw} src={draw}></img>
        </Box>
      </Box>

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

            <Typography variant={"h6"} color={"text.secondary"}>
              Key moments in our lives{" "}
            </Typography>
          </span>
        </div>
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

export default MomAndI;
