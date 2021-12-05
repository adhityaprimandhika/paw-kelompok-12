import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "./ItemCard";
const index = () => {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [newProductId, setNewProductId] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/carts").then((response) => {
      setCartList(response.data);
    });
  }, []);

  const addCart = () => {
    Axios.post("http://localhost:5000/api/carts", {
      userId: userId,
      productId: productId,
      quantity: quantity,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
    });
  };

  const updateCart = (id) => {
    Axios.put("http://localhost:5000/api/carts/update", {
      id: id,
      newProductId: newProductId,
      newQuantity: newQuantity,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
    });
  };

  const deleteCart = (id) => {
    Axios.delete(`http://localhost:5000/api/carts/delete/${id}`).then(
      function () {
        // successful response flow
        window.location.reload(false);
      }
    );
  };

  let navigate = useNavigate();
  return (
    <CheckoutContainer>
      <OrderSection>
        <p className="yourOrder">Your Order</p>
        <ListOrder>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </ListOrder>
      </OrderSection>
      <PaymentSection>
        <PaymentCardSection>
          <BuyButton
            onClick={() => {
              add();
              navigate("/");
            }}
          >
            Buy Now
          </BuyButton>
        </PaymentCardSection>
      </PaymentSection>
    </CheckoutContainer>
  );
};

export default index;

const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.9fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 55vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .yourOrder {
    margin: 1rem 0 -1rem 0;
    font-size: 21px;
    text-align: start;
    font-weight: 600;
    font-family: "poppins";
    color: #121212;
  }
`;
const ListOrder = styled.div`
  width: 40vw;
  height: 75vh;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 8px;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 45vw;
  align-items: center;
`;

const PaymentCardSection = styled.div`
  width: 40vw;
  height: 90vh;
  background: fafafa;
  outline: 2px solid #c4c4c4;
  border-radius: 8px;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BuyButton = styled.button`
  background: #009b5c;
  border: none;
  border-radius: 4px;
  color: #fff;
  height: 3rem;
  width: 15rem;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  bottom: 2rem;
  cursor: pointer;
  :hover {
    background: #068954;
  }
`;
