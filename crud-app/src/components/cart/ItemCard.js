import React from "react";
import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const ItemCard = () => {
  return (
    <ItemContainer>
      <ImageSection>
        <img
          src="https://www.groundstobrew.com/wp-content/uploads/2021/02/vanilla-sweet-cream-cold-brew.jpg"
          alt="VanillaSweatCreamColdBrew"
        />
      </ImageSection>
      <DescSection>
        <p className="descTitle">Vanilla Cream Cold</p>
        <p className="descPrice">$34</p>
      </DescSection>
    </ItemContainer>
  );
};

export default ItemCard;

const ItemContainer = styled.button`
  width: 98%;
  height: 6rem;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 12px;
  border: none;
  background-color: #fff;
  margin-top: 4px;
  outline: 1px solid #fafafa;
`;

const ImageSection = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 10rem;
  overflow: hidden;
  margin: 0 20px 0 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const DescSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  max-height: 7rem;
  line-height: 1.625;
  -webkit-line-clamp: 3;
  word-break: inherit;
  -webkit-box-orient: vertical;
  line-height: 1.2;
  .descTitle {
    font-size: 14px;
    font-family: "poppins";
    font-weight: 600;
    margin-bottom: -10px;
    text-align: start;
  }
  .descPrice {
    font-weight: 700;
    text-align: start;
    font-size: 16px;
    color: #009b5c;
  }
`;
