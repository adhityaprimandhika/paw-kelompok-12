import styled from 'styled-components';

import Header from '../components/header/index';
import Sidebar from '../components/sidebar/index';
import MenuItems from '../components/contents/MenuItems';

export default function Order() {
	return (
		<Container className="Container">
			<Header />
			<MainSection>
				<Sidebar />
				<MenuItems />
			</MainSection>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const MainSection = styled.div`
	width: 100%;
	display: flex;
`;
