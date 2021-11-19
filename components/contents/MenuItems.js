import React from 'react';
import styled from 'styled-components';

import ItemCard from './ItemCard';

const MenuItems = () => {
	return (
		<Container>
			<ItemSection>
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
			</ItemSection>
		</Container>
	);
};

export default MenuItems;

const Container = styled.div`
	width: 74vw;
	background-color: #f6f6f6;
	display: flex;
	padding: 1.5rem 1.2rem 0.2rem 1.2rem;
`;

const ItemSection = styled.div`
	width: 100%;
	background-color: white;
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr auto;
	grid-gap: 1.5rem;
	align-items: center;
	justify-items: center;
	padding: 2rem 3rem 2rem 3rem;
	border-radius: 4px 4px 0 0;
`;
