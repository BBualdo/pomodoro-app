import useSettings from '../../hooks/useSettings';

import TimersTemplate from './TimersTemplate';

const ShortBreak = () => {
	const { timers } = useSettings();

	return (
		<TimersTemplate duration={timers.shortBreak} timerName='Short break' />
	);
};

export default ShortBreak;
