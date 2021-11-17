import React from 'react';
import styled from 'styled-components';
import { Coffee } from '@styled-icons/boxicons-solid';
import { FoodToast } from '@styled-icons/fluentui-system-filled';

const MenuOption = () => {
	return (
		<Container>
			<button className="btnDrink">
				<CoffeeDrinks /> Drinks
			</button>
			<button className="btnFood">
				<ToastFoods /> Foods
			</button>
		</Container>
	);
};

export default MenuOption;

const Container = styled.div`
	width: 6vw;
	display: flex;
	flex-direction: column;

	.btnDrink,
	.btnFood {
		width: 100%;
		height: 44vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 0;
		cursor: pointer;
		color: #fafafa;
	}
	.btnDrink {
		background-color: #129e9c;
		:hover {
			background-color: #0f9998;
		}
	}
	.btnFood {
		background-color: #08c0be;
		:hover {
			background-color: #0ebab8;
		}
	}
`;
// Some Icons

const CoffeeDrinks = styled(Coffee)`
	height: 40px;
`;
const ToastFoods = styled(FoodToast)`
	height: 40px;
`;
