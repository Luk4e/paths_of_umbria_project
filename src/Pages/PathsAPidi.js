import Path from '../Components/Path';
import pathsServices from '../Services/pathsP';
import { useEffect, useState } from 'react';


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
		pathsServices
			.getAll()
			.then(allPaths => {
				setPathsPiedi(allPaths);
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
