import { Fonts } from './enums';

export interface SettingsInterface {
	hideSettings: () => void;
	font: Fonts;
	onFontChange: (id: Fonts) => void;
}
