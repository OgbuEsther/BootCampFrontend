import React from "react";
import styled from "styled-components";

const HeaderT = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <Nav>
          <h3>Catalog</h3>
        </Nav>
        <Button>
          <button>Contact us</button>
        </Button>
      </Container>
    </div>
  );
};

export default HeaderT;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: crimson;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 80%;
  background-color: gray;
  border: 1px solid black;
  margin-left: 30px;
`;

const Nav = styled.div`
  h3 {
    margin: 0;
    cursor: pointer;
  }
`;

const Button = styled.div`
  margin-right: 30px;
  button {
    cursor: pointer;
    height: 40px;
    width: 100px;
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
