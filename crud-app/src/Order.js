import styled from "styled-components";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/index";
import MenuItems from "./components/contents/MenuItems";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Order() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [newProductId, setNewProductId] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [newAmount, setNewAmount] = useState(0);
  const [newStatus, setNewStatus] = useState("");
  const [orderList, setOrderList] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [categories, setCategories] = useState("");
  const [price, setPrice] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/orders").then((response) => {
      setOrderList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/products").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const addOrder = () => {
    Axios.post("http://localhost:5000/api/orders", {
      userId: userId,
      userName: userName,
      productId: productId,
      quantity: quantity,
      amount: amount,
      status: status,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
    });
  };

  const updateOrder = (id) => {
    Axios.put("http://localhost:5000/api/orders/update", {
      id: id,
      newProductId: newProductId,
      newQuantity: quantity,
      newAmount: amount,
      newStatus: status,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
    });
  };

  const deleteOrder = (id) => {
    Axios.delete(`http://localhost:5000/api/orders/delete/${id}`).then(
      function () {
        // successful response flow
        window.location.reload(false);
      }
    );
  };

  let navigate = useNavigate();
  //Fungsi pake di button
  /*onClick={() => {
              navigate("/Cart");
            }}*/
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
