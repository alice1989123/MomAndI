import { Container, Box } from "@mui/material";
import styles from "./styles/MomAndI.module.scss";
import { Typography, Button, Grid } from "@mui/material";
import Card_ from "./CardsAbout";
import { IconContext } from "react-icons";
import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const TextWrapper = ({ body, subtitle }) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="3000"
      sx={{ padding: "2rem", background: "rgba(255,255,255, 0.4)" }}
    >
      {" "}
      <Typography mt={"1rem"} variant={"h4"} color={"text.primary"}>
        {subtitle}
      </Typography>
      {body.split(/\r?\n/g).map((x) => {
        return (
          <Typography mt={"1rem"} variant={"h6"} color={"text.secondary"}>
            {x}
            <br></br>
          </Typography>
        );
      })}
    </Card>
  );
};

const ImageWrapper = ({ image }) => {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="3000"
      margin={"1rem"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Card_ puzzle={image} key={image} />
    </Box>
  );
};

const Little_Luna = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className={styles.background}
    >
      <Box className={styles.container}>
        <Typography variant={"h2"} color={"text.primary"}></Typography>
        <div className="Demo__some-network"></div>
        <TextWrapper
          subtitle={"Every child born into this world is a gift."}
          body={`One baby, shined with bright light within her family from the moment she was born. It was almost as if she used the moonlit rays as a slide to come into this world. It was clear, destiny had intended her light to shine on the world around her.
        Her name is Luna.        
        She is a little girl full of life. She loves running fast, twirling around and dancing ballet. Luna loves dressing up as a princess, wearing fairy wings and getting her hair done into braids and ponytails.
        She likes going to the park and to the supermarket.  When it comes to food, French fries, strawberries and surprisingly broccoli are the winners and there is nothing quite as refreshing like mango juice!
        Her favorite character is Minnie Mouse, and she is fond of cats. Besides playing with Legos, she loves reading and playing with her aunts.
        Luna likes singing, especially “North Star – Peppa pig”, “Twinkle twinkle” and “Row row your boat”. When it comes to dancing, it is not only to nursery rhymes but to songs like “Can’t stop the feeling” by Justin Timberlake and “Better when I’m dancing” by Meghan Trainor.`}
        ></TextWrapper>
        <Box
          margin={"2rem"}
          data-aos="fade-up"
          data-aos-duration="3000"
          display={"flex"}
          justifyContent={"center"}
        >
          <Card_ puzzle={12} key={12} />
        </Box>
        <Typography
          mt={"1rem"}
          variant={"h6"}
          color={"text.secondary"}
        ></Typography>{" "}
        <TextWrapper
          body={`She loves all things colorful. Her favorite colors are pink and red. She really enjoys arts and crafts with her mom, like coloring, play-dough activities, and all kinds of painting.
          Doodling is almost every little child’s hobby and the first stage to learning to draw. Luna’s wonderful drawing ability is a gift, although she is only a toddler, her drawings truly give you a glimpse into her mind and how she interprets the little world around her. Upon taking the first look at her drawings, you see beauty in mixed paint, but when you look deeper, you cannot but wonder about the magic in the intricate details.
          Overall, Luna has a portfolio of nine beautiful paintings reflecting the innocence of a two-year-old and the creativity of a rising talent.
         The little painter loved showcasing her work to everyone she met, her eyes gleaming with excitement and pride every time.`}
        />
        <ImageWrapper image={6} />
        <TextWrapper
          body={`Another mother and her child happened to be walking by at that moment and she couldn’t help but mention how cute the picture of Little Luna was. Luna’s mother smiled at the other mom and explained that Luna loves stopping at stop signs to touch them and say hello. Ever since she was barely a year old! Luna’s mother also mentioned that “STOP” was the first word Little Luna was able to spell on her own. 
          It turned out that the other mother and her son were heading to the park, so they joined with Luna and her mother, and chatted with her. She found out that Little Luna was an artist and even saw the little painter’s work.
          Half an hour later, Little Luna was starting to get tired. So, she said her goodbyes to her new companions and headed home with her mother to take a nap.
          In the evening, Luna’s mom wanted to put the paintings back in their folder. She found out that they were missing from the bag they were in! This was a catastrophe for the little painter to lose her treasures! Where could they have gone?! After checking every corner of the house, and the car, Luna’s mom realized that the only place the backpack had been out of her hands was at the playground. `}
        />
        <ImageWrapper image={7} />
        <TextWrapper
          subtitle={`How could that possibly happen?! `}
          body={`Did they fall there? Luna’s mom wondered, before quickly deciding it wasn’t possible. She remembered very clearly putting the drawings back into the backpack, after showing the other mom at the playground.
          Two days had passed, and Luna’s mom’s memory had started to play tricks on her. Maybe she left the paintings on the bench. She quickly submitted an online application for lost and found. Maybe to other people this was a small matter, but to Luna’s parents, these paintings were masterpieces created by their little princess. They were meaningful signs of a milestone reached much too early and souvenirs of their little one’s creativity that they were going to cherish forever. 
         At first, Luna’s father tried to relieve the guilt weighing on Luna’s mother by convincing her that Luna would paint other pictures. But he knew how important those 9 drawings were to everyone, especially Little Luna. Anytime Luna wanted to go to a playground, her mom would go to the same one where the paintings were lost. She was hoping that to run into the other mother from that day and ask her if she had seen the paintings anywhere. At the same time, Luna was telling every child she met about her art.`}
        >
          /
        </TextWrapper>
        <ImageWrapper image={9} />
        <TextWrapper
          subtitle={`A week later...`}
          body={` Luna’s mom had an idea. She will hang some flyers in that park about the lost pink file leaving her phone number in case someone finds it.
          It was a simple pink file with four stickers of cartoon princesses on each corner. Mom had a photo in her mobile gallery of Luna holding it.
          So she printed an edited enlarged picture of the file alone with the useful text under it and hung ten copies across the playground’s hot spots. Little Luna enjoyed participating and helping in discovering the best places where the flyers can be seen.
          The next day and the one after, little Luna insisted on going to the park to check on them.
          Two days later, Luna and mom were entering the playground when they spotted the pink file on the bench they usually sit on. Little Luna rushed running towards the bench’s direction and mom followed her with the same speed. It was a joyful moment filled with laughter and racing heartbeats.
          But unfortunately it ended as soon as they were opening the famous file because it was empty. At that disappointment, the little artist broke down in tears. Mom tried to comfort her by giving her a hug and saying it will be alright, then she gave her the mango juice that she liked so much but it was all in vain. She didn’t stop crying until mom promised they’ll go to the supermarket where she started smiling again since it was her favorite place to go to.
          That day after putting Luna to bed at night, the mother couldn’t stop thinking:
          Who could possibly take some child’s drawings with no value to them whatsoever?! And is it that same person who put the file on the bank?
          The father’s point of view is that some children probably took the file, pulled the drawings out of it with the sole purpose of discovering and playing, forgetting the file in some corner of the park, when another person accidentally found it and placed it on the bank after seeing it on the flyers.
          But why didn’t that person call the mother’s number and how did it coincide that the file was put on the bank, where Luna and her mom were sitting almost on a daily basis for the past ten days? It was not obvious at all.
          So the parents decided to forget about the drawings for a while, not mentioning them to Luna anymore.
          Nevertheless little Luna always insisted on going to that same park, where she got used to playing with some kids her age there.`}
        />
        <ImageWrapper image={2} />
        <TextWrapper
          subtitle={`A few days later..`}
          body={`After sliding and swinging at the playground, Little Luna came to sit by her mom on “their” bench to eat her strawberries and pointed to a shape carved in the wood. As the mother looked, it was an octagon, a shape that Luna recognized immediately as she was so used to painting it. The carving seemed fresh, since the color of the wood was cleaner and lighter than the rest of the bench. Luna’s mom gave her the strawberries and decided to ignore the obvious resemblance to Luna’s drawings. 
          An hour later, Luna was ready to go home, and so she walked back to the car with her mom. As Luna’s mom opened the door, something shiny caught her eye from the ground. She picked it up, discovering that it was a keychain in the shape of an octagon. She quickly put it in her pocket and buckled Little Luna into her car seat. While heading home, thoughts were rushing into Luna’s mom’s head. There was no way this was a coincidence! Someone was telling them that they have the paintings. But why play these games and not give them back right away?!
          She couldn’t wait to tell her husband about the octagon incidents. After hearing the details, Luna’s father had the same opinion. Someone has the paintings and is sending clues. These findings are definitely connected. He was curious, but very anxious and worried. Obviously, his wife and daughter were being watched. Especially since this person knew where they sat at the playground and which car they drove! What’s next, following them home?!
          The little artist’s parents decided to completely stop pursuing the paintings and even stop visiting that playground. After some time, they all forgot about the 9 paintings and the parents encouraged Little Luna to paint again. But she refused to paint like before, and when she tried, she barely managed scribbles.`}
        />
        <ImageWrapper image={5} />
        <TextWrapper
          subtitle={"Three months later, while preparing lunch ..."}
          body={`Luna’s mom received a text from an unknown number. The picture looked like a puzzle piece of mixed colors. She ignored the message, assuming it was a mistake. A couple of days later, Luna was helping her mom bake a cake. She insisted on listening to a song. Since her mom couldn’t unlock the phone, Luna took it upon herself to do so. While holding the phone, another text from an unknown number came through and Luna clicked on it. It was another puzzle piece similar to the one before. Luna immediately showed her mom the phone, as her expression changed to sadness. Her mom saw this and picked up the phone, before explaining that this was just a message sent by mistake. Luna quickly looked at her mom with her lip shaking and barely whispered “my paintings.” Her mother quickly looked at the pictures again and froze, barely able to breath. Luna was right!
          She hugged Little Luna to calm her down while trying to give her some hope about what they had seen. Someone had the drawings. But why were they playing this game? Were they after money? Or would they keep sending puzzle pieces in text messages? Can they put the pieces together to make the full paintings? What if these pieces don’t complete the puzzle? Luna’s mom was frustrated and confused. Later, Luna’s father joined the same thoughts. But they had hope. The drawings were not lost after all! So they couldn’t help but smile because this means that Luna would possibly draw again and her gift would blossom!`}
        >
          <ImageWrapper image={4} />
        </TextWrapper>
      </Box>
    </Container>
  );
};

export default Little_Luna;
