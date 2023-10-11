import { Fragment, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timers from './components/Timers';
import Settings from './components/Settings';
import { Colors, Fonts } from './ts/enums';
import { MainSettings } from './ts/interfaces';
import SettingsContext from './context/SettingsContext';

function App() {
	const [settings, setSettings] = useState({
		font: Fonts.KUMBH,
		color: Colors.RED,
		timers: {
			pomodoro: 25,
			shortBreak: 5,
			longBreak: 15,
		},
	});

	console.log(settings);

	const updateSettings = (newSettings: MainSettings) => {
		setSettings(newSettings);
	};

	return (
		<Fragment>
			<Header />
			<SettingsContext.Provider value={settings}>
				<Navbar />
				<Timers />
				<Settings settings={settings} updateSettings={updateSettings} />
			</SettingsContext.Provider>
		</Fragment>
	);
}

export default App;
