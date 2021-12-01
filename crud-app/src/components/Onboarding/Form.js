import React from "react";
import styled from "styled-components";
import { Time } from "@styled-icons/boxicons-solid";

const Form = () => {
  return (
    <Container>
      <OrderAwait>
        <OrderIcon />
        <p className="awaitDescription">1 Order to go</p>
      </OrderAwait>
      <img
        className="mainLogo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
        alt="starback"
      />
      <h2 className="title">Welkam to Starback</h2>
      <input
        className="customerName"
        type="text"
        placeholder="Enter your Name"
      ></input>
      <p className="description">15 digit name</p>
      <OnBoardButton className="orderButton">Order Now</OnBoardButton>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .title {
  }
  .mainLogo {
    width: 10rem;
    margin-bottom: 1rem;
  }
  .customerName {
    height: 3.2rem;
    width: 18rem;
    border: none;
    background-color: #fafafa;
    padding-inline-start: 1rem;
    outline: none;
    border-radius: 4px;
    color: #c4c4c4;
    box-sizing: border-box;
    :focus,
    :active {
      outline: 2px solid #009b5c;
    }
  }
  .description {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 4px;
    font-size: 0.8rem;
    font-weight: 400;
    color: #c4c4c4;
  }
`;

const OrderIcon = styled(Time)`
  width: 2rem;
  color: #009b5c;
`;

const OrderAwait = styled.div`
  position: absolute;
  top: 2rem;
  right: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .awaitDescription {
    margin-left: 0.2rem;
    font-size: 15px;
    font-weight: 600;
    color: #009b5c;
  }
`;

const OnBoardButton = styled.button`
  height: 3rem;
  width: 16rem;
  border: none;
  border-radius: 4px;
  margin: 1.5rem 0 0 0;
  background-color: #009b5c;
  cursor: pointer;
  color: whitesmoke;
  font-weight: 600;
  font-size: 1rem;
  :hover {
    background-color: #058a54;
  }
`;
