import React from "react";
import Container from "../components/container/container";
import Carousel from "../components/carousel/aboutme";

const Aboutme = () => {
  return (
    <div>
      <Container>
        <p>First thing's first, I’m French and proud of my roots.</p>
        <p>
          I was an engineer in an ice cream factory. Yes, even if it was THE
          dream to eat ice cream everyday, I realised it wasn’t for me. I had
          the feeling that I was supposed to do more, that I wasn’t in the right
          place. So I decided to come to England as an au pair to take time to
          think, to open my mind and of course, learn English. It was obviously
          the right choice! I fell in love with Manchester, its vibes and its
          people. The friends I met introduced me to the world of web
          development. It was completely new to me, I used to be so scared of
          those words. Very quickly I realised it was just like a construction
          game, where creativity can lose itself. Creation without borders! I
          just had to learn another language... It’s not that easy and I’m still
          learning but I'm enjoying every step. This website is one of my first
          projects, created from scratch using React.
        </p>
        <p>Have a look around, I hope you’ll enjoy your journey!</p>
      </Container>
      <Carousel></Carousel>
    </div>
  );
};

export default Aboutme;
