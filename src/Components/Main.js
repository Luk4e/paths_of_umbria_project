import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import PathsAPiedi from '../Pages/PathsAPidi';
import PathsInBici from '../Pages/PathsInBici';
import About from '../Pages/About';

export default function Main(){
	return(
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/paths_a_piedi" element={<PathsAPiedi />} />
				<Route path="/paths_in_bici" element={<PathsInBici />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
};
