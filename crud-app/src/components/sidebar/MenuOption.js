import React from "react";
import styled from "styled-components";
// components
import SubMenuOptions from "./SubMenuOptions";

const MenuOption = (props) => {
  return (
    <Menu className="menu">
      <p className="title">#HappyCoffee!</p>
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
      <SubMenuOptions title="hot coffee" />
    </Menu>
  );
};

export default MenuOption;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  overflow-y: auto;
  p {
    display: flex;
    top: 0;
    margin: 0 0 0rem 0;
    position: sticky;
    font-weight: 600;
    color: #fafafa;
    background-color: #009b5c;
    min-height: 2.5rem;
    align-items: center;
    justify-content: center;
  }
`;
