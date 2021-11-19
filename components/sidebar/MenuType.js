import React from 'react';
import styled from 'styled-components';
import { Coffee } from '@styled-icons/boxicons-solid';
import { FoodToast } from '@styled-icons/fluentui-system-filled';

const MenuType = () => {
	return (
		<Container>
			<button className="btnDrink">
				<CoffeeDrinks />
				<p className="menuTitle">Drinks</p>
			</button>
			<button className="btnFood">
				<ToastFoods />
				<p className="menuTitle">Foods</p>
			</button>
		</Container>
	);
};

export default MenuType;

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
		p {
			margin-top: 0.1rem;
			font-size: 14px;
			font-weight: 700;
			font-family: 'Segoe UI';
		}
	}
	.btnDrink {
		background-color: #42526e;
		:hover {
			background-color: #344563;
		}
	}
	.btnFood {
		background-color: #253858;
		:hover {
			background-color: #172b4d;
		}
	}
`;
// Some Icons

const CoffeeDrinks = styled(Coffee)`
	margin: 0 0 0 0.3rem;
	height: 40px;
`;
const ToastFoods = styled(FoodToast)`
	margin: 0 0 0 0.1rem;
	height: 40px;
`;
