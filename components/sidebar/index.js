import React from 'react';
import styled from 'styled-components';
// Components
import MenuOption from './MenuOption';
import SubMenuOption from './SubMenuOption';

const index = () => {
	return (
		<Container>
			<MenuOption />
			<SubMenuOption />
		</Container>
	);
};

export default index;

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	width: 26vw;
	background-color: orangered;
	border-right: 2px solid #fafafa=;
`;
