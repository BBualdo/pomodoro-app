import { Fragment } from 'react';

import { Timer } from '../ts/enums';
import Pomodoro from './Timers/Pomodoro';
import ShortBreak from './Timers/ShortBreak';
import LongBreak from './Timers/LongBreak';

const Timers = (props: { timer: Timer }) => {
	return (
		<Fragment>
			{props.timer === Timer.POMODORO && <Pomodoro />}
			{props.timer === Timer.SHORT_BREAK && <ShortBreak />}
			{props.timer === Timer.LONG_BREAK && <LongBreak />}
		</Fragment>
	);
};

export default Timers;
