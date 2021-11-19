import React from 'react';
import styled from 'styled-components';
// Components
import MenuType from './MenuType';
import MenuOption from './MenuOption';
import MenuContent from './MenuContent';

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
	width: 26vw;
	background-color: orangered;
	border-right: 2px solid #fafafa=;
`;
