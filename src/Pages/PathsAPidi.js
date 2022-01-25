import Path from '../Components/Path';
//import pathsServices from '../Services/pathsP';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PathsAPiedi = () => {

	const [pathsPiedi,setPathsPiedi] = useState([]);

	const stylePathContainer = {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: '40px',
		padding: '50px',
	}

	useEffect(() => {
		axios
			.get('http://localhost:3001/api/paths')
			.then(res => {
				console.log(res.data)
				setPathsPiedi(res.data);
			})
			.catch(error => console.log(error));
	},[]);

	return(
		<div style={stylePathContainer}>
			{pathsPiedi
				.map((path,index) => { 
					return(<Path 
						key = { path.id }
						title = { path.title }
						description = { path.description }
						km = { path.km }
						duration = { path.duration }
						differenceAltitude= { path.differenceAltitude }
						difficult = { path.difficult }
						/>)
				})}
		</div>
	);
};

export default PathsAPiedi;
