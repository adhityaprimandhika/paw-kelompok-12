import React, { useState } from "react";
import styled from "styled-components";

import ItemCard from "./ItemCard";

const MenuItems = () => {
  return (
    <Container>
      <h4>Menus</h4>
      <ItemSection>
        <ItemCard />
      </ItemSection>
    </Container>
  );
};

export default MenuItems;

const Container = styled.div`
  width: 100%;
  height: 84vh;
  background-color: #f6f6f6;
  display: flex;
  padding: 1.5rem 1.2rem 0.2rem 1.2rem;
  flex-direction: column;
  /* background-color: blueviolet; */
  h4 {
    margin: 0 0 0.5rem 0;
  }
`;

const ItemSection = styled.div`
  width: 90%;
  background-color: white;
  display: grid;
  overflow: auto;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 0.8rem;
  align-items: center;
  justify-items: center;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 4px 4px 0 0;
`;
