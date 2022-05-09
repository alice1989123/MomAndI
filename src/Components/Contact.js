import { Container, Box } from "@material-ui/core";
import styles from "./styles/Contact.module.scss";
import draw from "../Images/drawChildren.jpg";
import contact from "../Images/contact.png";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Container className={styles.container}>
      <Box className={styles.intro}>
        <Card sx={{ maxHeight: 800, maxWidth: 600 }}>
          <CardMedia
            margin={"1rem"}
            component="img"
            alt="contact info"
            height="140"
            image={contact}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                margin: "1rem",
              }}
            >
              Contact Us
            </Typography>
            <Divider light />

            <Typography
              sx={{
                marginTop: "2rem",
                margin: "1rem",
              }}
              variant="h4"
              color="text.secondary"
            >
              We would love to hear from you.{" "}
            </Typography>
            <CardActions>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "flex-start",

                  alignItems: { xs: "flex-start" },
                }}
              >
                <IconButton
                  aria-label="share"
                  sx={{
                    margin: "1rem",

                    "&:hover": {
                      position: "relative",
                      bottom: "2px ",
                      color: "green",
                    },
                  }}
                >
                  <WhatsAppIcon fontSize="large" />{" "}
                  <Typography marginLeft={1}> +52-55163845</Typography>
                </IconButton>
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
                  <MailOutlineIcon fontSize="large" />{" "}
                  <Typography marginLeft={1}> little_luna@gmail.com</Typography>
                </IconButton>
              </Box>{" "}
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Contact;
