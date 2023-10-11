import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Settings from './components/Settings';
import { Colors, Fonts } from './ts/enums';
import { MainSettings } from './ts/interfaces';
import SettingsContext from './context/SettingsContext';

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
			<SettingsContext.Provider value={settings}>
				<Navbar />
				<Timer />
				<Settings settings={settings} updateSettings={updateSettings} />
			</SettingsContext.Provider>
		</Fragment>
	);
}

export default App;
