import React from 'react';
import styled from 'styled-components';
const index = () => {
	return (
		<Container className="container">
			<LeftSection className="leftSection"></LeftSection>
			<RightSection className="rightSection"></RightSection>
		</Container>
	);
};

export default index;

const Container = styled.div``;
const LeftSection = styled.div``;
const RightSection = styled.div``;
