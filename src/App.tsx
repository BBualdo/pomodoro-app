import { Fragment } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Settings from './components/Settings';

function App() {
	return (
		<Fragment>
			<Header />
			<Navbar />
			<Timer />
			<Settings />
		</Fragment>
	);
}

export default App;
