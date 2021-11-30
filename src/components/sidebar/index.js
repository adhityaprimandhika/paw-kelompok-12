import React from 'react';
import styled from 'styled-components';
// Components
import MenuType from './MenuType';
import MenuOption from './MenuOption';

const index = () => {
	return (
		<Container>
			<MenuType />
			<MenuOption />
		</Container>
	);
};

export default index;

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	width: 27vw;
	height: 88.75vh;
	background-color: #253858;
	border-right: 2px solid #fafafa;
`;
