import styled from "styled-components";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/index";
import MenuItems from "./components/contents/MenuItems";

export default function Order() {
  return (
    <Container className="Container">
      <Header />
      <MainSection>
        <Sidebar />
        <MenuItems />
      </MainSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 888;
  /* background-color: burlywood; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainSection = styled.div`
  width: 100%;
  height: 88.75vh;
  display: flex;
`;
