import { createContext } from 'react';
import { Colors, Fonts } from '../ts/enums';

const initialState = { font: Fonts.KUMBH, color: Colors.RED };

const SettingsContext = createContext(initialState);

export default SettingsContext;
