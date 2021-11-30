import React, { useState } from 'react';
import styled from 'styled-components';
import MenuDetails from '../menuDetails/Modal';

const ItemCard = (props) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};
	return (
		<>
			<MenuDetails
				showModal={showModal}
				setShowModal={setShowModal}
				img="https://www.groundstobrew.com/wp-content/uploads/2021/02/vanilla-sweet-cream-cold-brew.jpg"
				name="asdsad"
				desc="Lorem Ipsum lalala haahha"
			/>
			<ItemContainer onClick={openModal}>
				<ImageSection>
					<img
						src="https://www.groundstobrew.com/wp-content/uploads/2021/02/vanilla-sweet-cream-cold-brew.jpg"
						alt="VanillaSweatCreamColdBrew"
					/>
				</ImageSection>
				<DescSection>
					<p className="descName">
						VanillaSwe atCreamCold asdasdasdas d
					</p>
					<p className="descPrice">$34</p>
				</DescSection>
			</ItemContainer>
		</>
	);
};
// const ItemCard = (props) => {
// 	return (
// 		<ItemContainer>
// 			<img src={props.image} alt={props.name} />
// 			<DescSection>
// 				<p>{props.name}</p>
// 				<p>{props.price}</p>
// 			</DescSection>
// 		</ItemContainer>
// 	);
// };

export default ItemCard;

const ItemContainer = styled.button`
	width: 16rem;
	height: 7rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: 8px;
	cursor: pointer;
	padding: 12px;
	border: none;
	background-color: #fff;
	outline: 1px solid #fafafa;
	:hover {
		background-color: #fafafa;
	}
`;

const ImageSection = styled.div`
	height: 5rem;
	width: 5rem;
	border-radius: 10rem;
	overflow: hidden;
	margin: 0 10px 0 0;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
const DescSection = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 60%;
	max-height: 7rem;
	line-height: 1.625;
	-webkit-line-clamp: 3;
	word-break: inherit;
	-webkit-box-orient: vertical;
	line-height: 1.2;
	.descName {
		overflow: hidden;
		font-size: 14px;
		text-overflow: ellipsis;
		margin-bottom: -10px;
		font-weight: 600;
	}
	.descPrice {
		font-weight: 700;
		color: #009b5c;
	}
`;
