import {Link} from 'react-router-dom';

export default function Navbar(){

	const styleNav = {
		display: 'flex',
		alignItems: 'center',
		height: '50px',
		padding: '30px 25px',
		boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
	}

	const styleLi = {
		margin: '10px',
		padding: '10px',
		listStyleType: 'none',
	}

	const styleLink = {
		textDecoration: 'none',
	}

	return(
		<header className="App-header">
			<nav style={styleNav}>
				<li style={styleLi}>
					<Link style={styleLink} to="/">Home</Link>
				</li>
				<li style={styleLi}>
					<Link style={styleLink} to="/paths_a_piedi">Paths a Piedi</Link>
				</li>
				<li style={styleLi}>
					<Link style={styleLink} to="/paths_in_bici">Paths in Bici</Link>
				</li>
				<li style={styleLi}>
					<Link style={styleLink} to="/contacts">Contacts</Link>
				</li>
				<li style={styleLi}>
					<Link style={styleLink} to="/about">About</Link>
				</li>
			</nav>
		</header>
	);
};
