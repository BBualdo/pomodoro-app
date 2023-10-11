import { Colors, Fonts } from './enums';

export interface SettingsInterface {
	hideSettings: () => void;
	font: Fonts;
	onFontChange: (id: Fonts) => void;
	color: Colors;
	onColorChange: (id: Colors) => void;
	onApply: (id1: Fonts, id2: Colors) => void;
}
