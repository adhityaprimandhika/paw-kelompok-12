import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const AdsCarousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true
	};
	const imageBatch = [
		{ title: 'CARD', image: require('/public/Ads/CARD.png') },
		{
			title: 'CreamyCookieNess',
			image: require('/public/Ads/CreamyCookieNess.jpg')
		},
		{
			title: 'IrishCreamColdBrew',
			image: require('/public/Ads/Drink-IrishCreamColdBrew.jpg')
		},
		{
			title: 'PapermintMocha',
			image: require('/public/Ads/Drink-PapermintMocha.png')
		},
		{
			title: 'SugarPlumCheeseDanish',
			image: require('/public/Ads/Food-SugarPlumCheeseDanish.png')
		},
		{
			title: 'TidingOfJoy',
			image: require('/public/Ads/TidingOfJoy.jpg')
		},
		{
			title: 'ToffeeNutCheer',
			image: require('/public/Ads/ToffeeNutCheer.jpg')
		}
	];
	return (
		<Carousel {...settings}>
			{imageBatch.map((data, index) => {
				return (
					<div key={index}>
						<Image
							src={data.image}
							alt={data.title}
							width={40}
							height={70}
						/>
					</div>
				);
			})}
		</Carousel>
	);
};

export default AdsCarousel;

// `;
