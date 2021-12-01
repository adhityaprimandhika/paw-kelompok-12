import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Modal = ({ showModal, setShowModal, img, name, desc }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateX(0%)" : "translateX(150%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [cart, setCart] = useState();
  const handleIncrement = (productId) => {
    setCart((cart) =>
      cart.map((item) =>
        productId === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < 10 ? 1 : 0),
            }
          : item
      )
    );
  };
  const handleDecrement = (productId) => {
    setCart((cart) =>
      cart.map((item) =>
        productId === item.id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
            }
          : item
      )
    );
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ImageSection src={img} alt={name}></ImageSection>
              <DescSection>
                <h5>{name}</h5>
                <p>{desc}</p>
              </DescSection>
              {/* <QuantitySection>
								<button className="minusButton" onClick={()=>handleDecrement(productId)}>-</button>
								<input className="quantityContol">{item.quantity}</input>
								<button className="plusButton" onClick={()=>handleDecrement(productId)}>+</button>
							</QuantitySection> */}
              <AddCartButton>Add to Cart</AddCartButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div`
  z-index: 999;
  position: fixed;
  width: 25rem;
  height: 100vh;
  cursor: default;
  display: flex;
  flex-direction: column;
  right: 0;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  align-items: center;
`;

const ImageSection = styled.img`
  width: 100%;
  height: 42vh;
  object-fit: cover;
`;

const DescSection = styled.div`
  align-items: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  h5 {
    margin: 16px 0 0 16px;
    font-size: 24px;
    font-weight: 600;
  }
  p {
    margin: 4px 0 0 16px;
    font-size: 14px;
  }
`;

const QuantitySection = styled.div``;

const AddCartButton = styled.button`
  cursor: pointer;
  align-items: center;
  width: 14rem;
  height: 3rem;
  border: none;
  background: #009b5c;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 3rem;
  :hover {
    background: #068954;
  }
`;
