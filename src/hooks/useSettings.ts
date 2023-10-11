import { useContext } from 'react';
import SettingsContext from '../context/SettingsContext';
import { ColorFormat } from 'react-countdown-circle-timer';
import { Colors, Fonts } from '../ts/enums';

const useSettings = () => {
	const ctx = useContext(SettingsContext);

	let selectedColor: ColorFormat;
	switch (ctx.color) {
		case Colors.RED:
			selectedColor = '#f87070';
			break;
		case Colors.CYAN:
			selectedColor = '#70f3f8';
			break;
		case Colors.PINK:
			selectedColor = '#d881f8';
			break;
	}

	let selectedFont: string;
	switch (ctx.font) {
		case Fonts.KUMBH:
			selectedFont = 'Kumbh Sans, sans-serif';
			break;
		case Fonts.ROBOTO:
			selectedFont = 'Roboto Slab, serif';
			break;
		case Fonts.SPACE:
			selectedFont = 'Space Mono, monospace';
			break;
	}

	return {
		color: selectedColor,
		font: selectedFont,
		timers: { ...ctx.timers },
	};
};

export default useSettings;
