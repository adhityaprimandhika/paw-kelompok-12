import React from 'react';
import styled from 'styled-components';
// some Components
import OptionContent from './OptionContent';

const AccordionOption = (props) => {
	return (
		<Section>
			<button className="accordion">
				<p className="accordionName">{props.title}</p>
			</button>
		</Section>
	);
};

export default AccordionOption;

const Section = styled.div`
	display: flex;
	width: 100%;
	height: 5rem;
`;
