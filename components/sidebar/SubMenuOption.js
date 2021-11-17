import React from 'react';
import styled from 'styled-components';
// components
import AccordionOption from './AccordionOption';

const SubMenuOption = () => {
	return <AccordionSection></AccordionSection>;
};

export default SubMenuOption;

const AccordionSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
