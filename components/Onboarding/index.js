import React from 'react';
import styled from 'styled-components';
import { Bill } from '@styled-icons/remix-fill';

const index = () => {
	return (
		<Container className="container">
			<div className="adsPromotionSection">
				<PromotionReel className="promotionReel"></PromotionReel>
				<Banner className="banner"></Banner>
			</div>
			<div className="takeOrderSection">
				<TakeOrder className="takeOrder">
					<img src={} alt=''/>
					<p className='greetings'></p>
					
				</TakeOrder>
			</div>
		</Container>
	);
};

export default index;

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	.AdsPromotionSection,
	.TakeOrderSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 50%;
	}
`;
const Banner = styled.div`
	top: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	height: 5rem;
	width: 100%;
`;
const PromotionReel = styled.div``;

const TakeOrder = styled.div``;

// some Icons
const OrderQueue = styled(Bill)`
	height: 32px;
	cursor: pointer;
	:hover {
		color: #08c0be;
	}
`;
