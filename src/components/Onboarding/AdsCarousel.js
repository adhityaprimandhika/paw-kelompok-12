import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AdsCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		lazyLoad: true
	};

	const imageBatch = [
		{
			index: 1,
			title: 'CARD',
			image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75418.jpg'
		},
		{
			index: 2,
			title: 'IrishCreamColdBrew',
			image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75419.jpg'
		},
		{
			index: 3,
			title: 'SugarPlumCheeseDanish',
			image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75241.png'
		},
		{
			index: 4,
			title: 'TidingOfJoy',
			image: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75417.png'
		}
	];

	return (
		<Container>
			<Slider {...settings}>
				{imageBatch.map((data) => {
					return (
						<ImageContainer key={data.index}>
							<img src={data.image} alt={data.title} />
						</ImageContainer>
					);
				})}
			</Slider>
		</Container>
	);
};

export default AdsCarousel;

const Container = styled.div`
	width: 45vw;
	height: 100vh;
	background-color: #253858;
	border-radius: 0 1rem 1rem 0;
`;
const ImageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	img {
		border-radius: 0 0.9rem 0 0;
		height: 95vh;
		width: 45vw;
		object-fit: cover;
	}
`;
