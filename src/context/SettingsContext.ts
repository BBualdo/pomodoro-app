import { createContext } from 'react';
import { Colors, Fonts } from '../ts/enums';

const initialState = {
	font: Fonts.KUMBH,
	color: Colors.RED,
	timers: {
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15,
	},
};

const SettingsContext = createContext(initialState);

export default SettingsContext;
