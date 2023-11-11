const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const images = [
	{
		full: `https://i.imgur.com/Pmt4qe4.jpg`,
		thumb: `https://i.imgur.com/Pmt4qe4.jpg`,
		alt: 'Happy Tony',
		name: 'Happy Tony',
	},
	// {
	// 	full: `../images/Mona Bey.jpg`,
	// 	thumb: `../images/Mona Bey.jpg`,
	// 	alt: 'Mona Bey',
	// 	name: 'Mona Bey',
	// },
	{
		full: `https://i.imgur.com/Slbp5PH.jpg`,
		thumb: `https://i.imgur.com/Slbp5PH.jpg`,
		alt: 'Man in Suit on Couch',
		name: 'Man in Suit',
	},
	{
		full: `https://i.imgur.com/ufkYnRD.jpg`,
		thumb: `https://i.imgur.com/ufkYnRD.jpg`,
		alt: 'Caligulove',
		name: 'Caligulove',
	},
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
	// {
	// 	full: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	thumb: `https://source.unsplash.com/random/${getRandomInt(
	// 		500,
	// 		900
	// 	)}x${getRandomInt(500, 900)}`,
	// 	alt: 'alt text',
	// 	name: 'example name',
	// },
];

export default images;
