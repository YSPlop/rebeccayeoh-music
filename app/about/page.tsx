"use client";

import TeamComponent from "../../components/Team";
import TeamComponentFlipped from "../../components/TeamFlipped";

const About: React.FC = () => {

  const teamText = (
    <p>
      Rebecca has been learning piano and violin since the age of 4, and started teaching keyboard and piano
      since 2005. With nearly 20 years of teaching in the classroom and privately, she has developed many
      skills for creating a positive, encouraging, and fun learning environment. She uses a variety of
      methods so each student can learn and enjoy piano to their full potential.
      <br /><br />
      Graduating from Macquarie University in 2010 with a Bachelor of Arts and a Diploma of Education in Primary
      School Teaching, Rebecca has a wealth of experience teaching primary school students, which has fostered
      her passion for teaching, especially in music. Her favorite part of teaching is watching students grow and
      inspiring them to find their passion for music.
    </p>
  );
  const teamName = "Rebecca";
  const imageUrl = '/images.png'; // Path to your image

  return (
    <>
      <TeamComponent
        text={teamText}
        name={teamName}
        imageUrl={imageUrl}
      />
      <TeamComponentFlipped
          text={teamText}
          name={teamName}
          imageUrl={imageUrl}
      />
      <TeamComponent
          text={teamText}
          name={teamName}
          imageUrl={imageUrl}
      />
      <TeamComponentFlipped
          text={teamText}
          name={teamName}
          imageUrl={imageUrl}
      />
    </>
  );

};
export default About;