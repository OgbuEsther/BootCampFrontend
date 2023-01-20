import React from "react";
import styled from "styled-components";

// import heroPic2 from "../ASSESTS/green-wash.jpg";
import HeaderT from "./HeaderT";

const HeroT = () => {
  return (
    <div>
      <Container>
        <Div1>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            reiciendis ratione natus praesentium labore, sit animi dolorum
            deserunt exercitationem rem quisquam architecto molestias
            voluptatem.
          </p>
          <button>View Our Catalog</button>
        </Div1>
      </Container>
    </div>
  );
};

export default HeroT;

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: skyblue;
  flex-wrap: wrap;
  display: flex;
  
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    
  }
`;

const Div1 = styled.div`
  position: absolute;
  /* background-color: red; */
  width: 500px;
  color: white;
  z-index: 1;
  @media screen and (max-width: 500px) {
    width: 280px;
  }
  h1 {
    margin: 0;
    text-align: center;
    /* background-color: red; */

    @media screen and (max-width: 500px) {
      width: 280px;
    }
  }
  p {
    text-align: center;

    @media screen and (max-width: 500px) {
      width: 280px;
    }
  }

  button {
    cursor: pointer;
    height: 40px;
    width: 150px;
    background-color: black;
    color: white;
    font-weight: bold;
    border-radius: 30px;

    transition: all ease-in-out 400ms;

    :hover {
      background-color: rgba(0, 0, 0, 0.9);
      transform: scale(0.95);
    }
  }
`;

const Div2 = styled.div`
  display: flex;
  img {
  }
`;
