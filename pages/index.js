import Onboarding from '../components/Onboarding/index';
import styled from 'styled-components';
import AdsCarousel from '../components/Onboarding/AdsCarousel';
import Image from 'next/image';

export default function Home() {
	return (
		<Container className="container">
			<div className="adsPromotionSection">
				<AdsCarousel />
				<Banner className="banner"></Banner>
			</div>
			<div className="takeOrderSection">
				<TakeOrder className="takeOrder">
					<p className="greetings"></p>
				</TakeOrder>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	background-color: red;
`;
const Banner = styled.div`
	top: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	height: 5rem;
	width: 100%;
`;
const PromotionReel = styled.div``;

const TakeOrder = styled.div``;

// some Icons
