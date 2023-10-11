import { Colors, Fonts } from './enums';

export interface SettingsInterface {
	hideSettings: () => void;
	font: Fonts;
	onFontChange: (id: Fonts) => void;
	color: Colors;
	onColorChange: (id: Colors) => void;
}
