import React from 'react';
import styled from 'styled-components';
import { CartAlt } from '@styled-icons/boxicons-solid';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline';

const index = (props) => {
	return (
		<HeaderContainer>
			<LeftSection>
				{/* //add condition here */}
				<BackIcon />
				<Logo className="mainLogo">Starback</Logo>
			</LeftSection>
			<p className="welcoming"></p>
			<RightSection>
				<CartIcon />
			</RightSection>
		</HeaderContainer>
	);
};

export default index;

const HeaderContainer = styled.div`
	display: flex;
	height: 12vh;
	align-items: center;
	justify-content: space-between;
	padding: 0 4rem 0 2rem;
	border-bottom: 2px solid #fafafa;
`;
const Logo = styled.div`
	font-weight: 800;
	font-size: 30px;
	margin: 0 0 0 0.5rem;
`;
const LeftSection = styled.div`
	display: flex;
`;
const RightSection = styled.div`
	display: flex;
	width: 4.6rem;
	justify-content: space-between;
`;

// Some Icons
const BackIcon = styled(ArrowIosBackOutline)`
	height: 32px;
	cursor: pointer;
	:hover {
		color: #08c0be;
	}
`;

const CartIcon = styled(CartAlt)`
	height: 32px;
	cursor: pointer;
	:hover {
		color: #08c0be;
	}
`;
