import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Settings from './components/Settings';
import { Colors, Fonts } from './ts/enums';
import { MainSettings } from './ts/interfaces';

function App() {
	const [settings, setSettings] = useState({
		font: Fonts.KUMBH,
		color: Colors.RED,
	});

	const updateSettings = (newSettings: MainSettings) => {
		setSettings(newSettings);
	};

	useEffect(() => {
		console.log(settings);
	}, [settings]);

	return (
		<Fragment>
			<Header />
			<Navbar />
			<Timer />
			<Settings settings={settings} updateSettings={updateSettings} />
		</Fragment>
	);
}

export default App;
