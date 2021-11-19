import React from 'react';
import styled from 'styled-components';
// some Components

const SubMenuOptions = (props) => {
	return (
		<MenuOption className="menuOption">
			{props.title}
			{/* <p className="accordionTitle">{props.title}</p> */}
		</MenuOption>
	);
};

export default SubMenuOptions;

const MenuOption = styled.button`
	width: 19.8vw;
	padding-left: 2rem;
	min-height: 3rem;
	display: flex;
	font-size: 16px;
	font-weight: 600;
	text-transform: capitalize;
	font-family: 'Segoe UI';
	justify-content: start;
	align-items: center;
	border: none;
	background-color: white;
	cursor: pointer;
	:hover {
		background-color: #fafafa;
	}
`;
