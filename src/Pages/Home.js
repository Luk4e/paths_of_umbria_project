import home_img from '../img/homeimg.jpg';

const Home = () => {

	const styleDivHome = {
		padding: '30px',
		width: 'auto',
		height:'100%',
		boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
		margin: '10px 100px 50px 100px',
	}

	const styleImg = {
		width: '60%',
		height: 'auto',
		alignSelf: 'center',
		borderRadius: '5px',
		objectFit: 'cover',
	}

	return(
		<div style={styleDivHome}>
			<img src={home_img}  style={styleImg} alt='hill'/>
		</div>
	);
};

export default Home;
