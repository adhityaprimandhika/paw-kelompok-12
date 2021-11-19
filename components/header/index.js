import React from 'react';
import styled from 'styled-components';
import { Bill } from '@styled-icons/remix-fill';
import { CartAlt } from '@styled-icons/boxicons-solid';

const index = () => {
	return (
		<HeaderContainer>
			<Logo className="mainLogo">Starback</Logo>
			<p className="welcoming"></p>
			<Options>
				<OderQueue />
				<Cart />
			</Options>
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
`;
const Options = styled.div`
	display: flex;
	width: 4.6rem;
	justify-content: space-between;
`;

// used ICONS

const OderQueue = styled(Bill)`
	height: 32px;
	cursor: pointer;
	:hover {
		color: #08c0be;
	}
`;

const Cart = styled(CartAlt)`
	height: 32px;
	cursor: pointer;
	:hover {
		color: #08c0be;
	}
`;
