import { Fragment } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';

function App() {
	return (
		<Fragment>
			<Header />
			<Navbar />
			<Timer />
		</Fragment>
	);
}

export default App;
