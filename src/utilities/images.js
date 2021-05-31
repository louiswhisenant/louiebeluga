const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const images = [
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
	{
		full: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		thumb: `https://source.unsplash.com/random/${getRandomInt(
			500,
			900
		)}x${getRandomInt(500, 900)}`,
		alt: 'alt text',
		name: 'example name',
	},
];

export default images;
