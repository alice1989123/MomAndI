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
      <Typography mt={"1rem"} variant={"h6"} color={"text.secondary"}>
        {body}
      </Typography>
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
        <Typography variant={"h2"} color={"text.primary"}>
          Her name is Luna.
        </Typography>
        <div className="Demo__some-network"></div>
        <TextWrapper
          subtitle={"She is a little girl full of life..."}
          body={`  who loves running fast, twirling
            around and dancing ballet. While believing she is one, Luna loves
            dressing up as a princess, wearing fairy wings and also getting her
            hair done into braids and pony tails. She likes going to the park
            and to the supermarket. When food is the subject, French fries,
            strawberries and surprisingly broccoli are the winners and there is
            nothing quite refreshing like mango juice! Her favorite character is
            Minnie Mouse and she is fond of cats. Besides playing with Lego, she
            loves reading and playing with her aunts. Luna likes singing,
            especially “North Star – Peppa pig”, “Twinkle twinkle” and “ Row row
            you boat”. When it comes to dancing, it is not only to nursery
            rhymes but to songs like “Can’t stop the feeling” by Justin
            Timberlake and “Better when I’m dancing” by Meghan Trainor. She
            likes all colorful things but her favorite colors are red and pink
            and she is very interested in arts and crafts like coloring,
            play-dough activities, painting and finger painting. Doodling is
            almost every little child’s hobby and the first stage to learning to
            draw, but Luna’s wonderful drawing ability is a gift, although she
            is only a toddler. When you first look at her drawings, you see
            beauty in mixed paint. When you look further, you cannot but wonder
            about the magic in the intricate details. Overall Luna has a
            portfolio of nine beautiful paintings reflecting the innocence of a
            two year old and the creativity of a rising talent.             
            `}
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
        <TextWrapper
          subtitle={`The little painter was so proud of this achievement...`}
          body={`And she enjoyed
          showing her drawings to friends and relatives. Hence, whenever they
          had visitors or wanted to visit someone, Luna was excited to display
          her work and talk about it in her own toddler’s cute describing words.
          
          Now on one sunny day, Luna and her mom were visiting a friend. They
          took Luna’s drawings with them as usual to show her the little
          princess’ amazing art. Luna enjoyed every single reaction of surprise
          and praise. On their way back home, Luna insisted on stopping, where
          she noticed a traffic stop sign. The little artist is obsessed with
          stop signs. Besides the fact that she loves finding them on the road, she also
          loves painting them. That’s why her mom didn’t mind stopping and
          parking there, since she spotted a playground not far. Little Luna
          walked to the stop sign, touched it saying hello and waited for mommy
          to snap a photo of her there.`}
        />
        <ImageWrapper image={6} />
        <TextWrapper
          body={`A mother with her child happened to be walking nearby at that moment
          and couldn’t help but mention how cute this was. Luna’s Mom smiled at
          the woman and explained that her daughter likes to do so, stopping at
          stop signs, touching them and saying hello, ever since she was one
          year old and that “STOP” is the first word she can actually spell on
          her own. That woman was also walking with her son to the park, so all
          four ended up going there together, where she had the chance to chat
          with Luna’s mom and see the little painter’s work. Half an hour had
          passed and little Luna was starting to get tired. So they said goodbye
          to their newly met short time companions and drove back home to be on
          time for the toddler’s nap. Later in the evening, Luna’s mom wanted to
          put back the drawings in Luna’s painting folder, when she found out
          that they were missing from her backpack! What a frustrating
          situation! And what a catastrophe to the little painter to
          unexpectedly lose her treasure! `}
        />
        <ImageWrapper image={7} />
        <TextWrapper
          subtitle={`How could that possibly happen?! `}
          body={`   Of course after checking every corner
          in the car, Luna’s mom realized the only place she took her backpack
          to was the playground. Could have they fallen there? But there is no
          way because she remembers putting the drawings back in the pink file,
          after showing them to that woman they met, and then putting the file
          in her backpack before closing the zipper. Two days have passed and
          her memory began playing tricks on her... Maybe she left the pink file
          on the playground’s bank! She did not hesitate to submit an online
          application for “the lost and found items” anyway. Yes, to anyone this
          can be a superficial matter perhaps, but to Luna‘ s parents, not only
          are the drawings masterpieces of their precious offspring, but they
          also are a very meaningful sign and souvenir of a “too early reached”
          giant milestone! At first, Luna’s father tried to weigh the guilt and
          sadness off the mother’s chest by trying to convince her that
          eventually Luna will draw other paintings. But then he saw how
          important the nine drawings were to Luna and mom: She would take Luna
          to that same playground whenever she wanted to play, in the hope of
          meeting that woman again and asking her if she saw that pink file
          anywhere after they left. Also, little Luna was telling every child
          she met there about her drawings.`}
        />
        <ImageWrapper image={9} />
        <TextWrapper
          subtitle={`A week later...`}
          body={` Luna’s mom had an idea. She will hang some flyers in
          that park about the lost pink file leaving her phone number in case
          someone finds it. It was a simple pink file with four stickers of
          cartoon princesses on each corner. Mom had a photo in her mobile
          gallery of Luna holding it. So she printed an edited enlarged picture
          of the file alone with the useful text under it and hung ten copies
          across the playground’s hot spots. Little Luna enjoyed participating
          and helping in discovering the best places where the flyers can be
          seen. The next day and the one after, little Luna insisted on going to
          the park to check on them. Two days later, Luna and mom were entering
          the playground when they spotted the pink file on the bench they
          usually sit on. Little Luna rushed running towards the bench’s
          direction and mom followed her with the same speed. It was a joyful
          moment filled with laughter and racing heartbeats. But unfortunately
          it ended as soon as they were opening the famous file because it was
          empty. At that disappointment, the little artist broke down in tears.
          Mom tried to comfort her by giving her a hug and saying it will be
          alright, then she gave her the mango juice that she liked so much but
          it was all in vain. She didn’t stop crying until mom promised they’ll
          go to the supermarket where she started smiling again since it was her
          favorite place to go to. Nevertheless little Luna always insisted on going to that same park where she got used to playing with some kids her age there`}
        />
        <ImageWrapper image={2} />
        <TextWrapper
          subtitle={`Three days
          later, they went again...`}
          body={`
            After sliding and swinging, little Luna came
          back to sit next to mom on “their” bank to eat her strawberries when
          she pointed at a shape carved into the wood of the bench’s back. As
          the mother looked, it was an octagon. A shape that the little artist
          recognized as she got used to drawing it with every traffic stop sign.
          The octagon’s width was about four inches and the carving seemed
          somehow fresh, since the color of the lines was lighter and cleaner
          than the color of the wood. Luna’s mom gave her the strawberries and
          decided to ignore that there is anything related to Luna’s drawings
          despite the details she observed. An hour later, Luna had her share of
          playing, so they walked back to the car. And as the mom wanted to open
          the rear door to put Luna in her car seat she couldn't help but notice
          like a golden shining object on the ground. She picked it up only to
          find out it is a key chain in the form of an octagon. She put it in
          her pocket, and quickly buckled Luna in her car seat. While driving
          back home she had hundreds of rushed thoughts. This cannot be a
          coincidence! Someone is obviously trying to tell them that they have
          the drawings. But why mess around and not give them back
          automatically?! She couldn’t wait to tell her husband about the
          octagon incidents. Luna’s father shared absolutely the same opinion.
          Someone has the drawings and is sending these clues. The findings were
          connected and not in the hands of pure chance! He was intrigued yet
          somehow worried and upset. His wife and daughter were obviously being
          watched, giving the fact that, their stalker knew exactly where they
          usually sit at the playground and not only that but they are also
          being followed outside the park! To their car! So what will be next?
          Following them home? So the little artist’s parents decided to
          completely drop the pursuit of the drawings, and more exactly to stop
          stepping foot in that playground. And so it was... The whole family
          forgot about the nine drawings and the parents encouraged little Luna
          to draw again. But she refused to draw like she did before, and
          whenever she tried, it was barely random scribbling.`}
        />
        <ImageWrapper image={3} />

        <TextWrapper
          subtitle={"That day after putting Luna to bed at night..."}
          body={` The mother couldn’t stop
          thinking: Who could possibly take some child’s drawings with no value
          to them whatsoever?! And is it that same person who put the file on
          the bank? The father’s point of view is that some children probably
          took the file, pulled the drawings out of it with the sole purpose of
          discovering and playing, forgetting the file in some corner of the
          park, when another person accidentally found it and placed it on the
          bank after seeing it on the flyers. But why didn’t that person call
          the mother’s number and how did it coincide that the file was put on
          the bank, where Luna and her mom were sitting almost on a daily basis
          for the past ten days? It was not obvious at all. So the parents
          decided to forget about the drawings for a while, not mentioning them
          to Luna anymore.`}
        />
        <ImageWrapper image={5} />

        <TextWrapper
          subtitle={
            "Three months later, while Luna’s mom was preparing lunch..."
          }
          body={`She received
          an MMS from an unknown number. The picture was what looked like a
          puzzle piece of mixed colors. She ignored it assuming it was sent by
          mistake. A couple of days later, Luna was helping her mom to bake a
          cake. She insisted on listening to a song. Since mom’s hands were
          already busy with the dough, she asked Luna to click on the music
          application icon on her phone. Luna grabbed the mobile and the moment
          she was holding it, an MMS came through from an unknown number. Luna
          automatically clicked on the message to open it as her mom was
          observing. It was another puzzle piece similar to the one sent before.
          Luna immediately brought her hands to her cheeks with a gaping jaw
          dropping the phone. As her mother explained that it was nothing
          serious and that it was sent by mistake, Luna looked at her mother and
          screamed:” My drawing!” Her mom quickly picked up her phone, froze and
          held her breath while realizing that it was indeed a piece of one of
          Luna’s drawings! She hugged her little girl to soothe her reaction
          while trying to give her a positive interpretation of what just
          happened although she was not sure herself about what she was telling
          her daughter. Someone eventually has the drawings, exactly as they
          doubted before. But what is their purpose in playing this kind of
          game?! What is going to happen next?! Are they going to ask for money
          in return for giving them back? Or will they keep sending them as
          puzzle pieces in MMS? At least this way they can be put back together
          to make a soft copy of the drawings. And what if they don’t send the
          complete pieces of each drawing? Luna’s mom was perplexed, and later
          on Luna’s dad joined the club of confusion. But one thought was giving
          them a glimpse of hope: The drawings were not lost after all! And they
          couldn’t help but smile because this means that Luna will soon draw
          again and her gift will bloom.`}
        >
          <ImageWrapper image={4} />
        </TextWrapper>
      </Box>
    </Container>
  );
};

export default Little_Luna;
