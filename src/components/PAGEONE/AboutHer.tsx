import React from "react";
import styled from "styled-components";
// import heroPic from "../ASSESTS/Timage1.webp";

const AboutHer = () => {
  return (
    <div>
      <Container>
        <ImgHold>{/* <img src={heroPic} alt="" /> */}</ImgHold>
        <TextHold>
          <h2>Miss Gift Agbai</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            porro culpa explicabo blanditiis voluptatem quos nemo libero totam
            facilis praesentium omnis corrupti dolorum ipsa, assumenda repellat
            quasi quis. Cum quis assumenda sint nihil alias placeat culpa
            dolorem eligendi sunt non.
          </p>
        </TextHold>
      </Container>
    </div>
  );
};

export default AboutHer;

const TextHold = styled.div`
  p {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    width: 290px;
  }
`;

const ImgHold = styled.div`
  img {
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
